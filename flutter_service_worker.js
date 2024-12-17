'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"index.html": "674405f21b5e3b8e8139f42987bb9ed9",
"/": "674405f21b5e3b8e8139f42987bb9ed9",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"main.dart.js": "1ca21c15396c2d1cd7f9bbf295f658b6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/sti_design_system/lib/fonts/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/packages/sti_design_system/lib/icons/directions/down_4.svg": "b5f6dfc7dbe9ca669629a5e98b9ea323",
"assets/packages/sti_design_system/lib/icons/directions/down_2.svg": "b708bb368afe845b128baa5d20e51ded",
"assets/packages/sti_design_system/lib/icons/directions/up.svg": "911003799adf2510013094b4411ffeee",
"assets/packages/sti_design_system/lib/icons/directions/right_2.svg": "37df2489b01efcca6b77ef8b61d07cae",
"assets/packages/sti_design_system/lib/icons/directions/hide.svg": "b109c884f6a43d291513c440ddf114f1",
"assets/packages/sti_design_system/lib/icons/directions/down_1.svg": "d06e5f385ad90e82e07410449873ca76",
"assets/packages/sti_design_system/lib/icons/directions/down_right.svg": "1677176f365eacd9427f7559fa7cadd0",
"assets/packages/sti_design_system/lib/icons/directions/left_2.svg": "36de31296260c7628c35d975b349aad8",
"assets/packages/sti_design_system/lib/icons/directions/down_left.svg": "a3e226a5904a802181d21c234e923adf",
"assets/packages/sti_design_system/lib/icons/directions/eye.svg": "69806594cf43839916ab9c9a4f69853a",
"assets/packages/sti_design_system/lib/icons/directions/down.svg": "4fdfe5a4f4e9a27abffe353210ffc02a",
"assets/packages/sti_design_system/lib/icons/directions/down_3.svg": "d0d87127630ed5d25568b447f5ac7620",
"assets/packages/sti_design_system/lib/icons/directions/collapse.svg": "a5f4371e936801600b1941facb696554",
"assets/packages/sti_design_system/lib/icons/directions/down_left_circle.svg": "64394e7bd9346ec95ff152d3d2136a13",
"assets/packages/sti_design_system/lib/icons/ui/check.svg": "b9a8e63a9d96942ef40e4c9eed74a505",
"assets/packages/sti_design_system/lib/icons/ui/plus.svg": "a2514375657606e16303ec1c179df7e0",
"assets/packages/sti_design_system/lib/icons/ui/share.svg": "fe37e66ceeaeaf2b007b106adfc38b2a",
"assets/packages/sti_design_system/lib/icons/ui/search.svg": "1deeb6ec8bac8ff6acc0c2cf40fde479",
"assets/packages/sti_design_system/lib/icons/ui/image.svg": "95b92ff4d5ef499c8738b3db4dd7e2cb",
"assets/packages/sti_design_system/lib/icons/ui/copy.svg": "d65a742e407a388a3131a12c64375647",
"assets/packages/sti_design_system/lib/icons/ui/filter2.svg": "4ba563d06d1ead6ebec3478863875574",
"assets/packages/sti_design_system/lib/icons/ui/moresquare.svg": "dda876a0a06898e14d512f4b4ee3a243",
"assets/packages/sti_design_system/lib/icons/ui/camera.svg": "061dfdc601151f0550142115351dc0f7",
"assets/packages/sti_design_system/lib/icons/ui/calendar.svg": "d6a81ec42e05a9539b696ed84c05d8f2",
"assets/packages/sti_design_system/lib/icons/ui/close.svg": "d901b7e58812080247e6ca3078e1d23f",
"assets/packages/sti_design_system/lib/icons/ui/document2.svg": "18b8822597d1a1d1f065443e36d9de7f",
"assets/packages/sti_design_system/lib/icons/ui/hide.svg": "b109c884f6a43d291513c440ddf114f1",
"assets/packages/sti_design_system/lib/icons/ui/filter1.svg": "4df52eef9c4d46c9a539ce107eb7e6a9",
"assets/packages/sti_design_system/lib/icons/ui/lock.svg": "c7a2a3d9397d290f1e2899b84fe0fe2a",
"assets/packages/sti_design_system/lib/icons/ui/documentadd.svg": "884d2eb98329a1534fd41d5b0d2da260",
"assets/packages/sti_design_system/lib/icons/ui/lockcheck.svg": "2af683c4aa1e042ae9c648335f817c00",
"assets/packages/sti_design_system/lib/icons/ui/category.svg": "03593a3f3ba2973ee6b3730731df6944",
"assets/packages/sti_design_system/lib/icons/ui/location.svg": "42bb2d03d302f058afa0bb53b7b8cf51",
"assets/packages/sti_design_system/lib/icons/ui/download2.svg": "c286732da0a9d911eb162dfa03452b88",
"assets/packages/sti_design_system/lib/icons/ui/layers.svg": "1be015f315345544ebf36a4ebb4366fc",
"assets/packages/sti_design_system/lib/icons/ui/bag.svg": "1d96508de9c520eeb5c28b76894d012f",
"assets/packages/sti_design_system/lib/icons/ui/checksquare.svg": "106e74320cdd23bc935b856bf0b4e654",
"assets/packages/sti_design_system/lib/icons/ui/send.svg": "d86618a80ca33f3b7c498e07a251335a",
"assets/packages/sti_design_system/lib/icons/ui/login.svg": "b30a24a7c9d7ddb311a5fd4a4688618e",
"assets/packages/sti_design_system/lib/icons/ui/link2.svg": "9fc188a3c3ab128c8241d587e5000f4b",
"assets/packages/sti_design_system/lib/icons/ui/logout_1.svg": "aca3e21ea0f919cb24c66773cde4420c",
"assets/packages/sti_design_system/lib/icons/ui/x.svg": "fb36205eab6bd6c775fc5cc624d7a7ea",
"assets/packages/sti_design_system/lib/icons/ui/addcart.svg": "d25c36cd579ab089ff909bfb1d54efac",
"assets/packages/sti_design_system/lib/icons/ui/paperclip.svg": "1bef6a64fe05b1c198cd6e6fdf4f2dba",
"assets/packages/sti_design_system/lib/icons/ui/lockopen.svg": "0c5f21a3490468c676fc737fd048aa6b",
"assets/packages/sti_design_system/lib/icons/ui/bell.svg": "36a5450c9be66f08096c3da0d1002186",
"assets/packages/sti_design_system/lib/icons/ui/save.svg": "121c88887f07664b6abab195e169d564",
"assets/packages/sti_design_system/lib/icons/ui/document.svg": "19a26529af7b3be5d945a96cba9bc6ad",
"assets/packages/sti_design_system/lib/icons/ui/user.svg": "c823ee84188ec2223fb1f7cd0729f32e",
"assets/packages/sti_design_system/lib/icons/ui/logout_2.svg": "56223893f4def41b4c449aa4cc150a8e",
"assets/packages/sti_design_system/lib/icons/ui/infosquare.svg": "4bd191573c672234e4a2e6675ecb2878",
"assets/packages/sti_design_system/lib/icons/ui/users.svg": "0f178fdf09a992f91d2e7b807f1b0c56",
"assets/packages/sti_design_system/lib/icons/ui/home.svg": "bd01f9392fce93c6352f5e4d35f07cdb",
"assets/packages/sti_design_system/lib/icons/ui/trash.svg": "019ae424de92aec842d81b78a01273c2",
"assets/packages/sti_design_system/lib/icons/ui/lockx.svg": "7e324161be35b3a22b75e7628bb98ccc",
"assets/packages/sti_design_system/lib/icons/ui/link.svg": "304a7ceda67ea748f536e1d26ecd343d",
"assets/packages/sti_design_system/lib/icons/ui/adduser.svg": "232ecc3c795fc31bcbbcd63509f96b6c",
"assets/packages/sti_design_system/lib/icons/ui/edit2.svg": "96e8da89036f1dd73ec50dac0337802e",
"assets/packages/sti_design_system/lib/icons/ui/morecircle.svg": "f51aa8b9665eb9715dd360f51015597d",
"assets/packages/sti_design_system/lib/icons/ui/loading.svg": "5a488ee4d9de49017c4fe572075e717a",
"assets/packages/sti_design_system/lib/icons/ui/edit1.svg": "0225a40febecad14be751ff92d418848",
"assets/packages/sti_design_system/lib/icons/ui/documentdelete.svg": "9aff9586984f8d0748d960b29393a7fb",
"assets/packages/sti_design_system/lib/icons/ui/mail.svg": "386d0a62d7b6edb1e52f1e5301fdfedd",
"assets/packages/sti_design_system/lib/icons/ui/settings.svg": "af8904a23ef97b3a3d5fab7781d06581",
"assets/packages/sti_design_system/lib/icons/ui/scanner.svg": "f520549533893bbc2ed02d6b9d009b60",
"assets/packages/sti_design_system/lib/icons/ui/eye.svg": "69806594cf43839916ab9c9a4f69853a",
"assets/packages/sti_design_system/lib/icons/ui/minus.svg": "6547b7953747ef8b08a0a414d3b9ca8f",
"assets/packages/sti_design_system/lib/icons/ui/burguer.svg": "0f16051406c5360ff6912682d7eb076d",
"assets/packages/sti_design_system/lib/icons/ui/danger.svg": "5349b14a71ee4fbd2fa2b01c13ffd310",
"assets/packages/sti_design_system/fonts/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/packages/sti_design_system/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/packages/sti_design_system/icons/directions/down_4.svg": "b5f6dfc7dbe9ca669629a5e98b9ea323",
"assets/packages/sti_design_system/icons/directions/down_2.svg": "b708bb368afe845b128baa5d20e51ded",
"assets/packages/sti_design_system/icons/directions/up.svg": "911003799adf2510013094b4411ffeee",
"assets/packages/sti_design_system/icons/directions/right_2.svg": "37df2489b01efcca6b77ef8b61d07cae",
"assets/packages/sti_design_system/icons/directions/hide.svg": "b109c884f6a43d291513c440ddf114f1",
"assets/packages/sti_design_system/icons/directions/down_1.svg": "d06e5f385ad90e82e07410449873ca76",
"assets/packages/sti_design_system/icons/directions/down_right.svg": "1677176f365eacd9427f7559fa7cadd0",
"assets/packages/sti_design_system/icons/directions/left_2.svg": "36de31296260c7628c35d975b349aad8",
"assets/packages/sti_design_system/icons/directions/down_left.svg": "a3e226a5904a802181d21c234e923adf",
"assets/packages/sti_design_system/icons/directions/eye.svg": "69806594cf43839916ab9c9a4f69853a",
"assets/packages/sti_design_system/icons/directions/down.svg": "4fdfe5a4f4e9a27abffe353210ffc02a",
"assets/packages/sti_design_system/icons/directions/down_3.svg": "d0d87127630ed5d25568b447f5ac7620",
"assets/packages/sti_design_system/icons/directions/collapse.svg": "a5f4371e936801600b1941facb696554",
"assets/packages/sti_design_system/icons/directions/down_left_circle.svg": "64394e7bd9346ec95ff152d3d2136a13",
"assets/packages/sti_design_system/icons/ui/check.svg": "b9a8e63a9d96942ef40e4c9eed74a505",
"assets/packages/sti_design_system/icons/ui/plus.svg": "a2514375657606e16303ec1c179df7e0",
"assets/packages/sti_design_system/icons/ui/share.svg": "fe37e66ceeaeaf2b007b106adfc38b2a",
"assets/packages/sti_design_system/icons/ui/search.svg": "1deeb6ec8bac8ff6acc0c2cf40fde479",
"assets/packages/sti_design_system/icons/ui/image.svg": "95b92ff4d5ef499c8738b3db4dd7e2cb",
"assets/packages/sti_design_system/icons/ui/copy.svg": "d65a742e407a388a3131a12c64375647",
"assets/packages/sti_design_system/icons/ui/filter2.svg": "4ba563d06d1ead6ebec3478863875574",
"assets/packages/sti_design_system/icons/ui/moresquare.svg": "dda876a0a06898e14d512f4b4ee3a243",
"assets/packages/sti_design_system/icons/ui/camera.svg": "061dfdc601151f0550142115351dc0f7",
"assets/packages/sti_design_system/icons/ui/calendar.svg": "d6a81ec42e05a9539b696ed84c05d8f2",
"assets/packages/sti_design_system/icons/ui/close.svg": "d901b7e58812080247e6ca3078e1d23f",
"assets/packages/sti_design_system/icons/ui/document2.svg": "18b8822597d1a1d1f065443e36d9de7f",
"assets/packages/sti_design_system/icons/ui/hide.svg": "b109c884f6a43d291513c440ddf114f1",
"assets/packages/sti_design_system/icons/ui/filter1.svg": "4df52eef9c4d46c9a539ce107eb7e6a9",
"assets/packages/sti_design_system/icons/ui/lock.svg": "c7a2a3d9397d290f1e2899b84fe0fe2a",
"assets/packages/sti_design_system/icons/ui/documentadd.svg": "884d2eb98329a1534fd41d5b0d2da260",
"assets/packages/sti_design_system/icons/ui/lockcheck.svg": "2af683c4aa1e042ae9c648335f817c00",
"assets/packages/sti_design_system/icons/ui/category.svg": "03593a3f3ba2973ee6b3730731df6944",
"assets/packages/sti_design_system/icons/ui/location.svg": "42bb2d03d302f058afa0bb53b7b8cf51",
"assets/packages/sti_design_system/icons/ui/download2.svg": "c286732da0a9d911eb162dfa03452b88",
"assets/packages/sti_design_system/icons/ui/layers.svg": "1be015f315345544ebf36a4ebb4366fc",
"assets/packages/sti_design_system/icons/ui/bag.svg": "1d96508de9c520eeb5c28b76894d012f",
"assets/packages/sti_design_system/icons/ui/checksquare.svg": "106e74320cdd23bc935b856bf0b4e654",
"assets/packages/sti_design_system/icons/ui/send.svg": "d86618a80ca33f3b7c498e07a251335a",
"assets/packages/sti_design_system/icons/ui/login.svg": "b30a24a7c9d7ddb311a5fd4a4688618e",
"assets/packages/sti_design_system/icons/ui/link2.svg": "9fc188a3c3ab128c8241d587e5000f4b",
"assets/packages/sti_design_system/icons/ui/logout_1.svg": "aca3e21ea0f919cb24c66773cde4420c",
"assets/packages/sti_design_system/icons/ui/x.svg": "fb36205eab6bd6c775fc5cc624d7a7ea",
"assets/packages/sti_design_system/icons/ui/addcart.svg": "d25c36cd579ab089ff909bfb1d54efac",
"assets/packages/sti_design_system/icons/ui/paperclip.svg": "1bef6a64fe05b1c198cd6e6fdf4f2dba",
"assets/packages/sti_design_system/icons/ui/lockopen.svg": "0c5f21a3490468c676fc737fd048aa6b",
"assets/packages/sti_design_system/icons/ui/bell.svg": "36a5450c9be66f08096c3da0d1002186",
"assets/packages/sti_design_system/icons/ui/save.svg": "121c88887f07664b6abab195e169d564",
"assets/packages/sti_design_system/icons/ui/document.svg": "19a26529af7b3be5d945a96cba9bc6ad",
"assets/packages/sti_design_system/icons/ui/user.svg": "c823ee84188ec2223fb1f7cd0729f32e",
"assets/packages/sti_design_system/icons/ui/logout_2.svg": "56223893f4def41b4c449aa4cc150a8e",
"assets/packages/sti_design_system/icons/ui/infosquare.svg": "4bd191573c672234e4a2e6675ecb2878",
"assets/packages/sti_design_system/icons/ui/users.svg": "0f178fdf09a992f91d2e7b807f1b0c56",
"assets/packages/sti_design_system/icons/ui/home.svg": "bd01f9392fce93c6352f5e4d35f07cdb",
"assets/packages/sti_design_system/icons/ui/trash.svg": "019ae424de92aec842d81b78a01273c2",
"assets/packages/sti_design_system/icons/ui/lockx.svg": "7e324161be35b3a22b75e7628bb98ccc",
"assets/packages/sti_design_system/icons/ui/link.svg": "304a7ceda67ea748f536e1d26ecd343d",
"assets/packages/sti_design_system/icons/ui/adduser.svg": "232ecc3c795fc31bcbbcd63509f96b6c",
"assets/packages/sti_design_system/icons/ui/edit2.svg": "96e8da89036f1dd73ec50dac0337802e",
"assets/packages/sti_design_system/icons/ui/morecircle.svg": "f51aa8b9665eb9715dd360f51015597d",
"assets/packages/sti_design_system/icons/ui/loading.svg": "5a488ee4d9de49017c4fe572075e717a",
"assets/packages/sti_design_system/icons/ui/edit1.svg": "0225a40febecad14be751ff92d418848",
"assets/packages/sti_design_system/icons/ui/documentdelete.svg": "9aff9586984f8d0748d960b29393a7fb",
"assets/packages/sti_design_system/icons/ui/mail.svg": "386d0a62d7b6edb1e52f1e5301fdfedd",
"assets/packages/sti_design_system/icons/ui/settings.svg": "af8904a23ef97b3a3d5fab7781d06581",
"assets/packages/sti_design_system/icons/ui/scanner.svg": "f520549533893bbc2ed02d6b9d009b60",
"assets/packages/sti_design_system/icons/ui/eye.svg": "69806594cf43839916ab9c9a4f69853a",
"assets/packages/sti_design_system/icons/ui/minus.svg": "6547b7953747ef8b08a0a414d3b9ca8f",
"assets/packages/sti_design_system/icons/ui/burguer.svg": "0f16051406c5360ff6912682d7eb076d",
"assets/packages/sti_design_system/icons/ui/danger.svg": "5349b14a71ee4fbd2fa2b01c13ffd310",
"assets/NOTICES": "794ca026f66f15fea3209fc3f704d65b",
"assets/AssetManifest.bin.json": "cd4a12f24ce4d603117521ad1cbb4483",
"assets/AssetManifest.json": "b44c20390f732511d780e60614931b5e",
"assets/FontManifest.json": "cbdefe597c0c3a6f0100b437186a7505",
"assets/AssetManifest.bin": "13a62b7edce52b004cffc979683f210d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "27c2ee1f7eaa9506480663d8304a0c36",
"version.json": "ff966ab969ba381b900e61629bfb9789"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
