// UI primitives — MCP Maker. Risk is never color-only: icon + label always paired.

const toneColors = (T, tone) => ({
  safe:    { fg: T.safe, bg: T.safeSoft, bd: T.safeBorder },
  caution: { fg: T.caution, bg: T.cautionSoft, bd: T.cautionBorder },
  danger:  { fg: T.danger, bg: T.dangerSoft, bd: T.dangerBorder },
  info:    { fg: T.info, bg: T.infoSoft, bd: T.infoBorder },
  neutral: { fg: T.textMuted, bg: T.bgSunken, bd: T.border },
}[tone] || { fg: T.textMuted, bg: T.bgSunken, bd: T.border });

const RiskBadge = ({ level, size = 'sm', T = MCP }) => {
  const r = RISK[level] || RISK.readonly;
  const c = toneColors(T, r.tone);
  const s = size === 'lg' ? { h: 26, fz: 12.5, px: 10, icon: 13 } : { h: 22, fz: 11.5, px: 8, icon: 12 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: c.bg, color: c.fg, border: `1px solid ${c.bd}`,
      height: s.h, padding: `0 ${s.px}px`, borderRadius: 5,
      fontSize: s.fz, fontWeight: 600, letterSpacing: '-0.005em', whiteSpace: 'nowrap', flexShrink: 0, width: 'max-content',
    }}>
      <Icon name={r.icon} size={s.icon} strokeWidth={2.25}/>
      {r.label}
    </span>
  );
};

const Pill = ({ children, tone = 'neutral', size = 'sm', T = MCP, dot }) => {
  const c = toneColors(T, tone);
  const s = size === 'xs' ? { fz: 10.5, px: 6, h: 18 } : { fz: 11.5, px: 8, h: 22 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: c.bg, color: c.fg,
      height: s.h, padding: `0 ${s.px}px`, borderRadius: 999,
      fontSize: s.fz, fontWeight: 560, letterSpacing: '-0.005em', whiteSpace: 'nowrap', flexShrink: 0, width: 'max-content',
    }}>
      {dot && <span style={{ width: 5, height: 5, borderRadius: 99, background: c.fg }}/>}
      {children}
    </span>
  );
};

const Btn = ({ variant = 'primary', size = 'md', children, icon, iconRight, style, disabled, T = MCP }) => {
  const variants = {
    primary:   { bg: T.accent, fg: T.bg, bd: T.accent },
    secondary: { bg: T.bg, fg: T.text, bd: T.borderStrong },
    ghost:     { bg: 'transparent', fg: T.textMuted, bd: 'transparent' },
    danger:    { bg: T.bg, fg: T.danger, bd: T.dangerBorder },
    dangerSolid: { bg: T.danger, fg: '#fff', bd: T.danger },
  };
  const sizes = {
    sm: { h: 28, px: 10, fz: 12.5, gap: 6 },
    md: { h: 34, px: 14, fz: 13.5, gap: 7 },
    lg: { h: 42, px: 20, fz: 14.5, gap: 8 },
  };
  const v = variants[variant]; const s = sizes[size];
  return (
    <button disabled={disabled} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
      background: v.bg, color: v.fg, border: `1px solid ${v.bd}`,
      height: s.h, padding: `0 ${s.px}px`, borderRadius: 6,
      fontSize: s.fz, fontWeight: 560, letterSpacing: '-0.005em',
      fontFamily: T.font, cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1, whiteSpace: 'nowrap', flexShrink: 0, width: 'max-content',
      boxShadow: variant === 'primary' && !disabled ? T.shadowSm : 'none',
      ...style,
    }}>
      {icon && <Icon name={icon} size={s.fz < 13 ? 13 : 15} strokeWidth={2}/>}
      {children}
      {iconRight && <Icon name={iconRight} size={s.fz < 13 ? 13 : 15} strokeWidth={2}/>}
    </button>
  );
};

const Card = ({ children, style, padding = 20, T = MCP }) => (
  <div style={{
    background: T.bg, border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg, padding, ...style,
  }}>{children}</div>
);

const SegmentedControl = ({ options, active = 0, T = MCP }) => (
  <div style={{
    display: 'inline-flex', padding: 3, background: T.bgSunken,
    border: `1px solid ${T.border}`, borderRadius: 8, gap: 2,
  }}>
    {options.map((o, i) => (
      <div key={i} style={{
        padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 560,
        color: i === active ? T.text : T.textSubtle,
        background: i === active ? T.bg : 'transparent',
        boxShadow: i === active ? T.shadowSm : 'none',
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
        letterSpacing: '-0.005em',
      }}>
        {o.icon && <Icon name={o.icon} size={14} strokeWidth={2}/>}
        {o.label}
      </div>
    ))}
  </div>
);

