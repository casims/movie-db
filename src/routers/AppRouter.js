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
import '../scss/styles.scss'

function AppRouter() {
  const appInfo = {
    title: "cs Movie Databe",
    author: "Connor, David and Michiko",
    copyright: 2022,
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header title={appInfo.title} />
        {/* <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/favorites" exact element={<PageFavorites />} />
            <Route path="/about" exact element={<PageAbout />} />
            <Route path="*" exact element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer
          title={appInfo.title}
          copyright={appInfo.copyright}
          author={appInfo.author}
        /> */}
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
