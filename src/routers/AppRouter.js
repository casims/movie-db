// AppRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
import PageHome from "../pages/PageHome";
import PageFavorites from "../pages/PageFavorites";
import PageAbout from "../pages/PageAbout";
import PageNotFound from "../pages/PageNotFound";
import PageSingle from "../pages/PageSingle";
import '../scss/styles.scss'

function AppRouter() {
  return (
    <BrowserRouter>
        <div className="wrapper">
            <Header />
                <main>
                    <Routes>
                        <Route path="/" exact element={<PageHome sort="popular" />} />
                        <Route path="/sort/popular" element={<PageHome sort="popular" />} />
                        <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />} />
                        <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />} />
                        <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />} />
                        <Route path="/single/:id" element={<PageSingle />} />
                        <Route path="/favorites" exact element={<PageFavorites />} />
                        {/* <Route path="/about" exact element={<PageAbout />} />
                        <Route path="*" exact element={<PageNotFound />} /> */}
                    </Routes>
                </main>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter;