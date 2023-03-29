import React from 'react'

const Phrase = ({ phraseRandom }) => {

  return (
    <p className='App_phrase'>
      {phraseRandom.phrase}
    </p>
  )
}

export default Phrase