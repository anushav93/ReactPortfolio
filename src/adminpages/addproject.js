import React, { useState, useEffect, useParams, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddProject(props) {
  const [state, setState] = useState({
    title: "",
    descripiton: "",
    shortdescription: "",
    technologiesused: "",
    websitelink: "",
    githublink: "",
    startdate: "",
    enddate: "",
    image: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const addProject = () => {
    fetch(
      "https://amrk8trped.execute-api.us-east-2.amazonaws.com/default/addProject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "2Ghr3vYhBH3CjEtdnQO9J5q3KwDvFidU31BiUYQF",
        },
        body: JSON.stringify({
          id: uuidv4(),
          title: state.title,
          desc: state.descripiton,
          shortdescription: state.shortdescription,
          technologiesused: state.technologiesused,
          image: state.image,
          websitelink: state.websitelink,
          githublink: state.websitelink,
          startdate: state.startdate,
          enddate: state.enddate,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data === "Success") {
          setFormSubmitted(true);
        } else {
          console.log(data);
          setFormSubmitted(false);
        }
      });
  };

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
              Add Project
            </h2>

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
              <label>Short Description</label>
              <input
                type="text"
                className="form-control"
                id="shortdescription"
                value={state.shortdescription}
                onChange={(e) =>
                  setState({ ...state, shortdescription: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Website Link</label>
              <input
                type="text"
                className="form-control"
                id="websitelink"
                value={state.websitelink}
                onChange={(e) =>
                  setState({ ...state, websitelink: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>GitHub Link</label>
              <input
                type="text"
                className="form-control"
                id="githublink"
                value={state.githublink}
                onChange={(e) =>
                  setState({ ...state, githublink: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                value={state.descripiton}
                onChange={(e) =>
                  setState({ ...state, descripiton: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Technologies Used</label>
              <textarea
                type="text"
                className="form-control"
                id="technologiesused"
                value={state.technologiesused}
                onChange={(e) =>
                  setState({ ...state, technologiesused: e.target.value })
                }
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

            <button
              type="submit"
              onClick={addProject}
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
