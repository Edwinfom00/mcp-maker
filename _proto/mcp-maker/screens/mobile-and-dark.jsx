// Mobile layouts — Sign-in, Project dashboard, Tool proposal (3 key screens).
// Dark-mode bonus artboard for the dashboard, demonstrating the palette direction.

const MobileSignIn = () => (
  <div style={{ width: '100%', height: '100%', background: MCP.bg, fontFamily: MCP.font, display: 'flex', flexDirection: 'column', padding: '32px 22px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: 6, background: MCP.accent, color: MCP.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name="terminal" size={14} strokeWidth={2.25}/>
      </div>
      <span style={{ fontSize: 13.5, fontWeight: 700, color: MCP.text, whiteSpace: 'nowrap', flexShrink: 0 }}>MCP Maker</span>
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: 22, fontWeight: 650, letterSpacing: '-0.02em', margin: 0, color: MCP.text }}>Sign in</h1>
      <p style={{ fontSize: 13, color: MCP.textMuted, marginTop: 8, lineHeight: 1.5 }}>Turn a repository into a reviewed MCP server.</p>
      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{ height: 42, borderRadius: 7, background: MCP.accent, color: MCP.bg, border: 'none', fontSize: 13.5, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, whiteSpace: 'nowrap' }}>
          <Icon name="github" size={16} style={{ flexShrink: 0 }}/> <span style={{ whiteSpace: 'nowrap' }}>Continue with GitHub</span>
        </button>
        <Field label="Work email" icon="mail" placeholder="you@company.com"/>
        <Field label="Password" icon="key" placeholder="••••••••" state="focus"/>
        <Btn variant="primary" size="lg" iconRight="arrowRight" style={{ width: '100%', marginTop: 4 }}>Sign in</Btn>
      </div>
      <div style={{ marginTop: 18, padding: 11, borderRadius: 8, background: MCP.bgSunken, display: 'flex', gap: 8 }}>
        <Icon name="shield" size={14} style={{ color: MCP.textSubtle, marginTop: 1 }}/>
        <span style={{ fontSize: 11.5, color: MCP.textSubtle, lineHeight: 1.5 }}>Read-only by default. Nothing runs without your sign-off.</span>
      </div>
    </div>
  </div>
);

