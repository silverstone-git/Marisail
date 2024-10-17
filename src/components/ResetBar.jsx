import PropTypes from 'prop-types';

const ResetBar = ({ selectedTags, removeTag, resetTags }) => {
  return (
    <div id="search-bar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        {/* <h3 className="h3-0">Your Engine Search</h3> */}
        {Object.keys(selectedTags).length !== 0 && (
          <span
            onClick={resetTags}
            style={{
              cursor: "pointer",
              color: "Black",
              fontSize: "12px",
              marginRight: "10px",
            }}
           >
            Reset
          </span>
        )}
      </div> 

      <div id="selected-tags">
      {Object.keys(selectedTags).map((key) => (
        <div
            className="tag"
            key={key}
            style={{
              display: "inline-block",
              marginBottom: "1rem",
              padding: "5px",
              background: "#e0e0e0",
              borderRadius: "5px",
            }}
          >
            {key}
            <span
              className="close-button"
              onClick={() => removeTag(key)}
              style={{ color: "black", marginLeft: "10px", cursor: "pointer" }}
            >
              ×
            </span>
          </div>
            ))}
      </div>
    </div>
  );
};

ResetBar.propTypes = {
    selectedTags: PropTypes.object.isRequired,
    removeTag: PropTypes.func.isRequired,
    resetTags: PropTypes.func.isRequired,
  };

export default ResetBar;
