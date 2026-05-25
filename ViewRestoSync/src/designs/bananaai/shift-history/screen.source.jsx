export const displayName = "Shift History";
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
    <title>{"Historial del Turno - Panel de Mesero"}</title>
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
        "\n  .app-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n  }\n  \n  /* Sidebar */\n  .sidebar {\n    width: 260px;\n    background-color: var(--sidebar);\n    border-right: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .sidebar-header {\n    height: 72px;\n    padding: 0 24px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border-bottom: 1px solid var(--border);\n  }\n  .sidebar-logo-icon {\n    width: 32px;\n    height: 32px;\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .sidebar-logo-text {\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--sidebar-foreground);\n    letter-spacing: -0.5px;\n  }\n  .sidebar-nav {\n    padding: 24px 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    flex: 1;\n    overflow-y: auto;\n  }\n  .nav-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 16px;\n    border-radius: var(--radius-md);\n    color: var(--sidebar-foreground);\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .nav-item.active {\n    background-color: var(--sidebar-primary);\n    color: var(--sidebar-primary-foreground);\n  }\n  .nav-item.highlight {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n  }\n  .nav-section-title {\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 0.8px;\n    color: var(--muted-foreground);\n    margin: 16px 0 8px 16px;\n    font-weight: 700;\n  }\n  \n  /* Main Content */\n  .main-content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .topbar {\n    height: 72px;\n    background-color: var(--card);\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 32px;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .topbar-title {\n    font-size: 22px;\n    font-weight: 600;\n  }\n  .topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n  }\n  .role-badge {\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n    border: 1px solid var(--border);\n    padding: 6px 14px;\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .icon-button {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--muted-foreground);\n    cursor: pointer;\n    border: 1px solid var(--border);\n    background: var(--card);\n    position: relative;\n  }\n  .icon-button.has-alert::after {\n    content: '';\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    width: 12px;\n    height: 12px;\n    background-color: var(--destructive);\n    border-radius: 50%;\n    border: 2px solid var(--card);\n  }\n  .user-profile {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n    padding-left: 24px;\n    border-left: 1px solid var(--border);\n  }\n  .avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .user-info {\n    display: flex;\n    flex-direction: column;\n  }\n  .user-name {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--foreground);\n  }\n  .user-role {\n    font-size: 12px;\n    color: var(--muted-foreground);\n  }\n  \n  /* Shared Buttons */\n  .action-button {\n    padding: 8px 16px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 600;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .action-button.outline {\n    background-color: transparent;\n    border: 1px solid var(--border);\n    color: var(--foreground);\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="history-styles">
      {
        "\n  .dashboard-scroll-area {\n    flex: 1;\n    overflow-y: auto;\n    padding: 32px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n\n  /* Shift Summary Stats */\n  .history-summary {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 24px;\n  }\n  \n  .history-summary-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-xl);\n    padding: 24px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    box-shadow: 0 4px 12px -4px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.02);\n  }\n  \n  .history-icon {\n    width: 56px;\n    height: 56px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .history-icon.sales { background-color: rgba(34, 197, 94, 0.1); color: var(--success); }\n  .history-icon.orders { background-color: rgba(59, 130, 246, 0.1); color: var(--accent); }\n  .history-icon.cancelled { background-color: rgba(239, 68, 68, 0.1); color: var(--destructive); }\n  \n  .history-info {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .history-label {\n    font-size: 14px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n  .history-value {\n    font-size: 28px;\n    font-weight: 700;\n    color: var(--card-foreground);\n    line-height: 1;\n    letter-spacing: -0.5px;\n  }\n\n  /* Table Controls */\n  .section-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 16px;\n  }\n  .section-title {\n    font-size: 20px;\n    font-weight: 600;\n  }\n  \n  .filter-group {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n  \n  .search-bar {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    padding: 8px 16px;\n    width: 340px;\n    height: 40px;\n  }\n  .search-input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    font-size: 14px;\n    width: 100%;\n    background: transparent;\n    color: var(--foreground);\n  }\n  .search-input::placeholder {\n    color: var(--muted-foreground);\n  }\n\n  /* Table Container & Table */\n  .history-table-container {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-xl);\n    overflow: hidden;\n    box-shadow: 0 4px 12px -4px rgba(0,0,0,0.05);\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .table {\n    width: 100%;\n    border-collapse: collapse;\n    text-align: left;\n  }\n  .table th {\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n    font-size: 12px;\n    font-weight: 600;\n    padding: 16px 24px;\n    border-bottom: 1px solid var(--border);\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  .table td {\n    padding: 16px 24px;\n    border-bottom: 1px solid var(--border);\n    font-size: 14px;\n    color: var(--card-foreground);\n    vertical-align: middle;\n  }\n  .table tbody tr:last-child td {\n    border-bottom: none;\n  }\n  \n  .table tbody tr {\n    transition: background-color 0.2s;\n  }\n\n  /* Typography inside table */\n  .order-number {\n    font-weight: 600;\n    color: var(--foreground);\n  }\n  .order-time {\n    color: var(--muted-foreground);\n    font-size: 13px;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .table-number {\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .amount {\n    font-weight: 600;\n  }\n  \n  /* Status Badges */\n  .status-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    padding: 6px 12px;\n    border-radius: 100px;\n    font-size: 12px;\n    font-weight: 600;\n  }\n  .status-served {\n    background-color: rgba(34, 197, 94, 0.1);\n    color: var(--success);\n  }\n  .status-cancelled {\n    background-color: rgba(239, 68, 68, 0.1);\n    color: var(--destructive);\n  }\n  .status-pending {\n    background-color: rgba(245, 158, 11, 0.1);\n    color: var(--warning);\n  }\n\n  /* Pagination */\n  .pagination {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px 24px;\n    border-top: 1px solid var(--border);\n    background-color: var(--card);\n  }\n  .pagination-info {\n    font-size: 13px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n  .pagination-controls {\n    display: flex;\n    gap: 8px;\n  }\n  .page-button {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: var(--radius-sm);\n    border: 1px solid var(--border);\n    background: transparent;\n    cursor: pointer;\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--foreground);\n  }\n  .page-button.active {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-color: var(--primary);\n  }\n  .page-button.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"
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
          <h1 className="topbar-title">{"Historial del Turno"}</h1>
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
            <div className="icon-button" data-media-type="banani-button">
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
          <section className="history-summary">
            {"\n        "}
            <div className="history-summary-card">
              {"\n          "}
              <div className="history-icon sales">
                {"\n            "}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:circle-dollar-sign"
                    style={{
                      fontSize: "28px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="history-info">
                {"\n            "}
                <span className="history-label">{"Ventas Totales"}</span>
                {"\n            "}
                <span className="history-value">{"$845.50"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="history-summary-card">
              {"\n          "}
              <div className="history-icon orders">
                {"\n            "}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:check-square"
                    style={{
                      fontSize: "28px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="history-info">
                {"\n            "}
                <span className="history-label">{"Pedidos Completados"}</span>
                {"\n            "}
                <span className="history-value">{"24"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="history-summary-card">
              {"\n          "}
              <div className="history-icon cancelled">
                {"\n            "}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:x-octagon"
                    style={{
                      fontSize: "28px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="history-info">
                {"\n            "}
                <span className="history-label">{"Pedidos Cancelados"}</span>
                {"\n            "}
                <span className="history-value">{"1"}</span>
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
            <div className="section-header">
              {"\n          "}
              <h2 className="section-title">{"Registro de Pedidos"}</h2>
              {"\n          \n          "}
              <div className="filter-group">
                {"\n            "}
                <div className="search-bar">
                  {"\n              "}
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:search"
                      style={{
                        fontSize: "18px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar por mesa o nÃºmero de pedido..."
                  />
                  {"\n            "}
                </div>
                {"\n            \n            "}
                <button
                  className="action-button outline"
                  data-media-type="banani-button"
                  style={{
                    height: "40px",
                  }}
                >
                  {"\n              "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:filter"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Filtros\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="history-table-container">
              {"\n          "}
              <table className="table">
                {"\n            "}
                <thead>
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <th>{"Hora"}</th>
                    {"\n                "}
                    <th>{"ID Pedido"}</th>
                    {"\n                "}
                    <th>{"UbicaciÃ³n"}</th>
                    {"\n                "}
                    <th>{"Estado"}</th>
                    {"\n                "}
                    <th>{"Total"}</th>
                    {"\n                "}
                    <th
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"AcciÃ³n"}
                    </th>
                    {"\n              "}
                  </tr>
                  {"\n            "}
                </thead>
                {"\n            "}
                <tbody>
                  {"\n              "}
                  {}
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-time">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:clock"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    14:30\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-number">{"#ORD-8891"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="table-number">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:layout-grid"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Mesa 04\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <div className="status-badge status-served">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:check-circle-2"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Servido\n                  "}
                      </div>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="amount">{"$45.00"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"\n                  "}
                      <button
                        className="action-button outline"
                        style={{
                          display: "inline-flex",
                          marginLeft: "auto",
                        }}
                        data-media-type="banani-button"
                      >
                        {
                          "\n                    Ver Detalles\n                  "
                        }
                      </button>
                      {"\n                "}
                    </td>
                    {"\n              "}
                  </tr>
                  {"\n              \n              "}
                  {}
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-time">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:clock"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    14:15\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-number">{"#ORD-8890"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="table-number">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:layout-grid"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Mesa 12\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <div className="status-badge status-served">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:check-circle-2"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Servido\n                  "}
                      </div>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="amount">{"$120.50"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"\n                  "}
                      <button
                        className="action-button outline"
                        style={{
                          display: "inline-flex",
                          marginLeft: "auto",
                        }}
                        data-media-type="banani-button"
                      >
                        {
                          "\n                    Ver Detalles\n                  "
                        }
                      </button>
                      {"\n                "}
                    </td>
                    {"\n              "}
                  </tr>
                  {"\n\n              "}
                  {}
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-time">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:clock"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    13:45\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-number">{"#ORD-8889"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="table-number">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:layout-grid"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Mesa 02\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <div className="status-badge status-cancelled">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:x-octagon"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Cancelado\n                  "}
                      </div>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span
                        className="amount"
                        style={{
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {"$0.00"}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"\n                  "}
                      <button
                        className="action-button outline"
                        style={{
                          display: "inline-flex",
                          marginLeft: "auto",
                        }}
                        data-media-type="banani-button"
                      >
                        {
                          "\n                    Ver Detalles\n                  "
                        }
                      </button>
                      {"\n                "}
                    </td>
                    {"\n              "}
                  </tr>
                  {"\n\n              "}
                  {}
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-time">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:clock"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    13:10\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-number">{"#ORD-8888"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="table-number">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:layout-grid"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Mesa 08\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <div className="status-badge status-served">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:check-circle-2"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Servido\n                  "}
                      </div>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="amount">{"$85.00"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"\n                  "}
                      <button
                        className="action-button outline"
                        style={{
                          display: "inline-flex",
                          marginLeft: "auto",
                        }}
                        data-media-type="banani-button"
                      >
                        {
                          "\n                    Ver Detalles\n                  "
                        }
                      </button>
                      {"\n                "}
                    </td>
                    {"\n              "}
                  </tr>
                  {"\n              \n              "}
                  {}
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-time">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:clock"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    12:45\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-number">{"#ORD-8887"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="table-number">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:layout-grid"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Mesa 01\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <div className="status-badge status-served">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:check-circle-2"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Servido\n                  "}
                      </div>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="amount">{"$32.50"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"\n                  "}
                      <button
                        className="action-button outline"
                        style={{
                          display: "inline-flex",
                          marginLeft: "auto",
                        }}
                        data-media-type="banani-button"
                      >
                        {
                          "\n                    Ver Detalles\n                  "
                        }
                      </button>
                      {"\n                "}
                    </td>
                    {"\n              "}
                  </tr>
                  {"\n              \n              "}
                  {}
                  {"\n              "}
                  <tr>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-time">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:clock"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    12:15\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="order-number">{"#ORD-8886"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="table-number">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:layout-grid"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Barra\n                  "}
                      </span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <div className="status-badge status-served">
                        {"\n                    "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {"\n                      "}
                          <iconify-icon
                            icon="lucide:check-circle-2"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                    Servido\n                  "}
                      </div>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td>
                      {"\n                  "}
                      <span className="amount">{"$18.00"}</span>
                      {"\n                "}
                    </td>
                    {"\n                "}
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {"\n                  "}
                      <button
                        className="action-button outline"
                        style={{
                          display: "inline-flex",
                          marginLeft: "auto",
                        }}
                        data-media-type="banani-button"
                      >
                        {
                          "\n                    Ver Detalles\n                  "
                        }
                      </button>
                      {"\n                "}
                    </td>
                    {"\n              "}
                  </tr>
                  {"\n\n            "}
                </tbody>
                {"\n          "}
              </table>
              {"\n          \n          "}
              {}
              {"\n          "}
              <div className="pagination">
                {"\n            "}
                <div className="pagination-info">
                  {
                    "\n              Mostrando 1 a 6 de 25 pedidos\n            "
                  }
                </div>
                {"\n            "}
                <div className="pagination-controls">
                  {"\n              "}
                  <button className="page-button disabled">
                    {"\n                "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:chevron-left"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </button>
                  {"\n              "}
                  <button className="page-button active">{"1"}</button>
                  {"\n              "}
                  <button className="page-button">{"2"}</button>
                  {"\n              "}
                  <button className="page-button">{"3"}</button>
                  {"\n              "}
                  <button className="page-button">
                    {"\n                "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:chevron-right"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </button>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          \n        "}
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
