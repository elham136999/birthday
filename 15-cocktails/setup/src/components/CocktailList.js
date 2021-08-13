import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>no cocktails match your search criteria</h2>
    );
  }
  return <h2>cocktils list</h2>;
};

export default CocktailList;
