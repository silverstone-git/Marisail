import CharterAdvert from "../components/Charter/CharterAdvert";
import CharterSearch from "../components/Charter/CharterSearch";
import PropTypes from "prop-types";

const Charters = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "charters" ? <CharterAdvert /> : <CharterSearch />}
    </main>
  );
};

Charters.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Charters;