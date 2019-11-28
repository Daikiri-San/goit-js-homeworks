import PNotify from 'pnotify/dist/es/PNotify';

function pNotifyNotFound() {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = {
      dir1: 'up',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
    };
  }
  const opts = {
    title: 'There are no countries with such name!',
    text: 'Are you sure, that you type name correctly?',
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

export default pNotifyNotFound;
