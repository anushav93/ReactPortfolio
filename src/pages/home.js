import React, { useState, useEffect, useParams } from "react";
export default function Home(props) {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  //const { addToast } = useToasts()

  return (
    <div className="page-content container">
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="homepage-content">
          <img
            src="https://react-portfolioimages.s3.us-east-2.amazonaws.com/image_processing20200427-23544-1c8oo9j.gif"
            className="img img-fluid homebanner"
          ></img>
        </div>
        <div className="d-flex flex-wrap homepage-content align-content-center">
          <div className="homepage-text ">
            <h1 className="theme-pink d-inline-block"> AV</h1>
            <h1 className="theme-blue d-inline-block"> Solutions</h1>
            <h4>
              <b>We Create Beautiful Web Solutions</b>
            </h4>
            <p className="text-muted">
              Our customers believe that what their users see and how they
              interact with their app is a key success for their business
              scaling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
