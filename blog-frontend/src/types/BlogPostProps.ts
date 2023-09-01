export type BlogPostProps = {
  _id: string,
  title: string,
  synopsis: string,
  content: string,
  date?: Date,
  comments?: [],
  is_published: string,
}