import { BlogPosts } from "../../components/BlogPosts/BlogPosts";
import { LandingPageProps } from "../../types/LandingPageProps";

export const LandingPage = (props: LandingPageProps) => {
  return (
    <main className="h-[calc(100dvh-50px)] bg-fuchsia-50 px-24">
      <BlogPosts error={props.error} allBlogPosts={props.allBlogPosts} />
    </main>
  );
};
