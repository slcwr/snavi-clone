//public/sw.js
self.addEventListener('push', function(event){
    const options = {
        body: event.stopImmediatePropagation.text(),
        icon: '/icon.png',
        badge: '/badge.png'
    };

    event.waitUntil(
        self.registeration.showNotification('通知タイトル',options)
    );
});