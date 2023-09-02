import { useEffect, useState } from "react";
import { BlogPostProps } from "../../types/BlogPostProps";
import { LandingPageProps } from "../../types/LandingPageProps";
import { useLocation } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentSection } from "../CommentSection/CommentSection";


export const Post = ({ error, allBlogPosts }: LandingPageProps) => {
  const id = useLocation();
  const [currentPost, setCurrentPost] = useState<BlogPostProps | null>(null);

  useEffect(() => {
    if (allBlogPosts) {
      const post = allBlogPosts.find((post) => post._id === id.state.id);
      setCurrentPost(post || null);
    }
  }, [allBlogPosts, id.state.id]);

  return (
    <main className="p-24">
      {error ? (
        <>
          <h2 className="text-3xl mb-8">Something went wrong...</h2>
          <ul className="text-red-400">
            <li key={error.name}>Name: {error.name}</li>
            <li key={error.message}>Message: {error.message}</li>
            <li key={error.code}>Code: {error.code}</li>
          </ul>
        </>
      ) : currentPost ? (
        <>
          <header className="text-5xl opacity-80">
            <h2>{currentPost.title}</h2>
          </header>
          <h5 className="text-lg opacity-[65%] mt-4 ml-1 mb-12">by Me</h5>
          <article>
            <h3>{currentPost.content}</h3>
          </article>
        </>
      ) : (
        <Spinner />
      )}
      <CommentSection postId={id.state.id}/>
      <CommentForm postId={id.state.id}/>
    </main>
  );
};
