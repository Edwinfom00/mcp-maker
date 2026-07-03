// Screens 9-10 — Human validation (enable/disable/rename/edit) + Generation & export.

const HumanValidationScreen = () => (
  <div style={{ height: '100%', overflow: 'auto', padding: '20px 26px 40px' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
      <div>
        <div style={{ fontSize: 18, fontWeight: 640, color: MCP.text, letterSpacing: '-0.015em' }}>Human validation</div>
        <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 3 }}>Edit names, descriptions, and confirm which tools ship.</div>
      </div>
      <Pill tone="caution" dot>2 confirmations pending</Pill>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      {/* left: editable readonly/write tool */}
      <Card padding={18}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <RiskBadge level="write"/>
          <Toggle on T={MCP}/>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11.5, fontWeight: 560, color: MCP.textMuted, display: 'block', marginBottom: 6 }}>Tool name</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 11px', border: `1.5px solid ${MCP.accent}`, borderRadius: 7, boxShadow: `0 0 0 3px ${MCP.accentSoft}` }}>
            <span style={{ fontSize: 13.5, fontFamily: MCP.mono, color: MCP.text }}>retryFailedWebhook</span>
            <Icon name="edit" size={13} style={{ color: MCP.textFaint, marginLeft: 'auto' }}/>
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11.5, fontWeight: 560, color: MCP.textMuted, display: 'block', marginBottom: 6 }}>Description shown to the model</label>
          <div style={{ padding: '10px 11px', border: `1px solid ${MCP.borderStrong}`, borderRadius: 7, fontSize: 13, color: MCP.text, lineHeight: 1.5, minHeight: 56 }}>
            Re-send a previously failed webhook delivery. Idempotent — safe to call multiple times for the same event ID.
          </div>
        </div>
        <SourceRow path="src/routes/payments.ts:58"/>
      </Card>

      {/* right: destructive tool requiring confirmation phrase */}
      <Card padding={18} style={{ border: `1px solid ${MCP.dangerBorder}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <RiskBadge level="destructive"/>
          <Toggle on={false} T={MCP}/>
        </div>
        <div style={{ fontSize: 14, fontWeight: 640, color: MCP.text, fontFamily: MCP.mono, marginBottom: 6 }}>refundPayment</div>
        <div style={{ fontSize: 12.5, color: MCP.textMuted, lineHeight: 1.5, marginBottom: 14 }}>
          Issues a refund through the live payment provider. Irreversible once processed.
        </div>
        <div style={{ padding: 12, borderRadius: 8, background: MCP.dangerSoft, border: `1px solid ${MCP.dangerBorder}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: MCP.danger, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="alertTriangle" size={13} strokeWidth={2}/> Confirmation required to enable
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 34, padding: '0 10px', background: MCP.bg, border: `1px solid ${MCP.dangerBorder}`, borderRadius: 6 }}>
            <span style={{ fontSize: 12.5, color: MCP.textFaint, fontFamily: MCP.mono }}>Type "enable refund" to confirm</span>
          </div>
        </div>
      </Card>
    </div>

    <div style={{ marginTop: 20, padding: 14, borderRadius: 10, background: MCP.bgSunken, border: `1px solid ${MCP.border}`, display: 'flex', alignItems: 'center', gap: 12 }}>
      <Icon name="listChecks" size={17} style={{ color: MCP.textSubtle }}/>
      <div style={{ fontSize: 12.5, color: MCP.textMuted, flex: 1 }}>
        <b style={{ color: MCP.text }}>4 tools</b> enabled · <b style={{ color: MCP.text }}>1 tool</b> awaiting confirmation · <b style={{ color: MCP.text }}>1 tool</b> blocked
      </div>
      <Btn variant="secondary">Back to review</Btn>
      <Btn variant="primary" icon="check">Confirm & generate server</Btn>
    </div>
  </div>
);

const GenerationScreen = () => {
  const checks = [
    { label: 'Build', detail: 'tsc -p . · 0 errors', status: 'done' },
    { label: 'Typecheck', detail: 'strict mode · 0 errors, 0 warnings', status: 'done' },
    { label: 'Schema tests', detail: '7 tools · 7 passing', status: 'done' },
    { label: 'README generation', detail: 'Usage, tool reference, risk table', status: 'active' },
    { label: 'ZIP export', detail: 'Bundling dist/ + manifest.json', status: 'wait' },
  ];
  return (
    <div style={{ height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', padding: '30px 24px 40px' }}>
      <div style={{ width: '100%', maxWidth: 760 }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 18, fontWeight: 640, color: MCP.text, letterSpacing: '-0.015em' }}>Generating your MCP server</div>
          <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 3 }}>acme/stripe-webhook-router · 4 tools enabled</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16 }}>
          <Card padding={20}>
            <Stepper steps={checks}/>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Card padding={16}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: MCP.textFaint, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 10 }}>Validation report</div>
              {[['Build', 'passed'], ['Typecheck', 'passed'], ['Schema tests', '7 / 7'], ['Lint', 'passed']].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 12.5 }}>
                  <span style={{ color: MCP.textMuted }}>{r[0]}</span>
                  <span style={{ color: MCP.safe, fontWeight: 600, fontFamily: MCP.mono }}>{r[1]}</span>
                </div>
              ))}
            </Card>
            <Card padding={16}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: MCP.textFaint, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 10 }}>Server contents</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 12, fontFamily: MCP.mono, color: MCP.textSubtle }}>
                <div>src/server.ts</div>
                <div>src/tools/*.ts (4 files)</div>
                <div>README.md</div>
                <div>manifest.json</div>
              </div>
            </Card>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, padding: 16, borderRadius: 10, background: MCP.bgSunken, border: `1px solid ${MCP.border}` }}>
          <div style={{ fontSize: 12.5, color: MCP.textMuted }}>
            Once exported, this server still requires deployment and its own runtime credentials — MCP Maker doesn't manage production access.
          </div>
          <Btn variant="primary" icon="download" size="lg" disabled>Export ZIP</Btn>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { HumanValidationScreen, GenerationScreen });
