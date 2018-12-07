import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return  (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Sondaggio
      </h1>
      To get started click the big green button above to add credits!
      <div>
      If you already have credits, click the red button below to create your survey.
      </div>
      <div className="fixed-action-btn">
      <Link to='/surveys/new' className="btn-floating btn-large red">
      <i className="material-icons">library_add</i>
      </Link>
      </div>
    </div>
  )
}

export default Landing;
