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
    "revision": "18b67145fe082d13bb3d0f3b14864973"
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
    "url": "assets/js/10.1efd6c0d.js",
    "revision": "2a8b3289df1850c62617995c7cb223ba"
  },
  {
    "url": "assets/js/11.7533773b.js",
    "revision": "1c2de37eef86bed1694295d852c7acd1"
  },
  {
    "url": "assets/js/12.5078c113.js",
    "revision": "a8fa32c6e62ed08916a8f42093e4c046"
  },
  {
    "url": "assets/js/13.973e6229.js",
    "revision": "25886d0ed557570c63e4748200573c03"
  },
  {
    "url": "assets/js/14.dc6c5eed.js",
    "revision": "0a25f80351f991915bfd43015b35c516"
  },
  {
    "url": "assets/js/15.f1919582.js",
    "revision": "160c9d22098898cb3ab27b5361316e80"
  },
  {
    "url": "assets/js/16.ef6d2f88.js",
    "revision": "466c1440f8f7e73b6829f5f46b72a191"
  },
  {
    "url": "assets/js/2.c67a9504.js",
    "revision": "6bbc568afda9b74ab44e42d53300266d"
  },
  {
    "url": "assets/js/3.2c312c05.js",
    "revision": "7e3c9e4d606ceecb02994bdd4ffe5ba5"
  },
  {
    "url": "assets/js/4.00c7cc94.js",
    "revision": "793771644a615d6e16e3507184ebe3c2"
  },
  {
    "url": "assets/js/5.e33dd77a.js",
    "revision": "29067a0c836f660af2760314e183cf9f"
  },
  {
    "url": "assets/js/6.14f59d05.js",
    "revision": "0b7f15ccf6a45346a1a5bc1d95c36b7b"
  },
  {
    "url": "assets/js/7.8ad78fb9.js",
    "revision": "0a13e07598fba08d69ec3d771f695af8"
  },
  {
    "url": "assets/js/8.e321747c.js",
    "revision": "a614127a8f8fba4fdf4db6da657d1987"
  },
  {
    "url": "assets/js/9.273f44b7.js",
    "revision": "59f6364219069d9696f94c84418720c3"
  },
  {
    "url": "assets/js/app.8ca89366.js",
    "revision": "ee6f5c41f129349976fc9044e6b1ae4d"
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
    "revision": "e46affd2e6ce179e5469556d3e4f51ff"
  },
  {
    "url": "yuedu/index.html",
    "revision": "d571a774a884b280700a8f59d2ad1479"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "f6874b732efbe4dbed57521aa8fe5b5e"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "53f690703e0341d14c02ff3259a5cc18"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "2ced52f8071131bc9a6f80569100d7c4"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "85590e0b3a511d7d5867f8974e10920e"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "d8318d49beea7065c1de51baddefa66c"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "78087583197a061b7038d5fde05c74fe"
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
