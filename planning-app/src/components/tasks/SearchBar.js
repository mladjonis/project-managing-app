import React, { useState, useEffect } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = () => {
      console.log("search bar search");
      onSubmit(debouncedTerm);
    };

    // if (debouncedTerm) {
    search();
    // }
  }, [debouncedTerm, onSubmit]);

  return (
    <div className="ui segment">
      <div className="field">
        <label htmlFor="search">Term Search</label>
        <input
          type="text"
          id="search"
          name="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
