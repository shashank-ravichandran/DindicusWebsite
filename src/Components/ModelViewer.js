import { useEffect } from "react";
import * as NGL from "ngl";

export const ModelViewer = () => {
  let stage = null;

  useEffect(() => {
    stage = new NGL.Stage("modelWindow");
    stage.loadFile("https://files.rcsb.org/view/1JUG.pdb", {
      defaultRepresentation: true,
    });
    stage.autoView();
    stage.setParameters({backgroundColor: "white"})
  }, []);

  return (
    <div className="accordian d-flex">
      <div id="modelWindow" className="window"></div>
    </div>
  );
};
