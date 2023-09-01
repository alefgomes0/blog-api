type CommentSectionProps = {
  postId: string;
};

export const CommentSection = (props: CommentSectionProps) => {
  return (
    <form
      method="POST"
      action={`http://localhost:3000/${props.postId}/comments`}
      className="flex flex-col mt-6 "
    >
      <label htmlFor="name" className="mb-2">
        Name
      </label>
      <input type="text" name="name" className="bg-neutral-200 opacity-90 w-72 mb-4 rounded" />
      <label htmlFor="message mb-2">Message</label>
      <textarea name="message" className="bg-neutral-200 opacity-90 w-96 h-48 mb-6 rounded" />
      <button type="submit" className="bg-fuchsia-400 w-min text-slate-100 rounded-md px-12 py-2">
        SEND
      </button>
    </form>
  );
};
