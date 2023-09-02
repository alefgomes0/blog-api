import axios from "axios";
import { CommentProps } from "../../types/CommentProps";
import { useState } from "react";

type ValidationErrorProps = {
  path: string;
  message: string;
};

export const CommentForm = (props: CommentProps) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [error, setError] = useState<null | unknown>(null);
  const [validationError, setValidationError] = useState<
    null | ValidationErrorProps | ValidationErrorProps[]
  >(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/posts/${props.postId}/comments`,
        {
          name: formData.name,
          message: formData.message,
        }
      );
      if (response.data.errors) {
        console.log("oiiiiiiiiiiiii");
        return;
      }

      if (response.status === 200 || response.status === 304) {
        setFormData({
          name: "",
          message: "",
        });
      }

      console.log(response);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-6">
      <label htmlFor="name" className="mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        title="name"
        placeholder="John Smith"
        className="pl-2 shadow-inner bg-neutral-400 opacity-90 w-72 mb-4 focus:border-0 outline-0 rounded focus:ring-4 focus:ring-sky-300"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="message" className="mb-2">
        Message
      </label>
      <textarea
        name="message"
        title="message"
        placeholder="..."
        className="pl-2 shadow-inner bg-neutral-400 opacity-90 w-96 h-48 mb-6 rounded focus:border-0 outline-0 rounded focus:ring-4 focus:ring-sky-300"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-fuchsia-700 w-min text-slate-100 rounded-md px-12 py-2 shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset] border-none"
      >
        SEND
      </button>
    </form>
  );
};
