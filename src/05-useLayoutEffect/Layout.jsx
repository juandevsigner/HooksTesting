import React from "react";
import { useCounter, useFecth } from "../hooks";
import { Quote, Loading } from "../03-examples/components";

export const Layout = () => {
  const { increment, counter, decrement } = useCounter();
  const { data, hasError, isLoading } = useFecth(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />
      {isLoading ? <Loading /> : <Quote author={author} quote={quote} />}
      <button disabled={isLoading} onClick={() => decrement(1)}>
        back quote
      </button>
      <button disabled={isLoading} onClick={() => increment(1)}>
        next quote
      </button>
    </>
  );
};
