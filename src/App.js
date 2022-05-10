import React, { useCallback, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  // const emailInput = useCallback((inputEl) => {
  //   if (inputEl) {
  //     inputEl.focus();
  //   }
  // }, []);

  // const someInput = useRef(null);

  // useEffect(() => {
  //   if (someInput.current) {
  //     someInput.current.focus();
  //   }
  // }, []);
  const emailInput = useAutoF2();

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" />
        <br />
        <label htmlFor="t1">Text:</label>
        <input type="text" ref={emailInput} />

        <br />
        <label htmlFor="some">Some:</label>
        <input type="text" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const useAutoFocus = () => {
  const inputRef = useCallback((inputEl) => {
    if (inputEl) {
      inputEl.focus();
    }
  }, []);
  return inputRef;
};

const useAutoF2 = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};
