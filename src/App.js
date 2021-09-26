import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, useText] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className='section-center'>
      <h3>tierd of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSumbit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
          beatae.
        </p>
      </article>
    </section>
  );
}

export default App;
