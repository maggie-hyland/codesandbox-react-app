import React from "react";
import "./OpenSource.css";

export default function OpenSource() {
  return (
    <div className="col" id="open-source">
      Developed by Maggie Hyland. Open-sourced on
      <a
        href="https://github.com/maggie-hyland/codesandbox-react-app"
        id="github-link"
      >
        {" "}
        GitHub{" "}
      </a>
      and hosted on Netlify.
    </div>
  );
}
