import React, { useState } from 'react';
import { WordCard } from './WordCard';

function FlashCards({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  words: 'Ошибка сервера',
};

export { FlashCards };
