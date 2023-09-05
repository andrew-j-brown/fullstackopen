import { useState } from "react";

const Filter = ({ filter, filterEntries }) => {
  return (
    <>
      Filter by name: <input value={filter} onChange={filterEntries} />
    </>
  );
};

export default Filter;
