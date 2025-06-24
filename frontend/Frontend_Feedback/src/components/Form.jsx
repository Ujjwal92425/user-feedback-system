import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      feedback: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      feedback: Yup.string().required("Feedback is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("http://localhost:5000/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          alert("Feedback submitted successfully");
          resetForm();
        } 
        else {
          alert("Something went wrong while submitting");
        }
      } 
      catch (error) {
        alert("Server error");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Submit your Feedback</h3>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formik.values.feedback}
          onChange={formik.handleChange}
        />
        {formik.touched.feedback && formik.errors.feedback && (
          <div>{formik.errors.feedback}</div>
        )}
      </div>

      <div>
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option value="">Select Category</option>
          <option value="bug">Bug Report</option>
          <option value="suggestion">Suggestion</option>
          <option value="feature">Feature Request</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
