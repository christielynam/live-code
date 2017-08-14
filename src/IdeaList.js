import React from 'react'
import IdeaCard from './IdeaCard'

const IdeaList = ({ ideas, deleteIdea }) => {

  if (!ideas.length) {
    return (
      <div>
        Add some yung ideas tho
      </div>
    )
  }

  const yungIdeas = ideas.map(idea => {
    return (
      <IdeaCard {...idea} key={idea.id} deleteIdea={deleteIdea} />
    )
  })

  return (
    <div>
      {yungIdeas}
    </div>
  )

}

export default IdeaList
