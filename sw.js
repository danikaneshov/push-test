// Слушаем реальные пуши от сервера (в будущем)
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'Привет! Это Push-уведомление.';
    event.waitUntil(
        showNotification(data)
    );
});

// Слушаем команду от кнопки с сайта
self.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'test-push') {
        showNotification('Работает! Прошло 3 секунды.');
    }
});

// Общая функция показа уведомления
function showNotification(title) {
    const options = {
        body: 'Твоя PWA успешно отправляет уведомления через Service Worker!',
        icon: 'https://via.placeholder.com/192',
        badge: 'https://via.placeholder.com/192',
        vibrate: [200, 100, 200],
        data: { url: self.location.origin }
    };
    return self.registration.showNotification(title, options);
}

// Клик по уведомлению
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
