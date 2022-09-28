import Link from "next/link";
import classes from "./Button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        {/* a tag를 추가해줘야지 자체 Link tag에 있는 a tag를 포착하지 않는다. */}
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
