export const debounce = (fn = () => false, timeInMs = 200) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn.bind(this, ...arguments), timeInMs)
  }
} 
