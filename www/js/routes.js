const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/translations/',
    componentUrl: './pages/translations.html',
  },
  {
    path: '/translations/:objectId',
    componentUrl: './pages/translation.html',
  },
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
