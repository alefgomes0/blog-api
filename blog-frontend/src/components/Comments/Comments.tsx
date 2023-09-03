import { CommentForm } from "../CommentForm/CommentForm";
import { CommentSection } from "../CommentSection/CommentSection";
import { CommentsProps } from "../../types/CommentProps";


export const Comments = ({ postId }: CommentsProps) => {
  return (
    <div>
      <CommentForm postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
};
