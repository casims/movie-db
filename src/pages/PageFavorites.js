import { useEffect } from "react"
import { appTitle } from "../globals/globals";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import isFav from '../utilities/isFav';

const PageFavorites = () => {
  const favs = useSelector((state) => state.fav.items);
  useEffect(() => {
    document.title = `${appTitle} - Favorites`;
  }, []);

  return (
    <section className="favorite-page">
      {favs.length < 1 ? <p>No favourite kittens. Return to the <Link to="/">home</Link> page to add some favourite kittens.</p> :
        <div className="movies-container">
          {favs.map(movie => <MovieCard key={movie.id} movie={movie} isFav={isFav(favs, null, movie.id)}/>)}
        </div>
      }
    </section>
  )
}
export default PageFavorites;