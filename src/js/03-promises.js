

import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();
  let position = 0;
  let delay = Number(refs.delayEl.value);
  let step = Number(refs.stepEl.value);
  let amount = Number(refs.amountEl.value);

  for( let i = 0; i < amount; i ++){
    position += 1;
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
  delay += step;
  }
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  });
  
};
