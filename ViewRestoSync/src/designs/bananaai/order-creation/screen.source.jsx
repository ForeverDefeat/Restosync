export const displayName = "Order Creation";
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
    <title>{"Nuevo Pedido - Panel de Mesero"}</title>
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
    <style id="order-creation-styles">
      {
        "\n  .order-creation-container {\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n  }\n  \n  /* Menu Section */\n  .menu-section {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: var(--background);\n  }\n  \n  .menu-header {\n    padding: 24px 32px 0;\n    flex-shrink: 0;\n  }\n  \n  .menu-search-bar {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-lg);\n    padding: 12px 16px;\n    margin-bottom: 20px;\n  }\n  \n  .menu-search-bar input {\n    border: none;\n    outline: none;\n    background: transparent;\n    font-size: 15px;\n    width: 100%;\n    color: var(--foreground);\n  }\n  \n  .menu-search-bar input::placeholder {\n    color: var(--muted-foreground);\n  }\n  \n  .category-tabs {\n    display: flex;\n    gap: 12px;\n    overflow-x: auto;\n    padding-bottom: 16px;\n    border-bottom: 1px solid var(--border);\n    scrollbar-width: none; /* Firefox */\n  }\n  .category-tabs::-webkit-scrollbar {\n    display: none; /* Chrome/Safari */\n  }\n  \n  .category-tab {\n    padding: 8px 16px;\n    border-radius: var(--radius-xl);\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--muted-foreground);\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    cursor: pointer;\n    white-space: nowrap;\n    transition: all 0.2s;\n  }\n  \n  .category-tab.active {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-color: var(--primary);\n  }\n  \n  .menu-grid-container {\n    flex: 1;\n    overflow-y: auto;\n    padding: 24px 32px;\n  }\n  \n  .menu-category-title {\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 16px;\n    color: var(--foreground);\n  }\n  \n  .menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n    gap: 20px;\n    margin-bottom: 32px;\n  }\n  \n  .menu-item-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-lg);\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n  }\n  \n  .menu-item-card:hover {\n    box-shadow: 0 4px 12px rgba(0,0,0,0.05);\n    border-color: var(--primary);\n  }\n  \n  .menu-item-image {\n    width: 100%;\n    height: 140px;\n    border-radius: var(--radius-md);\n    object-fit: cover;\n    background-color: var(--secondary);\n  }\n  \n  .menu-item-info {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  \n  .menu-item-name {\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--card-foreground);\n    line-height: 1.3;\n  }\n  \n  .menu-item-desc {\n    font-size: 12px;\n    color: var(--muted-foreground);\n    line-height: 1.4;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  \n  .menu-item-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: auto;\n    padding-top: 8px;\n  }\n  \n  .menu-item-price {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--foreground);\n  }\n  \n  .add-item-btn {\n    width: 32px;\n    height: 32px;\n    border-radius: var(--radius-md);\n    background-color: var(--secondary);\n    color: var(--primary);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n  \n  .menu-item-card:hover .add-item-btn {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n  }\n  \n  /* Cart Section */\n  .cart-section {\n    width: 380px;\n    background-color: var(--card);\n    border-left: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    box-shadow: -4px 0 16px rgba(0,0,0,0.02);\n    z-index: 5;\n  }\n  \n  .cart-header {\n    padding: 24px;\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  \n  .cart-title {\n    font-size: 20px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .clear-cart {\n    font-size: 13px;\n    color: var(--destructive);\n    font-weight: 500;\n    cursor: pointer;\n    background: none;\n    border: none;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  \n  .table-selector {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background-color: var(--secondary);\n    padding: 14px 16px;\n    border-radius: var(--radius-md);\n    border: 1px solid var(--border);\n    cursor: pointer;\n  }\n  \n  .table-selector-label {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--secondary-foreground);\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  \n  .table-selector-value {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--primary);\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  \n  .cart-items-container {\n    flex: 1;\n    overflow-y: auto;\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  \n  .cart-item {\n    display: flex;\n    gap: 12px;\n    padding-bottom: 20px;\n    border-bottom: 1px dashed var(--border);\n  }\n  \n  .cart-item-info {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  \n  .cart-item-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  \n  .cart-item-name {\n    font-size: 15px;\n    font-weight: 600;\n    color: var(--foreground);\n    line-height: 1.3;\n  }\n  \n  .cart-item-price {\n    font-size: 15px;\n    font-weight: 700;\n    color: var(--foreground);\n  }\n  \n  .cart-item-note-btn {\n    font-size: 12px;\n    color: var(--accent);\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    cursor: pointer;\n    font-weight: 500;\n    background: none;\n    border: none;\n    padding: 0;\n  }\n  \n  .cart-item-note-text {\n    font-size: 12px;\n    color: var(--warning);\n    background-color: rgba(245, 158, 11, 0.1);\n    padding: 4px 8px;\n    border-radius: var(--radius-sm);\n    font-weight: 500;\n    display: inline-block;\n    margin-top: 2px;\n  }\n  \n  .cart-item-controls {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 4px;\n  }\n  \n  .qty-control {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background-color: var(--secondary);\n    border-radius: var(--radius-md);\n    padding: 4px;\n  }\n  \n  .qty-btn {\n    width: 28px;\n    height: 28px;\n    border-radius: var(--radius-sm);\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    color: var(--foreground);\n  }\n  \n  .qty-value {\n    font-size: 14px;\n    font-weight: 700;\n    min-width: 16px;\n    text-align: center;\n  }\n  \n  .cart-footer {\n    padding: 24px;\n    background-color: var(--card);\n    border-top: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n  \n  .cart-summary-row {\n    display: flex;\n    justify-content: space-between;\n    font-size: 14px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n  \n  .cart-summary-total {\n    display: flex;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--foreground);\n    padding-top: 16px;\n    border-top: 1px dashed var(--border);\n  }\n  \n  .checkout-btn {\n    width: 100%;\n    padding: 16px;\n    border-radius: var(--radius-lg);\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    font-size: 16px;\n    font-weight: 700;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 8px;\n    box-shadow: 0 4px 12px rgba(234, 88, 12, 0.2);\n  }\n"
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
          <h1 className="topbar-title">{"Crear Nuevo Pedido"}</h1>
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
        <div className="order-creation-container">
          {"\n      \n      "}
          {}
          {"\n      "}
          <section className="menu-section">
            {"\n        "}
            <div className="menu-header">
              {"\n          "}
              <div className="menu-search-bar">
                {"\n            "}
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:search"
                    style={{
                      fontSize: "20px",
                      color: "var(--muted-foreground)",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            "}
                <input
                  type="text"
                  placeholder="Buscar platillos o bebidas..."
                />
                {"\n          "}
              </div>
              {"\n          \n          "}
              <div className="category-tabs">
                {"\n            "}
                <button
                  className="category-tab active"
                  data-media-type="banani-button"
                >
                  {"MÃ¡s Populares"}
                </button>
                {"\n            "}
                <button
                  className="category-tab"
                  data-media-type="banani-button"
                >
                  {"Entradas"}
                </button>
                {"\n            "}
                <button
                  className="category-tab"
                  data-media-type="banani-button"
                >
                  {"Platos Principales"}
                </button>
                {"\n            "}
                <button
                  className="category-tab"
                  data-media-type="banani-button"
                >
                  {"Hamburguesas"}
                </button>
                {"\n            "}
                <button
                  className="category-tab"
                  data-media-type="banani-button"
                >
                  {"Bebidas"}
                </button>
                {"\n            "}
                <button
                  className="category-tab"
                  data-media-type="banani-button"
                >
                  {"Postres"}
                </button>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="menu-grid-container">
              {"\n          "}
              <h3 className="menu-category-title">{"MÃ¡s Populares"}</h3>
              {"\n          \n          "}
              <div className="menu-grid">
                {"\n            "}
                {}
                {"\n            "}
                <div className="menu-item-card" data-media-type="banani-button">
                  {"\n              "}
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=450"
                    className="menu-item-image"
                    alt="Smash Burger Especial"
                  />
                  {"\n              "}
                  <div className="menu-item-info">
                    {"\n                "}
                    <span className="menu-item-name">
                      {"Smash Burger Especial"}
                    </span>
                    {"\n                "}
                    <span className="menu-item-desc">
                      {
                        "Doble carne, queso cheddar, cebolla caramelizada y salsa secreta."
                      }
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="menu-item-footer">
                    {"\n                "}
                    <span className="menu-item-price">{"$14.50"}</span>
                    {"\n                "}
                    <button
                      className="add-item-btn"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "18px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div className="menu-item-card" data-media-type="banani-button">
                  {"\n              "}
                  <img
                    src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=450"
                    className="menu-item-image"
                    alt="Papas Trufadas"
                  />
                  {"\n              "}
                  <div className="menu-item-info">
                    {"\n                "}
                    <span className="menu-item-name">
                      {"Papas Trufadas (Grandes)"}
                    </span>
                    {"\n                "}
                    <span className="menu-item-desc">
                      {
                        "Papas fritas con aceite de trufa blanca, parmesano y perejil."
                      }
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="menu-item-footer">
                    {"\n                "}
                    <span className="menu-item-price">{"$8.00"}</span>
                    {"\n                "}
                    <button
                      className="add-item-btn"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "18px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div className="menu-item-card" data-media-type="banani-button">
                  {"\n              "}
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=450"
                    className="menu-item-image"
                    alt="Bowl Vegano"
                  />
                  {"\n              "}
                  <div className="menu-item-info">
                    {"\n                "}
                    <span className="menu-item-name">{"Bowl Vegano"}</span>
                    {"\n                "}
                    <span className="menu-item-desc">
                      {
                        "Quinoa, aguacate, garbanzos tostados y aderezo de tahini."
                      }
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="menu-item-footer">
                    {"\n                "}
                    <span className="menu-item-price">{"$12.00"}</span>
                    {"\n                "}
                    <button
                      className="add-item-btn"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "18px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div className="menu-item-card" data-media-type="banani-button">
                  {"\n              "}
                  <img
                    src="https://images.unsplash.com/photo-1544025162-811114215b0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=450"
                    className="menu-item-image"
                    alt="Ribeye 12oz"
                  />
                  {"\n              "}
                  <div className="menu-item-info">
                    {"\n                "}
                    <span className="menu-item-name">{"Ribeye 12oz"}</span>
                    {"\n                "}
                    <span className="menu-item-desc">
                      {
                        "Corte premium asado a la parrilla, con guarniciÃ³n a elegir."
                      }
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="menu-item-footer">
                    {"\n                "}
                    <span className="menu-item-price">{"$28.00"}</span>
                    {"\n                "}
                    <button
                      className="add-item-btn"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "18px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div className="menu-item-card" data-media-type="banani-button">
                  {"\n              "}
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=450"
                    className="menu-item-image"
                    alt="Pizza Margarita"
                  />
                  {"\n              "}
                  <div className="menu-item-info">
                    {"\n                "}
                    <span className="menu-item-name">{"Pizza Margarita"}</span>
                    {"\n                "}
                    <span className="menu-item-desc">
                      {
                        "Masa madre, salsa pomodoro, mozzarella fresca y albahaca."
                      }
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="menu-item-footer">
                    {"\n                "}
                    <span className="menu-item-price">{"$16.00"}</span>
                    {"\n                "}
                    <button
                      className="add-item-btn"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "18px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div className="menu-item-card" data-media-type="banani-button">
                  {"\n              "}
                  <img
                    src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=450"
                    className="menu-item-image"
                    alt="Cola Artesanal"
                  />
                  {"\n              "}
                  <div className="menu-item-info">
                    {"\n                "}
                    <span className="menu-item-name">{"Cola Artesanal"}</span>
                    {"\n                "}
                    <span className="menu-item-desc">
                      {
                        "Refresco de cola elaborado en casa con especias naturales."
                      }
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="menu-item-footer">
                    {"\n                "}
                    <span className="menu-item-price">{"$3.50"}</span>
                    {"\n                "}
                    <button
                      className="add-item-btn"
                      data-media-type="banani-button"
                    >
                      {"\n                  "}
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {"\n                    "}
                        <iconify-icon
                          icon="lucide:plus"
                          style={{
                            fontSize: "18px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </section>
          {"\n\n      "}
          {}
          {"\n      "}
          <aside className="cart-section">
            {"\n        "}
            <div className="cart-header">
              {"\n          "}
              <div className="cart-title">
                {"\n            Resumen de Pedido\n            "}
                <button className="clear-cart" data-media-type="banani-button">
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
                      icon="lucide:trash-2"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Vaciar\n            "}
                </button>
                {"\n          "}
              </div>
              {"\n          \n          "}
              <div className="table-selector" data-media-type="banani-button">
                {"\n            "}
                <div className="table-selector-label">
                  {"\n              "}
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:users"
                      style={{
                        fontSize: "18px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              Seleccionar Mesa\n            "}
                </div>
                {"\n            "}
                <div className="table-selector-value">
                  {"\n              Mesa 12\n              "}
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
                      icon="lucide:chevron-down"
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="cart-items-container">
              {"\n          \n          "}
              {}
              {"\n          "}
              <div className="cart-item">
                {"\n            "}
                <div className="cart-item-info">
                  {"\n              "}
                  <div className="cart-item-header">
                    {"\n                "}
                    <span className="cart-item-name">
                      {"Smash Burger Especial"}
                    </span>
                    {"\n                "}
                    <span className="cart-item-price">{"$29.00"}</span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div>
                    {"\n                "}
                    <span className="cart-item-note-text">
                      {"Sin cebolla, extra queso"}
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <button
                    className="cart-item-note-btn"
                    data-media-type="banani-button"
                  >
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
                        icon="lucide:pencil"
                        style={{
                          fontSize: "12px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Editar notas\n              "}
                  </button>
                  {"\n              \n              "}
                  <div className="cart-item-controls">
                    {"\n                "}
                    <div className="qty-control">
                      {"\n                  "}
                      <button
                        className="qty-btn"
                        data-media-type="banani-button"
                      >
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
                            icon="lucide:minus"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                  "}
                      </button>
                      {"\n                  "}
                      <span className="qty-value">{"2"}</span>
                      {"\n                  "}
                      <button
                        className="qty-btn"
                        data-media-type="banani-button"
                      >
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
                            icon="lucide:plus"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                  "}
                      </button>
                      {"\n                "}
                    </div>
                    {"\n                \n                "}
                    <button
                      className="clear-cart"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                      data-media-type="banani-button"
                    >
                      {"\n                   "}
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
                          icon="lucide:x"
                          style={{
                            fontSize: "16px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
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
              <div className="cart-item">
                {"\n            "}
                <div className="cart-item-info">
                  {"\n              "}
                  <div className="cart-item-header">
                    {"\n                "}
                    <span className="cart-item-name">
                      {"Papas Trufadas (Grandes)"}
                    </span>
                    {"\n                "}
                    <span className="cart-item-price">{"$8.00"}</span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <button
                    className="cart-item-note-btn"
                    data-media-type="banani-button"
                  >
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
                        icon="lucide:plus"
                        style={{
                          fontSize: "12px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                AÃ±adir nota\n              "}
                  </button>
                  {"\n              \n              "}
                  <div className="cart-item-controls">
                    {"\n                "}
                    <div className="qty-control">
                      {"\n                  "}
                      <button
                        className="qty-btn"
                        data-media-type="banani-button"
                      >
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
                            icon="lucide:minus"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                  "}
                      </button>
                      {"\n                  "}
                      <span className="qty-value">{"1"}</span>
                      {"\n                  "}
                      <button
                        className="qty-btn"
                        data-media-type="banani-button"
                      >
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
                            icon="lucide:plus"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                          {"\n                    "}
                        </div>
                        {"\n                  "}
                      </button>
                      {"\n                "}
                    </div>
                    {"\n                \n                "}
                    <button
                      className="clear-cart"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                      data-media-type="banani-button"
                    >
                      {"\n                   "}
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
                          icon="lucide:x"
                          style={{
                            fontSize: "16px",
                            color: "inherit",
                          }}
                        />
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n        "}
            </div>
            {"\n        \n        "}
            <div className="cart-footer">
              {"\n          "}
              <div className="cart-summary-row">
                {"\n            "}
                <span>{"Subtotal"}</span>
                {"\n            "}
                <span>{"$37.00"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="cart-summary-row">
                {"\n            "}
                <span>{"Impuestos (10%)"}</span>
                {"\n            "}
                <span>{"$3.70"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="cart-summary-total">
                {"\n            "}
                <span>{"Total"}</span>
                {"\n            "}
                <span>{"$40.70"}</span>
                {"\n          "}
              </div>
              {"\n          \n          "}
              <button className="checkout-btn" data-media-type="banani-button">
                {"\n            "}
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:send"
                    style={{
                      fontSize: "20px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            Enviar a Cocina\n          "}
              </button>
              {"\n        "}
            </div>
            {"\n      "}
          </aside>
          {"\n      \n    "}
        </div>
        {"\n  "}
      </main>
      {"\n"}
    </div>
  </>
);
