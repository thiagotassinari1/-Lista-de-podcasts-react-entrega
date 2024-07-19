// PodcastItem.jsx
import React from 'react';
import '../App.css'; 

function PodcastItem({ podcast, isEditing, editValue, onEditChange, onSaveEdit, onCancelEdit, onEdit, onDelete }) {
  return (
    <div className="podcast-item">
      {isEditing ? (
        <div className='itens_lista_podcast_edicao'>
          <input className='input_edicao' type="text" value={editValue} onChange={onEditChange} />
          <div>
            <button className='botao_salvar' onClick={onSaveEdit}>Salvar</button>
            <button className='botao_cancelar' onClick={onCancelEdit}>Cancelar</button>
          </div>

        </div>
      ) : (
        <div className='itens_lista_podcast'>
          <p>{podcast.name}</p>
          <div>
            <button className='botao_editar' onClick={onEdit}>Editar</button>
            <button className='botao_excluir' onClick={() => onDelete(podcast.id)}>Excluir</button>
          </div>

        </div>
      )}
    </div>
  );
}

export default PodcastItem;