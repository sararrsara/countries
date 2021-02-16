import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Countries from "../regions/Countries";

const options = [
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "Americas",
    value: "americas",
  },
  {
    label: "Oceania",
    value: "oceania",
  },
  {
    label: "Africa",
    value: "africa",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />

      <div>
        <Countries regionSelected={selected.value} />
      </div>
    </div>
  );
};
