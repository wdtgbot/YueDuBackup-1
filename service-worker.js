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
    "revision": "9a899c1a153239dd33d2e15f5ddc03ed"
  },
  {
    "url": "assets/css/0.styles.3a89626e.css",
    "revision": "90e6d87f127928ede281bd1f7fbde6ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2bd22b99.js",
    "revision": "a2de16849ef7b1f3038c2532bcaeadfa"
  },
  {
    "url": "assets/js/11.2a39bd10.js",
    "revision": "d7d7374c5ffaa9d03f444506603253fd"
  },
  {
    "url": "assets/js/12.39d2e0d6.js",
    "revision": "ddc04283d81a82f53058a61fe5396ac2"
  },
  {
    "url": "assets/js/13.32b6eb69.js",
    "revision": "bab8e28fe05e7e4d47cc46edeb8659fd"
  },
  {
    "url": "assets/js/14.c57b46c4.js",
    "revision": "714fbe0e8f55076f588e8be2811eafb9"
  },
  {
    "url": "assets/js/15.c030a908.js",
    "revision": "de0b8757e21af84049ce9c030d372f3e"
  },
  {
    "url": "assets/js/16.f1690722.js",
    "revision": "29ecc654f231253f3a8383837f279f79"
  },
  {
    "url": "assets/js/2.94ccc2b0.js",
    "revision": "cdd0cdc92bc41f930efd9b2269394b6d"
  },
  {
    "url": "assets/js/3.0aca96fa.js",
    "revision": "eb074918634dfd92996fbc4da8b9b044"
  },
  {
    "url": "assets/js/4.78d236e7.js",
    "revision": "a8b975c26fc929ce8070333a494d9335"
  },
  {
    "url": "assets/js/5.d0c2fe99.js",
    "revision": "4cdb593e6600cf365bcaf13d5c0ff5ab"
  },
  {
    "url": "assets/js/6.973002f5.js",
    "revision": "c01ebb8a071f36b7491354bcc1b1b5e7"
  },
  {
    "url": "assets/js/7.bc6c7be3.js",
    "revision": "8c8e952abd078ce61dd5496f89a171c4"
  },
  {
    "url": "assets/js/8.b73f59ac.js",
    "revision": "153b1cc9252d82fbb7b42e0fc01f4ede"
  },
  {
    "url": "assets/js/9.2cd655fd.js",
    "revision": "209bd68aa40f0f3ae98fa19087b283b1"
  },
  {
    "url": "assets/js/app.ab08458d.js",
    "revision": "f024b3e36940b71bd78e14221724dabe"
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
    "revision": "7cc445a11324b09f4f2f4bce06bcfa16"
  },
  {
    "url": "yuedu/index.html",
    "revision": "06058b119ef68a1266f29a71394b78fc"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "e274d69f29cb91d68c18f0a7d1aaa635"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "9d3dc5a1e66b5443e6a23eb9c6bc607f"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "1dc8dda81e76219dc8f00dd5804103ec"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "8777b3649a7defc2f1c25b77279933d7"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "fd29189747e172c0c9d387ef13b37cb4"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "6f61db73bbe4c7a64e43e5fefee730b4"
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
