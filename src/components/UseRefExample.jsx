import React, { useRef, useEffect } from "react";

function UseRefExample() {

  useEffect(() => {
    console.log(divRef);
    divRef.current.innerText ="oscar"
    divRef.current.style.color ="red"
  }, []);

  const divRef = useRef();
  const inputRef = useRef();
  const refHandle = () => {
    console.log();
    // divRef.current.innerText ="oscar"
    // divRef.current.style.color ="red"
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1 ref={divRef}>UseRefExample</h1>
      <input ref={inputRef} type="text" />
      <button onClick={refHandle}>click</button>
    </div>
  );
}

export default UseRefExample;
