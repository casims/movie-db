import { Link } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import { useEffect, useState } from 'react';
import noPoster from '../assets/no-poster.png';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavButton from './FavButton';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favorite/favSlice';

function SingleCard({movie, isFav}) {
    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
        }else{
            dispatch(deleteFav(obj));
        }   
    }

    return (
        <div className="single-movie-card">
            <div className="single-movie-poster">
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available." /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }  
            </div>
            <div className="hover-description">
                <p className="single-description">{movie.overview}</p>
                <Link to={`/`}>Home Page</Link>
                <div className="btn-favourite">
                {isFav ? 
                    <FavButton movieObj={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movieObj={movie} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
            <div className="single-movie-info">
                <h2>{movie.title}</h2>
                <p className="single-runtime">{movie.runtime + "m"}</p>
                <p className="single-date">{movie.release_date}</p>
                <p className="single-rating">Rating: <span>{movie.vote_average*10 + '%'}</span></p>
            </div>

        </div>
    )
}

export default SingleCard; 