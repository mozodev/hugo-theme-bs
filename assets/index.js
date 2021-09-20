import { Collapse, Dropdown } from 'bootstrap'

let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let vars = {
  "xs": "0",
  "sm": "576px",
  "md": "768px",
  "lg": "1025px",
  "xl": "1200px",
  "xl2": "2560px",
  "xl3": "5120px",
}

let mediaDown = (breakpoint) => {
  return window.matchMedia("(max-width:" + vars[breakpoint] + ")").matches
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('dom bootstraped!')
})
