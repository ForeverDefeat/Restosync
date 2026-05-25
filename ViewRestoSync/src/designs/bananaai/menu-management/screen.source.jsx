export const displayName = "Menu Management";
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
    <title>{"GestiÃ³n de MenÃº y CatÃ¡logo"}</title>
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
    <style id="menu-management-styles">
      {
        "\n  .menu-header-actions {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .search-filter-group {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n  }\n  .search-bar {\n    display: flex;\n    align-items: center;\n    background: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    padding: 0 12px;\n    height: 40px;\n    min-width: 300px;\n  }\n  .search-input {\n    border: none;\n    outline: none;\n    background: transparent;\n    padding-left: 8px;\n    font-size: 14px;\n    color: var(--foreground);\n    width: 100%;\n  }\n  .category-filters {\n    display: flex;\n    gap: 8px;\n  }\n  .filter-pill {\n    padding: 8px 16px;\n    background: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--secondary-foreground);\n    cursor: pointer;\n    transition: all 0.2s;\n    white-space: nowrap;\n  }\n  .filter-pill.active {\n    background: var(--primary);\n    color: var(--primary-foreground);\n    border-color: var(--primary);\n  }\n  \n  .btn-primary {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px 20px;\n    background: var(--primary);\n    color: var(--primary-foreground);\n    border: none;\n    border-radius: var(--radius-md);\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n\n  .menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: 24px;\n  }\n  \n  .dish-card {\n    background: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.02);\n    transition: transform 0.2s, box-shadow 0.2s;\n  }\n  .dish-image-container {\n    height: 180px;\n    width: 100%;\n    position: relative;\n    background: var(--muted);\n  }\n  .dish-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .dish-status-badge {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    padding: 4px 10px;\n    border-radius: var(--radius-sm);\n    font-size: 12px;\n    font-weight: 600;\n    backdrop-filter: blur(4px);\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  }\n  .status-available {\n    background: rgba(34, 197, 94, 0.95);\n    color: white;\n  }\n  .status-unavailable {\n    background: rgba(239, 68, 68, 0.95);\n    color: white;\n  }\n  \n  .dish-content {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  }\n  .dish-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 6px;\n    gap: 12px;\n  }\n  .dish-name {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--card-foreground);\n    line-height: 1.3;\n  }\n  .dish-price {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--primary);\n  }\n  .dish-category {\n    font-size: 13px;\n    color: var(--muted-foreground);\n    margin-bottom: 20px;\n    font-weight: 500;\n  }\n  \n  .dish-stats {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background: var(--secondary);\n    padding: 10px 14px;\n    border-radius: var(--radius-md);\n    margin-top: auto;\n    margin-bottom: 20px;\n  }\n  .stat-text {\n    font-size: 13px;\n    font-weight: 600;\n    color: var(--secondary-foreground);\n  }\n  .stat-value {\n    margin-left: auto;\n    font-size: 15px;\n    font-weight: 700;\n    color: var(--foreground);\n  }\n  \n  .dish-actions {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n    border-top: 1px solid var(--secondary);\n    padding-top: 20px;\n  }\n  .btn-edit {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 8px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 600;\n    background: var(--secondary);\n    color: var(--secondary-foreground);\n    border: none;\n    cursor: pointer;\n  }\n  .btn-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 8px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 600;\n    background: transparent;\n    border: 1px solid var(--border);\n    color: var(--foreground);\n    cursor: pointer;\n  }\n  .btn-toggle.unavailable {\n    color: var(--destructive);\n    border-color: rgba(239, 68, 68, 0.3);\n    background: rgba(239, 68, 68, 0.05);\n  }\n  .btn-toggle.available {\n    color: var(--success);\n    border-color: rgba(34, 197, 94, 0.3);\n    background: rgba(34, 197, 94, 0.05);\n  }\n"
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
          <h1 className="topbar-title">{"GestiÃ³n de MenÃº y CatÃ¡logo"}</h1>
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
          <div className="menu-header-actions">
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
                  placeholder="Buscar plato o bebida..."
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
                  {"Principales"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Entradas"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Bebidas"}
                </div>
                {"\n            "}
                <div className="filter-pill" data-media-type="banani-button">
                  {"Postres"}
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
                  icon="lucide:plus"
                  style={{
                    fontSize: "18px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          AÃ±adir Plato\n        "}
            </button>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div className="menu-grid">
            {"\n        \n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="delicious gourmet smash burger with melting cheese on wooden board, food photography, warm tones restaurant lighting"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Smash Burger Especial"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$14.50"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Platos Principales"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"42"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="crispy truffle french fries topped with parmesan cheese, beautiful food presentation"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Papas Trufadas"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$8.00"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"AcompaÃ±amientos"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"35"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="grilled salmon fillet with asparagus and lemon wedges, bright high-end restaurant food photography"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"SalmÃ³n a la Parrilla"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$22.50"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Platos Principales"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"18"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="fresh classic caesar salad with croutons and parmesan, bright restaurant setting"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Ensalada CÃ©sar"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$11.00"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Entradas"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"24"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div
              className="dish-card"
              style={{
                opacity: "0.85",
              }}
            >
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="juicy thick ribeye steak cooked medium rare with peppercorn sauce, moody lighting"
                  className="dish-image"
                  style={{
                    filter: "grayscale(0.5)",
                  }}
                />
                {"\n             "}
                <div className="dish-status-badge status-unavailable">
                  {"Agotado"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Ribeye 12oz"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$35.00"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Platos Principales"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"12"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle available"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Activar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="refreshing spicy margarita cocktail with tajin rim and jalapeno slice, vibrant colors"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Margarita Picante"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$10.50"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Bebidas / Cocteles"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"56"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="fresh classic mojito with mint leaves and lime in a tall glass with ice, summer bar background"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Mojito ClÃ¡sico"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$9.50"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Bebidas / Cocteles"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"48"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card">
              {"\n           "}
              <div className="dish-image-container">
                {"\n             "}
                <img
                  data-aspect-ratio="16:9"
                  data-query="authentic neapolitan margherita pizza with fresh basil and mozzarella on wooden peel"
                  className="dish-image"
                />
                {"\n             "}
                <div className="dish-status-badge status-available">
                  {"Disponible"}
                </div>
                {"\n           "}
              </div>
              {"\n           "}
              <div className="dish-content">
                {"\n             "}
                <div className="dish-header">
                  {"\n               "}
                  <span className="dish-name">{"Pizza Margarita"}</span>
                  {"\n               "}
                  <span className="dish-price">{"$14.00"}</span>
                  {"\n             "}
                </div>
                {"\n             "}
                <div className="dish-category">{"Platos Principales"}</div>
                {"\n             \n             "}
                <div className="dish-stats">
                  {"\n                "}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    {"\n                  "}
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <span className="stat-text">{"Vendidos hoy"}</span>
                  {"\n                "}
                  <span className="stat-value">{"31"}</span>
                  {"\n             "}
                </div>
                {"\n             \n             "}
                <div className="dish-actions">
                  {"\n               "}
                  <button
                    className="btn-toggle unavailable"
                    data-media-type="banani-button"
                  >
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:eye-off"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Ocultar\n               "}
                  </button>
                  {"\n               "}
                  <button className="btn-edit" data-media-type="banani-button">
                    {"\n                 "}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                   "}
                      <iconify-icon
                        icon="lucide:pencil"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                 "}
                    </div>
                    {"\n                 Editar\n               "}
                  </button>
                  {"\n             "}
                </div>
                {"\n           "}
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
