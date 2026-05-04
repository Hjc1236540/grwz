/**
 * 全站动态动漫风背景：轮播 SFW 插画并慢速 crossfade，带 Ken Burns 微动效。
 * 若网络不可用则仅显示 styles.css 中的深色渐变与遮罩。
 */
(function () {
  const ROTATE_MS = 16000;

  const la = document.getElementById('site-bg-layer-a');
  const lb = document.getElementById('site-bg-layer-b');
  if (!la || !lb) return;

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  async function fetchWaifuUrl() {
    try {
      const res = await fetch('https://api.waifu.pics/sfw/waifu', {
        method: 'GET',
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.url) return data.url;
      }
    } catch (e) {
      /* ignore */
    }
    try {
      const res = await fetch('https://nekos.life/api/v2/img/neko', {
        method: 'GET',
        cache: 'no-store'
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.url) return data.url;
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function preload(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        resolve(url);
      };
      img.onerror = function () {
        reject(new Error('load'));
      };
      img.src = url;
    });
  }

  function applyUrl(el, url) {
    el.style.backgroundImage = 'url("' + url.replace(/"/g, '\\"') + '")';
    el.classList.remove('site-bg__layer--burn');
    void el.offsetWidth;
    if (!prefersReduced) {
      el.classList.add('site-bg__layer--burn');
    }
  }

  var layerFront = 'a';

  function swap() {
    fetchWaifuUrl().then(function (url) {
      if (!url) return;
      return preload(url).then(function () {
        return url;
      });
    }).then(function (url) {
      if (!url) return;
      var hidden = layerFront === 'a' ? lb : la;
      var visible = layerFront === 'a' ? la : lb;
      applyUrl(hidden, url);
      hidden.classList.add('site-bg__layer--visible');
      visible.classList.remove('site-bg__layer--visible');
      layerFront = layerFront === 'a' ? 'b' : 'a';
    }).catch(function () {});
  }

  function start() {
    fetchWaifuUrl()
      .then(function (url) {
        if (!url) return null;
        return preload(url).then(function () {
          return url;
        });
      })
      .then(function (url) {
      if (!url) return;
      applyUrl(la, url);
      la.classList.add('site-bg__layer--visible');
      lb.classList.remove('site-bg__layer--visible');
      layerFront = 'a';
      if (!prefersReduced) {
        setInterval(swap, ROTATE_MS);
      }
    }).catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
