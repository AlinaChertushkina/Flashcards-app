import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { data } from './data/data';
import './assets/styles/buttons.scss';
import { WordTable } from './WordTable';
import { FlashCards } from './FlashCards';
import { Header } from './Header';
import { Logo } from './Logo';
import { NotFound } from './NotFound';

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

  return (
    <div className="App">
      <Router>
        <Header logo={<Logo />} />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/game" element={<FlashCards words={words} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export { App };
