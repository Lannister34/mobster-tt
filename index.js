(function () {
  const wrapper = document.querySelector('.wrapper');
  const mainDiv = document.createElement('div');
  const includeDiv = document.createElement('div');

  includeDiv.classList.add('includeDiv');
  mainDiv.classList.add('mainDiv');

  mainDiv.appendChild(includeDiv);
  wrapper.insertAdjacentElement('afterEnd', mainDiv);
})();

(function () {
  const includeDiv = document.querySelector('.includeDiv');
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'frame/index.html');
  iframe.setAttribute('frameborder', 0);
  includeDiv.appendChild(iframe);
})();


(function () {
  const mainDiv = document.querySelector('.mainDiv');
  const includeDiv = document.querySelector('.includeDiv');
  const iframe = document.querySelector('iframe');

  mainDiv.style.cssText = "margin: 0 !important; \
                     position: fixed !important; \
                     left: 0; \
                     bottom: 0; \
                     width: 100%; \
                     height: 25%;";

  includeDiv.style.cssText = "margin: 0 !important; \
                            position: block !important; \
                            width: 100% !important; \
                            height: 100% !important;";

  iframe.style.cssText = "width: inherit !important; \
                        height: inherit !important; \
                        opacity: 1 !important;";
})();
