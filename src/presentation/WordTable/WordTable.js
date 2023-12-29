import React from 'react';
import { WordForm } from '../WordForm/WordForm';

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
  const handleSaveChanges = () => {
    const hasErrors = Object.values(newWord).some((value) => value === '');
    if (hasErrors) {
      alert('Ошибка: заполните все поля');
    } else {
      console.log('Сохранение изменений:', newWord);
      handleSave();
    }
  };

  return (
    <div>
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
                    style={{
                      border:
                        newWord.english === ''
                          ? '1px solid red'
                          : '1px solid black',
                    }}
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
                    style={{
                      border:
                        newWord.transcription === ''
                          ? '1px solid red'
                          : '1px solid black',
                    }}
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
                    style={{
                      border:
                        newWord.russian === ''
                          ? '1px solid red'
                          : '1px solid black',
                    }}
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
                    style={{
                      border:
                        newWord.tags === ''
                          ? '1px solid red'
                          : '1px solid black',
                    }}
                  />
                ) : (
                  word.tags
                )}{' '}
              </td>
              <td>
                {editingId === word.id ? (
                  <div>
                    <button className="save-btn" onClick={handleSaveChanges}>
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
      <WordForm
        newWord={newWord}
        setNewWord={setNewWord}
        handleSave={handleSaveChanges}
        handleChange={(field, value) =>
          setNewWord({ ...newWord, [field]: value })
        }
      />
    </div>
  );
};

export { WordTable };
