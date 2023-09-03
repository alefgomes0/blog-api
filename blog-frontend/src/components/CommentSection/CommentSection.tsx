import { useEffect, useState } from "react";
import { CommentProps } from "../../types/CommentProps";
import axios from "axios";
import { AxiosErrorProps } from "../../types/AxiosErrorProps";

type MessageProps = {
  _id: string;
  name: string;
  message: string;
  date: Date
};

export const CommentSection = ({ postId }: CommentProps) => {
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
              <div key={comment._id} className="mt-8">
                <h5>{comment.name}</h5>
                <h5>{comment.message}</h5>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
