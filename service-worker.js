/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c7d44610fcd0d959ee2a3e9523a986f"
  },
  {
    "url": "assets/css/0.styles.e42cd381.css",
    "revision": "66605f12555218a8ee225e3adbd963e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0ecd01da.js",
    "revision": "755acc7251fbc413222b879f64472c06"
  },
  {
    "url": "assets/js/11.eb495b8b.js",
    "revision": "bf1701f4219124a09ad0b779bf2854a5"
  },
  {
    "url": "assets/js/12.b7c4bb27.js",
    "revision": "88a87a6bfe8df4b0bbaf7d0219c9fe85"
  },
  {
    "url": "assets/js/13.968a9fe2.js",
    "revision": "d1ff4ff95870c8b26a80df6645c0bc0f"
  },
  {
    "url": "assets/js/14.e29b318c.js",
    "revision": "bafab39f6afb91c19f7889449be4d73a"
  },
  {
    "url": "assets/js/15.cf48d6ab.js",
    "revision": "500c268e3eea8cc26978a427f68848b9"
  },
  {
    "url": "assets/js/16.e1649402.js",
    "revision": "e6eb75077820a04cd7dca013ffbaab1d"
  },
  {
    "url": "assets/js/2.07710c87.js",
    "revision": "d21c9adaa4832b0dd43482ad0a31a068"
  },
  {
    "url": "assets/js/3.eae12c36.js",
    "revision": "646092c6b5f3427257b4cee6bb9c5e73"
  },
  {
    "url": "assets/js/4.21c9c96d.js",
    "revision": "ffe996daa2a697862967616db24d9cc4"
  },
  {
    "url": "assets/js/5.930ec43e.js",
    "revision": "be09ac676a5a6af36e57e1d8e8494d77"
  },
  {
    "url": "assets/js/6.2e24ea78.js",
    "revision": "76df341dde683d4de904768f256c688f"
  },
  {
    "url": "assets/js/7.d81ee1bf.js",
    "revision": "cdaafeb867cc48408282edc4dc397e32"
  },
  {
    "url": "assets/js/8.09067e7b.js",
    "revision": "07ff64b23b7a694fdb02e5839f73356f"
  },
  {
    "url": "assets/js/9.2da47ffa.js",
    "revision": "1d9f4f0a6e41ff6784476bdc7bcee8cc"
  },
  {
    "url": "assets/js/app.9dd5c6ee.js",
    "revision": "6c98aba2e917464eff3389574f6d173a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "9c92a3ed7b834cd6c344bd31f8a6fe61"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "697e6faa62ec49655910379578c6e754"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3b79c26acf3d169f750e4ddb414d38ba"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "dea50cc2ea17c63fd6c2974472f36c78"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "40495209221f6c3493367cbeb328c413"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "7a9516e68406f62bd897e4b71a9d0fcc"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8d17c5e902f282254de021f011feb2bd"
  },
  {
    "url": "index.html",
    "revision": "8c940b19f564c49e2823bed6042baeed"
  },
  {
    "url": "yuedu/index.html",
    "revision": "0ff4e09853b6c66d1a790004c9224da3"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "1bf849a27f6023a3e1d832302dd7114c"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "0c35a32edcc9317f02c4fdc93030e423"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "269c72744750c36fc3aa4f3695e5b955"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "1b78babb7c038c8386ccca1cf9643151"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "50bb051b086e980212e355926907f791"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "078a7aef25526d8795b037b1e4beb493"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
