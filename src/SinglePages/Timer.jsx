import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(61);
  const ref = useRef(null);

  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };
  console.log(ref);
  useEffect(() => {
    const cleanup = () => {
      stopTimer();
    };
    return cleanup;
  }, []);
  // const resetTimer

  return (
    <div className="timer">
      <h1>{}</h1>
    </div>
  );
};
