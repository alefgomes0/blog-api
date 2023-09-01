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
      <input type="text" name="name" className="bg-neutral-200 opacity-90 w-72 mb-4 focus:border-0 outline-0 rounded focus:ring-2 focus:ring-sky-300" />
      <label htmlFor="message pb-3">Message</label>
      <textarea name="message" className="bg-neutral-200 opacity-90 w-96 h-48 mb-6 rounded focus:border-0 outline-0 rounded focus:ring-2 focus:ring-sky-300" />
      <button type="submit" className="bg-fuchsia-700 w-min text-slate-100 rounded-md px-12 py-2 shadow-2xl">
        SEND
      </button>
    </form>
  );
};
