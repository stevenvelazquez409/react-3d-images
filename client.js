import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('SlideshowSample', {
      photos: [
        {uri: './static_assets/360_world.jpg', title: '360 World', format: '2D'},
        {uri: './static_assets/360_city.png', title: '360 City', format: '2D'},
        {uri: './static_assets/360_Interior.png', title: '360 Interior', format: '2D'},
        {uri: './static_assets/360_facebook.jpg', title: '360 Facebook', format: '2D'}
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};
