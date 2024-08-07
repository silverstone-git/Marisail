import EngineAdvert from "../components/Engine/EngineAdvert";
import EngineSearch from "../components/Engine/EngineSearch";
import PropTypes from 'prop-types';

const Engines = ({ type }) => {
  console.log("001 Type--",type);
  
  return (
    <main
      style={{
        maxHeight: `100vh`,
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
