import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { WordCard } from '../WordCard/WordCard';

function FlashCards() {
  const { words, isLoading, error } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1,
    );
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="card-container">
      {words.length > 0 && (
        <div>
          <WordCard word={words[currentIndex]} />
          <button className="btn-prev" onClick={handlePreviousCard}></button>
          <button className="btn-next" onClick={handleNextCard}></button>
        </div>
      )}
    </div>
  );
}

FlashCards.defaultProps = {
  words: [],
};

export { FlashCards };
