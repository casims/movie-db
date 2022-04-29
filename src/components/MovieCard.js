import { Link } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import { useEffect, useState } from 'react';
import noPoster from '../assets/no-movie-poster.jpg';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function MovieCard({ movie }) {

    const [isShown, setIsShown] = useState();

    return (
        <div className="movie-card">
            <div    className="movie-poster"
                    onMouseOver={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                {isShown && 
                    <div className="hover-description">
                        <p className="card-description">{movie.overview}</p>
                        <Link to={`/single/${movie.id}`}>More Info</Link>
                        <IconButton >
                            <StarBorderIcon />
                        </IconButton>
                    </div>
                }
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available." /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }  
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                {/* <p className="card-runtime">{movie.runtime}</p> */}
                <p className="card-rating">Rating: <span>{movie.vote_average*10 + '%'}</span></p>
                <p className="card-date">Release Date: {movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard; 
{/* <section className="single-card">
        <div className="poster-container">
            <img src={movie.poster_path} alt="Movie Poster" className="single-poster"/>
        </div>
        <div className="content-container">
            <h2>{movie.title}</h2>
            <p className="single-description">{movie.description}</p>
            <img src={fav} alt="Favorite" className="fav-icon"/>
            <p className="single-rating">Rating: <span>00%</span></p>
            <p className="single-runtime">Runtime: 0h 00m</p>
            <p className="single-date">Release Date: January 1st, 0000</p>
        </div>
    </section> */}