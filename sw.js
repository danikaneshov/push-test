self.addEventListener('push', (event) => {
  const data = event.data ? event.data.text() : 'Данных нет';
  
  const options = {
    body: data,
    icon: 'https://via.placeholder.com/192',
    badge: 'https://via.placeholder.com/192',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Тестовое уведомление', options)
  );
});

// Логика клика по уведомлению
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});