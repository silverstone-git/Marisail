import TrailersAdvert from "../components/Trailers/TrailersAdvert";
import TrailersSearch from "../components/Trailers/TrailersSearch";
import PropTypes from "prop-types";

const Trailers = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "search" ? <TrailersSearch /> : <TrailersAdvert />}
    </main>
  );
};

Trailers.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Trailers;
