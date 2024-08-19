import React from "react";

const SearchBar = ({ selectedTags, removeTag }) => {
  return (
    <div id="search-bar">
      {/* <input type="text" placeholder="Search..." readOnly /> */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
