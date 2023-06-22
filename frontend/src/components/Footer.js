import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="facebook"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          />
        </div>
        <div className="card-name">
          <img
            alt="pinteres"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Pinterest.svg"
          />
        </div>
        <div className="card-name">
          <img
            alt="instagram"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="github"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
