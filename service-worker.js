// service-worker.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.text() : 'Default Push Message';

  const options = {
    body: payload
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  // Add custom behavior when notification is clicked
  clients.openWindow('https://google.com');
});
