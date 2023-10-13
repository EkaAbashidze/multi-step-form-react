import PageNumber from "./components/PageNumber";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (number) => {
    setActiveButton(number);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <PageNumber
            number={1}
            isActive={activeButton === 1}
            onClick={() => handleButtonClick(1)}
          />
          <PageNumber
            number={2}
            isActive={activeButton === 2}
            onClick={() => handleButtonClick(2)}
          />
          <PageNumber
            number={3}
            isActive={activeButton === 3}
            onClick={() => handleButtonClick(3)}
          />
          <PageNumber
            number={4}
            isActive={activeButton === 4}
            onClick={() => handleButtonClick(4)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
