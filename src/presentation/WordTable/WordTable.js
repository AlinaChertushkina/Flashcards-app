import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { WordForm } from '../WordForm/WordForm';
import '../assets/styles/message.scss';

const WordTable = () => {
  const { words, isLoading, error, setWords } = useContext(AppContext);
  const [editingId, setEditingId] = React.useState(null);
  const [newWord, setNewWord] = React.useState({
    english: '',
    transcription: '',
    russian: '',
    tags: '',
  });

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
      if (newWord.english === '' || newWord.russian === '') {
        alert('Заполните все поля');
        return;
      }
      setWords([...words, { ...newWord, id: Date.now().toString() }]);
      setNewWord({ english: '', russian: '' });
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

  const handleSaveChanges = () => {
    const hasErrors = Object.values(newWord).some((value) => value === '');
    if (hasErrors) {
      alert('Ошибка: заполните все поля');
    } else {
      console.log('Сохранение изменений:', newWord);
      handleSave();
    }
  };

  const isLatin = (text) => {
    const latinRegex = /^[a-zA-Z ]*$/;
    return latinRegex.test(text);
  };
  const isCyrillic = (text) => {
    const cyrillicRegex = /^[а-яА-Я ]*$/;
    return cyrillicRegex.test(text);
  };

  const handleChange = (field, value) => {
    if (
      (field === 'english' && !isLatin(value)) ||
      (field === 'russian' && !isCyrillic(value))
    ) {
      return;
    }

    setNewWord({ ...newWord, [field]: value });
  };

  if (isLoading) {
    return <div className="message">Загрузка...</div>;
  }

  if (error) {
    return <div className="message">{error}</div>;
  }

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
                    onChange={(e) => handleChange('english', e.target.value)}
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
                    onChange={(e) => handleChange('russian', e.target.value)}
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
