// Screens 1-2 — Sign-in + Workspace selection/creation.

const SignInScreen = () => (
  <div style={{ display: 'flex', width: '100%', height: '100%', fontFamily: MCP.font, background: MCP.bg }}>
    {/* LEFT — form, 45% */}
    <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', padding: '40px 52px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: MCP.accent, color: MCP.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name="terminal" size={15} strokeWidth={2.25}/>
        </div>
        <span style={{ fontSize: 14.5, fontWeight: 700, color: MCP.text, letterSpacing: '-0.02em', whiteSpace: 'nowrap', flexShrink: 0 }}>MCP Maker</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 360, width: '100%', margin: '0 auto' }}>
        <h1 style={{ fontSize: 25, fontWeight: 650, letterSpacing: '-0.025em', margin: 0, color: MCP.text }}>Sign in</h1>
        <p style={{ fontSize: 13.5, color: MCP.textMuted, marginTop: 8, lineHeight: 1.55 }}>
          Turn a repository into a reviewed MCP server.
        </p>

        <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button style={{
            height: 40, borderRadius: 7, background: MCP.accent, color: MCP.bg, border: 'none',
            fontSize: 13.5, fontWeight: 600, fontFamily: MCP.font, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
            whiteSpace: 'nowrap', width: '100%',
          }}>
            <Icon name="github" size={16} style={{ flexShrink: 0 }}/> <span style={{ whiteSpace: 'nowrap' }}>Continue with GitHub</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '6px 0' }}>
            <div style={{ flex: 1, height: 1, background: MCP.border }}/>
            <span style={{ fontSize: 11, color: MCP.textFaint, fontWeight: 550 }}>OR</span>
            <div style={{ flex: 1, height: 1, background: MCP.border }}/>
          </div>
          <Field label="Work email" icon="mail" placeholder="you@company.com"/>
          <Field label="Password" icon="key" placeholder="••••••••••••" state="focus"/>
          <Btn variant="primary" size="lg" iconRight="arrowRight" style={{ marginTop: 4, width: '100%' }}>Sign in</Btn>
        </div>

        <div style={{ marginTop: 22, padding: 12, borderRadius: 8, background: MCP.bgSunken, border: `1px solid ${MCP.border}`, display: 'flex', gap: 9 }}>
          <Icon name="shield" size={15} style={{ color: MCP.textSubtle, flexShrink: 0, marginTop: 1 }} strokeWidth={1.75}/>
          <div style={{ fontSize: 12, color: MCP.textSubtle, lineHeight: 1.5 }}>
            Auth via Better Auth. We only request read access to public repositories by default.
          </div>
        </div>
      </div>
      <div style={{ fontSize: 11.5, color: MCP.textFaint }}>© 2026 MCP Maker · SOC2 in progress</div>
    </div>

    {/* RIGHT — product truth panel, 55% */}
    <div style={{
      flex: 1, background: MCP.bgSubtle, borderLeft: `1px solid ${MCP.border}`,
      padding: '48px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <div style={{ maxWidth: 460 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 18, padding: '5px 10px', borderRadius: 99, background: MCP.bg, border: `1px solid ${MCP.border}`, fontSize: 11.5, fontWeight: 560, color: MCP.textMuted }}>
          <Icon name="lock" size={13}/> Read-only by default
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 640, letterSpacing: '-0.025em', lineHeight: 1.25, margin: 0, color: MCP.text }}>
          Repository in. Reviewed MCP server out. Nothing runs without your sign-off.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
          {[
            { icon: 'eye', tone: 'safe', label: 'Read-only tools', body: 'Enabled by default — scanning, extraction, docs.' },
            { icon: 'edit', tone: 'caution', label: 'Write tools', body: 'Proposed, but disabled until you approve each one.' },
            { icon: 'alertTriangle', tone: 'danger', label: 'Destructive tools', body: 'Blocked by default. Never auto-enabled.' },
          ].map((r, i) => {
            const c = toneColors(MCP, r.tone);
            return (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 14, borderRadius: 10, background: MCP.bg, border: `1px solid ${MCP.border}` }}>
                <div style={{ width: 30, height: 30, borderRadius: 7, background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={r.icon} size={15} strokeWidth={2}/>
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: MCP.text }}>{r.label}</div>
                  <div style={{ fontSize: 12.5, color: MCP.textSubtle, marginTop: 2, lineHeight: 1.45 }}>{r.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const WorkspaceScreen = () => {
  const workspaces = [
    { name: 'Acme Corp', role: 'Owner', projects: 12, plan: 'Team' },
    { name: 'Personal', role: 'Owner', projects: 3, plan: 'Free' },
    { name: 'Northwind Labs', role: 'Member', projects: 7, plan: 'Team' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: MCP.bgSubtle, fontFamily: MCP.font, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px 24px' }}>
      <div style={{ width: 26, height: 26, borderRadius: 6, background: MCP.accent, color: MCP.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Icon name="terminal" size={14} strokeWidth={2.25}/>
      </div>
      <h1 style={{ fontSize: 21, fontWeight: 640, letterSpacing: '-0.02em', margin: 0, color: MCP.text }}>Choose a workspace</h1>
      <p style={{ fontSize: 13.5, color: MCP.textSubtle, marginTop: 6, marginBottom: 28 }}>Projects, generated servers, and audit history are scoped per workspace.</p>

      <div style={{ width: '100%', maxWidth: 460, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {workspaces.map((w, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 10,
            background: MCP.bg, border: `1.5px solid ${i === 0 ? MCP.accent : MCP.border}`,
            boxShadow: i === 0 ? `0 0 0 3px ${MCP.accentSoft}` : MCP.shadowSm, cursor: 'pointer',
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: MCP.accent, color: MCP.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
              {w.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: MCP.text }}>{w.name}</div>
              <div style={{ fontSize: 12, color: MCP.textSubtle, marginTop: 2 }}>{w.role} · {w.projects} projects</div>
            </div>
            <Pill tone="neutral" size="xs">{w.plan}</Pill>
            <Icon name="chevronRight" size={16} style={{ color: MCP.textFaint }}/>
          </div>
        ))}

        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderRadius: 10,
          border: `1.5px dashed ${MCP.borderStrong}`, cursor: 'pointer', color: MCP.textMuted,
        }}>
          <div style={{ width: 38, height: 38, borderRadius: 8, background: MCP.bgSunken, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="plus" size={17}/>
          </div>
          <span style={{ fontSize: 13.5, fontWeight: 550 }}>Create a new workspace</span>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { SignInScreen, WorkspaceScreen });
