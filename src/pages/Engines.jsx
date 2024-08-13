import EngineAdvert from "../components/Engine/EngineAdvert";
import EngineSearch from "../components/Engine/EngineSearch";
import PropTypes from 'prop-types';

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
