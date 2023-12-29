import React from 'react';

function WordForm({ newWord, handleSave, handleChange }) {
  const handleEnglishChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]+$/.test(value)) {
      // проверяем, что введены только латинские буквы и пробелы
      handleChange('english', value);
    }
  };

  const handleRussianChange = (e) => {
    const value = e.target.value;
    if (/^[а-яА-Я\s]+$/.test(value)) {
      // проверяем, что введены только кириллические буквы и пробелы
      handleChange('russian', value);
    }
  };

  return (
    <div className="word-form">
      <input
        type="text"
        placeholder="Английский"
        value={newWord.english}
        onChange={handleEnglishChange}
      />
      <input
        type="text"
        placeholder="Транскрипция"
        value={newWord.transcription}
        onChange={(e) => handleChange('transcription', e.target.value)}
      />
      <input
        type="text"
        placeholder="Русский"
        value={newWord.russian}
        onChange={handleRussianChange}
      />
      <input
        type="text"
        placeholder="Теги"
        value={newWord.tags}
        onChange={(e) => handleChange('tags', e.target.value)}
      />
      <button className="add-btn" onClick={handleSave}>
        Добавить
      </button>
    </div>
  );
}

export { WordForm };
