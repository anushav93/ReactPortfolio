import React, { useState, useEffect, useParams, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
// import FileUploader from "../components/fileupload";

export default function AddWorkExperience(props) {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  //const { addToast } = useToasts()

  const [state, setState] = useState({
    company: "",
    title: "",
    startdate: "",
    enddate: "",
    duties: "",
    image: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetch(
      "https://na1c4n886a.execute-api.us-east-2.amazonaws.com/default/fetchWorkExperience",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "LNhsAamxud2w9wRWHLsle5UTbu2E4P2K1OWZHDtk",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <React.Fragment>
      <div className="page-content">
        {formSubmitted ? (
          <>Form Submitted Successfully </>
        ) : (
          <div
            className="d-flex flex-column mx-auto"
            style={{
              maxWidth: "400px",
              boxShadow: "0 5px 15px #dcdada, 0 2px 3px #dcdada",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2 className="text-center mb-3 theme-hover form-header">
              Add Work Experience
            </h2>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                value={state.company}
                onChange={(e) =>
                  setState({ ...state, company: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={state.title}
                onChange={(e) => setState({ ...state, title: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Duties</label>
              <textarea
                type="text"
                className="form-control"
                id="duties"
                value={state.duties}
                onChange={(e) => setState({ ...state, duties: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>StartDate</label>
              <input
                type="date"
                className="form-control"
                id="startdate"
                value={state.startdate}
                onChange={(e) =>
                  setState({ ...state, startdate: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>EndDate</label>
              <input
                type="date"
                className="form-control"
                id="startdate"
                value={state.enddate}
                onChange={(e) =>
                  setState({ ...state, enddate: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>ImageURL</label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={state.image}
                onChange={(e) => setState({ ...state, image: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
