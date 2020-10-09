import React, { useState, useEffect, useParams } from "react";
export default function Portfolio(props) {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  //const { addToast } = useToasts()

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // getData();

    getData();
  });

  const getData = () => {
    fetch(
      "https://qhd0n7cbga.execute-api.us-east-2.amazonaws.com/default/fetchProjects",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "O5bBUE3Zsn1kLSjLiNZYSa7wjraMwXCs9vGVyWrg",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  };

  return (
    <div className="page-content container">
      {projects
        ? projects.map((res) => {
            return (
              <div className="project-card">
                <div className="d-flex justify-content-between">
                  {res.title ? <div className="title">{res.title}</div> : null}
                  {res.startdate ? (
                    <div className="date">
                      {res.startdate} to {res.enddate}
                    </div>
                  ) : null}
                </div>
                {res.shortdescription ? (
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: res.shortdescription }}
                  />
                ) : null}
                {res.desc ? (
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: res.desc }}
                  />
                ) : null}

                <div className="technologies-used">
                  Technologies Used: <i>{res.technologiesused}</i>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
