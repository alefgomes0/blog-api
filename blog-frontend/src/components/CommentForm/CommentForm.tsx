import axios from "axios";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

type CommentChildProps = {
  postId: string;
  newMessageSent: boolean;
  changeNewMessageSent: () => void;
};

type FieldValuesProps = {
  name: string;
  message: string;
};

export const CommentForm = ({
  postId,
  changeNewMessageSent,
}: CommentChildProps) => {
  const [httpError, setHTTPError] = useState<null | unknown>(null);

  const handleSubmitForm = async (fieldValues: FieldValuesProps) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/posts/${postId}/comments`,
        {
          name: fieldValues.name,
          message: fieldValues.message,
        }
      );

      if (response.status === 200) {
        fieldValues.name = "";
        fieldValues.message = "";
        changeNewMessageSent();
      }
    } catch (err) {
      setHTTPError(err);
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", message: "" }}
      onSubmit={(values) => handleSubmitForm(values)}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required("This field is required")
          .min(2, "'Name' must contain at least 2 characters")
          .max(50, "'Name' must contain at max 50 characters"),
        message: Yup.string()
          .required("This field is required")
          .min(2, "'Message' must contain at least 2 characters")
          .max(300, "'Message' must contain at least 300 characters"),
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
            <label htmlFor="name" className="mb-2 mt-8">
              Name
            </label>
            <input
              id="name"
              placeholder="John Smith"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`pl-2 shadow-inner bg-neutral-400 opacity-90 w-72 h-[28px] mb-1 focus:border-0 outline-0 rounded ${
                errors.name && touched.name
                  ? "focus:ring-red-400"
                  : "focus:ring-sky-300"
              } focus:ring-2 focus:ring-sky-300`}
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
              className={`pl-2 shadow-inner bg-neutral-400 opacity-90 w-96 h-44 mb-1 focus:border-0 outline-0 rounded focus:ring-2 ${
                errors.message && touched.message
                  ? "focus:ring-red-400"
                  : "focus:ring-sky-300"
              } focus:ring-sky-300`}
            />
            {errors.message && touched.message && (
              <h5 className="text-red-400">{errors.message}</h5>
            )}
            <button
              type="button"
              className="w-72 py-2 border-2 border-fuchsia-400 cursor-pointer rounded mt-6 hover:border-transparent hover:text-fuchsia-50 hover:bg-fuchsia-400 transition-colors ease-in-out shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              RESET
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-fuchsia-50 bg-fuchsia-700 w-72 py-2 mt-4 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]"
            >
              SEND
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
