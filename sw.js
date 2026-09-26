/* 优尔启蒙商城 Service Worker：预缓存全部资源，离线可浏览
   版本约定：改任何被预缓存的文件，必须 bump VERSION，否则老用户拿不到更新 */
const VERSION = 'yoer-shop-v21';
const PRECACHE = [
  'index.html',
  'detail.html',
  'game.html',
  'syllabus.html',
  'tools.html',
  'tools-l2.html',
  'tools-l3.html',
  'offline.html',
  'products.js',
  'games.js',
  'syllabus-data.js',
  'app.js',
  'styles.css',
  'desktop.css',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  // L1（10 张新图）
  'images/C01/L1-photo-01.jpg', 'images/C01/L1-photo-02.jpg', 'images/C01/L1-photo-03.jpg',
  'images/C01/L1-photo-04.jpg', 'images/C01/L1-photo-05.jpg',
  'images/C01/L1-card-01.jpg', 'images/C01/L1-card-02.jpg', 'images/C01/L1-card-03.jpg',
  'images/C01/L1-card-04.jpg', 'images/C01/L1-card-05.jpg',
  // L1 教具图鉴
  'images/C01/tools/糖果铺子游戏板.jpg', 'images/C01/tools/像素积木块.jpg',
  'images/C01/tools/磁力红蓝棋子.jpg', 'images/C01/tools/磁力实物棋子.jpg',
  'images/C01/tools/磁力白板.jpg', 'images/C01/tools/磁力数字贴.jpg',
  'images/C01/tools/十格阵磁力贴.jpg', 'images/C01/tools/格米扑克牌.jpg',
  'images/C01/tools/城市飞行棋棋盘.jpg', 'images/C01/tools/汽车棋子.jpg',
  'images/C01/tools/飞行棋骰子.jpg', 'images/C01/tools/形色碰碰棋盘.jpg',
  'images/C01/tools/红黄蓝骰子.jpg', 'images/C01/tools/疯狂大请客卡牌.jpg',
  'images/C01/tools/小鱼总动员卡牌.jpg', 'images/C01/tools/小鱼总动员棋子.jpg',
  'images/C01/tools/抢答铃.jpg',
  // L2
  'images/C02/C02-main.jpg', 'images/C02/C02-products.jpg', 'images/C02/C02-course.jpg',
  'images/C02/C02-1.jpg', 'images/C02/C02-2.jpg', 'images/C02/C02-3.jpg', 'images/C02/C02-4.jpg',
  'images/C02/C02-5.jpg', 'images/C02/C02-detail-1.jpg',
  // L2 课程参考图（25 张）
  'images/C02/tools/一眼识数.jpg', 'images/C02/tools/一眼识数-2.jpg',
  'images/C02/tools/PK游戏.jpg', 'images/C02/tools/多角度分类.jpg',
  'images/C02/tools/数字建形.jpg', 'images/C02/tools/建形PK.jpg',
  'images/C02/tools/数字2-3的分合.jpg', 'images/C02/tools/数字6-7的分合.jpg',
  'images/C02/tools/凑十游戏.jpg', 'images/C02/tools/数字5的减法.jpg',
  'images/C02/tools/数字5以内加减运算.jpg', 'images/C02/tools/小羊农场(教具).jpg',
  'images/C02/tools/数字邻居(教具).jpg', 'images/C02/tools/两位数.jpg',
  'images/C02/tools/认识个位十位.jpg', 'images/C02/tools/格米扑克麻将(教具).jpg',
  'images/C02/tools/20以内不退位减法(一).jpg', 'images/C02/tools/数字叠叠乐(教具).jpg',
  'images/C02/tools/20以内加减法的综合练习.jpg', 'images/C02/tools/量的比较(一).jpg',
  'images/C02/tools/小羊加加加(教具).jpg', 'images/C02/tools/测量.jpg',
  'images/C02/tools/数独(一).jpg', 'images/C02/tools/数字游戏(一).jpg',
  'images/C02/tools/逻辑九宫格(一).jpg',
  // L3
  'images/C03/C03-main.jpg', 'images/C03/C03-products.jpg', 'images/C03/C03-course.jpg',
  'images/C03/C03-1.jpg', 'images/C03/C03-2.jpg', 'images/C03/C03-3.jpg', 'images/C03/C03-4.jpg',
  'images/C03/C03-5.jpg', 'images/C03/C03-6.jpg', 'images/C03/C03-7.jpg', 'images/C03/C03-8.jpg',
  // L3 教具图鉴
  'images/C03/tools/24算牌.jpg',
  'images/C03/tools/骰子各类.jpg', 'images/C03/tools/骰子各类-2.jpg', 'images/C03/tools/骰子各类-3.jpg',
  'images/C03/tools/沙漏.jpg', 'images/C03/tools/元宝标记.jpg',
  'images/C03/tools/神机妙算.jpg', 'images/C03/tools/九九争霸.jpg', 'images/C03/tools/三国谋算.jpg',
  'images/C03/tools/手拍铃.jpg', 'images/C03/tools/贤士棋.jpg',
  'images/C03/tools/百里驰援.jpg', 'images/C03/tools/官渡算战.jpg', 'images/C03/tools/小黑人.jpg',
  // 经典桌游：格米的数学派对（新版主图 6 张 + party-10 课程区块图）
  'images/games/party/party-main-01.jpg', 'images/games/party/party-main-02.jpg', 'images/games/party/party-main-03.jpg',
  'images/games/party/party-main-04.jpg', 'images/games/party/party-main-05.jpg', 'images/games/party/party-detail.jpg',
  'images/games/party/party-10.jpg',
  // 经典桌游：智趣方格（15 张）
  'images/games/grid/grid-01.jpg', 'images/games/grid/grid-02.jpg', 'images/games/grid/grid-03.jpg',
  'images/games/grid/grid-04.jpg', 'images/games/grid/grid-05.jpg', 'images/games/grid/grid-06.jpg',
  'images/games/grid/grid-07.jpg', 'images/games/grid/grid-08.jpg', 'images/games/grid/grid-09.jpg',
  'images/games/grid/grid-10.jpg', 'images/games/grid/grid-11.jpg', 'images/games/grid/grid-12.jpg',
  'images/games/grid/grid-13.jpg', 'images/games/grid/grid-14.jpg', 'images/games/grid/grid-15.jpg',
  // 经典桌游：疯狂大请客（16 张）
  'images/games/feast/feast-l1-03.jpg', 'images/games/feast/feast-l1-04.jpg', 'images/games/feast/feast-l1-05.jpg',
  'images/games/feast/feast-l1-06.jpg', 'images/games/feast/feast-l1-07.jpg', 'images/games/feast/feast-l1-08.jpg',
  'images/games/feast/feast-l1-09.jpg', 'images/games/feast/feast-l1-11.jpg', 'images/games/feast/feast-l1-12.jpg',
  'images/games/feast/feast-l1-13.jpg', 'images/games/feast/feast-l1-19.jpg', 'images/games/feast/feast-l1-20.jpg',
  'images/games/feast/feast-l1-21.jpg', 'images/games/feast/feast-l4-01.jpg',
  'images/games/feast/feast-l5-01.jpg', 'images/games/feast/feast-l5-02.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => {
        if (self.registration.navigationPreload) {
          self.registration.navigationPreload.disable().catch(() => {});
        }
        return self.clients.claim();
      })
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // 跨域请求一律放行，不拦截不缓存
  if (url.origin !== location.origin) return;

  // 页面导航：network-first，失败回缓存，最后回 offline.html
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() =>
          caches.match(req, { ignoreSearch: true })
            .then((hit) => hit || caches.match('index.html'))
            .then((hit) => hit || caches.match('offline.html'))
            .then((hit) => hit || new Response('离线', { headers: { 'Content-Type': 'text/html; charset=utf-8' } }))
        )
    );
    return;
  }

  // 静态资源：cache-first + 后台更新（stale-while-revalidate）
  e.respondWith(
    caches.match(req).then((hit) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || network;
    })
  );
});
