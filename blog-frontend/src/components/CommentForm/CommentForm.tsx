import axios from "axios";
import { CommentProps } from "../../types/CommentProps";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export const CommentForm = (props: CommentProps) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [error, setError] = useState<null | unknown>(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/posts/${props.postId}/comments`,
        {
          name: formData.name,
          message: formData.message,
        }
      );

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
    <Formik
      initialValues={{ name: "", message: "" }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required").min(2).max(50),
        message: Yup.string().required("Required").min(2).max(300),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              id="name"
              placeholder="John Smith"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="pl-2 shadow-inner bg-neutral-400 opacity-90 w-72 mb-1 focus:border-0 outline-0 rounded focus:ring-2 focus:ring-sky-300"
            />
            {errors.name && touched.name && (
              <h5 className="text-red-400">{errors.name}</h5>
            )}
            <label htmlFor="message" className="mb-2 mt-6">
              Message
            </label>
            <textarea
              id="message"
              placeholder="..."
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="pl-2 shadow-inner bg-neutral-400 opacity-90 w-96 h-44 mb-1 focus:border-0 outline-0 rounded focus:ring-2 focus:ring-sky-300"
            />
            {errors.message && touched.message && (
              <h5 className="text-red-400">{errors.message}</h5>
            )}
            <button
              type="button"
              className="w-min px-24 py-2 border-2 border-fuchsia-400 cursor-pointer rounded mt-6 hover:border-transparent hover:text-fuchsia-50 hover:bg-fuchsia-400 transition-colors ease-in-out shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              RESET
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-fuchsia-50 bg-fuchsia-700 w-min px-24 py-2 mt-4 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
            >
              SEND
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
