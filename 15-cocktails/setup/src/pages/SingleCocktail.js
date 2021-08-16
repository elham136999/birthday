import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCoctail] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    const getcocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            idDrink: id,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const strIngredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newcocktail = {
            name,
            id,
            image,
            info,
            glass,
            strInstructions,
            strIngredient,
          };
          setCoctail(newcocktail);
        } else {
          setLoading(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getcocktail();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to disply</h2>;
  }
  const { name, image, info, glass, Ingredients, strInstructions } = cocktail;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back to Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>

          <p>
            <span className='drink-data'>strInstructions:</span>
            {strInstructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
            {Ingredients}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
