import classes from "../UI/Wrapper.module.css";

const Wrapper = props => {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  )
}

export default Wrapper;
