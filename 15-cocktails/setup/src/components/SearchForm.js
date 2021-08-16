import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchvalue = React.useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchvalue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    searchvalue.current.focus();
  }, []);
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search for favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchvalue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
