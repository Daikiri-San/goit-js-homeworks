/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */

function createObserver(observeElem, func) {
  const onEntry = (entry) => {
    if (entry[0].isIntersecting) {
      func();
    }
  };

  const options = {
    rootMargin: '0px 0px 400px 0px',
    threshold: 0.01,
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(observeElem);
}

export default createObserver;
// function createButton() {
//   const button =    '<button id="load_more" class="load-button" type="button">Load More</button>';
//   return document.body.insertAdjacentHTML('beforeend', button);
// }

// export default createButton;
