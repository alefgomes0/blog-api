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
        const blogPosts = (await axios.get("http://localhost:3000/posts")).data
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
        <div className="grid gap-4 mt-24">
          {allBlogPosts?.map((blogPost) => {
            if (!blogPost.is_published) return;
            return (
              <div
                key={blogPost._id}
                className="grid grid-cols-[auto_1fr] gap-6 border-2 border-gray-200 shadow-sm hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.25)] cursor-pointer transition-shadow duration-200"
              >
                <img
                  src={`/images/${blogPost._id}/lp.png`}
                  alt="idk"
                  width="300px"
                  height="185px"
                  className="rounded"
                />
                <div>
                  <h2 className="text-4xl mb-4">{blogPost.title}</h2>
                  <h3 className="text opacity-80">{blogPost.synopsis}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
