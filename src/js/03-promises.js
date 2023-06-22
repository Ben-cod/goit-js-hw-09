
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
  event.preventDefault();
  let position = 0;
  let delayEl = Number(refs.delayEl.value);
  let stepEl = Number(refs.stepEl.value);
  let amountEl = Number(refs.amountEl);

  for( let i = 0; i < amountEl; i += 1);
  position +=1;
  createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  }, delay)
};