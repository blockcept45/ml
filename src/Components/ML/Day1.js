import React from 'react'

export default function Day1() {
  return (
    <div>
      {/* <h1>Day 1</h1> */}
      <h1>Machine Learning (ML)</h1>
      <p>Machine learning (ML) is a branch of artificial intelligence (AI) that enables computers to learn from data and experience rather than being explicitly programmed. Through machine learning, systems can recognize patterns, make predictions, and improve their performance on specific tasks over time.
      </p>
      <h1>Machine learning lifecycle with an example of predicting house prices:</h1>
      <p>
      <span style={{color:"red"}}>Problem Definition: </span> Decide to predict house prices based on features like size, location, and age.
<br></br>
<span style={{color:"red"}}>Data Collection:</span> Gather a dataset with past house sales, including features and prices.
<br></br>
<span style={{color:"red"}}>Data Preparation:</span> Clean the data (e.g., remove duplicates), engineer useful features, and split into training/testing sets.
<br></br>
<span style={{color:"red"}}>Model Selection:</span> Choose a suitable algorithm, like linear regression for price prediction.
<br></br>
<span style={{color:"red"}}>Training:</span> Train the model on the training data to learn patterns in house prices.
<br></br>
<span style={{color:"red"}}>Evaluation: </span>Test the model’s accuracy using metrics (e.g., mean absolute error) on the test set.
<br></br>
<span style={{color:"red"}}>Deployment:</span> Deploy the model so it can predict prices for new houses.
<br></br>
<span style={{color:"red"}}>Monitoring and Maintenance:</span> Monitor model performance over time and retrain if prices start to shift.

      </p>
    </div>
  )
}
