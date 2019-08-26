export default function debounce(callback, delay){
  let timer;
  return (...args) => {
    if(timer){
      clearInterval(timer)
    }
    timer = setInterval(() => {
      callback(...args);
      timer = null;
    }, delay);
  }
}