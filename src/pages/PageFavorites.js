import { useEffect } from "react"
import { appTitle } from "../globals/globals";

const PageFavorites = () => {

    useEffect(() => {
        document.title = `${appTitle} - Favorites`;
    }, []);

  return (
    <section>

    </section>
  )
}
export default PageFavorites;