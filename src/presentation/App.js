import React, { useState, useEffect } from 'react';
import './App.scss';
import { data } from './data/data';
import './assets/styles/buttons.scss';

function App() {
  const [words, setWords] = useState(data);
  const [newWord, setNewWord] = useState({
    english: '',
    transcription: '',
    russian: '',
    tags: '',
  });
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (id) => {
    const updatedWords = words.filter((word) => word.id !== id);
    setWords(updatedWords);
    setEditingId(null);
  };

  const handleSave = () => {
    if (editingId === null) {
      setWords([...words, { ...newWord, id: Date.now().toString() }]);
      setNewWord({ english: '', transcription: '', russian: '', tags: '' });
    } else {
      const updatedWords = words.map((word) =>
        word.id === editingId ? { ...newWord, id: editingId } : word,
      );
      setWords(updatedWords);
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setNewWord({ english: '', transcription: '', russian: '', tags: '' });
    setEditingId(null);
  };

  useEffect(() => {}, [words]);

  return (
    <div className="App">
      <h1>Список моих слов</h1>
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
                      setNewWord({ ...newWord, transcription: e.target.value })
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
      <h2>Добавить новое слово</h2>
      <div className="word-form">
        <input
          type="text"
          placeholder="Английский"
          value={newWord.english}
          onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
        />
        <input
          type="text"
          placeholder="Транскрипция"
          value={newWord.transcription}
          onChange={(e) =>
            setNewWord({ ...newWord, transcription: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Русский"
          value={newWord.russian}
          onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
        />
        <input
          type="text"
          placeholder="Теги"
          value={newWord.tags}
          onChange={(e) => setNewWord({ ...newWord, tags: e.target.value })}
        />
        <button className="add-btn" onClick={handleSave}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export { App };
