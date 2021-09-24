import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlepage } = useGlobalContext();
  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlepage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlepage("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
