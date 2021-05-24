import { useState, useEffect } from 'react';

const useTimer = (minutes = 5) => {
  let [count, setCount] = useState<number>(minutes);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (status === 'pause') return;
    setInterval(function () {
      if (status === 'start') {
        if (count === 0) return finish();
        setCount(--count);
      }
    }, 1000);
    return () => clearInterval();
  }, [count, status]);

  const start = () => {
    setStatus('start');
  };

  const pause = () => {
    setStatus('pause');
  };

  const reset = () => {
    setStatus('idle');
    setCount(minutes);
  };

  const finish = () => {
    reset();
    // add sound
  };

  return { count, status, start, pause, reset };
};

export default useTimer;
