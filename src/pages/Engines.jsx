import React from "react";
const EngineAdvert = React.lazy(() => import('../components/Engine/EngineAdvert'));
const EngineSearch = React.lazy(() => import('../components/Engine/EngineSearch'));
import PropTypes from "prop-types";

const Engines = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "search" ? <EngineAdvert /> : <EngineSearch />}
    </main>
  );
};

Engines.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Engines;
