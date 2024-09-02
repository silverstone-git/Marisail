import MyEngine from "../components/Services/MyEngine";
import PropTypes from "prop-types";
import TrailersAdvert from "../components/Trailers/TrailersAdvert";

const Services = ({ type }) => {
  // Example user object
  const user = {
    id: 123,
    name: "Jane",
    email: "jane@yopmail.com",
    role: "admin",
  };

  // Convert the user object to a JSON string and store it in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  return (
    <main
      style={{
        minHeight: `100vh`,
        overflow: "hidden",
      }}
    >
      {type === "myEngines" ? <MyEngine /> : <TrailersAdvert />}
    </main>
  );
};

Services.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Services;
