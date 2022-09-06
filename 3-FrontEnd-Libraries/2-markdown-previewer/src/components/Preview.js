import Markdown from "marked-react";

// Assets
import styles from "../assets/css/components/Preview.module.css";

// Custom hooks
import useHeaderIcon from "../hooks/use-header-icon";

const Preview = (props) => {
  const payLoad = { ...useHeaderIcon("Preview", props.onDisplayChange) };
  const { content, cssClassesPreview } = payLoad;

  return (
    <section
      className={`${styles["preview-section"]} ${cssClassesPreview.Preview}`}>
      <header
        className={`${styles["preview-header"]} ${cssClassesPreview.PreviewHeader}`}>
        <h2>Preview</h2>
        {content}
      </header>
      <div
        className={`${styles["preview-div"]} ${cssClassesPreview.PreviewDiv}`}
        id="preview">
        <Markdown value={props.editorText} />
      </div>
    </section>
  );
};

export default Preview;
