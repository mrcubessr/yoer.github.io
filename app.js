/* 优尔启蒙 · 全站 PWA/导航增强（所有页面共用，defer 加载）
   - Service Worker 注册 + 新版本提示
   - PWA 安装按钮（beforeinstallprompt / iOS 引导）
   - 在线/离线状态提示
   - 移动端底部导航条（≥900px 自动隐藏）
   - 返回顶部按钮 */
(function () {
  'use strict';

  /* ===== 1. Service Worker 注册 + 更新提示 ===== */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
    var refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      refreshing = true;
    });
    navigator.serviceWorker.addEventListener('message', function (e) {
      if (e.data === 'SW_UPDATED') showUpdateBar();
    });
    // 发现等待中的新 SW → 提示刷新
    navigator.serviceWorker.getRegistration().then(function (reg) {
      if (reg && reg.waiting && navigator.serviceWorker.controller) {
        showUpdateBar();
      }
    }).catch(function () {});
  }

  function showUpdateBar() {
    var bar = document.createElement('div');
    bar.className = 'update-bar';
    bar.innerHTML = '<span>新版本已就绪</span><button type="button">立即刷新</button>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('show'); });
    bar.querySelector('button').addEventListener('click', function () {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.addEventListener('controllerchange', function () { location.reload(); });
        navigator.serviceWorker.controller.postMessage('SKIP_WAITING');
      } else {
        location.reload();
      }
    });
  }

  /* ===== 2. PWA 安装入口 ===== */
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    showInstallBtn();
  });
  function showInstallBtn() {
    if (document.querySelector('.install-fab')) return;
    var standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (standalone) return;
    var btn = document.createElement('button');
    btn.className = 'install-fab';
    btn.type = 'button';
    btn.innerHTML = '＋ 安装 App';
    btn.addEventListener('click', function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(function () {
        deferredPrompt = null;
        btn.remove();
      });
    });
    document.body.appendChild(btn);
  }
  // 已安装则不显示
  if (window.matchMedia('(display-mode: standalone)').matches) { /* no-op */ }

  /* ===== 3. 在线/离线提示（复用页面已有 #offlineTip，否则用 toast） ===== */
  function offlineToast(show) {
    var tip = document.getElementById('offlineTip');
    if (tip) { tip.style.display = show ? 'block' : 'none'; return; }
    var t = document.createElement('div');
    t.className = 'conn-toast';
    t.textContent = show ? '当前处于离线模式 · 已加载缓存内容' : '已恢复网络连接';
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { t.remove(); }, 400); }, 2400);
  }
  if (!navigator.onLine) offlineToast(true);
  window.addEventListener('offline', function () { offlineToast(true); });
  window.addEventListener('online', function () { offlineToast(false); });

  /* ===== 4. 移动端底部导航条 ===== */
  var NAVS = [
    { href: 'index.html', match: /(^|\/)index\.html$/, label: '首页', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>' },
    { href: 'index.html#products', match: null, label: '产品', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/></svg>' },
    { href: 'syllabus.html', match: /syllabus\.html$/, label: '大纲', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19a2 2 0 0 0 2 2h13"/><path d="M9 7h6M9 11h4"/></svg>' },
    { href: 'tools.html', match: /tools\.html$/, label: '教具', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>' },
    { href: 'game.html?id=party', match: null, label: '桌游', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="8.5" cy="15.5" r="1.4" fill="currentColor" stroke="none"/></svg>' }
  ];

  function buildBottomNav() {
    var path = location.pathname.split('/').pop() || 'index.html';
    var nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.setAttribute('aria-label', '底部导航');
    var hash = location.hash;
    NAVS.forEach(function (n) {
      var on = n.match ? n.match.test(path) : false;
      if (n.href === 'index.html' && on && !hash) on = true;
      if (n.href === 'index.html#products' && hash === '#products') on = true;
      else if (n.href === 'index.html#products') on = false;
      var a = document.createElement('a');
      a.href = n.href;
      a.className = on ? 'on' : '';
      a.innerHTML = n.icon + '<span>' + n.label + '</span>';
      nav.appendChild(a);
    });
    document.body.appendChild(nav);
  }
  buildBottomNav();

  /* ===== 5. 返回顶部 ===== */
  var topBtn = document.createElement('button');
  topBtn.className = 'back-top';
  topBtn.type = 'button';
  topBtn.setAttribute('aria-label', '返回顶部');
  topBtn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 14 7-7 7 7"/><path d="M5 20h14"/></svg>';
  topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.body.appendChild(topBtn);
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      topBtn.classList.toggle('show', window.scrollY > 600);
      ticking = false;
    });
  }, { passive: true });
})();
