const { hostname } = window.location;

const isLocalhost = Boolean(
  hostname === 'localhost' ||
  hostname === '[::1]' ||
  hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

const load = ({ config }) => () => {
  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

  if (isLocalhost) {
    checkValidServiceWorker(swUrl, config);

    navigator.serviceWorker.ready
      .then(() => console.log('This app is served as cache-first by a service worker.'));
  } else {
    registerValidSW(swUrl, config);
  }
}

export const register = (config) => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', load({ config }));
  }
}

const onstatechange = ({ config, registration, worker }) => () => {
  if (worker.state !== 'installed') {
    return;
  }

  if (navigator.serviceWorker.controller) {
    console.log(
      'New content is available and will be used when all tabs for this page are closed.'
    );

    if (config && config.onUpdate) {
      config.onUpdate(registration);
    }
  } else {
    console.log('Content is cached for offline use.');

    if (config && config.onSuccess) {
      config.onSuccess(registration);
    }
  }
}

const onupdatefound = ({ registration, config }) => () => {
  const worker = registration.installing;
  if (worker == null) {
    return;
  }

  worker.onstatechange = onstatechange({ config, registration, worker });
}

const registerValidSW = (swUrl, config) => {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = onupdatefound({ registration, config });
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

const checkValidServiceWorker = (swUrl, config) => {
  return fetch(swUrl)
    .then(response => {
      const contentType = response.headers.get('content-type');
      const isntJs = contentType != null && contentType.indexOf('javascript') === -1;

      if (response.status === 404 || isntJs) {
        navigator.serviceWorker.ready
          .then(registration => registration.unregister())
          .then(() => window.location.reload())
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => console.log(
      'No internet connection found. App is running in offline mode.'
    ));
}

export const unregister = () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  
  return navigator.serviceWorker.ready
    .then(registration => registration.unregister());
}
