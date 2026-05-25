export const displayName = "Waiter Dashboard";
export const screenSize = "desktop";

/* 
Conversion notice: 
This screen was automatically converted from a *legacy* html-based project (no jsx, no tailwind).

When needed, you should:
- Smartly split this up into new components, and re-use existing ones
- Migrate CSS to tailwind so the user can change the styles, update style.css
- t('text') for editable text
- <Image> for ai generated images (instead of <img>)
- <Avatar> for user avatars (instead of <img>)
- When migrating, be accurate.

When all of this is done, remove this notice.
*/

export default () => (
  <>
    <meta charSet="UTF-8" />
    {"\n"}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {"\n"}
    <title>{"Panel de Mesero (POS)"}</title>
    {"\n\n"}
    <style id="theme-styles">
      {
        "\n  :root, :host {\n    --background: #f8fafc;\n    --foreground: #0f172a;\n    --card: #ffffff;\n    --card-foreground: #0f172a;\n    --primary: #ea580c;\n    --primary-foreground: #ffffff;\n    --secondary: #f1f5f9;\n    --secondary-foreground: #334155;\n    --border: #e2e8f0;\n    --input: #ffffff;\n    --muted: #f1f5f9;\n    --muted-foreground: #64748b;\n    --success: #22c55e;\n    --success-foreground: #ffffff;\n    --warning: #f59e0b;\n    --warning-foreground: #ffffff;\n    --destructive: #ef4444;\n    --destructive-foreground: #ffffff;\n    --accent: #3b82f6;\n    --accent-foreground: #ffffff;\n    --sidebar: #ffffff;\n    --sidebar-foreground: #334155;\n    --sidebar-primary: #fff7ed;\n    --sidebar-primary-foreground: #ea580c;\n    --radius-sm: 4px;\n    --radius-md: 8px;\n    --radius-lg: 12px;\n    --radius-xl: 16px;\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="base-styles">
      {
        "\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: var(--font-family-body, system-ui, -apple-system, sans-serif);\n    background-color: var(--background);\n    color: var(--foreground);\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 600;\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="layout-styles">
      {
        "\n  .app-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n  }\n  \n  /* Sidebar */\n  .sidebar {\n    width: 260px;\n    background-color: var(--sidebar);\n    border-right: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .sidebar-header {\n    height: 72px;\n    padding: 0 24px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border-bottom: 1px solid var(--border);\n  }\n  .sidebar-logo-icon {\n    width: 32px;\n    height: 32px;\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .sidebar-logo-text {\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--sidebar-foreground);\n    letter-spacing: -0.5px;\n  }\n  .sidebar-nav {\n    padding: 24px 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    flex: 1;\n    overflow-y: auto;\n  }\n  .nav-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 16px;\n    border-radius: var(--radius-md);\n    color: var(--sidebar-foreground);\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.2s;\n  }\n  .nav-item.active {\n    background-color: var(--sidebar-primary);\n    color: var(--sidebar-primary-foreground);\n  }\n  .nav-item.highlight {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n  }\n  .nav-section-title {\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 0.8px;\n    color: var(--muted-foreground);\n    margin: 16px 0 8px 16px;\n    font-weight: 700;\n  }\n  \n  /* Main Content */\n  .main-content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .topbar {\n    height: 72px;\n    background-color: var(--card);\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 32px;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .topbar-title {\n    font-size: 22px;\n    font-weight: 600;\n  }\n  .topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n  }\n  .role-badge {\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n    border: 1px solid var(--border);\n    padding: 6px 14px;\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .icon-button {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--muted-foreground);\n    cursor: pointer;\n    border: 1px solid var(--border);\n    background: var(--card);\n    position: relative;\n  }\n  .icon-button.has-alert::after {\n    content: '';\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    width: 12px;\n    height: 12px;\n    background-color: var(--destructive);\n    border-radius: 50%;\n    border: 2px solid var(--card);\n  }\n  .user-profile {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n    padding-left: 24px;\n    border-left: 1px solid var(--border);\n  }\n  .avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .user-info {\n    display: flex;\n    flex-direction: column;\n  }\n  .user-name {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--foreground);\n  }\n  .user-role {\n    font-size: 12px;\n    color: var(--muted-foreground);\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="dashboard-styles">
      {
        "\n  .dashboard-scroll-area {\n    flex: 1;\n    overflow-y: auto;\n    padding: 32px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n  \n  /* KPIs Grid */\n  .stats-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 24px;\n  }\n  .kpi-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-xl);\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 4px 12px -4px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.02);\n  }\n\n  .kpi-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n  .kpi-title {\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--muted-foreground);\n    line-height: 1.3;\n    padding-top: 4px;\n    max-width: 70%;\n  }\n  .kpi-icon-wrapper {\n    width: 48px;\n    height: 48px;\n    border-radius: var(--radius-lg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .kpi-icon-wrapper.kpi-tables { background-color: var(--sidebar-primary); color: var(--primary); }\n  .kpi-icon-wrapper.kpi-progress { background-color: rgba(59, 130, 246, 0.12); color: var(--accent); }\n  .kpi-icon-wrapper.kpi-ready { background-color: rgba(34, 197, 94, 0.12); color: var(--success); }\n  .kpi-icon-wrapper.kpi-sales { background-color: var(--secondary); color: var(--secondary-foreground); }\n\n  .kpi-content {\n    margin-bottom: 20px;\n  }\n  .kpi-value {\n    font-size: 42px;\n    font-weight: 700;\n    color: var(--card-foreground);\n    line-height: 1;\n    letter-spacing: -1.5px;\n  }\n  \n  .kpi-footer {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-top: auto;\n    padding-top: 16px;\n    border-top: 1px solid var(--secondary);\n  }\n  .kpi-trend {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    font-size: 13px;\n    font-weight: 600;\n    padding: 4px 10px;\n    border-radius: 100px;\n  }\n  .kpi-trend.trend-neutral {\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n  }\n  .kpi-context {\n    font-size: 13px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n  \n  /* Kanban Board */\n  .kanban-section-title {\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .kanban-board {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 24px;\n    flex: 1;\n    min-height: 500px;\n  }\n  .kanban-column {\n    background-color: var(--secondary);\n    border-radius: var(--radius-lg);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    border: 1px solid var(--border);\n  }\n  .kanban-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 12px;\n    border-bottom: 2px solid var(--border);\n  }\n  .kanban-title {\n    font-size: 15px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  .kanban-count {\n    background-color: var(--card);\n    color: var(--foreground);\n    padding: 2px 10px;\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 700;\n    border: 1px solid var(--border);\n  }\n  \n  /* Status specific headers */\n  .kanban-column.pending .kanban-title { color: var(--warning); }\n  .kanban-column.preparing .kanban-title { color: var(--accent); }\n  .kanban-column.ready .kanban-title { color: var(--success); }\n  \n  /* Order Cards */\n  .order-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    cursor: pointer;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.05);\n  }\n  .order-card.ready-to-serve {\n    border-color: rgba(34, 197, 94, 0.5);\n    background-color: rgba(34, 197, 94, 0.02);\n  }\n  .order-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n  .table-info {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .table-number {\n    font-size: 18px;\n    font-weight: 700;\n    color: var(--card-foreground);\n  }\n  .order-id {\n    font-size: 12px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n  .time-badge {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 4px 8px;\n    border-radius: var(--radius-sm);\n    font-size: 12px;\n    font-weight: 600;\n  }\n  .time-badge.urgent {\n    background-color: rgba(239, 68, 68, 0.1);\n    color: var(--destructive);\n  }\n  .time-badge.normal {\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n  }\n  .time-badge.success {\n    background-color: rgba(34, 197, 94, 0.1);\n    color: var(--success);\n  }\n  \n  .order-items {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 12px 0;\n    border-top: 1px dashed var(--border);\n    border-bottom: 1px dashed var(--border);\n  }\n  .order-item {\n    display: flex;\n    align-items: flex-start;\n    gap: 8px;\n    font-size: 14px;\n    color: var(--card-foreground);\n  }\n  .item-qty {\n    font-weight: 700;\n    color: var(--primary);\n    min-width: 24px;\n  }\n  .item-name {\n    flex: 1;\n    font-weight: 500;\n    line-height: 1.4;\n  }\n  .item-note {\n    font-size: 12px;\n    color: var(--warning);\n    background-color: rgba(245, 158, 11, 0.1);\n    padding: 2px 6px;\n    border-radius: var(--radius-sm);\n    margin-top: 4px;\n    display: inline-block;\n    font-weight: 500;\n  }\n  \n  .order-footer {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .action-button {\n    padding: 8px 16px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 600;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .action-button.primary {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n  }\n  .action-button.success {\n    background-color: var(--success);\n    color: var(--success-foreground);\n  }\n  .action-button.outline {\n    background-color: transparent;\n    border: 1px solid var(--border);\n    color: var(--foreground);\n  }\n  .action-button.outline.success {\n    color: var(--success);\n    border-color: var(--success);\n  }\n"
      }
    </style>
    {"\n\n"}
    <style>
      {
        "\n:root {\n  --background: #F6F8FA;\n  --foreground: #0F1724;\n  --border: #00000014;\n  --input: #FFFFFF;\n  --primary: #0EA5A4;\n  --primary-foreground: #FFFFFF;\n  --secondary: #F2F4F7;\n  --secondary-foreground: #374151;\n  --muted: #F3F4F6;\n  --muted-foreground: #8A8F98;\n  --success: #16A34A;\n  --success-foreground: #FFFFFF;\n  --accent: #2563EB;\n  --accent-foreground: #FFFFFF;\n  --destructive: #DC2626;\n  --destructive-foreground: #FFFFFF;\n  --warning: #F59E0B;\n  --warning-foreground: #121419;\n  --card: #FFFFFF;\n  --card-foreground: #0F1724;\n  --sidebar: #FFFFFF;\n  --sidebar-foreground: #2B2B2B;\n  --sidebar-primary: #E6FFFA;\n  --sidebar-primary-foreground: #0EA5A4;\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 12px;\n  --radius-xl: 16px;\n  --font-family-body: Inter;\n}\n"
      }
    </style>
    {"\n\n"}
    <div className="app-container">
      {"\n  "}
      {}
      {"\n  "}
      <aside className="sidebar" id="sidebar">
        {"\n    "}
        <div className="sidebar-header">
          {"\n      "}
          <div className="sidebar-logo-icon">
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:utensils-crossed"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n      "}
          <span className="sidebar-logo-text">{"RestoSync"}</span>
          {"\n    "}
        </div>
        {"\n    \n    "}
        <nav className="sidebar-nav">
          {"\n      "}
          <div className="nav-section-title">{"Mi Turno"}</div>
          {"\n      \n      "}
          {}
          {"\n      "}
          <div
            className="nav-item highlight"
            data-media-type="banani-button"
            style={{
              marginBottom: "8px",
            }}
          >
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:plus-circle"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Nuevo Pedido\n      "}
          </div>
          {"\n\n      "}
          <div className="nav-item active" data-media-type="banani-button">
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:concierge-bell"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Mis Mesas y Pedidos\n      "}
          </div>
          {"\n      \n      "}
          <div className="nav-item" data-media-type="banani-button">
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:layout-grid"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Plano de Mesas\n      "}
          </div>
          {"\n      \n      "}
          <div className="nav-section-title">{"Consultas"}</div>
          {"\n      "}
          <div className="nav-item" data-media-type="banani-button">
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:book-open"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        MenÃº y Disponibilidad\n      "}
          </div>
          {"\n      "}
          <div className="nav-item" data-media-type="banani-button">
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:history"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Historial del Turno\n      "}
          </div>
          {"\n      \n      "}
          <div
            style={{
              flex: "1",
            }}
          />
          {"\n      \n      "}
          <div className="nav-item" data-media-type="banani-button">
            {"\n        "}
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:log-out"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Cerrar Turno\n      "}
          </div>
          {"\n    "}
        </nav>
        {"\n  "}
      </aside>
      {"\n\n  "}
      {}
      {"\n  "}
      <main className="main-content">
        {"\n    "}
        {}
        {"\n    "}
        <header className="topbar" id="topbar">
          {"\n      "}
          <h1 className="topbar-title">{"Panel de Mesero (POS)"}</h1>
          {"\n      \n      "}
          <div className="topbar-actions">
            {"\n        "}
            <div className="role-badge">
              {"\n          "}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {"\n            "}
                <iconify-icon
                  icon="lucide:concierge-bell"
                  style={{
                    fontSize: "16px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          Mesero\n        "}
            </div>
            {"\n        \n        "}
            <div
              className="icon-button has-alert"
              data-media-type="banani-button"
            >
              {"\n          "}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {"\n            "}
                <iconify-icon
                  icon="lucide:bell"
                  style={{
                    fontSize: "20px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="user-profile" data-media-type="banani-button">
              {"\n          "}
              <img
                src="avatar/male/25-35/Hispanic/2"
                alt="Mike T."
                className="avatar"
              />
              {"\n          "}
              <div className="user-info">
                {"\n            "}
                <span className="user-name">{"Mike Torres"}</span>
                {"\n            "}
                <span className="user-role">{"Turno Tarde"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </header>
        {"\n\n    "}
        {}
        {"\n    "}
        <div className="dashboard-scroll-area">
          {"\n      \n      "}
          {}
          {"\n      "}
          <section className="stats-grid">
            {"\n        "}
            {}
            {"\n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"Mis Mesas Activas"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-tables">
                  {"\n              "}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:layout-grid"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-content">
                {"\n            "}
                <span className="kpi-value">{"4"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-trend trend-neutral">
                  {"\n              "}
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:users"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              14 Comensales\n            "}
                </span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            {}
            {"\n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"Pedidos en PreparaciÃ³n"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-progress">
                  {"\n              "}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:chef-hat"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-content">
                {"\n            "}
                <span className="kpi-value">{"3"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-context">{"En cocina y bar"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            {}
            {"\n        "}
            <div
              className="kpi-card"
              style={{
                borderColor: "rgba(34, 197, 94, 0.3)",
              }}
            >
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"Listos para Servir"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-ready">
                  {"\n              "}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:bell-ring"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-content">
                {"\n            "}
                <span
                  className="kpi-value"
                  style={{
                    color: "var(--success)",
                  }}
                >
                  {"2"}
                </span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-context">{"Requieren tu atenciÃ³n"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            {}
            {"\n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"Ventas del Turno"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-sales">
                  {"\n              "}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:circle-dollar-sign"
                      style={{
                        fontSize: "24px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-content">
                {"\n            "}
                <span className="kpi-value">{"$345"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-context">{"9 Pedidos completados"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </section>
          {"\n\n      "}
          {}
          {"\n      "}
          <section>
            {"\n        "}
            <div className="kanban-section-title">
              {"\n          "}
              <span>{"Mis Pedidos Activos"}</span>
              {"\n          "}
              <button
                className="action-button primary"
                data-media-type="banani-button"
              >
                {"\n            "}
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:plus"
                    style={{
                      fontSize: "16px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            Nuevo Pedido\n          "}
              </button>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="kanban-board">
              {"\n          \n          "}
              {}
              {"\n          "}
              <div className="kanban-column pending">
                {"\n            "}
                <div className="kanban-header">
                  {"\n              "}
                  <div className="kanban-title">
                    {"\n                "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:send"
                        style={{
                          fontSize: "20px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Enviados a Cocina\n              "}
                  </div>
                  {"\n              "}
                  <span className="kanban-count">{"2"}</span>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div className="order-card" data-media-type="banani-button">
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Mesa 12"}</span>
                      {"\n                  "}
                      <span className="order-id">{"#ORD-8921"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge normal">
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:timer"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  Hace 2m\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-items">
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"2x"}</span>
                      {"\n                  "}
                      <div className="item-name">
                        {
                          "\n                    Smash Burger Especial\n                    "
                        }
                        <span className="item-note">
                          {"Sin cebolla, extra queso"}
                        </span>
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"1x"}</span>
                      {"\n                  "}
                      <div className="item-name">
                        {"Papas Trufadas (Grandes)"}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <button
                      className="action-button outline"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:pencil"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  Editar\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div className="order-card" data-media-type="banani-button">
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Mesa 05"}</span>
                      {"\n                  "}
                      <span className="order-id">{"#ORD-8925"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge normal">
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:timer"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  Hace 1m\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-items">
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"1x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"Bowl Vegano"}</div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"1x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"Agua Mineral"}</div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <button
                      className="action-button outline"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:pencil"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  Editar\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n          "}
              {}
              {"\n          "}
              <div className="kanban-column preparing">
                {"\n            "}
                <div className="kanban-header">
                  {"\n              "}
                  <div className="kanban-title">
                    {"\n                "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:flame"
                        style={{
                          fontSize: "20px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                En PreparaciÃ³n\n              "}
                  </div>
                  {"\n              "}
                  <span className="kanban-count">{"1"}</span>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div
                  className="order-card"
                  style={{
                    borderColor: "rgba(59, 130, 246, 0.3)",
                  }}
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Mesa 08"}</span>
                      {"\n                  "}
                      <span className="order-id">{"#ORD-8915"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge urgent">
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:timer"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  22m\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-items">
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"3x"}</span>
                      {"\n                  "}
                      <div className="item-name">
                        {
                          "\n                    Ribeye 12oz\n                    "
                        }
                        <span className="item-note">
                          {"2 TÃ©rmino Medio, 1 Bien Cocido"}
                        </span>
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"3x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"PurÃ© de Papas"}</div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <button
                      className="action-button outline"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  AÃ±adir al Pedido\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n          "}
              {}
              {"\n          "}
              <div className="kanban-column ready">
                {"\n            "}
                <div className="kanban-header">
                  {"\n              "}
                  <div className="kanban-title">
                    {"\n                "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:check-circle-2"
                        style={{
                          fontSize: "20px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Listos para Servir\n              "}
                  </div>
                  {"\n              "}
                  <span className="kanban-count">{"2"}</span>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div
                  className="order-card ready-to-serve"
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Mesa 21"}</span>
                      {"\n                  "}
                      <span className="order-id">{"#ORD-8910"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge success">
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:bell-ring"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  Â¡Recoger Ahora!\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-items">
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"4x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"Pizza Margarita"}</div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"2x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"Pan de Ajo"}</div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <button
                      className="action-button success"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:check"
                          style={{
                            fontSize: "16px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {
                        "\n                  Marcar como Servido\n                "
                      }
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div
                  className="order-card ready-to-serve"
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Mesa 12"}</span>
                      {"\n                  "}
                      <span className="order-id">{"#ORD-8921 (Bebidas)"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge success">
                      {"\n                  "}
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:wine"
                          style={{
                            fontSize: "14px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                  Bar\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-items">
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"2x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"Cola Artesanal"}</div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <button
                      className="action-button success"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:check"
                          style={{
                            fontSize: "16px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {
                        "\n                  Marcar como Servido\n                "
                      }
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n        "}
            </div>
            {"\n      "}
          </section>
          {"\n      \n    "}
        </div>
        {"\n  "}
      </main>
      {"\n"}
    </div>
  </>
);
