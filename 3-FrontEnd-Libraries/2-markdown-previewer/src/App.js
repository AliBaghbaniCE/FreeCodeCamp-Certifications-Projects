import { useState } from "react";

// components
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const App = () => {
  const [componentsDisplay, setComponentsDisplay] = useState({
    Editor: true,
    Preview: true
  });

  const [editorText, SetEditorText] = useState("");

  const displayChangeHandler = (displayChangedObj) => {
    setComponentsDisplay({
      Editor: displayChangedObj.Editor,
      Preview: displayChangedObj.Preview
    });
  };

  const loadComponentHandler = (data) => {
    SetEditorText(data);
  };

  return (
    <main>
      {componentsDisplay.Editor && (
        <Editor
          onDisplayChange={displayChangeHandler}
          onLoadComponent={loadComponentHandler}
        />
      )}
      {componentsDisplay.Preview && (
        <Preview
          onDisplayChange={displayChangeHandler}
          editorText={editorText}
        />
      )}
    </main>
  );
};

export default App;
