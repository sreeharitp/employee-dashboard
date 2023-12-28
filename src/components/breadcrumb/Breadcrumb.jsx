import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center gap-2 text-grey cursor-pointer">
      <GoArrowLeft size={14} onClick={goBack} className="text-[#58606b]"/>
      <div>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span className="capitalize text-[13px] text-[#58606b]" key={name}>
              {name}
            </span>
          ) : (
            <span className="capitalize text-[13px] text-[#58606b]" key={name}>
              <Link to={routeTo}>{name}</Link> {"/"}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
