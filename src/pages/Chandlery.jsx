import ChandleryAdvert from "../components/Shop/ShopAdvert";
import ChandlerySearch from "../components/Shop/ShopSearch";
import PropTypes from "prop-types";

const Chandlery = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "search" ? <ChandlerySearch /> : <ChandleryAdvert />}
    </main>
  );
};

Chandlery.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Chandlery;
