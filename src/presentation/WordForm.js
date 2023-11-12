import React from 'react';

function WordForm({ newWord, handleSave, handleChange }) {
  return (
    <div className="word-form">
      <input
        type="text"
        placeholder="Английский"
        value={newWord.english}
        onChange={(e) => handleChange('english', e.target.value)}
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
        onChange={(e) => handleChange('russian', e.target.value)}
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
