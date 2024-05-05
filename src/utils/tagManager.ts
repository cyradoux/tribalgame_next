export function loadTagManager() {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-N3358ZXM`;
    script.async = true;
    document.head.appendChild(script);
  }