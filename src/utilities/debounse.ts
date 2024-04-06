

const debounce = (fn: () => void, delay: number) => {
  let timerId: any;
  return function (...arg: any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
};

export { debounce };