import React, { useState, useEffect } from 'react';
import './App.scss';
import './WordCard.scss';

function WordCard({ word }) {
  const [showTranslation, setShowTranslation] = useState(false); // состояние для показа/скрытия перевода

  //Для того, чтобы у новой карточки перевод был снова спрятан
  useEffect(() => {
    setShowTranslation(false);
  }, [word]);

  const [learnedWords, setLearnedWords] = useState(0);

  const handleShowTranslation = () => {
    setShowTranslation(true);
    setLearnedWords((prevCount) => prevCount + 1);
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
      <p>Изучено слов: {learnedWords}</p>
    </div>
  );
}

export { WordCard };
