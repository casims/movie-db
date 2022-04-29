import { useEffect, useState } from "react"
import { appTitle } from "../globals/globals";
import { useParams, Link } from 'react-router-dom';
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';
import { API_KEY } from '../globals/globals';
import SingleCard from '../components/SingleCard';

const PageSingle = () => {
    const favs = useSelector((state) => state.fav.items);
    const { id } = useParams();

    const [singleMovie, setSingleMovie] = useState({});
    useEffect(() => {
        const fetchSingleMovie = async () => {
            const resSingle = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieSingleData = await resSingle.json();
            setSingleMovie(movieSingleData);
        }
          fetchSingleMovie();
    }, []);
    useEffect(() => {
        document.title = `${appTitle} - Single`;
    }, []);

  return (
    <section className="single-page">
      {singleMovie !== null && <SingleCard movie={singleMovie} isFav={isFav(favs, null, singleMovie.id)}/>}
    </section>
  )
}
export default PageSingle;