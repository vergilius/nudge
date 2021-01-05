// this needs to be double checked for callback implementation
const askForPermission = async () => Notification.requestPermission();

const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js');

    return registration;
  } catch (error) {
    throw new Error(`Oopsie: ${error.message}`);
  }
}


const initialize = async () => {
  const publicKey = 'BDak5qHIgDCxPpbqFHNDj52uqeLPNL9ZWiutVAwV7PuE3p0Zky2cSiCq9bEDiZj8frKRTqEmVeZUQyz7u5VBGu0';
  const registration = await registerServiceWorker();
  const permission = await askForPermission();


  // normally we should only run in when permission is 'granted'
  // registration.showNotification('test', {
  //   body: 'here is just a notification'
  // });

  const pushSubscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicKey
  });
}

initialize();


