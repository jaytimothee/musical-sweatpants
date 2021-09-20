import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import "../../css/BreadCrumb.css"

const BreadCrumbs = (props) => {

  const [crumbs, setCrumbs] = useState()

  useEffect(() => {
    props.routes.forEach((route) => {
      if (route.path === props.match.path) {
        setCrumbs(props.routes.slice(0, (props.routes.indexOf(route) + 1)))
      }
    })
  }, [props.match.path, props.routes])

  return (
    <div className="margin-10">
      {crumbs?.map(({ name, path }, key) => {
        return (
          key + 1 === crumbs.length ? (
            <span key={key} className="light-text">
              {name}
            </span>
          ) : (
            <Link
              key={key}
              className="bread-crumb-spacing light-text link-text link"
              to={path}
            >
              {name} <span className="light-text bread-crumb-spacing">&#62;</span>
            </Link>
          )
        )
      }
      )}
    </div>
  );
};

export default BreadCrumbs;
