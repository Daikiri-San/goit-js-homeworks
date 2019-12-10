import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial';

PNotify.defaults.width = '420px';

function pNotifyNoMatchesFound() {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = {
      dir1: 'up',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
    };
  }
  const opts = {
    title: 'There are no matches found.',
    text: 'Please enter a more specific query!',
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
  PNotify.defaults.styling = 'material';
  PNotify.defaults.icons = 'material';
  PNotify.error(opts);
}

export default pNotifyNoMatchesFound;
