import React from 'react';

const WordTable = ({
  words,
  editingId,
  newWord,
  setNewWord,
  handleEdit,
  handleDelete,
  handleSave,
  handleCancel,
}) => {
  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>Английский</th>
          <th>Транскрипция</th>
          <th>Русский</th>
          <th>Теги</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={newWord.english}
                  onChange={(e) =>
                    setNewWord({ ...newWord, english: e.target.value })
                  }
                />
              ) : (
                word.english
              )}
            </td>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={newWord.transcription}
                  onChange={(e) =>
                    setNewWord({
                      ...newWord,
                      transcription: e.target.value,
                    })
                  }
                />
              ) : (
                word.transcription
              )}
            </td>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={newWord.russian}
                  onChange={(e) =>
                    setNewWord({ ...newWord, russian: e.target.value })
                  }
                />
              ) : (
                word.russian
              )}
            </td>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={newWord.tags}
                  onChange={(e) =>
                    setNewWord({ ...newWord, tags: e.target.value })
                  }
                />
              ) : (
                word.tags
              )}
            </td>
            <td>
              {editingId === word.id ? (
                <div>
                  <button className="save-btn" onClick={handleSave}>
                    Сохранить
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    Отмена
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(word.id)}
                  >
                    Редактировать
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(word.id)}
                  >
                    Удалить
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { WordTable };
