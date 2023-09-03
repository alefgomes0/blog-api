import { CommentForm } from "../CommentForm/CommentForm";
import { CommentSection } from "../CommentSection/CommentSection";
import { CommentsProps } from "../../types/CommentProps";
import { useState } from "react";

export const Comments = ({ postId }: CommentsProps) => {
  const [newMessageSent, setNewMessageSent] = useState(false);

  return (
    <div>
      <CommentForm
        newMessageSent={newMessageSent}
        changeNewMessageSent={() => setNewMessageSent(!newMessageSent)}
        postId={postId}
      />
      <CommentSection
        newMessageSent={newMessageSent}
        changeNewMessageSent={() => setNewMessageSent(!newMessageSent)}
        postId={postId}
      />
    </div>
  );
};
