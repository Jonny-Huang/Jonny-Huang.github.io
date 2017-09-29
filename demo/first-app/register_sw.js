if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => {
      // registration worked
      console.log('[Service Worker] Registration succeeded. Scope is ' + reg.scope);
      subscribeUser(reg);

      if ('Notification' in window) {
        console.log('Notification permission default status:', Notification.permission);
        Notification.requestPermission(function (status) {
          console.log('Notification permission status:', status);
          // displayNotification();
        });
      }

      console.log('[Service Worker] register end');
    }).catch(error => {
      // registration failed
      console.log('[Service Worker] Registration failed with ' + error);
    });
}

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      const options = {
        icon: 'assets/images/android_048.png',
        body: 'Angular 測試工作坊 9月23日(六)',
        image: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t31.0-8/21273134_10156585628499554_8520027102111869914_o.jpg?oh=9d7bcbc999c161f5ce778e361a4b9ea4&oe=5A47D9EE',
        data: {
          link: 'https://www.facebook.com/groups/augularjs.tw/',
          link_ok: 'https://www.facebook.com/events/188912961650574/?acontext=%7B%22ref%22%3A%224%22%2C%22feed_story_type%22%3A%22370%22%2C%22action_history%22%3A%22null%22%7D',
          link_ng: 'https://www.facebook.com/groups/angularstudygroup/'
        },
        requireInteraction: true,
        actions: [{
            action: 'yes',
            title: '參加',
            icon: './assets/images/img_ok.png'
          },
          {
            action: 'no',
            title: '不參加',
            icon: './assets/images/img_ng.png'
          },
        ]
      };
      reg.showNotification('線上 Angular 讀書會 活動', options);
      console.log('displayNotification');
    });
  }
}


function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const applicationServerPublicKey = `BPkIUOIylNfWjC9MQ3_8oVx0MsaryiEaak1WyYWyqWp1-FuyQitttiMkdjvACkoEds94crwhyRIyVTyc2tVYICI`;

function subscribeUser(swRegistration) {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(subscription => {
      console.log('User is subscribed');
      console.log(JSON.stringify(subscription));
    })
    .catch(err => {
      console.log('Failed to subscribe the user: ', err);
    });
}
