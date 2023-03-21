import "./styles.css";
import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";
export default function App({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(typeof content);

  // const config = useMemo(
  // 	{
  // 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  // 		placeholder: placeholder || 'Start typings...'
  // 	},
  // 	[placeholder]
  // );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />

      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        // tabIndex={1} // tabIndex of textarea
        // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
}
