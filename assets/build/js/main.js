!function(){"use strict";var e="colour-scheme-",t=["auto","light","dark"].map((t=>e.concat(t)));function o(e,t,o){var n=document.getElementById(e),c=window.localStorage.getItem(e);c&&(t(c),o(n,c));n.addEventListener("change",(function(o){var n=o.target,c="checkbox"===n.type?n.checked?n.value:"default":n.value;t(c),window.localStorage.setItem(e,c)}))}let n=(e,t)=>{e.value=t};o("colour-scheme",(function(o){var n=document.querySelector("body"),c=e.concat(o);n.classList.remove(...t),n.classList.add(c)}),n),o("line-height",(function(e){document.documentElement.style.setProperty("--base-line-height",e+"rem")}),n),o("fonts",(e=>{"fancy"===e?(window.fancyFontsLoaded||window.loadFancyFonts(),document.body.classList.remove("fonts-default")):document.body.classList.add("fonts-default")}),((e,t)=>{"fancy"===t&&(e.checked=!0)})),document.addEventListener("click",(function(e){let t;e.target.closest(".dropdown")||((t=document.querySelector(".dropdown[open]"))&&(t.open=!1),e.target.closest(".dropdown-nav-control")||(t=document.querySelector(".dropdown-nav.open"))&&t.classList.remove("open"))}))}();