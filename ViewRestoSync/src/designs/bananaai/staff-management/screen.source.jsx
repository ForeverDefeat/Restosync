export const displayName = "Staff Management";
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
    <title>{"GestiÃ³n de Personal y Roles"}</title>
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
        "\n  .app-container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n  }\n  \n  /* Sidebar */\n  .sidebar {\n    width: 260px;\n    background-color: var(--sidebar);\n    border-right: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .sidebar-header {\n    height: 72px;\n    padding: 0 24px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border-bottom: 1px solid var(--border);\n  }\n  .sidebar-logo-icon {\n    width: 32px;\n    height: 32px;\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .sidebar-logo-text {\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--sidebar-foreground);\n    letter-spacing: -0.5px;\n  }\n  .sidebar-nav {\n    padding: 24px 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    flex: 1;\n    overflow-y: auto;\n  }\n  .nav-item {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 16px;\n    border-radius: var(--radius-md);\n    color: var(--sidebar-foreground);\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.2s;\n  }\n  .nav-item.active {\n    background-color: var(--sidebar-primary);\n    color: var(--sidebar-primary-foreground);\n  }\n  .nav-section-title {\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 0.8px;\n    color: var(--muted-foreground);\n    margin: 16px 0 8px 16px;\n    font-weight: 700;\n  }\n  \n  /* Main Content */\n  .main-content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .topbar {\n    height: 72px;\n    background-color: var(--card);\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 32px;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .topbar-title {\n    font-size: 22px;\n    font-weight: 600;\n  }\n  .topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n  }\n  .role-badge {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    padding: 6px 14px;\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    box-shadow: 0 2px 8px rgba(234, 88, 12, 0.2);\n  }\n  .icon-button {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--muted-foreground);\n    cursor: pointer;\n    border: 1px solid var(--border);\n    background: var(--card);\n  }\n  .user-profile {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n    padding-left: 24px;\n    border-left: 1px solid var(--border);\n  }\n  .avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .user-info {\n    display: flex;\n    flex-direction: column;\n  }\n  .user-name {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--foreground);\n  }\n  .user-role {\n    font-size: 12px;\n    color: var(--muted-foreground);\n  }\n  \n  .dashboard-scroll-area {\n    flex: 1;\n    overflow-y: auto;\n    padding: 32px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="staff-management-styles">
      {
        "\n  .header-actions {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .search-filter-group {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n  }\n  .search-bar {\n    display: flex;\n    align-items: center;\n    background: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    padding: 0 12px;\n    height: 40px;\n    min-width: 300px;\n  }\n  .search-input {\n    border: none;\n    outline: none;\n    background: transparent;\n    padding-left: 8px;\n    font-size: 14px;\n    color: var(--foreground);\n    width: 100%;\n  }\n  .category-filters {\n    display: flex;\n    gap: 8px;\n  }\n  .filter-pill {\n    padding: 8px 16px;\n    background: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--secondary-foreground);\n    cursor: pointer;\n    transition: all 0.2s;\n    white-space: nowrap;\n  }\n  .filter-pill.active {\n    background: var(--primary);\n    color: var(--primary-foreground);\n    border-color: var(--primary);\n  }\n  \n  .btn-primary {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px 20px;\n    background: var(--primary);\n    color: var(--primary-foreground);\n    border: none;\n    border-radius: var(--radius-md);\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n\n  .staff-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 24px;\n  }\n  \n  .staff-card {\n    background: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.02);\n    transition: transform 0.2s, box-shadow 0.2s;\n  }\n  \n  .staff-header {\n    padding: 24px;\n    display: flex;\n    gap: 16px;\n    align-items: center;\n    border-bottom: 1px solid var(--secondary);\n  }\n  \n  .staff-avatar-container {\n    position: relative;\n  }\n  \n  .staff-avatar-img {\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    object-fit: cover;\n    border: 2px solid var(--border);\n  }\n  \n  .status-indicator {\n    position: absolute;\n    bottom: 2px;\n    right: 2px;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    border: 2px solid var(--card);\n  }\n  \n  .status-online {\n    background-color: var(--success);\n  }\n  .status-offline {\n    background-color: var(--muted-foreground);\n  }\n  .status-busy {\n    background-color: var(--warning);\n  }\n  \n  .staff-info {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  \n  .staff-name {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--card-foreground);\n  }\n  \n  .staff-role-badge {\n    display: inline-flex;\n    align-items: center;\n    padding: 2px 8px;\n    border-radius: var(--radius-sm);\n    font-size: 12px;\n    font-weight: 600;\n    background: var(--secondary);\n    color: var(--secondary-foreground);\n    width: fit-content;\n  }\n  .role-admin { background: #fff7ed; color: #ea580c; }\n  .role-kitchen { background: #eff6ff; color: #2563eb; }\n  .role-waiter { background: #f0fdf4; color: #16a34a; }\n  .role-bar { background: #fdf4ff; color: #c026d3; }\n  \n  .staff-details {\n    padding: 20px 24px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    flex: 1;\n  }\n  \n  .detail-row {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    font-size: 13px;\n    color: var(--muted-foreground);\n  }\n  \n  .detail-icon {\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--muted-foreground);\n  }\n  \n  .staff-actions {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n    padding: 16px 24px;\n    background: var(--secondary);\n    border-top: 1px solid var(--border);\n  }\n  \n  .btn-outline {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 8px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 600;\n    background: var(--card);\n    border: 1px solid var(--border);\n    color: var(--foreground);\n    cursor: pointer;\n  }\n  \n  .btn-edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 8px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 600;\n    background: transparent;\n    border: 1px solid transparent;\n    color: var(--primary);\n    cursor: pointer;\n  }\n"
      }
    </style>
    {"\n\n"}
    <style>
      {
        "\n:root {\n  --background: #FBFBFB;\n  --foreground: #0F172A;\n  --border: #00000014;\n  --input: #FFFFFF;\n  --primary: #FF6A00;\n  --primary-foreground: #FFFFFF;\n  --secondary: #F6F7F9;\n  --secondary-foreground: #374151;\n  --muted: #F3F4F6;\n  --muted-foreground: #8A8F98;\n  --success: #16A34A;\n  --success-foreground: #FFFFFF;\n  --accent: #3B82F6;\n  --accent-foreground: #FFFFFF;\n  --destructive: #DC2626;\n  --destructive-foreground: #FFFFFF;\n  --warning: #F59E0B;\n  --warning-foreground: #121419;\n  --card: #FFFFFF;\n  --card-foreground: #0F172A;\n  --sidebar: #FFFFFF;\n  --sidebar-foreground: #2B2B2B;\n  --sidebar-primary: #FFF7ED;\n  --sidebar-primary-foreground: #FF6A00;\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 12px;\n  --radius-xl: 16px;\n  --font-family-body: Inter;\n}\n"
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
          <div className="nav-section-title">{"Resumen"}</div>
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
                icon="lucide:layout-dashboard"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Panel de AdministraciÃ³n\n      "}
          </div>
          {"\n\n      "}
          <div className="nav-section-title">{"Vistas por Rol"}</div>
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
                icon="lucide:concierge-bell"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Mesero (POS)\n      "}
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
                icon="lucide:chef-hat"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Cocina (KDS)\n      "}
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
                icon="lucide:wine"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Operaciones de Bar\n      "}
          </div>
          {"\n      \n      "}
          <div className="nav-section-title">{"GestiÃ³n"}</div>
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
                icon="lucide:grid-2x2"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Mapa de Mesas\n      "}
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
                icon="lucide:book-open"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        MenÃº y CatÃ¡logo\n      "}
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
                icon="lucide:users"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Personal y Roles\n      "}
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
                icon="lucide:bar-chart-3"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Reportes y AnalÃ­ticas\n      "}
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
                icon="lucide:boxes"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Inventario\n      "}
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
                icon="lucide:settings"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        ConfiguraciÃ³n del Sistema\n      "}
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
          <h1 className="topbar-title">{"GestiÃ³n de Personal y Roles"}</h1>
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
                  icon="lucide:shield-check"
                  style={{
                    fontSize: "16px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          Admin. del Sistema\n        "}
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
                src="avatar/female/25-35/European/2"
                alt="Sarah J."
                className="avatar"
              />
              {"\n          "}
              <div className="user-info">
                {"\n            "}
                <span className="user-name">{"Sarah Jenkins"}</span>
                {"\n            "}
                <span className="user-role">{"Gerente General"}</span>
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
          <div className="header-actions">
            {"\n        "}
            <div className="search-filter-group">
              {"\n          "}
              <div className="search-bar">
                {"\n            "}
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
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:search"
                    style={{
                      fontSize: "18px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            "}
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar empleado por nombre o ID..."
                />
                {"\n          "}
              </div>
              {"\n          "}
              <div className="category-filters">
                {"\n            "}
                <div
                  className="filter-pill active"
                  data-media-type="banani-button"
                >
                  {"Todos"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Meseros"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Cocina"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Bar"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Administrativo"}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <button className="btn-primary" data-media-type="banani-button">
              {"\n          "}
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {"\n            "}
                <iconify-icon
                  icon="lucide:user-plus"
                  style={{
                    fontSize: "18px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          AÃ±adir Empleado\n        "}
            </button>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div className="staff-grid">
            {"\n        \n        "}
            {}
            {"\n        "}
            <div className="staff-card">
              {"\n          "}
              <div className="staff-header">
                {"\n            "}
                <div className="staff-avatar-container">
                  {"\n              "}
                  <img
                    src="avatar/male/25-35/Hispanic/1"
                    alt="Carlos"
                    className="staff-avatar-img"
                  />
                  {"\n              "}
                  <div className="status-indicator status-online" />
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="staff-info">
                  {"\n              "}
                  <span className="staff-name">{"Carlos Mendoza"}</span>
                  {"\n              "}
                  <span className="staff-role-badge role-waiter">
                    {"CapitÃ¡n de Meseros"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-details">
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:fingerprint"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"ID: EMP-0042"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:phone"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"+34 612 345 678"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:clock"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"Turno actual: 10:00 - 18:00"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-actions">
                {"\n            "}
                <button className="btn-outline" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:key"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Permisos\n            "}
                </button>
                {"\n            "}
                <button className="btn-edit" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:user-cog"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Editar Perfil\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="staff-card">
              {"\n          "}
              <div className="staff-header">
                {"\n            "}
                <div className="staff-avatar-container">
                  {"\n              "}
                  <img
                    src="avatar/female/35-50/European/3"
                    alt="Elena"
                    className="staff-avatar-img"
                  />
                  {"\n              "}
                  <div className="status-indicator status-online" />
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="staff-info">
                  {"\n              "}
                  <span className="staff-name">{"Elena Rossi"}</span>
                  {"\n              "}
                  <span className="staff-role-badge role-kitchen">
                    {"Chef Ejecutiva"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-details">
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:fingerprint"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"ID: EMP-0015"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:phone"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"+34 623 456 789"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:clock"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"Turno actual: 08:00 - 16:00"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-actions">
                {"\n            "}
                <button className="btn-outline" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:key"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Permisos\n            "}
                </button>
                {"\n            "}
                <button className="btn-edit" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:user-cog"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Editar Perfil\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="staff-card">
              {"\n          "}
              <div className="staff-header">
                {"\n            "}
                <div className="staff-avatar-container">
                  {"\n              "}
                  <img
                    src="avatar/male/18-25/African/2"
                    alt="David"
                    className="staff-avatar-img"
                  />
                  {"\n              "}
                  <div className="status-indicator status-offline" />
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="staff-info">
                  {"\n              "}
                  <span className="staff-name">{"David Okon"}</span>
                  {"\n              "}
                  <span className="staff-role-badge role-bar">
                    {"Bartender"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-details">
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:fingerprint"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"ID: EMP-0089"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:phone"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"+34 634 567 890"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:calendar-x"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"Fuera de turno (PrÃ³x: MaÃ±ana)"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-actions">
                {"\n            "}
                <button className="btn-outline" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:key"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Permisos\n            "}
                </button>
                {"\n            "}
                <button className="btn-edit" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:user-cog"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Editar Perfil\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="staff-card">
              {"\n          "}
              <div className="staff-header">
                {"\n            "}
                <div className="staff-avatar-container">
                  {"\n              "}
                  <img
                    src="avatar/female/18-25/East Asian/4"
                    alt="Mei"
                    className="staff-avatar-img"
                  />
                  {"\n              "}
                  <div className="status-indicator status-online" />
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="staff-info">
                  {"\n              "}
                  <span className="staff-name">{"Mei Lin"}</span>
                  {"\n              "}
                  <span className="staff-role-badge role-waiter">
                    {"Mesera"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-details">
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:fingerprint"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"ID: EMP-0102"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:phone"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"+34 645 678 901"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:clock"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"Turno actual: 12:00 - 20:00"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-actions">
                {"\n            "}
                <button className="btn-outline" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:key"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Permisos\n            "}
                </button>
                {"\n            "}
                <button className="btn-edit" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:user-cog"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Editar Perfil\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="staff-card">
              {"\n          "}
              <div className="staff-header">
                {"\n            "}
                <div className="staff-avatar-container">
                  {"\n              "}
                  <img
                    src="avatar/male/35-50/North American/1"
                    alt="Robert"
                    className="staff-avatar-img"
                  />
                  {"\n              "}
                  <div className="status-indicator status-busy" />
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="staff-info">
                  {"\n              "}
                  <span className="staff-name">{"Robert Hale"}</span>
                  {"\n              "}
                  <span className="staff-role-badge role-admin">
                    {"Contabilidad"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-details">
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:fingerprint"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"ID: EMP-0008"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:phone"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"+34 656 789 012"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:coffee"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"En pausa (Descanso)"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-actions">
                {"\n            "}
                <button className="btn-outline" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:key"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Permisos\n            "}
                </button>
                {"\n            "}
                <button className="btn-edit" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:user-cog"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Editar Perfil\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="staff-card">
              {"\n          "}
              <div className="staff-header">
                {"\n            "}
                <div className="staff-avatar-container">
                  {"\n              "}
                  <img
                    src="avatar/female/25-35/Hispanic/2"
                    alt="Sofia"
                    className="staff-avatar-img"
                    style={{
                      filter: "grayscale(1)",
                      opacity: "0.8",
                    }}
                  />
                  {"\n              "}
                  <div
                    className="status-indicator status-offline"
                    style={{
                      backgroundColor: "var(--destructive)",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="staff-info">
                  {"\n              "}
                  <span
                    className="staff-name"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {"SofÃ­a RamÃ­rez"}
                  </span>
                  {"\n              "}
                  <span
                    className="staff-role-badge role-kitchen"
                    style={{
                      opacity: "0.7",
                    }}
                  >
                    {"Cocinera de LÃ­nea"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-details">
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:fingerprint"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"ID: EMP-0115"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:phone"
                      style={{
                        fontSize: "16px",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span>{"+34 667 890 123"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="detail-row">
                  {"\n              "}
                  <div className="detail-icon">
                    <iconify-icon
                      icon="lucide:user-minus"
                      style={{
                        fontSize: "16px",
                        color: "var(--destructive)",
                      }}
                    />
                  </div>
                  {"\n              "}
                  <span
                    style={{
                      color: "var(--destructive)",
                      fontWeight: "500",
                    }}
                  >
                    {"Inactivo (De Baja)"}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="staff-actions">
                {"\n            "}
                <button className="btn-outline" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:power"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Reactivar\n            "}
                </button>
                {"\n            "}
                <button className="btn-edit" data-media-type="banani-button">
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:user-cog"
                    style={{
                      fontSize: "14px",
                    }}
                  />
                  {"\n              Ver Historial\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n      "}
          </div>
          {"\n      \n    "}
        </div>
        {"\n  "}
      </main>
      {"\n"}
    </div>
  </>
);
