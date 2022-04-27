import { useEffect } from "react"
import { appTitle } from "../globals/globals";

const PageNotFound = () => {

    useEffect(() => {
        document.title = `${appTitle} - Page Not Found`;
    }, []);

  return (
    <section>

    </section>
  )
}
export default PageNotFound;