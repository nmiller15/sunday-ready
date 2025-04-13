✅ Refactoring To-Do List (CSS + Astro Components)

🧼 CSS Cleanup & Organization
 Consolidate and structure all global styles into a single CSS file
Merge global.css, desktop_global.css, and tablet_global.css. Use media queries to handle responsive design.
🔧 Prompt:
"Consolidate the styles from global.css, desktop_global.css, and tablet_global.css into a single, well-organized global stylesheet. Use media queries to separate device-specific styles, ensuring no duplicated rules exist."
 Move component-specific CSS into their respective .astro files using scoped styles
Keep styles localized to components to avoid side effects and improve maintainability.
🔧 Prompt:
"Migrate component-specific CSS into scoped styles or CSS modules within their corresponding Astro components."
 Apply a consistent naming convention to CSS classes (e.g., BEM)
🔧 Prompt:
"Adopt a clear naming convention (e.g., BEM) for CSS selectors and update class names across components accordingly."
 Remove unused or redundant CSS rules
🔧 Prompt:
"Audit all stylesheets to find and remove any unused or duplicate CSS rules, making sure to keep only what is actually used."
 Improve accessibility via CSS (contrast, focus styles)
🔧 Prompt:
"Verify that all color contrasts and focus indicators meet WCAG accessibility standards. Update styles if needed to ensure readability and navigability."
 Ensure all external CSS resources (e.g., fonts) load over HTTPS
🔧 Prompt:
"Ensure that all fonts or assets loaded via CSS use secure HTTPS URLs."
💡 Astro Component Refactors
 Audit and clean up component structure (e.g., Header.astro, Footer.astro)
🔧 Prompt:
"Review all Astro components in src/components/ and src/layouts/. Refactor repeated markup patterns and remove any unnecessary props or logic."
 Move inline styles into scoped <style> blocks or external component CSS files
🔧 Prompt:
"For each Astro component, move any inline styles into scoped <style> tags or external component-specific CSS files to maintain style encapsulation."
 Add ARIA attributes to improve navigation and screen reader support
🔧 Prompt:
"Update navigation components and interactive elements (e.g., menus, buttons) with ARIA attributes like aria-expanded, aria-label, and ensure they follow accessibility best practices."
 Ensure semantic HTML is used (e.g., <nav>, <main>, <footer>)
🔧 Prompt:
"Ensure that all components use proper semantic HTML tags for structure and screen reader compatibility."
 Ensure all images (especially SVGs) include alt text or descriptive titles where necessary
🔧 Prompt:
"Review all image and SVG usage. If any image conveys information, add appropriate alt text or <title> tags for accessibility."
🧪 Testing & Validation
 Run visual regression tests to ensure no appearance changes
🔧 Prompt:
"After applying CSS and component refactors, perform visual regression testing to verify that the visual output has not changed."
 Run accessibility and security checks post-refactor
🔧 Prompt:
"Use automated accessibility testing tools (e.g., Axe, Lighthouse) and security linters to confirm compliance after changes."
 Verify all pages still load expected layouts and components correctly
🔧 Prompt:
"Test all Astro pages to ensure layouts and components are properly connected, and all styling and content loads as before."