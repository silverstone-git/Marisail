import React from "react";

const SearchBar = ({ selectedTags, removeTag, onChange }) => {
  return (
    <div id="search-bar">
      <h3 className="h3-0">Your Engine Search</h3>
      <div
        id="selected-tags"
        style={{ borderBottom: "2px solid rgb(245, 245, 245)", width: "80%" }}
      >
        {selectedTags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
            <span
              className="close-button"
              onClick={() => removeTag(tag)}
              style={{ color: "black" }}
            >
              ×
            </span>
            {/* <input
              type="text"
              placeholder="Search..."
              onChange={onChange} // Attach the onChange handler
              style={{ marginTop: "10px", width: "80%" }}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
