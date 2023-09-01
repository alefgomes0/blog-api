type CommentSectionProps = {
  postId: string;
};

export const CommentSection = (props: CommentSectionProps) => {
  return (
    <form
      method="POST"
      action={`http://localhost:3000/posts/${props.postId}/comments`}
      className="flex flex-col mt-6 "
    >
      <label htmlFor="name" className="mb-2">
        Name
      </label>
      <input type="text" name="name" title="name" placeholder="John Smith" className="pl-2 shadow-inner bg-neutral-200 opacity-90 w-72 mb-4 focus:border-0 outline-0 rounded focus:ring-2 focus:ring-sky-300" />
      <label htmlFor="message" className="mb-2">Message</label>
      <textarea name="message" title="message" placeholder="..." className="pl-2 shadow-inner bg-neutral-200 opacity-90 w-96 h-48 mb-6 rounded focus:border-0 outline-0 rounded focus:ring-2 focus:ring-sky-300" />
      <button type="submit" className="bg-fuchsia-700 w-min text-slate-100 rounded-md px-12 py-2 shadow-[0_2px_2px_0_rgba(0, 0, 0, 0.3)] hover:shadow-inner">
        SEND
      </button>
    </form>
  );
};
