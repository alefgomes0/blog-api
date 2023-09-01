import { useParams } from "react-router-dom"

export const Post = () => {
  const postTitle = useParams()
  console.log(postTitle)
  return (
    <h2>sssssssssss</h2>
  )
}