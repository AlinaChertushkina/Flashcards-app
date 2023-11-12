import React, { useState, useEffect } from 'react';
import './App.scss';
import { data } from './data/data';
import './assets/styles/buttons.scss';
import { WordCard } from './WordCard';
import { WordTable } from './WordTable';
import { WordForm } from './WordForm';

function App() {
  const [words, setWords] = useState(data);
  const [newWord, setNewWord] = useState({
    english: '',
    transcription: '',
    russian: '',
    tags: '',
  });
  const [editingId, setEditingId] = useState(null); // Если editingId равно null, то ни один элемент не находится в режиме редактирования.

  const handleEdit = (id) => {
    setEditingId(id);
  };

  // Функция принимает id в качестве аргумента и удаляет элемент с соответствующим id из массива words
  const handleDelete = (id) => {
    const updatedWords = words.filter((word) => word.id !== id);
    setWords(updatedWords);
    setEditingId(null); // Обнуление editingId
  };

  // Проверка на пустые значения русских и английских слов
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

  // Функция для отмены редактирования слова
  const handleCancel = () => {
    setNewWord({ english: '', transcription: '', russian: '', tags: '' }); // Обнуление объекта newWord до исходного состояния
    setEditingId(null);
  };

  // Хук для проведения действий, когда массив words меняется
  useEffect(() => {}, [words]);

  const [showCards, setShowCards] = useState(false); //Добавила состояние показа карточек

  const handleLearnWords = () => {
    setShowCards(true);
  };

  // Таблица со словами, транскрипцией и кнопками, и добавила кнопку для показа карточек
  return (
    <div className="App">
      <h1>Список моих слов</h1>
      {!showCards && (
        <button className="learn-words-btn" onClick={handleLearnWords}>
          Учить слова
        </button>
      )}
      {showCards && (
        <div className="word-cards">
          {words.map((word) => (
            <WordCard key={word.id} word={word} />
          ))}
        </div>
      )}
      {!showCards && (
        <WordTable
          words={words}
          editingId={editingId}
          newWord={newWord}
          setNewWord={setNewWord}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
      <h2>Добавить новое слово</h2>
      <WordForm
        newWord={newWord}
        setNewWord={setNewWord}
        handleSave={handleSave}
      />{' '}
    </div>
  );
}

export { App };
