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
    "revision": "167aecc7bdca8a902dd0d7bb35447a96"
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
    "url": "assets/js/10.51730ba3.js",
    "revision": "d897509aab14d165bc8e024a670447b2"
  },
  {
    "url": "assets/js/11.f6569806.js",
    "revision": "f64706110c41c2ecf43631d983cd1d27"
  },
  {
    "url": "assets/js/12.d075e12d.js",
    "revision": "f1fb3ca541198d41f43ad7702e84c29f"
  },
  {
    "url": "assets/js/13.1700e0f0.js",
    "revision": "fb1909913ac560351dc03be378387dba"
  },
  {
    "url": "assets/js/14.0ad55cae.js",
    "revision": "2e87fc214254c242a19e1aebf622cdd0"
  },
  {
    "url": "assets/js/15.e6340a0d.js",
    "revision": "1e7e13dcd325daffa59266ed26a593f9"
  },
  {
    "url": "assets/js/16.c72bc87d.js",
    "revision": "6905e644351b5aa151d3bb0e54ae20fe"
  },
  {
    "url": "assets/js/2.7a99f9ec.js",
    "revision": "4f6e385f6d202522e25de511f3147a17"
  },
  {
    "url": "assets/js/3.0eed76f5.js",
    "revision": "64fa3481a2611a6d3c32de27d74574fb"
  },
  {
    "url": "assets/js/4.467ce04f.js",
    "revision": "b350adc5554ac5e5c25747e70eb4246a"
  },
  {
    "url": "assets/js/5.40cd9914.js",
    "revision": "54ecbcb6ddd3cb99dc4ca4ae3adfff88"
  },
  {
    "url": "assets/js/6.ef852fc5.js",
    "revision": "dc1d74b71fc1188c15810dacd8346818"
  },
  {
    "url": "assets/js/7.4327e7b2.js",
    "revision": "9b7eb6fbaa89d7952a2b33a5ed1e89e3"
  },
  {
    "url": "assets/js/8.2cc0a9ff.js",
    "revision": "518959c553845d1d118f4192b4cac5b6"
  },
  {
    "url": "assets/js/9.4f60cc8b.js",
    "revision": "7ddd4db42ae9dcd9dbf9307c6443cbf3"
  },
  {
    "url": "assets/js/app.f80ca4fb.js",
    "revision": "fdab3b856ca1b05051dcba2d964661d9"
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
    "revision": "d8fce61005d8e37af1a7ab296ac77052"
  },
  {
    "url": "yuedu/index.html",
    "revision": "76486cc51f88090869e8597cca8501c2"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "55f82340ae1c94e79ff8df657f81de49"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "443f0a7b2a8d72c6dcf7b67cdb55d150"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "f84009da64f5f7e341bac9edf6cc982e"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "c9be142f500063df8d465e9a219b5604"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "228d849897a2eaf05b3e4ca41ad226e2"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "37dd74339240e4b3e1dc6cc17c110232"
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
