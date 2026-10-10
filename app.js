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
    { href: 'index.html#games', match: /game\.html$/, label: '桌游', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="8.5" cy="15.5" r="1.4" fill="currentColor" stroke="none"/></svg>' },
    { href: 'syllabus.html', match: /syllabus\.html$/, label: '大纲', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19a2 2 0 0 0 2 2h13"/><path d="M9 7h6M9 11h4"/></svg>' },
    { href: 'index.html#buy', match: null, label: '咨询', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z"/><path d="M8.5 9.5h7M8.5 13h5"/></svg>' }
  ];

  function buildBottomNav() {
    var path = location.pathname.split('/').pop() || 'index.html';
    var nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.setAttribute('aria-label', '底部导航');
    var hash = location.hash;
    NAVS.forEach(function (n) {
      var on = n.match ? n.match.test(path) : false;
      if (n.href === 'index.html') on = (path === 'index.html' && !hash);
      if (n.href === 'index.html#products') on = (hash === '#products');
      if (n.href === 'index.html#games') on = (hash === '#games');
      if (n.href === 'index.html#buy') on = (hash === '#buy');
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

  /*===== 6. 全站客服微信引流 =========================================
     统一注入，所有页面生效。幂等：
     - 若页面自带 #wxMask（index/game）则复用，只补事件；
     - 否则自动创建悬浮按钮 + 弹层。
     暴露 window.YoerWX.open()，供各页面的按钮直接调用。      */
  var WECHAT_ID = 'yoer4001087';
  var WECHAT_QR = 'images/wechat-qr.png';

  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>';

  var mask = document.getElementById('wxMask');
  var needsInject = false;

  if (!mask) {
    //无弹层的页面：创建悬浮按钮 + 弹层
    needsInject = true;
    var fab = document.createElement('button');
    fab.className = 'wx-float';
    fab.type = 'button';
    fab.id = 'wxFloat';
    fab.setAttribute('aria-label', '加客服微信咨询');
    fab.innerHTML = ICON_CHAT + '<span>加客服微信</span>';
    document.body.appendChild(fab);

    mask = document.createElement('div');
    mask.className = 'wx-mask';
    mask.id = 'wxMask';
    mask.innerHTML =
      '<div class="wx-pop" role="dialog" aria-modal="true" aria-label="加客服微信">' +
        '<button class="close" id="wxClose" type="button" aria-label="关闭">×</button>' +
        '<h3>加客服微信</h3>' +
        '<p class="sub">长按或截图保存二维码，微信扫一扫添加<br>备注「孩子年龄 + 产品名」优先通过</p>' +
        '<img class="qr" id="wxQr" src="' + WECHAT_QR + '" alt="客服微信二维码">' +
        '<div class="wxid-box">微信号：<span id="wxId">' + WECHAT_ID + '</span></div>' +
        '<button class="wx-copy" id="wxCopy" type="button">复制微信号</button>' +
        '<p class="note">添加后客服会发您产品详情、玩法视频与最新优惠</p>' +
      '</div>';
    document.body.appendChild(mask);
    fab.addEventListener('click', function () { window.YoerWX.open(); });
  } else {
    //已有弹层的页面：确保悬浮按钮存在（补上样式所需 id）
    var fab2 = document.getElementById('wxFloat');
    if (!fab2) {
      var f2 = document.createElement('button');
      f2.className = 'wx-float';
      f2.type = 'button';
      f2.id = 'wxFloat';
      f2.setAttribute('aria-label', '加客服微信咨询');
      f2.innerHTML = ICON_CHAT + '<span>加客服微信</span>';
      document.body.appendChild(f2);
      f2.addEventListener('click', function () { window.YoerWX.open(); });
    }
  }

  // 填充微信号（页面里可能是占位）
  var wxIdEl = document.getElementById('wxId');
  if (wxIdEl) wxIdEl.textContent = WECHAT_ID;
  var wxQrEl = document.getElementById('wxQr');
  if (wxQrEl) wxQrEl.src = WECHAT_QR;

  function openWx() {
    if (mask) mask.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeWx() {
    if (mask) mask.classList.remove('show');
    document.body.style.overflow = '';
  }
  window.YoerWX = { open: openWx, close: closeWx, id: WECHAT_ID };

  // 点击遮罩空白处关闭
  mask.addEventListener('click', function (e) {
    if (e.target === mask) closeWx();
  });
  var wxCloseBtn = document.getElementById('wxClose');
  if (wxCloseBtn) wxCloseBtn.addEventListener('click', closeWx);

  // ESC 关闭
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mask && mask.classList.contains('show')) closeWx();
  });

  // 复制微信号
  var wxCopyBtn = document.getElementById('wxCopy');
  if (wxCopyBtn) {
    wxCopyBtn.addEventListener('click', function () {
      var btn = wxCopyBtn;
      function done(ok) {
        btn.textContent = ok ? '已复制，去微信粘贴搜索' : '请手动复制：' + WECHAT_ID;
        setTimeout(function () { btn.textContent = '复制微信号'; }, 2600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(WECHAT_ID).then(function () { done(true); }, function () { done(false); });
      } else {
        var t = document.createElement('textarea');
        t.value = WECHAT_ID;
        document.body.appendChild(t);
        t.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) {}
        t.remove();
        done(ok);
      }
    });
  }

  // 自动把页面上带 data-wx-open / id 约定的按钮接上弹层
  var autoBtns = document.querySelectorAll('[data-wx-open]');
  Array.prototype.forEach.call(autoBtns, function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); openWx(); });
  });

  // 供旧页面调用：#buyGo 等
  window.openWechat = openWx;

  /* ===== 7. 移动端底部吸底咨询条 =====
     滚动到一定距离后从底部滑入，任何页面都能一键加微信。*/
  var bar = document.createElement('div');
  bar.className = 'wx-bar';
  bar.innerHTML =
    '<div class="wx-bar-txt"><b>选产品 / 问玩法，都可以直接问我</b>' +
    '<span>客服微信 · 备注孩子年龄优先通过</span></div>' +
    '<button type="button" class="wx-bar-btn">加客服微信</button>';
  document.body.appendChild(bar);
  bar.querySelector('.wx-bar-btn').addEventListener('click', function () { openWx(); });
  var barTick = false;
  window.addEventListener('scroll', function () {
    if (barTick) return;
    barTick = true;
    requestAnimationFrame(function () {
      bar.classList.toggle('show', window.scrollY > 320);
      barTick = false;
    });
  }, { passive: true });
})();
