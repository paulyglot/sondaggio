import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div style={{ margin: '30px'}}>
      <SurveyList />
      <div className="fixed-action-btn">
      <Link to="/surveys/new" className="btn-floating btn-large red">
      <i className="material-icons">library_add</i>
      </Link>
      </div>
    </div>
  );
};

export default Dashboard;
