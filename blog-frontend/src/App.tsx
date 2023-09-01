import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Post } from "./components/Post/Post";
import "./App.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts/:postTitle" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