const MobileDashboard = () => {
  const projects = [
    { name: 'stripe-webhook-router', status: 'ready', tone: 'safe', risk: 'write' },
    { name: 'internal-crm-api', status: 'awaiting validation', tone: 'caution', risk: 'destructive' },
    { name: 'docs-search-service', status: 'analyzing', tone: 'info', risk: 'readonly' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: MCP.bgSubtle, fontFamily: MCP.font, display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 52, borderBottom: `1px solid ${MCP.border}`, background: MCP.bg, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10 }}>
        <div style={{ width: 24, height: 24, borderRadius: 6, background: MCP.accent, color: MCP.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="terminal" size={13}/></div>
        <span style={{ fontSize: 13, fontWeight: 700, color: MCP.text, flex: 1 }}>MCP Maker</span>
        <Icon name="search" size={17} style={{ color: MCP.textMuted }}/>
        <Avatar name="Dana Okoye" size={26}/>
      </div>
      <div style={{ padding: '18px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 17, fontWeight: 650, color: MCP.text, letterSpacing: '-0.015em' }}>Projects</span>
        <div style={{ width: 32, height: 32, borderRadius: 7, background: MCP.accent, color: MCP.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="plus" size={16}/></div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {projects.map((p, i) => (
          <div key={i} style={{ background: MCP.bg, border: `1px solid ${MCP.border}`, borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 13.5, fontWeight: 620, color: MCP.text, fontFamily: MCP.mono }}>{p.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
              <Pill tone={p.tone} size="xs" dot>{p.status}</Pill>
              <RiskBadge level={p.risk} size="sm"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileToolProposal = () => (
  <div style={{ width: '100%', height: '100%', background: MCP.bgSubtle, fontFamily: MCP.font, display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: '18px 16px 12px', background: MCP.bg, borderBottom: `1px solid ${MCP.border}` }}>
      <div style={{ fontSize: 16, fontWeight: 640, color: MCP.text, letterSpacing: '-0.01em' }}>Proposed tools</div>
      <div style={{ fontSize: 12, color: MCP.textSubtle, marginTop: 3 }}>7 candidates · read-only enabled by default</div>
    </div>
    <div style={{ flex: 1, overflow: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {toolCandidates.slice(0, 4).map((t, i) => (
        <div key={i} style={{ background: MCP.bg, border: `1px solid ${MCP.border}`, borderRadius: 10, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 640, color: MCP.text, fontFamily: MCP.mono }}>{t.name}</span>
            <Toggle on={t.enabled} T={MCP}/>
          </div>
          <RiskBadge level={t.risk} size="sm"/>
          <div style={{ fontSize: 12, color: MCP.textMuted, marginTop: 8, lineHeight: 1.5 }}>{t.desc}</div>
        </div>
      ))}
    </div>
    <div style={{ padding: 14, borderTop: `1px solid ${MCP.border}`, background: MCP.bg }}>
      <Btn variant="primary" size="lg" style={{ width: '100%' }} icon="shield">Continue to security review</Btn>
    </div>
  </div>
);

// Dark mode bonus — same dashboard, demonstrating the alternate palette direction.
const DarkDashboardBonus = () => {
  const T = MCPDark;
  const projects = [
    { name: 'stripe-webhook-router', repo: 'acme/stripe-webhook-router', status: 'ready', tools: 8, risk: 'write', updated: '12 min ago' },
    { name: 'internal-crm-api', repo: 'acme/internal-crm-api', status: 'validating', tools: 6, risk: 'destructive', updated: '1 h ago' },
    { name: 'docs-search-service', repo: 'acme/docs-search', status: 'analyzing', tools: 0, risk: 'readonly', updated: '3 min ago' },
  ];
  const statusCfg = {
    ready: { label: 'Ready', tone: 'safe' },
    validating: { label: 'Awaiting validation', tone: 'caution' },
    analyzing: { label: 'Analyzing', tone: 'info' },
  };
  return (
    <div style={{ width: '100%', height: '100%', background: T.bg, fontFamily: T.font, color: T.text, display: 'flex', flexDirection: 'column' }}>
      <TopNav active="projects" T={T}/>
      <div style={{ flex: 1, overflow: 'auto', padding: '22px 28px', background: T.bgSubtle }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ fontSize: 19, fontWeight: 650, color: T.text, letterSpacing: '-0.02em' }}>Projects</div>
          <Btn variant="primary" icon="plus" T={T}>New project</Btn>
        </div>
        <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.6fr 130px 80px 120px 100px', gap: 14, alignItems: 'center',
            padding: '10px 18px', borderBottom: `1px solid ${T.border}`, background: T.bgSunken,
            fontSize: 11, fontWeight: 600, color: T.textSubtle, textTransform: 'uppercase', letterSpacing: '0.03em',
          }}>
            <div>Project</div><div>Status</div><div style={{ textAlign: 'center' }}>Tools</div><div>Highest risk</div><div>Updated</div>
          </div>
          {projects.map((p, i) => {
            const s = statusCfg[p.status];
            return (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1.6fr 130px 80px 120px 100px', gap: 14, alignItems: 'center',
                padding: '13px 18px', borderBottom: i < projects.length - 1 ? `1px solid ${T.border}` : 'none',
              }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text }}>{p.name}</div>
                  <div style={{ fontSize: 11.5, color: T.textSubtle, fontFamily: T.mono, display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                    <Icon name="github" size={11}/>{p.repo}
                  </div>
                </div>
                <div><Pill tone={s.tone} size="xs" dot T={T}>{s.label}</Pill></div>
                <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: T.text, fontFamily: T.mono }}>{p.tools || '—'}</div>
                <div>{p.tools > 0 ? <RiskBadge level={p.risk} T={T}/> : <span style={{ fontSize: 12, color: T.textFaint }}>—</span>}</div>
                <div style={{ fontSize: 12, color: T.textSubtle, fontFamily: T.mono }}>{p.updated}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { MobileSignIn, MobileDashboard, MobileToolProposal, DarkDashboardBonus });
