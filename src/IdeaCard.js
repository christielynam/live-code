import React from 'react'

const IdeaCard = ({ title, body, id, deleteIdea }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={ () => deleteIdea(id) }>
        Delete
      </button>
    </div>
  )
}

export default IdeaCard;
