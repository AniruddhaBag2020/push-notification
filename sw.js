function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Here is a notification body!',
          icon: './images/example.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {action: 'explore', title: 'Explore this new world',
              icon: 'images/example.png'},
            {action: 'close', title: 'I don\'t want any of this',
              icon: 'images/example.png'},
          ]
        };
        reg.showNotification('Hello world!', options);
      });
    }
  }

  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    // var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://www.example.com');
      notification.close();
    }
  });