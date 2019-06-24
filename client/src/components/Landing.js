import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return  (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <h1>
        Sondaggio
      </h1 >
      To get started click the big green button above to add credits!
      <div style={{ margin: '30px' }}>
      If you already have credits, click the red button below to create your survey.
      </div>
      <Link to="/surveys/new" style={{ margin: '10px' }} class="waves-effect waves-light btn-large">
      <i class="material-icons left">cloud</i>
      Create A New Survey
      </Link>
    </div>
  )
}

export default Landing;
