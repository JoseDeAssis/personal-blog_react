import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "components/DefaultPage";
import Home from "pages/Home";
import About from "pages/About";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
