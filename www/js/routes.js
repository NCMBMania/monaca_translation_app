const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // 翻訳画面
  {
    path: '/translations/',
    componentUrl: './pages/translations.html',
  },
  // 履歴詳細画面
  {
    path: '/translations/:objectId',
    componentUrl: './pages/translation.html',
  },
  // 履歴一覧画面
  {
    path: '/histories/',
    componentUrl: './pages/histories.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
