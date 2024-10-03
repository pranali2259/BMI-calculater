import React, { useState } from 'react';

const Home: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [BMI, setBmi] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const calBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight === 1000 || height === 1000) {
      alert("Please enter valid values");
    } else {
      const bmi = (weight / (height * height)) * 703;
      setBmi(bmi);
      if (bmi < 25) {
        setMessage('You are underweight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are healthy');
      } else {
        setMessage('You are overweight');
      }
    }
  };
 const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi(0);
    setMessage('');
  };

  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calBMI}>
          <div className="input-group">
            <label>Weight  </label>
            <input 
              type="text"
              placeholder='Enter your weight'
              value={weight > 0 ? weight : ''}
              onChange={(e) => setWeight(Number(e.target.value))} 
            />
          </div>
          <div className="input-group">
            <label>Height  </label>
            <input
              type="text"
              placeholder='Enter your height'
              value={height > 0 ? height : ''}
              onChange={(e) => setHeight(Number(e.target.value))} 
            />
          </div>
          <div className="button-group">
            <button className='btn' type='submit'>Calculate BMI</button>
            <button className='btn-outline' onClick={reload} type='button'>reload</button>
          </div>
          <div className='result'>
            <h3>Your BMI is: {BMI.toFixed(2)}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

 
export default Home;