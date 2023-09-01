import { BlogPostProps } from "../../types/BlogPostProps";
import { LandingPageProps } from "../../types/LandingPageProps";
import { useLocation } from "react-router-dom";
import structuredClone from "@ungap/structured-clone"

export const Post = ({ error, allBlogPosts }: LandingPageProps) => {
  const id = useLocation();

  
  const currentPost = allBlogPosts?.filter(
    (post) => post._id === id.state.id
  ) as BlogPostProps[];
  

  const post = { post: currentPost[0] }


  return (
    <main className="p-24">
{/*       {error ? (
        <>
          <h2 className="text-3xl mb-8">Something went wrong...</h2>
          <ul className="text-red-400">
            <li key={error.name}>Name: {error.name}</li>
            <li key={error.message}>Message: {error.message}</li>
            <li key={error.code}>Code: {error.code}</li>
          </ul>
        </>
      ) : (
        <>
          <header className="text-5xl opacity-80">{post[0].title}</header>
          <h5 className="text-lg opacity-[65%] mt-4">by Me</h5>

          <article>
            {post[0].content}
          </article>
        </>
      )} */}
    </main>
  );
};
