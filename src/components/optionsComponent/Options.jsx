import { clsx } from "clsx";
import css from "./Options.module.css";
const Options = ({ onClick, handleResetFeedback, totalFeedback }) => {
  return (
    <div className={css.buttonBox}>
      <button
        className={css.button}
        onClick={() => onClick("good")}
        type="button"
      >
        <span className={clsx(css.buttonLine, css.buttonLineTop)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineBottom)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineRight)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineLeft)}></span>
        Good
      </button>
      <button
        className={css.button}
        onClick={() => onClick("neutral")}
        type="button"
      >
        {" "}
        <span className={clsx(css.buttonLine, css.buttonLineTop)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineBottom)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineRight)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineLeft)}></span>
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => onClick("bad")}
        type="button"
      >
        {" "}
        <span className={clsx(css.buttonLine, css.buttonLineTop)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineBottom)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineRight)}></span>
        <span className={clsx(css.buttonLine, css.buttonLineLeft)}></span>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.button}
          onClick={handleResetFeedback}
          type="button"
        >
          {" "}
          <span className={clsx(css.buttonLine, css.buttonLineTop)}></span>
          <span className={clsx(css.buttonLine, css.buttonLineBottom)}></span>
          <span className={clsx(css.buttonLine, css.buttonLineRight)}></span>
          <span className={clsx(css.buttonLine, css.buttonLineLeft)}></span>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
