import { Collapse, Dropdown } from 'bootstrap'

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
