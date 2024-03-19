const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
      // stores triggered events
      window.deferredPrompt = event;

      // removes hidden class from btn
      butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
      console.log('Button is clicked!');
      try {
            const promptEvent = window.deferredPrompt;

            if (!promptEvent) {
                  return;
            }

            // shows install prompt
            promptEvent.prompt();

            // resets deferred prompt var, can only use once
            window.deferredPrompt = null;

            // adds hidden class to btn
            butInstall.classList.toggle('hidden', true);
      } catch (error) {
            console.error('Error installing app: ', error);
      }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
      // clears prompt
      window.deferredPrompt = null;
});
