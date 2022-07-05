const $ = Dom7;

const DEEPL_API_URL = 'https://api-free.deepl.com';

// NCMBの初期化用
const event = window.cordova ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(event, async (e) => {
  window.config = await (await fetch('./js/config.json')).json();
  window.ncmb = new NCMB(config.applicationKey, config.clientKey);
  window.app = new Framework7({
    name: 'My App', // App name
    theme: 'auto', // Automatic theme detection
    el: '#app', // App root element
    // App store
    store: store,
    // App routes
    routes: routes,
  });
});

const translationText = async (text, target_lang = 'EN-US') => {
  const res = await fetch(`${DEEPL_API_URL}/v2/translate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      text,
      target_lang,
      auth_key: config.deepLAuthKey,
    })
  });
  const json = await res.json();
  return json['translations'][0]['text'];
}