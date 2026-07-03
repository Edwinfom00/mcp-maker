// Screens 5-6 — Analysis progress (stepper, no fake terminal hero) + Architecture summary.

const AnalysisProgressScreen = () => (
  <div style={{ height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', padding: '40px 24px' }}>
    <div style={{ width: '100%', maxWidth: 760, display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
      <Card padding={22}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <div style={{ fontSize: 15, fontWeight: 640, color: MCP.text }}>Analyzing acme/stripe-webhook-router</div>
        </div>
        <div style={{ fontSize: 12.5, color: MCP.textSubtle, marginBottom: 22 }}>Step 3 of 5 · secrets are filtered before anything leaves your repo</div>

        <Stepper steps={[
          { label: 'Clone & detect stack', detail: 'Node.js 20 · TypeScript 5.4 · pnpm workspace', status: 'done', mono: true },
          { label: 'File tree scan', detail: '142 files scanned · 38 relevant to server logic', status: 'done', mono: true },
          { label: 'Route / service / schema extraction', detail: 'Parsing src/routes and src/services… 24 of 38 files', status: 'active', mono: true },
          { label: 'Secret-safe filtering', detail: 'Redacts .env values, API keys, and credentials before analysis', status: 'wait' },
          { label: 'Build tool candidates', detail: 'Ranks candidates by confidence and assigns risk level', status: 'wait' },
        ]}/>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Card padding={16}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: MCP.textFaint, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 10 }}>Live findings</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <SourceRow path="src/routes/payments.ts" lines="12-48"/>
            <SourceRow path="src/services/webhookSigner.ts"/>
            <SourceRow path="src/schemas/event.schema.ts"/>
          </div>
        </Card>
        <Card padding={16}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: MCP.textFaint, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 10 }}>Secret-safe filter</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: MCP.safe, fontWeight: 550 }}>
            <Icon name="shieldCheck" size={15} strokeWidth={2}/> 4 credentials redacted
          </div>
          <div style={{ fontSize: 11.5, color: MCP.textSubtle, marginTop: 6, lineHeight: 1.5 }}>
            .env values never leave your machine in raw form.
          </div>
        </Card>
      </div>
    </div>
  </div>
);

const ArchitectureSummaryScreen = () => (
  <div style={{ height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', padding: '30px 24px 40px' }}>
    <div style={{ width: '100%', maxWidth: 820 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 640, color: MCP.text, letterSpacing: '-0.015em' }}>Architecture summary</div>
          <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 3 }}>acme/stripe-webhook-router · analyzed in 34s</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: MCP.textFaint, fontWeight: 550 }}>Confidence</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: MCP.safe, fontFamily: MCP.mono }}>91%</div>
          </div>
          <Btn variant="primary" icon="listChecks">Review proposed tools</Btn>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card padding={16}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: MCP.textFaint, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 12 }}>Detected framework</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: MCP.bgSunken, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="server" size={17} style={{ color: MCP.textMuted }}/></div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: MCP.text }}>Express 4.19 + TypeScript</div>
              <div style={{ fontSize: 12, color: MCP.textSubtle, fontFamily: MCP.mono }}>Node 20 · pnpm workspace</div>
            </div>
          </div>
        </Card>
        <Card padding={16}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: MCP.textFaint, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 12 }}>Scripts detected</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: MCP.mono, fontSize: 12.5 }}>
            {[['dev', 'tsx watch src/index.ts'], ['build', 'tsc -p .'], ['test', 'vitest run']].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: MCP.info, fontWeight: 600 }}>{s[0]}</span>
                <span style={{ color: MCP.textSubtle }}>{s[1]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card padding={0} style={{ marginBottom: 14 }}>
        <div style={{ padding: '14px 18px', borderBottom: `1px solid ${MCP.border}`, fontSize: 13.5, fontWeight: 620, color: MCP.text }}>Important files</div>
        <div>
          {[
            { path: 'src/routes/payments.ts', desc: '4 route handlers · webhook ingestion' },
            { path: 'src/services/webhookSigner.ts', desc: 'HMAC signature verification' },
            { path: 'src/schemas/event.schema.ts', desc: 'Zod schemas for Stripe event payloads' },
            { path: 'prisma/schema.prisma', desc: 'Data model · 6 tables' },
          ].map((f, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 18px', borderBottom: i < arr.length - 1 ? `1px solid ${MCP.border}` : 'none' }}>
              <SourceRow path={f.path}/>
              <span style={{ fontSize: 12.5, color: MCP.textSubtle, flex: 1 }}>{f.desc}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display: 'flex', gap: 10, padding: 14, borderRadius: 10, background: MCP.infoSoft, border: `1px solid ${MCP.infoBorder}` }}>
        <Icon name="info" size={16} style={{ color: MCP.info, flexShrink: 0, marginTop: 1 }}/>
        <div style={{ fontSize: 12.5, color: MCP.textMuted, lineHeight: 1.5 }}>
          This summary guides tool proposals — it is not a guarantee of correctness. Confidence reflects how much of the codebase matched known patterns, not runtime behavior.
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { AnalysisProgressScreen, ArchitectureSummaryScreen });
