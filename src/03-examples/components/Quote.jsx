import React, { useRef, useLayoutEffect, useState } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [size, setSize] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setSize({ height, width });
  }, [quote]);
  return (
    <>
      <blockquote style={{ display: "flex" }}>
        <p ref={pRef}>{quote}</p>
        <footer>-{author}</footer>
      </blockquote>
      <code>{JSON.stringify(size)}</code>
    </>
  );
};
