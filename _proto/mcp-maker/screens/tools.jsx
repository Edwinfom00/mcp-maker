// Screens 7-8 — Tool proposal (5-10 candidates) + Security review.

const toolCandidates = [
  { name: 'getPaymentById', desc: 'Fetch a single payment record by ID for inspection.', file: 'src/routes/payments.ts:12', risk: 'readonly', enabled: true,
    schema: `{
  "name": "getPaymentById",
  "input": { "id": "string" },
  "output": "Payment"
}` },
  { name: 'listRecentWebhookEvents', desc: 'List the last N webhook events received.', file: 'src/routes/payments.ts:34', risk: 'readonly', enabled: true,
    schema: `{
  "name": "listRecentWebhookEvents",
  "input": { "limit": "number" },
  "output": "WebhookEvent[]"
}` },
  { name: 'verifyWebhookSignature', desc: 'Validate a raw payload against its HMAC signature.', file: 'src/services/webhookSigner.ts:8', risk: 'readonly', enabled: true,
    schema: `{
  "name": "verifyWebhookSignature",
  "input": { "payload": "string", "signature": "string" },
  "output": "boolean"
}` },
  { name: 'retryFailedWebhook', desc: 'Re-send a previously failed webhook delivery.', file: 'src/routes/payments.ts:58', risk: 'write', enabled: true,
    schema: `{
  "name": "retryFailedWebhook",
  "input": { "eventId": "string" },
  "output": "DeliveryResult"
}` },
  { name: 'updatePaymentStatus', desc: 'Manually override a payment\u2019s status field.', file: 'src/routes/payments.ts:71', risk: 'write', enabled: false,
    schema: `{
  "name": "updatePaymentStatus",
  "input": { "id": "string", "status": "PaymentStatus" },
  "output": "Payment"
}` },
  { name: 'refundPayment', desc: 'Issue a full or partial refund via the payment provider.', file: 'src/services/refunds.ts:19', risk: 'destructive', enabled: false,
    schema: `{
  "name": "refundPayment",
  "input": { "id": "string", "amount": "number?" },
  "output": "RefundResult"
}` },
  { name: 'deleteWebhookLog', desc: 'Permanently delete stored webhook event logs.', file: 'src/services/cleanup.ts:44', risk: 'blocked', enabled: false,
    schema: `{
  "name": "deleteWebhookLog",
  "input": { "before": "date" },
  "output": "DeletedCount"
}` },
];

const ToolProposalScreen = () => {
  const counts = { readonly: 3, write: 2, destructive: 1, blocked: 1 };
  return (
    <div style={{ height: '100%', overflow: 'auto', padding: '20px 26px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 640, color: MCP.text, letterSpacing: '-0.015em' }}>Proposed tools</div>
          <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 3 }}>7 candidates found · nothing is enabled by default beyond read-only</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {Object.entries(counts).map(([k, v]) => <RiskBadge key={k} level={k} size="sm"/>)}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {toolCandidates.map((t, i) => (
          <Card key={i} padding={16} style={{ opacity: t.risk === 'blocked' ? 0.7 : 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <Toggle on={t.enabled} T={MCP}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 14, fontWeight: 640, color: MCP.text, fontFamily: MCP.mono }}>{t.name}</span>
                  <RiskBadge level={t.risk}/>
                  {t.risk === 'blocked' && <Pill tone="neutral" size="xs">Cannot be enabled</Pill>}
                </div>
                <div style={{ fontSize: 13, color: MCP.textMuted, marginTop: 6, lineHeight: 1.5 }}>{t.desc}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
                  <SourceRow path={t.file}/>
                  <button style={{ background: 'none', border: 'none', color: MCP.textSubtle, fontSize: 12, fontWeight: 550, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, padding: 0 }}>
                    Schema <Icon name="chevronDown" size={12}/>
                  </button>
                </div>
                {i === 0 && (
                  <div style={{ marginTop: 10 }}><SchemaPreview json={t.schema}/></div>
                )}
              </div>
              <Icon name="edit" size={16} style={{ color: MCP.textFaint, cursor: 'pointer', flexShrink: 0, marginTop: 2 }}/>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
        <Btn variant="secondary">Back to summary</Btn>
        <Btn variant="primary" icon="shield">Continue to security review</Btn>
      </div>
    </div>
  );
};

const SecurityReviewScreen = () => (
  <div style={{ height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', padding: '26px 24px 40px' }}>
    <div style={{ width: '100%', maxWidth: 800 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 640, color: MCP.text, letterSpacing: '-0.015em' }}>Security review</div>
        <div style={{ fontSize: 13, color: MCP.textSubtle, marginTop: 3 }}>Why each tool was scored, and what's blocked outright.</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {[
          { name: 'refundPayment', risk: 'destructive', reason: 'Calls the payment provider\u2019s irreversible refund API. Financial impact, no dry-run available.', requires: 'Explicit approval + confirmation phrase at generation time.' },
          { name: 'updatePaymentStatus', risk: 'write', reason: 'Mutates a financial record directly, bypassing the state machine in src/services/paymentState.ts.', requires: 'Explicit approval before this tool is included.' },
          { name: 'retryFailedWebhook', risk: 'write', reason: 'Re-triggers a side-effecting delivery, but is idempotent and logged.', requires: 'Approval — lower scrutiny than status overrides.' },
        ].map((r, i) => {
          const c = toneColors(MCP, RISK[r.risk].tone);
          return (
            <Card key={i} padding={16}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 13.5, fontWeight: 640, color: MCP.text, fontFamily: MCP.mono }}>{r.name}</span>
                <RiskBadge level={r.risk}/>
              </div>
              <div style={{ fontSize: 12.5, color: MCP.textMuted, lineHeight: 1.55 }}>{r.reason}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10, padding: '9px 12px', borderRadius: 7, background: c.bg, border: `1px solid ${c.bd}` }}>
                <Icon name="shieldCheck" size={14} style={{ color: c.fg, flexShrink: 0, marginTop: 1 }}/>
                <span style={{ fontSize: 12, color: c.fg, fontWeight: 550, lineHeight: 1.5 }}>{r.requires}</span>
              </div>
            </Card>
          );
        })}
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13.5, fontWeight: 620, color: MCP.text, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="lock" size={15} style={{ color: MCP.danger }}/> Blocked by default
        </div>
        <Card padding={16} style={{ background: MCP.dangerSoft, border: `1px solid ${MCP.dangerBorder}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 13.5, fontWeight: 640, color: MCP.text, fontFamily: MCP.mono }}>deleteWebhookLog</span>
            <RiskBadge level="blocked"/>
          </div>
          <div style={{ fontSize: 12.5, color: MCP.textMuted, lineHeight: 1.55 }}>
            Deletes stored logs with no recovery path and no audit trail on the target table. MCP Maker blocks unrecoverable deletions with no confirmation mechanism, regardless of server mode. Contact support to request an exception with a custom safeguard.
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
        <Btn variant="secondary">Back to proposal</Btn>
        <Btn variant="primary" icon="listChecks">Continue to validation</Btn>
      </div>
    </div>
  </div>
);

Object.assign(window, { ToolProposalScreen, SecurityReviewScreen, toolCandidates });
