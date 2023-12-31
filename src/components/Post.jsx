import classes from './Post.module.css';

function Post(props) {
    return ( 
      <li className={classes.post}>
        <p className={classes.author}>{props.autor}</p>
        <p className={classes.text}>{props.body}</p>
      </li>
    )
}

export default Post;