import PNotify from 'pnotify/dist/es/PNotify';

PNotify.defaults.width = '420px';

function pNotifyError() {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = {
      dir1: 'up',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
    };
  }
  const opts = {
    text: 'Too many matches found. Please enter a more specific query!',
    type: 'error',
    stack: window.stackBottomRight,
    modules: {
      Desktop: {
        desktop: true,
      },
      Animate: {
        animate: true,
        inClass: 'zoomInLeft',
        outClass: 'zoomOutRight',
      },
    },
  };
  PNotify.error(opts);
}

export default pNotifyError;