// Analysis stepper — real step states only (no decorative dots)
const Stepper = ({ steps, T = MCP }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {steps.map((s, i) => {
      const isLast = i === steps.length - 1;
      const c = s.status === 'done' ? T.safe : s.status === 'active' ? T.accent : T.textFaint;
      return (
        <div key={i} style={{ display: 'flex', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 2 }}>
            <div style={{
              width: 22, height: 22, borderRadius: 99, flexShrink: 0,
              background: s.status === 'done' ? T.safe : s.status === 'active' ? T.accent : T.bg,
              color: s.status === 'wait' ? T.textFaint : '#fff',
              border: s.status === 'wait' ? `1.5px solid ${T.border}` : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {s.status === 'done' ? <Icon name="check" size={13} strokeWidth={3}/>
                : s.status === 'active' ? <Icon name="refresh" size={12} strokeWidth={2.5}/>
                : <span style={{ fontSize: 11, fontWeight: 700, fontFamily: T.mono }}>{i + 1}</span>}
            </div>
            {!isLast && <div style={{ width: 2, flex: 1, minHeight: 26, background: s.status === 'done' ? T.safe : T.border, margin: '3px 0' }}/>}
          </div>
          <div style={{ paddingBottom: isLast ? 0 : 20, flex: 1 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: s.status === 'wait' ? T.textFaint : T.text }}>{s.label}</div>
            {s.detail && <div style={{ fontSize: 12, color: T.textSubtle, marginTop: 3, lineHeight: 1.5, fontFamily: s.mono ? T.mono : T.font }}>{s.detail}</div>}
          </div>
        </div>
      );
    })}
  </div>
);

// Schema preview panel — mono, JSON-schema-like
const SchemaPreview = ({ json, T = MCP }) => (
  <pre style={{
    margin: 0, padding: 14, background: T.bgSunken, border: `1px solid ${T.border}`,
    borderRadius: 8, fontFamily: T.mono, fontSize: 12, lineHeight: 1.65, color: T.textMuted,
    overflow: 'auto', whiteSpace: 'pre',
  }}>{json}</pre>
);

// Source file reference row
const SourceRow = ({ path, lines, T = MCP }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 10px',
    background: T.bgSunken, border: `1px solid ${T.border}`, borderRadius: 6,
    fontFamily: T.mono, fontSize: 11.5, color: T.textMuted,
  }}>
    <Icon name="fileCode" size={13} style={{ color: T.textFaint }}/>
    {path}
    {lines && <span style={{ color: T.textFaint }}>:{lines}</span>}
  </div>
);

const Avatar = ({ name, size = 26, T = MCP }) => {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, background: T.accent, color: T.bg,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 600, letterSpacing: '-0.02em', flexShrink: 0,
    }}>{initials.toUpperCase()}</div>
  );
};

const Toggle = ({ on = true, T = MCP }) => (
  <div style={{
    width: 34, height: 20, borderRadius: 99, padding: 2, flexShrink: 0,
    background: on ? T.accent : T.borderStrong, cursor: 'pointer',
  }}>
    <div style={{
      width: 16, height: 16, borderRadius: 99, background: T.bg,
      transform: on ? 'translateX(14px)' : 'translateX(0)', transition: 'transform .18s',
    }}/>
  </div>
);

const Field = ({ label, hint, mono, value, placeholder, prefix, icon, state, w, error, T = MCP }) => {
  const bd = error ? T.danger : state === 'focus' ? T.accent : T.borderStrong;
  return (
    <div style={{ width: w }}>
      {label && <label style={{ fontSize: 12.5, fontWeight: 560, color: T.textMuted, display: 'block', marginBottom: 6 }}>{label}</label>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 9, height: 38, padding: '0 12px',
        background: T.bg, border: `1.5px solid ${bd}`, borderRadius: 7,
        boxShadow: state === 'focus' ? `0 0 0 3px ${T.accentSoft}` : T.shadowSm,
      }}>
        {icon && <Icon name={icon} size={15} style={{ color: T.textFaint }}/>}
        {prefix && <span style={{ color: T.textFaint, fontSize: 13, fontFamily: T.mono }}>{prefix}</span>}
        <span style={{ flex: 1, fontSize: 13.5, color: value ? T.text : T.textFaint, fontFamily: mono ? T.mono : T.font }}>{value || placeholder}</span>
      </div>
      {error && <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6, fontSize: 11.5, color: T.danger, fontWeight: 500 }}><Icon name="alertTriangle" size={12} strokeWidth={2}/>{error}</div>}
      {hint && !error && <div style={{ fontSize: 11.5, color: T.textSubtle, marginTop: 6, lineHeight: 1.45 }}>{hint}</div>}
    </div>
  );
};

const KBD = ({ children, T = MCP }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    minWidth: 20, height: 20, padding: '0 5px', background: T.bg, border: `1px solid ${T.border}`,
    borderBottom: `1.5px solid ${T.borderStrong}`, borderRadius: 4, fontSize: 11, fontWeight: 550,
    color: T.textMuted, fontFamily: T.mono,
  }}>{children}</span>
);

Object.assign(window, { RiskBadge, Pill, Btn, Card, SegmentedControl, Stepper, SchemaPreview, SourceRow, Avatar, Toggle, Field, KBD, toneColors });
