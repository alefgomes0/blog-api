export type BlogPostProps = {
  title: string,
  synopsis: string,
  content: string,
  date?: Date,
  comments?: [],
  is_published: string,
  lp_image_path?: string,
  inside_image_path?: string
}