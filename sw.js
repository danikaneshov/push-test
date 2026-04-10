// Слушаем реальные пуши от сервера
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'Привет! Это реальный пуш.';
    showNotification(data);
});

// Слушаем сообщения от кнопки с сайта (для теста без бэкенда)
self.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'test-push') {
        showNotification('Ура! Кнопка работает, уведомления приходят!');
    }
});

function showNotification(title) {
    const options = {
        body: 'Проверка прошла успешно. PWA на Render работает!',
        icon: 'https://via.placeholder.com/128',
        badge: 'https://via.placeholder.com/128',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(title, options);
}
