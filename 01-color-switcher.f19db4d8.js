const t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e=null;function o(){t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}t.stop.setAttribute("disabled",!0),t.start.addEventListener("click",o),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0)})),console.log(o());
//# sourceMappingURL=01-color-switcher.f19db4d8.js.map
