import React, { useState, useEffect, useParams } from "react";
export default function About(props) {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  //const { addToast } = useToasts()

  return (
    <div className="about-content container">
      <div className="d-flex flex-column flex-md-row">
        <div>
          <img
            className="img img-fluid about-image"
            src="https://react-portfolioimages.s3.us-east-2.amazonaws.com/custom-software-development-agency.png"
          />
        </div>
        <div className="about-text d-flex flex-wrap align-content-center">
          <h1 className="theme-pink">Digital Experiences, Re-imagined</h1>
          <h4 className="theme-blue">
            A full-service digital agency with global capabilities across web
            design and development, marketing and branding. We create digital
            experiences that are human-centered and future proof.
          </h4>
        </div>
      </div>
    </div>
  );
}
