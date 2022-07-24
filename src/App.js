import { useEffect, useState } from 'react';
import './App.css';
import Questions from './Questions';

function App() {

  const [questions ,setQuestions] = useState([]);

  useEffect(()=>{
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  },[])

  return (
    <div className="container">
      <h3>total number of question {questions.length}</h3>
      <div className='info'>
        {questions.map((question) => (
          <Questions key={question.id} question={question}></Questions>
        ))}
      </div>
    </div>
  );
}

export default App;
