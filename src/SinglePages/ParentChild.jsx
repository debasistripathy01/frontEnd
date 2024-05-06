// Parent to Child Flow of Props

import { useState } from "react";
import { ChildValue } from "./childComponent";

export const ParentToChild = () => {
  const [vlaue, setValue] = useState(10);

  return (
    <>
      <h1>Parent To child flow</h1>
      <ChildValue value={vlaue} />
      <button onClick={() => setValue(vlaue - 1)}> - </button>
      <button onClick={() => setValue(vlaue + 1)}> + </button>
    </>
  );
};
