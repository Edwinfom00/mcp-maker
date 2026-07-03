// AppShell — concise devtool nav. Workspace switcher + project switcher + status.

const NavItem = ({ icon, label, active, T = MCP }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 9, height: 32, padding: '0 10px', borderRadius: 6,
    color: active ? T.text : T.textSubtle,
    background: active ? T.bgSunken : 'transparent',
    fontSize: 13, fontWeight: active ? 600 : 500, letterSpacing: '-0.005em', cursor: 'pointer',
    whiteSpace: 'nowrap', flexShrink: 0,
  }}>
    <Icon name={icon} size={15} strokeWidth={active ? 2.1 : 1.75}/>
    {label}
  </div>
);

const WorkspaceSwitcher = ({ T = MCP }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 8px 0 6px',
    borderRadius: 6, cursor: 'pointer', border: `1px solid transparent`,
  }}>
    <div style={{
      width: 20, height: 20, borderRadius: 5, background: T.accent, color: T.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700,
    }}>AC</div>
    <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Acme Corp</span>
    <Icon name="chevronDown" size={13} style={{ color: T.textFaint }}/>
  </div>
);

const TopNav = ({ active, project, T = MCP }) => (
  <header style={{
    height: 52, borderBottom: `1px solid ${T.border}`, background: T.bg,
    display: 'flex', alignItems: 'center', padding: '0 16px', gap: 4, flexShrink: 0,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 10, flexShrink: 0 }}>
      <div style={{
        width: 26, height: 26, borderRadius: 6, background: T.accent, color: T.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name="terminal" size={14} strokeWidth={2.25}/>
      </div>
      <span style={{ fontSize: 13.5, fontWeight: 700, color: T.text, letterSpacing: '-0.02em', whiteSpace: 'nowrap', flexShrink: 0 }}>MCP Maker</span>
    </div>
    <div style={{ width: 1, height: 20, background: T.border, marginRight: 6 }}/>
    <WorkspaceSwitcher T={T}/>
    {project && (
      <>
        <Icon name="slash" size={14} style={{ color: T.textFaint, margin: '0 2px' }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 32, padding: '0 8px', borderRadius: 6, cursor: 'pointer' }}>
          <Icon name="gitBranch" size={14} style={{ color: T.textFaint }}/>
          <span style={{ fontSize: 13, fontWeight: 550, color: T.text, fontFamily: T.mono }}>{project}</span>
          <Icon name="chevronDown" size={13} style={{ color: T.textFaint }}/>
        </div>
      </>
    )}

    <div style={{ flex: 1 }}/>
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <NavItem icon="grid" label="Projects" active={active === 'projects'} T={T}/>
      <NavItem icon="users" label="Team" active={active === 'team'} T={T}/>
    </div>
    <div style={{ width: 1, height: 20, background: T.border, margin: '0 10px' }}/>
    <div style={{
      width: 30, height: 30, borderRadius: 6, background: T.bgSunken, border: `1px solid ${T.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.textMuted, cursor: 'pointer', marginRight: 8,
    }} title="Toggle theme (light shown; dark direction available)">
      <Icon name="sun" size={15}/>
    </div>
    <Avatar name="Dana Okoye" size={30} T={T}/>
  </header>
);

const Shell = ({ active, project, breadcrumb, title, meta, actions, T = MCP, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: T.bg, fontFamily: T.font, color: T.text }}>
    <TopNav active={active} project={project} T={T}/>
    {title && (
      <div style={{
        padding: '16px 24px', borderBottom: `1px solid ${T.border}`, background: T.bg,
        display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {breadcrumb && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: T.textSubtle, marginBottom: 4 }}>
              {breadcrumb.map((b, i) => (
                <React.Fragment key={i}>
                  <span style={{ color: i === breadcrumb.length - 1 ? T.textMuted : T.textSubtle, fontWeight: i === breadcrumb.length - 1 ? 550 : 400, fontFamily: i > 0 ? T.mono : T.font }}>{b}</span>
                  {i < breadcrumb.length - 1 && <Icon name="chevronRight" size={11} style={{ color: T.textFaint }}/>}
                </React.Fragment>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h1 style={{ fontSize: 17, fontWeight: 650, letterSpacing: '-0.02em', margin: 0, color: T.text }}>{title}</h1>
            {meta}
          </div>
        </div>
        {actions}
      </div>
    )}
    <div style={{ flex: 1, overflow: 'hidden', background: T.bgSubtle }}>{children}</div>
  </div>
);

Object.assign(window, { TopNav, Shell, NavItem, WorkspaceSwitcher });
