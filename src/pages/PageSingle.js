import { useEffect } from "react"
import { appTitle } from "../globals/globals";
import { useParams, Link } from 'react-router-dom';
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

const PageSingle = () => {
    const favs = useSelector((state) => state.favs.items);
    const { id } = useParams();
    const kittenObj = kittensData.find(kitten => kitten.id == id);

    const [singleMovie, setSingleMovie] = useState({});
    useEffect(() => {
        const fetchSingleMovie = async () => {
            const resSingle = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`);
            const movieSingleData = await resSingle.json();
            setSingleMovie(movieSingleData);
        }
          fetchSingleMovie();
    }, []);
    useEffect(() => {
        document.title = `${appTitle} - Single`;
    }, []);

  return (
    <section>

    </section>
  )
}
export default PageSingle;

// import { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Kitten from '../components/Kitten';
// import kittensData from '../data/kittens-data';
// import { appTitle } from '../globals/globalVariables';
// import isFav from '../utilities/isFav';
// import { useSelector } from 'react-redux';

// function PageKittenProfile() {

//     const favs = useSelector((state) => state.favs.items);
//     const { id } = useParams();
//     const kittenObj = kittensData.find(kitten => kitten.id == id);

// 	useEffect(() => {

//         if(!kittenObj){
//             document.title = `${appTitle} - Kitten Profile`;
//         }else{
//             document.title = `${appTitle} - Kitten Profile: ${kittenObj.name}`;
//         }

// 	}, [kittenObj]);

//     return (
//         <main>
// 		    <section>
//                 <h2>Kitten Profile</h2>
//                 {!kittenObj ? 
//                     <p>Kitten not found. <Link to="/">Return to home page</Link>.</p> :
//                     <div className="kitten-single">
//                         <Kitten kittenObj={kittenObj} 
//                                 profileLink={false}
//                                 isFav={isFav(favs, null, kittenObj.id)} />
//                     </div>
//                 }
//             </section>
// 	    </main>
//     );
	
// }

// export default PageKittenProfile;