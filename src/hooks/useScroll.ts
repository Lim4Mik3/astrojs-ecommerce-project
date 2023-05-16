import { useEffect, useState } from "react";

export function useScroll() {
  const [state, setState] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  function handler() {
    setState({
      x: window.scrollX,
      y: window.scrollY,
    });
  }

  useEffect(() => {
    function unsubscribe() {
      window.removeEventListener("scroll", handler);
    }

    window.addEventListener("scroll", handler);

    return () => unsubscribe();
  }, []);

  return state;
}
