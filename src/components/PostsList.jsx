import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHendler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHendler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHendler}
          onAuthorChange={authorChangeHendler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post autor={enteredAuthor} body={enteredBody} />
        <Post autor="claudiu" body="React.js is not!" />
      </ul>
    </>
  );
}

export default PostsList;
