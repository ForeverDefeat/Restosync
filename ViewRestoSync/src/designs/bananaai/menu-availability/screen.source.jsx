export const displayName = "Menu Availability";
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
    <title>{"MenÃº y Disponibilidad - Panel de Mesero"}</title>
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
    <style id="menu-styles">
      {
        "\n  .dashboard-scroll-area {\n    flex: 1;\n    overflow-y: auto;\n    padding: 32px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n  }\n\n  /* Header Controls */\n  .menu-controls {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  \n  .controls-top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .search-bar {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    padding: 8px 16px;\n    width: 400px;\n    height: 40px;\n  }\n  \n  .search-input {\n    border: none;\n    outline: none;\n    font-family: inherit;\n    font-size: 14px;\n    width: 100%;\n    background: transparent;\n    color: var(--foreground);\n  }\n  \n  .search-input::placeholder {\n    color: var(--muted-foreground);\n  }\n\n  .legend {\n    display: flex;\n    gap: 20px;\n  }\n  \n  .legend-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--muted-foreground);\n  }\n\n  .category-tabs {\n    display: flex;\n    gap: 8px;\n    overflow-x: auto;\n    padding-bottom: 4px;\n  }\n  \n  .tab-button {\n    padding: 8px 16px;\n    border-radius: var(--radius-xl);\n    font-size: 14px;\n    font-weight: 600;\n    border: 1px solid var(--border);\n    background-color: var(--card);\n    color: var(--muted-foreground);\n    cursor: pointer;\n    white-space: nowrap;\n    transition: all 0.2s;\n  }\n  \n  .tab-button.active {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-color: var(--primary);\n  }\n\n  /* Menu Grid */\n  .menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: 24px;\n  }\n  \n  .dish-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 4px 12px -4px rgba(0,0,0,0.05);\n    cursor: pointer;\n  }\n  \n  .dish-card.out-of-stock {\n    opacity: 0.6;\n  }\n  \n  .dish-card.out-of-stock .dish-image {\n    filter: grayscale(100%);\n  }\n  \n  .dish-image-wrapper {\n    position: relative;\n    aspect-ratio: 16/9;\n    background-color: var(--secondary);\n    border-bottom: 1px solid var(--border);\n  }\n  \n  .dish-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .stock-badge {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    padding: 6px 10px;\n    border-radius: var(--radius-xl);\n    font-size: 12px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n  }\n  \n  .stock-available {\n    background-color: var(--success);\n    color: var(--success-foreground);\n  }\n  \n  .stock-low {\n    background-color: var(--warning);\n    color: var(--warning-foreground);\n  }\n  \n  .stock-out {\n    background-color: var(--destructive);\n    color: var(--destructive-foreground);\n  }\n  \n  .dish-info {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  }\n  \n  .dish-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 8px;\n    gap: 12px;\n  }\n  \n  .dish-name {\n    font-size: 16px;\n    font-weight: 600;\n    color: var(--foreground);\n    line-height: 1.3;\n  }\n  \n  .dish-price {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--primary);\n  }\n  \n  .dish-desc {\n    font-size: 13px;\n    color: var(--muted-foreground);\n    line-height: 1.5;\n    margin-bottom: 16px;\n    flex: 1;\n  }\n  \n  .dish-footer {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-top: auto;\n    flex-wrap: wrap;\n  }\n  \n  .tag {\n    font-size: 11px;\n    font-weight: 600;\n    padding: 4px 8px;\n    border-radius: var(--radius-sm);\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    white-space: nowrap;\n  }\n"
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
          <h1 className="topbar-title">{"MenÃº y Disponibilidad"}</h1>
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
          <div className="menu-controls">
            {"\n        "}
            <div className="controls-top">
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
                  placeholder="Buscar plato, bebida, ingrediente..."
                />
                {"\n          "}
              </div>
              {"\n          \n          "}
              <div className="legend">
                {"\n            "}
                <div className="legend-item">
                  {"\n              "}
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "var(--success)",
                    }}
                  />
                  {" Disponible\n            "}
                </div>
                {"\n            "}
                <div className="legend-item">
                  {"\n              "}
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "var(--warning)",
                    }}
                  />
                  {" Pocas Unidades\n            "}
                </div>
                {"\n            "}
                <div className="legend-item">
                  {"\n              "}
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "var(--destructive)",
                    }}
                  />
                  {" Agotado\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="category-tabs">
              {"\n          "}
              <button
                className="tab-button active"
                data-media-type="banani-button"
              >
                {"Todos los Platos"}
              </button>
              {"\n          "}
              <button className="tab-button" data-media-type="banani-button">
                {"Entrantes"}
              </button>
              {"\n          "}
              <button className="tab-button" data-media-type="banani-button">
                {"Platos Principales"}
              </button>
              {"\n          "}
              <button className="tab-button" data-media-type="banani-button">
                {"Bebidas"}
              </button>
              {"\n          "}
              <button className="tab-button" data-media-type="banani-button">
                {"Postres"}
              </button>
              {"\n          "}
              <button className="tab-button" data-media-type="banani-button">
                {"Especiales del Chef"}
              </button>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div className="menu-grid">
            {"\n        \n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="gourmet ribeye steak appetizing dark background restaurant style"
                  alt="Ribeye AÃ±ejo"
                />
                {"\n            "}
                <div className="stock-badge stock-available">
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
                      icon="lucide:check-circle-2"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Disponible\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Ribeye AÃ±ejo 400g"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$45.00"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Corte premium a la parrilla, acompaÃ±ado de papas rÃºsticas y vegetales asados."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">
                    {"\n                "}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:flame"
                        style={{
                          fontSize: "12px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Parrilla\n              "}
                  </span>
                  {"\n              "}
                  <span className="tag">{"Sin Gluten"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="fresh caesar salad with grilled chicken breast and parmesan"
                  alt="Ensalada CÃ©sar"
                />
                {"\n            "}
                <div className="stock-badge stock-available">
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
                      icon="lucide:check-circle-2"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Disponible\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Ensalada CÃ©sar con Pollo"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$14.50"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Lechuga romana fresca, crutones, queso parmesano y aderezo de la casa."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">{"Entrante"}</span>
                  {"\n              "}
                  <span className="tag">{"Ligero"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="grilled salmon fillet with quinoa and asparagus"
                  alt="SalmÃ³n a la Parrilla"
                />
                {"\n            "}
                <div className="stock-badge stock-low">
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
                      icon="lucide:alert-circle"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Quedan 3\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"SalmÃ³n a la Parrilla"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$28.00"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Filete de salmÃ³n fresco con salsa de eneldo, quinoa y espÃ¡rragos salteados."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">
                    {"\n                "}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:fish"
                        style={{
                          fontSize: "12px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Pescado\n              "}
                  </span>
                  {"\n              "}
                  <span className="tag">{"Saludable"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div
              className="dish-card out-of-stock"
              data-media-type="banani-button"
            >
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="mushroom truffle risotto fine dining"
                  alt="Risotto de Setas"
                />
                {"\n            "}
                <div className="stock-badge stock-out">
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
                      icon="lucide:x-octagon"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Agotado\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Risotto de Setas Trufado"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$22.00"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Arroz arborio cremoso con mix de setas silvestres y aceite de trufa blanca."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">
                    {"\n                "}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:leaf"
                        style={{
                          fontSize: "12px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Vegetariano\n              "}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="basque burnt cheesecake slice dessert"
                  alt="Tarta de Queso"
                />
                {"\n            "}
                <div className="stock-badge stock-available">
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
                      icon="lucide:check-circle-2"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Disponible\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Tarta de Queso Vasca"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$9.50"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Tarta de queso horneada, cremosa por dentro y ligeramente tostada por fuera."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">{"Postre"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="classic margarita cocktail drink with salt rim"
                  alt="Margarita ClÃ¡sica"
                />
                {"\n            "}
                <div className="stock-badge stock-available">
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
                      icon="lucide:check-circle-2"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Disponible\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Margarita ClÃ¡sica"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$12.00"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Tequila reposado, triple sec, jugo de limÃ³n fresco y borde escarchado con sal."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">
                    {"\n                "}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:martini"
                        style={{
                          fontSize: "12px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Bebida AlcohÃ³lica\n              "}
                  </span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="lomo saltado peruvian beef stir fry dish"
                  alt="Lomo Saltado"
                />
                {"\n            "}
                <div className="stock-badge stock-low">
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
                      icon="lucide:alert-circle"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Quedan 2\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Lomo Saltado"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$24.00"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Trozos de lomo de res salteados con cebolla, tomate, ajÃ­ amarillo y salsa de soya."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">{"Plato Principal"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="dish-card" data-media-type="banani-button">
              {"\n          "}
              <div className="dish-image-wrapper">
                {"\n            "}
                <img
                  className="dish-image"
                  data-aspect-ratio="16:9"
                  data-query="french onion soup with melted gruyere cheese"
                  alt="Sopa de Cebolla"
                />
                {"\n            "}
                <div className="stock-badge stock-available">
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
                      icon="lucide:check-circle-2"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Disponible\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="dish-info">
                {"\n            "}
                <div className="dish-header">
                  {"\n              "}
                  <h3 className="dish-name">{"Sopa de Cebolla Francesa"}</h3>
                  {"\n              "}
                  <span className="dish-price">{"$11.00"}</span>
                  {"\n            "}
                </div>
                {"\n            "}
                <p className="dish-desc">
                  {
                    "Caldo de res con cebolla caramelizada, crutones y queso gruyÃ¨re gratinado."
                  }
                </p>
                {"\n            "}
                <div className="dish-footer">
                  {"\n              "}
                  <span className="tag">{"Entrante"}</span>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n  "}
      </main>
      {"\n"}
    </div>
  </>
);
