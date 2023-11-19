import { FC } from "react";
import classes from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loaderText}>Loading...</div>
    </div>
  );
};

export default Loader;
