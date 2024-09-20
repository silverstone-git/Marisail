// import BerthAdvert from "../components/Berth/BerthAdvert";
import PropTypes from "prop-types";
import CharterSearch from "../components/Charter/CharterSearch";

const Charter = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "search" ? <CharterSearch /> : <CharterSearch />}
    </main>
  );
};

Charter.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Charter;
