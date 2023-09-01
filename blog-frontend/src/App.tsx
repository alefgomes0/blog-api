import { useEffect, useState } from "react";
import axios from "axios";
import { BlogPostProps } from "./types/BlogPostProps";
import { AxiosErrorProps } from "./types/AxiosErrorProps";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Post } from "./components/Post/Post";
import "./App.css";


const App = () => {
  const [allBlogPosts, setAllBlogPosts] = useState<null | BlogPostProps[]>(
    null
  );
  const [error, setError] = useState<null | AxiosErrorProps>(null);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const blogPosts = (await axios.get("http://localhost:3000/posts")).data
          .allBlogPosts;
        setAllBlogPosts(blogPosts);
      } catch (err) {
        setError(err as AxiosErrorProps);
      }
    };

    getBlogPosts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage error={error} allBlogPosts={allBlogPosts}/>} />
          <Route path="/posts/:postTitle" element={<Post error={error} allBlogPosts={allBlogPosts}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
