function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("7Y9D8");const i={form:document.querySelector(".form"),delayEl:document.querySelector('[name="delay"]'),stepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]')};i.form.addEventListener("submit",(function(o){o.preventDefault();let t=0,n=(Number(i.delayEl.value),Number(i.stepEl.value),Number(i.amountEl));for(let e=0;e<n;e+=1);t+=1,function(e,o){const t=Math.random()>.3;setTimeout((()=>{t?resolve({position:e,delay:o}):reject({position:e,delay:o})}),o)}(2,1500).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.de78cec8.js.map