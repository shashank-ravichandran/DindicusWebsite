import { useEffect, useState, useRef } from "react";
import * as mol from "3dmol";
import axios from "axios";

export const ListCard = (props) => {
  let [toggleWindow, setToggleWindow] = useState();
  let [structData, setStructData] = useState();
  let viewer = null;
  const viewerRef = useRef(null);

  useEffect(() => {
    setToggleWindow(false);
  }, []);

  const renderStructure = () => {
    const viewerElement = document.querySelector(".mol-viewer");
    viewer = mol.createViewer(viewerElement);
    viewer.setBackgroundColor(0xffffff);
    viewer.addModel(structData, "pdb");
    viewer.setStyle({}, { cartoon: {} });

    viewer.zoomTo();
    viewer.render();
  };

  const loadStructure = () => {
    axios.get(`https://files.rcsb.org/download/1JUG.pdb`).then((response) => {
      console.log(response.data);
      setStructData(response.data);
    });
  };

  return (
    <div className="col-12">
      <div
        className={`mt-2 list-card ${
          toggleWindow ? "window-open-border" : "window-close-border"
        }`}
      >
        <b className="card-header my-auto col-9 px-3">{props.card.header}</b>
        <div className="col-3 d-flex justify-content-end">
          <button
            className="card-head-btn view-btn"
            onClick={() => setToggleWindow(!toggleWindow)}
          >
            <span className="material-symbols-outlined">visibility</span>
            <span className="my-auto mx-1">View Model</span>
          </button>
          <a className="d-flex align-items-center" href="">
            <button className="card-head-btn">
              <span className="material-symbols-outlined">download</span>
              <span className="my-auto mx-1">Download</span>
            </button>
          </a>
        </div>
      </div>
      {toggleWindow && <div className="window mx-auto mb-1"></div>}
    </div>
  );
};
