import { appTitle } from "../globals/globals";
import { useEffect, useState } from 'react';
import NavSort from "../components/NavSort";
import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globals';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function PageHome({ sort }) {
    useEffect(() => {
      document.title = `${appTitle} - Home`;
    }, []);

    const [moviesPage, setMoviesPage] = useState(1);
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=${moviesPage}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                  }
            });
            console.log("below are for fetchMovies");
            console.log(fetchMovies);
            const moviesData = await res.json();
            const first12Movies = moviesData.results; 
            console.log(first12Movies);
            setMoviesData(first12Movies);
          }
      
          fetchMovies();

    }, [sort, moviesPage]);

    function nextPage(){
        var moviesPageCopy = moviesPage;
        moviesPageCopy++;
        setMoviesPage(moviesPageCopy);
    }
    function prevPage(){
        var moviesPageCopy = moviesPage;
        if(moviesPageCopy !== 1)
            moviesPageCopy--;
        setMoviesPage(moviesPageCopy);
    }

    return (
        <section className="home-page">
            <NavSort />
            {moviesData !== null && <Movies moviesData={moviesData} />}
            {moviesPage == 1 ?
                (<Stack direction="row" spacing={2}>
                    <Button onClick={nextPage} variant="contained" endIcon={<NavigateNextIcon />}>
                        Next Page
                    </Button>
                </Stack>) :
                (<Stack direction="row" spacing={2}>
                    <Button onClick={prevPage} variant="contained" startIcon={<NavigateBeforeIcon/>}>
                        Prev Page
                    </Button>
                    <Button onClick={nextPage} variant="contained" endIcon={<NavigateNextIcon />}>
                        Next Page
                    </Button>
                </Stack>)
            }
        </section>
    )
}
export default PageHome;