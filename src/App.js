import "./App.css";
import { useState } from "react";
import LanguageSelectionComponent from "./LanguageSelectionComponent";

function App() {
  const [selectedOptions, setSelectedOptions] = useState();
  const options = ["en-US", "en-GB", "pt-BR"];
  const handleSelect = (e) => {
    setSelectedOptions(e.target.value);
  };
  const displayDate =
    selectedOptions &&
    new Intl.DateTimeFormat(selectedOptions, {
      year: "numeric",
      month: "numeric",
      day: "numeric",

      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
      .format(new Date())
      .toString();

  return (
    <div className="App">
      <div>Hello</div>
      <LanguageSelectionComponent
        options={options.map((v) => {
          return { value: v, label: v };
        })}
        selectedOptions={selectedOptions}
        handleSelect={handleSelect}
      />
      {displayDate || "-"}
    </div>
  );
}

export default App;
