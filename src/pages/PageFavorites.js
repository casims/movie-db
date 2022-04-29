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
    <section id="favorites-card" className="info-card">
      {favs.length < 1 ? <p>Sorry, but you have no favorite movies right now. Return to the home screen and tap the "star" icon on a movie to favorite it.</p> :
        <div className="movies-container">
          {favs.map(movie => <MovieCard key={movie.id} movie={movie} isFav={isFav(favs, null, movie.id)}/>)}
        </div>
      }

    </section>
  )
}
export default PageFavorites;