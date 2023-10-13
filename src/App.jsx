import { useState } from "react";
import PageNumber from "./components/PageNumber";
import Navigation from "./components/Navigation";

function App() {
  const [activeButton, setActiveButton] = useState(1);
  const totalPages = 4;

  const handleButtonClick = (number) => {
    setActiveButton(number);
  };

  const handleNext = () => {
    if (activeButton < totalPages) {
      setActiveButton(activeButton + 1);
    }
  };

  const handlePrev = () => {
    if (activeButton > 1) {
      setActiveButton(activeButton - 1);
    }
  };

  return (
    <>
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
      <Navigation
        currentPage={activeButton}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}

export default App;
