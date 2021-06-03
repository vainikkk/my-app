import React, { ChangeEventHandler } from "react";
type Props = {
  handleSelect: ChangeEventHandler;
  selectedOptions: string;
  options: [{ value: string; label: string }];
};
const LanguageSelectionComponent = ({ selectedOptions, handleSelect, options }: Props) => {
  return (
    <div>
      <select value={selectedOptions} onChange={handleSelect}>
        {options.map((v) => (
          <option value={v.value} key={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelectionComponent;
