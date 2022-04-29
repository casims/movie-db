// AppRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
import PageHome from "../pages/PageHome";
import PageMovie from "../pages/PageMovie";
import PageFavorites from "../pages/PageFavorites";
import PageAbout from "../pages/PageAbout";
import PageNotFound from "../pages/PageNotFound";
import '../scss/styles.scss'

function AppRouter() {
  return (
    <BrowserRouter>
        <div className="wrapper">
            <Header />
                <main>
                    <Routes>
                        <Route path="/" exact element={<PageHome />} />
                        <Route path="/movie/:id" element={<PageMovie />} />
                        <Route path="/favorites" exact element={<PageFavorites />} />
                        <Route path="/about" exact element={<PageAbout />} />
                        <Route path="*" exact element={<PageNotFound />} />
                    </Routes>
                </main>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter;