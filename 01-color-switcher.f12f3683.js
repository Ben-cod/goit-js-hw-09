const t=document.querySelector("data-start"),e=document.querySelector("data-stop");let n=null;function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;document.body.style.background=t}t.addEventListener(click,(function(){t.disabled=!0,n=setInterval(a,1e3)})),e.addEventListener(click,(function(){t.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.f12f3683.js.map
