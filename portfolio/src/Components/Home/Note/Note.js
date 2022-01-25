import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";

export default function Note() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Architects Daughter"],
      },
    });
  }, []);

  return (
    <div  className="p-4">
      <div
        className=" d-flex flex-row justify-content-center align-items-center "
        style={{ fontFamily:'Architects Daughter'}}
      >
        <h2 className="bg-dark text-light  rounded-pill p-2"><i className="fa fa-code text-warning" ></i>Experienced on</h2>
      </div>
    </div>
  );
}
