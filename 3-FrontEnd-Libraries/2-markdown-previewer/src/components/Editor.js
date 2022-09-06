import { useEffect } from "react";

// Assets
import styles from "../assets/css/components/Editor.module.css";

// Custom hooks
import useHeaderIcon from "../hooks/use-header-icon";

let editorText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`;
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Editor = (props) => {
  const payLoad = { ...useHeaderIcon("Editor", props.onDisplayChange) };
  const { content, cssClassesEditor } = payLoad;

  useEffect(() => {
    props.onLoadComponent(editorText);
  }, []);

  return (
    <section
      className={`${styles["editor-section"]} ${cssClassesEditor.Editor}`}>
      <header
        className={`${styles["editor-header"]} ${cssClassesEditor.EditorHeader}`}>
        <h2>Editor</h2>
        {content}
      </header>
      <div className={`${cssClassesEditor.EditorTextareaContainer}`}>
        <textarea
          className={styles["editor-textarea"]}
          id="editor"
          rows="auto"
          cols="auto"
          value={editorText}></textarea>
      </div>
    </section>
  );
};

export default Editor;
