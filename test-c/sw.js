self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('esp32-ota-c-test-'))await caches.delete(k);await self.clients.claim();})()));
