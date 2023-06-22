


import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  form: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  let position = 0;
  let delay = Number(refs.delayEl.value);
  const step = Number(refs.stepEl.value);
  const amount = Number(refs.amountEl.value);

  for (let i = 0; i < amount; i++) {
    position += 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
// const start = document.querySelector('.js-start')
// const container = document.querySelector('.tumb')
// start.addEventListener('click', onStart);

// function onStart(){
//   const resalt = [];
//   [...container.children].forEach((box) => (box.textContent = ""));
//   [...container.children].forEach((box, i) => {
//   createPromise(i)
//   .then((smile) => {
//     box.textContent = smile
//     resalt.push("1")
//   })
//   .catch((smile) => (box.textContent = smile))
//   .finally(() => {
//     setTimeout(() => {
//       if(i === container.children.length -1){
//         if(!resalt.length || resalt.length === 3){
//           alert('Winner')
//         }else{
//           alert('Lose')
//         }
//       }
//     }, 1000);

//   });
// });
// };

// function onStart(){
//   let counter =0;
//   [...container.children].forEach((box) => (box.textContent = ""));
//   const promise =[...container.children].map((_, i) => createPromise(i));
//   Promise.allSettled((promise)).then((item) => {
//     item.forEach((item, i) => {
//       setTimeout(() => {
//         if(item.status === "fulfilled"){
//           counter +=1;
//         }
//         container.children[i].textContent = item.value || item.reason;
//         if(container.children.length - 1 === i){
//           setTimeout(() => {
//             if(counter === container.children.length || !counter){
//               alert("Winner")
//             }else{
//               alert("Lose")
//             }
    
//           }, 500)
    
//         }

//       },i * 1000)

//     })
    
//   }); 

// };

// function createPromise(){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();

//     if(random > 0.7){
//       res('👍')

//     } else{
//       rej('👎')
//     }
//     }, 1000)
//   })
// }