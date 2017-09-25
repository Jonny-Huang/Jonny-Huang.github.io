if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(()=> {
            console.log('Service Worker Registered');
        }).catch(reject => {
            console.log('Service Worker Rejected');
        });
}

