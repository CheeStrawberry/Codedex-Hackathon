import React, { useEffect } from "react";
import "../css/ShareThis.css"; 

const ShareThis = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=6690901f595beb00197df92c&product=inline-share-buttons";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sharethis-inline-share-buttons"></div>
  );
};

export default ShareThis;
