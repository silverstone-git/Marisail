import BerthAdvert from "../components/Berth/BerthAdvert";
// import BerthSearch from "../components/Berth/BerthSearch";
import PropTypes from "prop-types";
import ShopSearch from "../components/Shop/ShopSearch";

const Chandlery = ({ type }) => {
  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "search" ? <ShopSearch /> : <BerthAdvert/>}
    </main>
  );
};

Chandlery.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Chandlery;
