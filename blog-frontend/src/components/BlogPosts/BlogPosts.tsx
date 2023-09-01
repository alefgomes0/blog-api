import { useEffect, useState } from "react";
import axios from "axios";
import { BlogPostProps } from "../../types/BlogPostProps";
import { AxiosErrorProps } from "../../types/AxiosErrorProps";

export const BlogPosts = () => {
  const [allBlogPosts, setAllBlogPosts] = useState<null | BlogPostProps[]>(
    null
  );
  const [error, setError] = useState<null | AxiosErrorProps>(null);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const blogPosts = (await axios.get("http://localhost:30001")).data
          .allBlogPosts;
        setAllBlogPosts(blogPosts);
        console.log(blogPosts);
      } catch (err) {
        setError(err as AxiosErrorProps);
        console.error(err);
      }
    };

    getBlogPosts();
  }, []);

  return (
    <>
      {error ? (
        <>
          <h2 className="text-3xl mb-8">Something went wrong...</h2>
          <ul className="text-red-400">
            <li>Name: {error.name}</li>
            <li>Message: {error.message}</li>
            <li>Code: {error.code}</li>
          </ul>
        </>
      ) : (
        <>
          <h2>{allBlogPosts ? `${allBlogPosts[0].title}` : ""}</h2>
        </>
      )}
    </>
  );
};
