// Screens 3-4 — Project dashboard + Start screen (GitHub URL + server mode).

const ProjectDashboardScreen = () => {
  const projects = [
    { name: 'stripe-webhook-router', repo: 'acme/stripe-webhook-router', status: 'ready', tools: 8, risk: 'write', updated: '12 min ago' },
    { name: 'internal-crm-api', repo: 'acme/internal-crm-api', status: 'validating', tools: 6, risk: 'destructive', updated: '1 h ago' },
    { name: 'docs-search-service', repo: 'acme/docs-search', status: 'analyzing', tools: 0, risk: 'readonly', updated: '3 min ago' },
    { name: 'billing-sync', repo: 'acme/billing-sync', status: 'ready', tools: 5, risk: 'readonly', updated: '2 days ago' },
    { name: 'legacy-user-service', repo: 'acme/legacy-user-service', status: 'failed', tools: 0, risk: 'blocked', updated: '5 days ago' },
  ];
  const statusCfg = {
    ready: { label: 'Ready', tone: 'safe', icon: 'checkCircle' },
    validating: { label: 'Awaiting validation', tone: 'caution', icon: 'clock' },
    analyzing: { label: 'Analyzing', tone: 'info', icon: 'refresh' },
    failed: { label: 'Analysis failed', tone: 'danger', icon: 'xCircle' },
  };
  return (
    <div style={{ height: '100%', overflow: 'auto', padding: '22px 28px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 650, color: MCP.text, letterSpacing: '-0.02em' }}>Projects</div>
          <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 3 }}>5 repositories imported into Acme Corp</div>
        </div>
        <Btn variant="primary" icon="plus">New project</Btn>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, height: 34, padding: '0 12px', background: MCP.bg, border: `1px solid ${MCP.border}`, borderRadius: 7 }}>
          <Icon name="search" size={14} style={{ color: MCP.textFaint }}/>
          <span style={{ fontSize: 13, color: MCP.textFaint }}>Search projects…</span>
        </div>
        <Btn variant="secondary" icon="filter" size="md">Filter</Btn>
      </div>

      <div style={{ background: MCP.bg, border: `1px solid ${MCP.border}`, borderRadius: 10, overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.6fr 130px 80px 120px 100px 32px', gap: 14, alignItems: 'center',
          padding: '10px 18px', borderBottom: `1px solid ${MCP.border}`, background: MCP.bgSubtle,
          fontSize: 11, fontWeight: 600, color: MCP.textSubtle, textTransform: 'uppercase', letterSpacing: '0.03em',
        }}>
          <div>Project</div><div>Status</div><div style={{ textAlign: 'center' }}>Tools</div><div>Highest risk</div><div>Updated</div><div/>
        </div>
        {projects.map((p, i) => {
          const s = statusCfg[p.status];
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1.6fr 130px 80px 120px 100px 32px', gap: 14, alignItems: 'center',
              padding: '13px 18px', borderBottom: i < projects.length - 1 ? `1px solid ${MCP.border}` : 'none',
              background: p.status === 'failed' ? 'rgba(207,34,46,0.03)' : MCP.bg,
            }}>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: MCP.text }}>{p.name}</div>
                <div style={{ fontSize: 11.5, color: MCP.textSubtle, fontFamily: MCP.mono, display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                  <Icon name="github" size={11}/>{p.repo}
                </div>
              </div>
              <div><Pill tone={s.tone} size="xs" dot>{s.label}</Pill></div>
              <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: MCP.text, fontFamily: MCP.mono }}>{p.tools || '—'}</div>
              <div>{p.tools > 0 ? <RiskBadge level={p.risk}/> : <span style={{ fontSize: 12, color: MCP.textFaint }}>—</span>}</div>
              <div style={{ fontSize: 12, color: MCP.textSubtle, fontFamily: MCP.mono }}>{p.updated}</div>
              <Icon name="chevronRight" size={16} style={{ color: MCP.textFaint }}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StartScreen = () => (
  <div style={{ height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', padding: '48px 24px' }}>
    <div style={{ width: '100%', maxWidth: 640 }}>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 20, fontWeight: 650, color: MCP.text, letterSpacing: '-0.02em' }}>New project</div>
        <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 4 }}>Point at a public repository. We only read code you already have access to.</div>
      </div>

      <Card padding={22}>
        <Field label="GitHub repository URL" icon="github" mono placeholder="https://github.com/acme/stripe-webhook-router" state="focus"/>

        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 12.5, fontWeight: 560, color: MCP.textMuted, marginBottom: 8 }}>Server mode</div>
          <SegmentedControl options={[{ label: 'Read-only', icon: 'eye' }, { label: 'Read & write', icon: 'edit' }, { label: 'Full access', icon: 'unlock' }]} active={0}/>
          <div style={{ fontSize: 12, color: MCP.textSubtle, marginTop: 9, lineHeight: 1.5 }}>
            Read-only exposes only inspection tools. Write and full access still require per-tool approval later — this only sets which candidates are proposed.
          </div>
        </div>

        <div style={{ marginTop: 20, padding: 14, borderRadius: 8, background: MCP.bgSunken, border: `1px solid ${MCP.border}` }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: MCP.text, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 7 }}>
            <Icon name="fileCode" size={14} style={{ color: MCP.textSubtle }}/> Detected on preview
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Pill tone="info" size="xs">TypeScript</Pill>
            <Pill tone="neutral" size="xs">Express</Pill>
            <Pill tone="neutral" size="xs">Prisma</Pill>
            <Pill tone="neutral" size="xs">142 files</Pill>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 22 }}>
          <Btn variant="secondary">Cancel</Btn>
          <Btn variant="primary" icon="zap">Analyze repository</Btn>
        </div>
      </Card>
    </div>
  </div>
);

Object.assign(window, { ProjectDashboardScreen, StartScreen });
