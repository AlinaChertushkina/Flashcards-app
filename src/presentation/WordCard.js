import React, { useState, useEffect } from 'react';
import './App.scss';
import './WordCard.scss';

function WordCard({ word }) {
  const [showTranslation, setShowTranslation] = useState(false); // состояние для показа/скрытия перевода

  //Для того, чтобы у новой карточки перевод был снова спрятан
  useEffect(() => {
    setShowTranslation(false);
  }, [word]);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word-card">
      <div className="word">{word.english}</div>
      <div className="transcription">{word.transcription}</div>
      {showTranslation && <div>{word.russian}</div>}
      {!showTranslation && (
        <button
          className="show-translation-btn"
          onClick={handleShowTranslation}
        >
          Показать перевод
        </button>
      )}
    </div>
  );
}

export { WordCard };
