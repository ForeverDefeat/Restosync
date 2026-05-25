export const displayName = "Detailed Bar Display";
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
    <title>{"Barra (BDS) - RestoSync Detallado"}</title>
    {"\n\n"}
    <style id="theme-styles">
      {
        "\n  :root, :host {\n    --background: #f8fafc;\n    --foreground: #0f172a;\n    --card: #ffffff;\n    --card-foreground: #0f172a;\n    --primary: #ea580c;\n    --primary-foreground: #ffffff;\n    --secondary: #f1f5f9;\n    --secondary-foreground: #334155;\n    --border: #e2e8f0;\n    --input: #ffffff;\n    --muted: #f1f5f9;\n    --muted-foreground: #64748b;\n    --success: #22c55e;\n    --success-foreground: #ffffff;\n    --warning: #f59e0b;\n    --warning-foreground: #ffffff;\n    --destructive: #ef4444;\n    --destructive-foreground: #ffffff;\n    --accent: #8b5cf6;\n    --accent-foreground: #ffffff;\n    --radius-sm: 4px;\n    --radius-md: 8px;\n    --radius-lg: 12px;\n    --radius-xl: 16px;\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="base-styles">
      {
        "\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: var(--font-family-body, system-ui, -apple-system, sans-serif);\n    background-color: var(--background);\n    color: var(--foreground);\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 600;\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="layout-styles">
      {
        "\n  .app-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n  }\n  \n  /* Topbar */\n  .topbar {\n    height: 72px;\n    background-color: var(--card);\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 32px;\n    flex-shrink: 0;\n    z-index: 20;\n  }\n  .topbar-left {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n  }\n  .brand {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n  .brand-icon {\n    width: 32px;\n    height: 32px;\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .brand-name {\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--foreground);\n    letter-spacing: -0.5px;\n  }\n  .topbar-divider {\n    width: 1px;\n    height: 24px;\n    background-color: var(--border);\n  }\n  .topbar-title {\n    font-size: 20px;\n    font-weight: 600;\n    color: var(--muted-foreground);\n  }\n  \n  .topbar-actions {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n  }\n  .role-badge {\n    background-color: #8b5cf6;\n    color: #ffffff;\n    padding: 6px 14px;\n    border-radius: var(--radius-xl);\n    font-size: 13px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.2);\n  }\n  .icon-button {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--radius-md);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--muted-foreground);\n    cursor: pointer;\n    border: 1px solid var(--border);\n    background: var(--card);\n  }\n  .user-profile {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n    padding-left: 24px;\n    border-left: 1px solid var(--border);\n  }\n  .avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .user-info {\n    display: flex;\n    flex-direction: column;\n  }\n  .user-name {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--foreground);\n  }\n  .user-role {\n    font-size: 12px;\n    color: var(--muted-foreground);\n  }\n\n  /* Sub-navigation (Filters) */\n  .sub-nav {\n    height: 56px;\n    background-color: var(--card);\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    align-items: center;\n    padding: 0 32px;\n    gap: 32px;\n    flex-shrink: 0;\n    z-index: 10;\n  }\n  .sub-nav-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--muted-foreground);\n    height: 100%;\n    cursor: pointer;\n    position: relative;\n  }\n  .sub-nav-item.active {\n    color: var(--primary);\n  }\n  .sub-nav-item.active::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 3px;\n    background-color: var(--primary);\n    border-radius: 3px 3px 0 0;\n  }\n  .sub-nav-count {\n    background-color: var(--secondary);\n    color: var(--secondary-foreground);\n    padding: 2px 8px;\n    border-radius: var(--radius-xl);\n    font-size: 12px;\n  }\n  .sub-nav-item.active .sub-nav-count {\n    background-color: rgba(234, 88, 12, 0.1);\n    color: var(--primary);\n  }\n"
      }
    </style>
    {"\n\n"}
    <style id="dashboard-styles">
      {
        "\n  .main-content-wrapper {\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n  }\n\n  .dashboard-scroll-area {\n    flex: 1;\n    overflow-y: auto;\n    padding: 32px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    background-color: var(--background);\n  }\n  \n  /* Stats Grid */\n  .stats-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 24px;\n  }\n  .kpi-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-xl);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 4px 12px -4px rgba(0,0,0,0.05);\n    position: relative;\n    overflow: hidden;\n  }\n  .kpi-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    margin-bottom: 16px;\n  }\n  .kpi-title {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--muted-foreground);\n    line-height: 1.3;\n    max-width: 70%;\n  }\n  .kpi-icon-wrapper {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--radius-lg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .kpi-icon-wrapper.kpi-total { background-color: rgba(234, 88, 12, 0.12); color: var(--primary); }\n  .kpi-icon-wrapper.kpi-pending { background-color: rgba(245, 158, 11, 0.12); color: var(--warning); }\n  .kpi-icon-wrapper.kpi-preparing { background-color: rgba(139, 92, 246, 0.12); color: var(--accent); }\n  .kpi-icon-wrapper.kpi-delayed { background-color: rgba(239, 68, 68, 0.12); color: var(--destructive); }\n\n  .kpi-content {\n    margin-bottom: 16px;\n  }\n  .kpi-value {\n    font-size: 36px;\n    font-weight: 700;\n    color: var(--card-foreground);\n    line-height: 1;\n    letter-spacing: -1px;\n  }\n  \n  .kpi-footer {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-top: auto;\n    padding-top: 12px;\n    border-top: 1px solid var(--secondary);\n  }\n  .kpi-trend {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    font-size: 12px;\n    font-weight: 600;\n    padding: 4px 8px;\n    border-radius: 100px;\n  }\n  .kpi-trend.trend-up { background-color: rgba(34, 197, 94, 0.12); color: var(--success); }\n  .kpi-trend.trend-down { background-color: rgba(239, 68, 68, 0.12); color: var(--destructive); }\n  .kpi-trend.trend-neutral { background-color: var(--secondary); color: var(--secondary-foreground); }\n  .kpi-context {\n    font-size: 12px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n\n  /* Progress bar in KPI */\n  .kpi-progress-bg {\n    height: 4px;\n    background-color: var(--secondary);\n    border-radius: 2px;\n    margin-top: 12px;\n    overflow: hidden;\n  }\n  .kpi-progress-fill {\n    height: 100%;\n    border-radius: 2px;\n  }\n  \n  /* Kanban Board */\n  .kanban-section-title {\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .kanban-board {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 24px;\n    flex: 1;\n    min-height: 500px;\n  }\n  .kanban-column {\n    background-color: var(--secondary);\n    border-radius: var(--radius-lg);\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    border: 1px solid var(--border);\n  }\n  .kanban-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 12px;\n    border-bottom: 2px solid var(--border);\n  }\n  .kanban-title {\n    font-size: 14px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  .kanban-count {\n    background-color: var(--card);\n    color: var(--foreground);\n    padding: 2px 10px;\n    border-radius: var(--radius-xl);\n    font-size: 12px;\n    font-weight: 700;\n    border: 1px solid var(--border);\n  }\n  \n  .kanban-column.pending .kanban-title { color: var(--warning); }\n  .kanban-column.preparing .kanban-title { color: var(--accent); }\n  .kanban-column.ready .kanban-title { color: var(--success); }\n  \n  /* Order Cards */\n  .order-card {\n    background-color: var(--card);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.02);\n    transition: all 0.2s ease;\n    position: relative;\n  }\n  .order-card.selected {\n    border: 2px solid var(--accent);\n    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);\n    transform: scale(1.02);\n  }\n  .order-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n  .table-info {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n  .table-number-row {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  .table-number {\n    font-size: 18px;\n    font-weight: 700;\n    color: var(--card-foreground);\n  }\n  .vip-tag {\n    background-color: #fce7f3;\n    color: #be185d;\n    font-size: 10px;\n    font-weight: 800;\n    padding: 2px 6px;\n    border-radius: 4px;\n    letter-spacing: 0.5px;\n  }\n  .order-id {\n    font-size: 12px;\n    color: var(--muted-foreground);\n    font-weight: 600;\n  }\n  .time-badge {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 4px 8px;\n    border-radius: var(--radius-sm);\n    font-size: 12px;\n    font-weight: 600;\n  }\n  .time-badge.urgent { background-color: rgba(239, 68, 68, 0.1); color: var(--destructive); }\n  .time-badge.normal { background-color: var(--secondary); color: var(--secondary-foreground); }\n  .time-badge.delayed { background-color: var(--destructive); color: var(--destructive-foreground); animation: pulse 2s infinite; }\n  \n  .order-items {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 12px 0;\n    border-top: 1px dashed var(--border);\n    border-bottom: 1px dashed var(--border);\n  }\n  .order-item {\n    display: flex;\n    align-items: flex-start;\n    gap: 8px;\n    font-size: 14px;\n    color: var(--card-foreground);\n  }\n  .item-qty {\n    font-weight: 800;\n    color: var(--primary);\n    min-width: 20px;\n    font-size: 15px;\n  }\n  .item-name {\n    flex: 1;\n    font-weight: 600;\n    line-height: 1.3;\n  }\n  .item-meta {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-top: 4px;\n  }\n  .item-note {\n    font-size: 12px;\n    color: var(--destructive);\n    background-color: rgba(239, 68, 68, 0.1);\n    padding: 2px 6px;\n    border-radius: var(--radius-sm);\n    display: inline-block;\n    font-weight: 600;\n  }\n  .item-type-icon {\n    color: var(--muted-foreground);\n    display: flex;\n    align-items: center;\n  }\n  \n  .order-footer {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .waiter-info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--muted-foreground);\n  }\n  .action-button {\n    padding: 10px 16px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 700;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 100%;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  .action-button.primary { background-color: var(--primary); color: var(--primary-foreground); }\n  .action-button.success { background-color: var(--success); color: var(--success-foreground); }\n  .action-button.outline { background-color: transparent; border: 1px solid var(--border); color: var(--foreground); }\n  .action-button.accent { background-color: var(--accent); color: var(--accent-foreground); }\n\n  /* Right Panel (Details/Recipes) */\n  .detail-panel {\n    width: 400px;\n    background-color: var(--card);\n    border-left: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    z-index: 5;\n    box-shadow: -4px 0 16px rgba(0,0,0,0.02);\n  }\n  .detail-header {\n    padding: 24px;\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    background-color: var(--card);\n  }\n  .detail-title-area {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .detail-subtitle {\n    font-size: 13px;\n    color: var(--muted-foreground);\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  .detail-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: var(--foreground);\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n  .detail-status-badge {\n    background-color: rgba(139, 92, 246, 0.1);\n    color: var(--accent);\n    padding: 4px 10px;\n    border-radius: var(--radius-xl);\n    font-size: 12px;\n    font-weight: 700;\n  }\n  \n  .detail-meta-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    padding: 20px 24px;\n    background-color: var(--secondary);\n    border-bottom: 1px solid var(--border);\n  }\n  .meta-item {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .meta-label {\n    font-size: 12px;\n    color: var(--muted-foreground);\n    font-weight: 500;\n  }\n  .meta-value {\n    font-size: 14px;\n    color: var(--foreground);\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  .detail-content {\n    flex: 1;\n    overflow-y: auto;\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n  }\n  \n  .recipe-block {\n    border: 1px solid var(--border);\n    border-radius: var(--radius-md);\n    overflow: hidden;\n  }\n  .recipe-header {\n    background-color: var(--background);\n    padding: 16px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--border);\n  }\n  .recipe-title {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--foreground);\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  .recipe-qty {\n    background-color: var(--primary);\n    color: var(--primary-foreground);\n    padding: 2px 8px;\n    border-radius: var(--radius-sm);\n    font-size: 13px;\n  }\n  .recipe-body {\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .recipe-specs {\n    display: flex;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  .spec-tag {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    background-color: var(--secondary);\n    padding: 6px 12px;\n    border-radius: var(--radius-md);\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--secondary-foreground);\n  }\n  \n  .ingredients-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .ingredients-title {\n    font-size: 13px;\n    font-weight: 700;\n    color: var(--muted-foreground);\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-bottom: 4px;\n  }\n  .ingredient-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-bottom: 8px;\n    border-bottom: 1px dashed var(--border);\n  }\n  .ingredient-item:last-child {\n    border-bottom: none;\n    padding-bottom: 0;\n  }\n  .ingredient-name {\n    font-weight: 500;\n    color: var(--foreground);\n  }\n  .ingredient-amount {\n    font-weight: 600;\n    color: var(--muted-foreground);\n  }\n\n  .recipe-notes {\n    background-color: rgba(245, 158, 11, 0.1);\n    border-left: 3px solid var(--warning);\n    padding: 12px;\n    border-radius: 0 var(--radius-md) var(--radius-md) 0;\n    font-size: 13px;\n    font-weight: 600;\n    color: #b45309;\n    display: flex;\n    align-items: flex-start;\n    gap: 8px;\n  }\n\n  .detail-footer {\n    padding: 24px;\n    background-color: var(--card);\n    border-top: 1px solid var(--border);\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .completion-progress {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    font-size: 13px;\n    font-weight: 600;\n    color: var(--muted-foreground);\n  }\n  .progress-bar-container {\n    flex: 1;\n    height: 6px;\n    background-color: var(--secondary);\n    border-radius: 3px;\n    overflow: hidden;\n  }\n  .progress-bar-fill {\n    height: 100%;\n    background-color: var(--accent);\n    width: 50%;\n    border-radius: 3px;\n  }\n\n  @keyframes pulse {\n    0% { opacity: 1; }\n    50% { opacity: 0.6; }\n    100% { opacity: 1; }\n  }\n"
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
      <header className="topbar" id="topbar">
        {"\n    "}
        <div className="topbar-left">
          {"\n      "}
          <div className="brand">
            {"\n        "}
            <div className="brand-icon">
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
                  icon="lucide:martini"
                  style={{
                    fontSize: "20px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <span className="brand-name">{"RestoSync"}</span>
            {"\n      "}
          </div>
          {"\n      "}
          <div className="topbar-divider" />
          {"\n      "}
          <h1 className="topbar-title">{"Bar Display System (BDS)"}</h1>
          {"\n    "}
        </div>
        {"\n    \n    "}
        <div className="topbar-actions">
          {"\n      "}
          <div className="role-badge">
            {"\n        "}
            <div
              style={{
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"\n          "}
              <iconify-icon
                icon="lucide:wine"
                style={{
                  fontSize: "16px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n        Jefe de Barra\n      "}
          </div>
          {"\n      \n      "}
          <div className="icon-button" data-media-type="banani-button">
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
                icon="lucide:bell"
                style={{
                  fontSize: "20px",
                  color: "inherit",
                }}
              />
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n      \n      "}
          <div className="user-profile" data-media-type="banani-button">
            {"\n        "}
            <img
              src="avatar/male/25-35/Hispanic/2"
              alt="Bartender Carlos"
              className="avatar"
            />
            {"\n        "}
            <div className="user-info">
              {"\n          "}
              <span className="user-name">{"Carlos V."}</span>
              {"\n          "}
              <span className="user-role">{"EstaciÃ³n: CoctelerÃ­a"}</span>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n  "}
      </header>
      {"\n\n  "}
      {}
      {"\n  "}
      <div className="sub-nav">
        {"\n    "}
        <div className="sub-nav-item active" data-media-type="banani-button">
          {"\n      Todas las Ãrdenes\n      "}
          <span className="sub-nav-count">{"27"}</span>
          {"\n    "}
        </div>
        {"\n    "}
        <div className="sub-nav-item" data-media-type="banani-button">
          {"\n      CoctelerÃ­a\n      "}
          <span className="sub-nav-count">{"12"}</span>
          {"\n    "}
        </div>
        {"\n    "}
        <div className="sub-nav-item" data-media-type="banani-button">
          {"\n      Cervezas y Vinos\n      "}
          <span className="sub-nav-count">{"9"}</span>
          {"\n    "}
        </div>
        {"\n    "}
        <div className="sub-nav-item" data-media-type="banani-button">
          {"\n      Bebidas sin Alcohol\n      "}
          <span className="sub-nav-count">{"6"}</span>
          {"\n    "}
        </div>
        {"\n    "}
        <div
          className="sub-nav-item"
          style={{
            marginLeft: "auto",
          }}
          data-media-type="banani-button"
        >
          {"\n      "}
          <div
            style={{
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {"\n        "}
            <iconify-icon
              icon="lucide:book-open"
              style={{
                fontSize: "16px",
                color: "inherit",
              }}
            />
            {"\n      "}
          </div>
          {"\n      Recetario Digital\n    "}
        </div>
        {"\n  "}
      </div>
      {"\n\n  "}
      {}
      {"\n  "}
      <div className="main-content-wrapper">
        {"\n    \n    "}
        {}
        {"\n    "}
        <main className="dashboard-scroll-area">
          {"\n      \n      "}
          {}
          {"\n      "}
          <section className="stats-grid">
            {"\n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"Bebidas Pendientes"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-pending">
                  {"\n              "}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:beer"
                      style={{
                        fontSize: "20px",
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
                <span className="kpi-value">{"18"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-progress-bg">
                {"\n            "}
                <div
                  className="kpi-progress-fill"
                  style={{
                    width: "65%",
                    backgroundColor: "var(--warning)",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-trend trend-down">
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
                      icon="lucide:trending-up"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              +5\n            "}
                </span>
                {"\n            "}
                <span className="kpi-context">{"Alta demanda actual"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"En PreparaciÃ³n"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-preparing">
                  {"\n              "}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:coffee"
                      style={{
                        fontSize: "20px",
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
                <span className="kpi-value">{"6"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-progress-bg">
                {"\n            "}
                <div
                  className="kpi-progress-fill"
                  style={{
                    width: "40%",
                    backgroundColor: "var(--accent)",
                  }}
                />
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
                      icon="lucide:minus"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              0\n            "}
                </span>
                {"\n            "}
                <span className="kpi-context">{"Capacidad al 80%"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">
                  {"Tiempo Promedio ElaboraciÃ³n"}
                </span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-total">
                  {"\n              "}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:timer"
                      style={{
                        fontSize: "20px",
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
                <span className="kpi-value">{"04m"}</span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-progress-bg">
                {"\n            "}
                <div
                  className="kpi-progress-fill"
                  style={{
                    width: "80%",
                    backgroundColor: "var(--success)",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-trend trend-up">
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
                      icon="lucide:trending-down"
                      style={{
                        fontSize: "14px",
                        color: "inherit",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n              -1m\n            "}
                </span>
                {"\n            "}
                <span className="kpi-context">{"Objetivo: < 05m"}</span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        \n        "}
            <div className="kpi-card">
              {"\n          "}
              <div className="kpi-header">
                {"\n            "}
                <span className="kpi-title">{"Tickets CrÃ­ticos (>10m)"}</span>
                {"\n            "}
                <div className="kpi-icon-wrapper kpi-delayed">
                  {"\n              "}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"\n                "}
                    <iconify-icon
                      icon="lucide:alert-triangle"
                      style={{
                        fontSize: "20px",
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
                    color: "var(--destructive)",
                  }}
                >
                  {"1"}
                </span>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-progress-bg">
                {"\n            "}
                <div
                  className="kpi-progress-fill"
                  style={{
                    width: "10%",
                    backgroundColor: "var(--destructive)",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          "}
              <div className="kpi-footer">
                {"\n            "}
                <span className="kpi-trend trend-down">
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
                  {"\n              Alerta\n            "}
                </span>
                {"\n            "}
                <span className="kpi-context">{"Requiere atenciÃ³n"}</span>
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
              <span>{"Flujo de PreparaciÃ³n"}</span>
              {"\n          "}
              <button
                className="action-button outline"
                style={{
                  width: "auto",
                  padding: "8px 16px",
                  fontSize: "12px",
                }}
                data-media-type="banani-button"
              >
                {"\n            "}
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:sliders-horizontal"
                    style={{
                      fontSize: "14px",
                      color: "inherit",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            Ajustar Vista\n          "}
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
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:inbox"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Nuevos Pedidos\n              "}
                  </div>
                  {"\n              "}
                  <span className="kanban-count">{"18"}</span>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div
                  className="order-card"
                  style={{
                    borderColor: "var(--destructive)",
                  }}
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <div className="table-number-row">
                        {"\n                    "}
                        <span className="table-number">{"Mesa 12"}</span>
                        {"\n                  "}
                      </div>
                      {"\n                  "}
                      <span className="order-id">{"Ticket #8921"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge delayed">
                      {"\n                  11:20\n                "}
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
                          "\n                    Mojito ClÃ¡sico\n                  "
                        }
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"1x"}</span>
                      {"\n                  "}
                      <div className="item-name">
                        {
                          "\n                    Margarita Fresa\n                    "
                        }
                        <div className="item-meta">
                          {"\n                      "}
                          <span className="item-note">{"SIN SAL"}</span>
                          {"\n                    "}
                        </div>
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <div className="waiter-info">
                      {"\n                  "}
                      <span>
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <iconify-icon
                            icon="lucide:user"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                        </div>
                        {" Mike T."}
                      </span>
                      {"\n                  "}
                      <span
                        style={{
                          color: "var(--destructive)",
                          fontWeight: "700",
                        }}
                      >
                        {"PRIORIDAD"}
                      </span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <button
                      className="action-button primary"
                      data-media-type="banani-button"
                    >
                      {"\n                  Preparar Ahora\n                "}
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
                      <span className="table-number">{"Mesa 04"}</span>
                      {"\n                  "}
                      <span className="order-id">{"Ticket #8924"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge normal">
                      {"\n                  02:30\n                "}
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
                          "\n                    Cerveza IPA\n                  "
                        }
                      </div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <div className="waiter-info">
                      {"\n                  "}
                      <span>
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <iconify-icon
                            icon="lucide:user"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                        </div>
                        {" Elena R."}
                      </span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <button
                      className="action-button outline"
                      data-media-type="banani-button"
                    >
                      {"\n                  Tomar Pedido\n                "}
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
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:glass-water"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Preparando\n              "}
                  </div>
                  {"\n              "}
                  <span className="kanban-count">{"6"}</span>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div
                  className="order-card selected"
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <div className="table-number-row">
                        {"\n                    "}
                        <span className="table-number">{"Mesa 08"}</span>
                        {"\n                    "}
                        <span className="vip-tag">{"VIP"}</span>
                        {"\n                  "}
                      </div>
                      {"\n                  "}
                      <span className="order-id">{"Ticket #8915"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div
                      className="time-badge normal"
                      style={{
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      {"\n                  05:15\n                "}
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
                          "\n                    PiÃ±a Colada\n                  "
                        }
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="order-item">
                      {"\n                  "}
                      <span className="item-qty">{"1x"}</span>
                      {"\n                  "}
                      <div className="item-name">
                        {
                          "\n                    Gin Tonic\n                    "
                        }
                        <div className="item-meta">
                          {"\n                      "}
                          <span
                            className="item-note"
                            style={{
                              backgroundColor: "var(--secondary)",
                              color: "var(--foreground)",
                            }}
                          >
                            {"Pepino extra"}
                          </span>
                          {"\n                    "}
                        </div>
                        {"\n                  "}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <div className="waiter-info">
                      {"\n                  "}
                      <span>
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <iconify-icon
                            icon="lucide:user"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                        </div>
                        {" James W."}
                      </span>
                      {"\n                  "}
                      <span
                        style={{
                          color: "var(--accent)",
                        }}
                      >
                        {"Viendo Receta..."}
                      </span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <button
                      className="action-button accent"
                      data-media-type="banani-button"
                    >
                      {"\n                  Marcar Listo\n                "}
                    </button>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {}
                {"\n            "}
                <div
                  className="order-card"
                  style={{
                    borderLeft: "3px solid var(--accent)",
                  }}
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Barra 02"}</span>
                      {"\n                  "}
                      <span className="order-id">{"Ticket #8918"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge normal">
                      {"\n                  03:10\n                "}
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
                      <div className="item-name">
                        {"Shots Tequila Reposado"}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <div className="waiter-info">
                      {"\n                  "}
                      <span>
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <iconify-icon
                            icon="lucide:user"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                        </div>
                        {" Sarah J."}
                      </span>
                      {"\n                "}
                    </div>
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
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {"\n                  "}
                      <iconify-icon
                        icon="lucide:bell-ring"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Listos (Pick-up)\n              "}
                  </div>
                  {"\n              "}
                  <span className="kanban-count">{"3"}</span>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                {}
                {"\n            "}
                <div
                  className="order-card"
                  style={{
                    border: "1px solid var(--success)",
                    backgroundColor: "rgba(34, 197, 94, 0.02)",
                  }}
                  data-media-type="banani-button"
                >
                  {"\n              "}
                  <div className="order-header">
                    {"\n                "}
                    <div className="table-info">
                      {"\n                  "}
                      <span className="table-number">{"Mesa 21"}</span>
                      {"\n                  "}
                      <span className="order-id">{"Ticket #8910"}</span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="time-badge urgent">
                      {"\n                  Espera 4m\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-items">
                    {"\n                "}
                    <div
                      className="order-item"
                      style={{
                        opacity: "0.6",
                        textDecoration: "line-through",
                      }}
                    >
                      {"\n                  "}
                      <span className="item-qty">{"2x"}</span>
                      {"\n                  "}
                      <div className="item-name">{"Limonada Cerezada"}</div>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="order-footer">
                    {"\n                "}
                    <div className="waiter-info">
                      {"\n                  "}
                      <span>
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <iconify-icon
                            icon="lucide:user"
                            style={{
                              fontSize: "14px",
                              color: "inherit",
                            }}
                          />
                        </div>
                        {" Elena R."}
                      </span>
                      {"\n                  "}
                      <span
                        style={{
                          color: "var(--success)",
                        }}
                      >
                        {"En Barra"}
                      </span>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <button
                      className="action-button outline"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                      data-media-type="banani-button"
                    >
                      {"\n                  Entregado\n                "}
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
        </main>
        {"\n\n    "}
        {}
        {"\n    "}
        <aside className="detail-panel">
          {"\n      "}
          <div className="detail-header">
            {"\n        "}
            <div className="detail-title-area">
              {"\n          "}
              <span className="detail-subtitle">{"Detalle de Comanda"}</span>
              {"\n          "}
              <h2 className="detail-title">
                {"\n            Mesa 08\n            "}
                <span className="detail-status-badge">{"Preparando"}</span>
                {"\n          "}
              </h2>
              {"\n        "}
            </div>
            {"\n        "}
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
                  icon="lucide:x"
                  style={{
                    fontSize: "20px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div className="detail-meta-grid">
            {"\n        "}
            <div className="meta-item">
              {"\n          "}
              <span className="meta-label">{"NÂº Ticket"}</span>
              {"\n          "}
              <span className="meta-value">{"#8915"}</span>
              {"\n        "}
            </div>
            {"\n        "}
            <div className="meta-item">
              {"\n          "}
              <span className="meta-label">{"Tiempo Transcurrido"}</span>
              {"\n          "}
              <span className="meta-value">
                {"\n            "}
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"\n              "}
                  <iconify-icon
                    icon="lucide:clock"
                    style={{
                      fontSize: "14px",
                      color: "var(--accent)",
                    }}
                  />
                  {"\n            "}
                </div>
                {"\n            05:15\n          "}
              </span>
              {"\n        "}
            </div>
            {"\n        "}
            <div className="meta-item">
              {"\n          "}
              <span className="meta-label">{"Mesero"}</span>
              {"\n          "}
              <span className="meta-value">
                {"\n            "}
                <img
                  src="avatar/male/25-35/European/3"
                  alt=""
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                  }}
                />
                {"\n            James W.\n          "}
              </span>
              {"\n        "}
            </div>
            {"\n        "}
            <div className="meta-item">
              {"\n          "}
              <span className="meta-label">{"Cliente"}</span>
              {"\n          "}
              <span className="meta-value">
                {"\n            "}
                <span className="vip-tag">{"VIP"}</span>
                {" Sr. MartÃ­nez\n          "}
              </span>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div className="detail-content">
            {"\n        \n        "}
            {}
            {"\n        "}
            <div className="recipe-block">
              {"\n          "}
              <div className="recipe-header">
                {"\n            "}
                <div className="recipe-title">
                  {"\n              "}
                  <span className="recipe-qty">{"2x"}</span>
                  {"\n              PiÃ±a Colada\n            "}
                </div>
                {"\n            "}
                <div
                  className="icon-button"
                  style={{
                    width: "28px",
                    height: "28px",
                    border: "none",
                    background: "transparent",
                  }}
                  data-media-type="banani-button"
                >
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
                      icon="lucide:chevron-up"
                      style={{
                        fontSize: "18px",
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
              <div className="recipe-body">
                {"\n            "}
                <div className="recipe-specs">
                  {"\n              "}
                  <div className="spec-tag">
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
                        icon="lucide:glass-water"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Vaso Hurricane\n              "}
                  </div>
                  {"\n              "}
                  <div className="spec-tag">
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
                        icon="lucide:snowflake"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Licuado/FrappÃ©\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                <div className="ingredients-list">
                  {"\n              "}
                  <span className="ingredients-title">
                    {"Ingredientes (Por vaso)"}
                  </span>
                  {"\n              "}
                  <div className="ingredient-item">
                    {"\n                "}
                    <span className="ingredient-name">
                      {"Ron Blanco (Havana)"}
                    </span>
                    {"\n                "}
                    <span className="ingredient-amount">{"2 oz"}</span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="ingredient-item">
                    {"\n                "}
                    <span className="ingredient-name">{"Jugo de PiÃ±a"}</span>
                    {"\n                "}
                    <span className="ingredient-amount">{"3 oz"}</span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="ingredient-item">
                    {"\n                "}
                    <span className="ingredient-name">{"Crema de Coco"}</span>
                    {"\n                "}
                    <span className="ingredient-amount">{"1.5 oz"}</span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="ingredient-item">
                    {"\n                "}
                    <span className="ingredient-name">{"Hielo Picado"}</span>
                    {"\n                "}
                    <span className="ingredient-amount">{"1 Taza"}</span>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                <div className="recipe-notes">
                  {"\n              "}
                  <strong>{"Garnish:"}</strong>
                  {
                    " TriÃ¡ngulo de piÃ±a fresca y cereza marrasquino en el borde.\n            "
                  }
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {}
            {"\n        "}
            <div className="recipe-block">
              {"\n          "}
              <div
                className="recipe-header"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.05)",
                  borderBottom: "1px solid var(--accent)",
                }}
              >
                {"\n            "}
                <div className="recipe-title">
                  {"\n              "}
                  <span
                    className="recipe-qty"
                    style={{
                      backgroundColor: "var(--accent)",
                    }}
                  >
                    {"1x"}
                  </span>
                  {"\n              Gin Tonic\n            "}
                </div>
                {"\n            "}
                <div
                  className="icon-button"
                  style={{
                    width: "28px",
                    height: "28px",
                    border: "none",
                    background: "transparent",
                  }}
                  data-media-type="banani-button"
                >
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
                      icon="lucide:check-circle-2"
                      style={{
                        fontSize: "18px",
                        color: "var(--success)",
                      }}
                    />
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="recipe-body">
                {"\n            "}
                <div className="recipe-specs">
                  {"\n              "}
                  <div className="spec-tag">
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
                        icon="lucide:wine"
                        style={{
                          fontSize: "16px",
                          color: "inherit",
                        }}
                      />
                      {"\n                "}
                    </div>
                    {"\n                Copa BalÃ³n\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n            \n            "}
                <div
                  className="recipe-notes"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderLeftColor: "var(--destructive)",
                    color: "var(--destructive)",
                  }}
                >
                  {"\n              "}
                  <strong>{"Nota del Cliente:"}</strong>
                  {
                    " Ginebra Premium (Hendrick's) y extra pepino. No usar limÃ³n.\n            "
                  }
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n      "}
          </div>
          {"\n\n      "}
          <div className="detail-footer">
            {"\n        "}
            <div className="completion-progress">
              {"\n          "}
              <span>{"Progreso: 1 de 3 completados"}</span>
              {"\n          "}
              <div className="progress-bar-container">
                {"\n            "}
                <div
                  className="progress-bar-fill"
                  style={{
                    width: "33%",
                  }}
                />
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <button
              className="action-button accent"
              style={{
                height: "48px",
                fontSize: "16px",
              }}
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
                  icon="lucide:check-square"
                  style={{
                    fontSize: "20px",
                    color: "inherit",
                  }}
                />
                {"\n          "}
              </div>
              {"\n          MARCAR TICKET LISTO\n        "}
            </button>
            {"\n      "}
          </div>
          {"\n    "}
        </aside>
        {"\n\n  "}
      </div>
      {"\n"}
    </div>
  </>
);
