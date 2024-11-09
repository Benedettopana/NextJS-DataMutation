"use client";

import { useFormState } from "react-dom";
// import { useActionState } from "react";
import FormSumbit from "@/components/form-submit";

export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});
  // const [state, formAction] = useActionState(action, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {/* <input type="text" id="title" name="title" required /> */}
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          {/* <textarea id="content" name="content" rows="5" required /> */}
        </p>
        <p className="form-actions">
          <FormSumbit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
