import { useState } from "react";

// Assets
import editorStyles from "../assets/css/components/Editor.module.css";
import previewStyles from "../assets/css/components/Preview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faCompress } from "@fortawesome/free-solid-svg-icons";

const useHeaderIcon = (component, changeDisplay) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const payLoad = {
    content: undefined,
    cssClassesEditor: undefined,
    cssClassesPreview: undefined
  };

  // event handler when expand or collapse is clicked
  const iconHandler = () => {
    if (isExpanded) {
      setIsExpanded((prevState) => {
        return !prevState;
      });
      changeDisplay({ Editor: true, Preview: true });
    } else {
      setIsExpanded((prevState) => {
        return !prevState;
      });
      if (component === "Editor") {
        changeDisplay({ Editor: true, Preview: false });
      } else if (component === "Preview") {
        changeDisplay({ Editor: false, Preview: true });
      }
    }
  };

  // Setting content and editorStyles to be sent to components
  if (isExpanded) {
    // Set JSX icon
    payLoad.content = (
      <FontAwesomeIcon
        className={editorStyles["editor-icon"]}
        icon={faCompress}
        onClick={iconHandler}
      />
    );
    // Set css classes for editor
    payLoad.cssClassesEditor = {
      Editor: editorStyles["expand-editor"],
      EditorHeader: editorStyles["expand-editor-header"],
      EditorTextareaContainer: editorStyles["expand-editor-textarea-container"]
    };
    // Set css classes for preview
    payLoad.cssClassesPreview = {
      Preview: previewStyles["expand-preview"],
      PreviewHeader: previewStyles["expand-preview-header"],
      PreviewDiv: previewStyles["expand-preview-div"]
    };
  } else {
    // Set JSX icon
    payLoad.content = (
      <FontAwesomeIcon
        className={editorStyles["editor-icon"]}
        icon={faArrowsAlt}
        onClick={iconHandler}
      />
    );
    // Set css classes for editor
    payLoad.cssClassesEditor = {
      Editor: editorStyles["collapse-editor"],
      EditorHeader: editorStyles["collapse-editor-header"],
      EditorTextareaContainer:
        editorStyles["collapse-editor-textarea-container"]
    };
    // Set css classes for preview
    payLoad.cssClassesPreview = {
      Preview: previewStyles["collapse-preview"],
      PreviewHeader: previewStyles["collapse-preview-header"],
      PreviewDiv: previewStyles["collapse-preview-div"]
    };
  }

  return payLoad;
};

export default useHeaderIcon;
