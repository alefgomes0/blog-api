import { useEffect, useState } from "react";
import { CommentsProps } from "../../types/CommentProps";
import axios from "axios";
import { AxiosErrorProps } from "../../types/AxiosErrorProps";

type MessageProps = {
  _id: string;
  name: string;
  message: string;
  date: Date;
  date_formatted: string;
};

export const CommentSection = ({ postId }: CommentsProps) => {
  const [comments, setComments] = useState<null | MessageProps[]>(null);
  const [error, setError] = useState<null | AxiosErrorProps>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${postId}/comments`
        );
        console.log(response.data.comments);
        setComments(response.data.comments);
      } catch (err) {
        console.log(err);
        setError(err as AxiosErrorProps);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <section className="mt-16">
      {error ? (
        <div>
          <h4>There was an error</h4>
          <h4>{error.message}</h4>
        </div>
      ) : (
        <div className="mt-16">
          <h4 className="text-4xl">{comments?.length} comments</h4>
          {comments?.map((comment) => {
            return (
              <div key={comment._id} className="grid mt-8 border-2 border-fuchsia-200 py-4">
                <h5 className="text-xl font-semibold">{comment.name}</h5>
                <h5>{comment.date_formatted}</h5>
                <h5 className="mt-4">{comment.message}</h5>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
