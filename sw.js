// Network-only: never cache confidential tasks or stale authentication/configuration.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
