(function(){
  try{
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    var d = document;
    var firstScript = d.getElementsByTagName('script')[0];
    var j = d.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-M8FNT9ZJ';
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(j, firstScript);
    } else {
      (d.head || d.body || d.documentElement).appendChild(j);
    }
  }catch{ /* noop */ }
})();
