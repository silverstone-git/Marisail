// import BerthAdvert from "../components/Berth/BerthAdvert";
import PropTypes from "prop-types";
import TransportSearch from "../components/Transport/TransportSearch";

const Transport = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "search" ? <TransportSearch /> : <TransportSearch />}
    </main>
  );
};

Transport.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Transport;
