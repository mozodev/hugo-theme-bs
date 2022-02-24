// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Toast from "js/bootstrap/src/toast";
import Popover from "js/bootstrap/src/popover";

(function () {
  let toastElList = [].slice.call(document.querySelectorAll(".toast"));
  let toastList = toastElList.map(function (toastEl) {
    return new Toast(toastEl);
  });

  toastList.forEach(function (toast) {
    toast.show();
  });

  let popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl);
  });
})();

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/**
 * Breakpoints.
 * @see https://getbootstrap.com/docs/5.0/layout/breakpoints/
 */
const breakpoints = {
  "xs": 0, "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1400
}
const mediaUp = (target) => {
  return window.matchMedia("(min-width:" + breakpoints[target] + "px)").matches
}
const mediaDown = (target) => {
  return window.matchMedia("(max-width:" + breakpoints[target] - 0.2 + "px)").matches
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('bootstraped!', mediaDown('sm'), mediaUp('sm'))
})
