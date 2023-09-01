import { AxiosErrorProps } from "../types/AxiosErrorProps";
import { BlogPostProps } from "../types/BlogPostProps";

export type LandingPageProps = {
  error: null | AxiosErrorProps;
  allBlogPosts: null | BlogPostProps[];
};