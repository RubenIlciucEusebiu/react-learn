import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({onCancel,onAddPost}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");


  function bodyChangeHendler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHendler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandller(event) {
    event.preventDefault();
    const postData={
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandller}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHendler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHendler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
