// PodcastList.jsx
import React, { useState, useCallback } from 'react';
import '../App.css';
import PodcastItem from './PodcastItem';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [newPodcast, setNewPodcast] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addPodcast = useCallback(() => {
    if (newPodcast.trim() !== '') {
      setPodcasts(prevPodcasts => [...prevPodcasts, { id: prevPodcasts.length, name: newPodcast }]);
      setNewPodcast('');
    }
  }, [newPodcast]);

  const deletePodcast = useCallback((indexToDelete) => {
    setPodcasts(prevPodcasts => prevPodcasts.filter((_, index) => index !== indexToDelete));
  }, []);

  const startEditPodcast = useCallback((index) => {
    setEditIndex(index);
    setEditValue(podcasts[index].name);
  }, [podcasts]);

  const saveEditPodcast = useCallback(() => {
    setPodcasts(prevPodcasts => prevPodcasts.map((podcast, index) => (index === editIndex ? { ...podcast, name: editValue } : podcast)));
    setEditIndex(null);
    setEditValue('');
  }, [editIndex, editValue]);

  const cancelEditPodcast = useCallback(() => {
    setEditIndex(null);
    setEditValue('');
  }, []);

  return (
    <div className='lista_podcasts'>
      <h1>Podcasts para ouvir:</h1>
      <div className="input_podcast">
        <input className='input_item' type="text" value={newPodcast} onChange={(e) => setNewPodcast(e.target.value)} placeholder="Novo Podcast"/>
        <button className='botao_adicionar' onClick={addPodcast}>Adicionar</button>
      </div>
      <div className='podcasts_items'>
        {podcasts.map((podcast, index) => (
          <PodcastItem
            key={podcast.id}
            podcast={podcast}
            isEditing={editIndex === index}
            editValue={editValue}
            onEditChange={(e) => setEditValue(e.target.value)}
            onSaveEdit={saveEditPodcast}
            onCancelEdit={cancelEditPodcast}
            onEdit={() => startEditPodcast(index)}
            onDelete={() => deletePodcast(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PodcastList;