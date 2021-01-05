self.addEventListener('push', event => {
  event.waitUntil(self.registration.showNotification('hola', {
    body: 'test push notification'
  }));
});
