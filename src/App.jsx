import { useState } from 'react';
import './App.css';
import TwitterFeed from './TwitterFeed';

function App() {
  const [filters, setFilters] = useState({
    showAll: true,
    academics: false,
    extracurriculars: false,
    resources: false,
    finance: false,
    enrollment: false,
    studentInfo: false
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...Object.fromEntries(Object.keys(prevFilters).map(key => [key, false])), // Reset all filters
      [filter]: true,
    }));
  };

  const formatFilterName = (filter) => {
    if (filter === 'studentInfo') {
      return filter === 'studentInfo' ? 'Student Info' : filter.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + filter.slice(1);
    }
    return filter === 'showAll' ? 'Show All' : filter.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + filter.slice(1);
  };

  return (
      <div className="content">
        <div className="twitter">
          <TwitterFeed />
        </div>
        <h1>Mason Hub</h1>
        <div className="app">
          <aside className="sidebar">
          <div className="filters">
        {Object.keys(filters).map((filter) => (
          <div key={filter} className="filter">
            <label>
              <input
                type="checkbox"
                checked={filters[filter]}
                onChange={() => handleFilterChange(filter)}
              />
              {formatFilterName(filter)}
            </label>
          </div>
        ))}
      </div>
          </aside>
        <div className="card">
          {filters.showAll && (
            <>
              <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
              Blackboard
              </button>
              <button onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
                PatriotWeb
              </button>
              <button onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
                Mason360
              </button>
              <button onClick={() => window.location.href='https://secure.touchnet.com/C20788_tsa/web/login.jsp'}>
                Touchnet 
              </button>
              <button onClick={() => window.location.href='https://masondining.sodexomyway.com/'}>
                Dining
              </button>
              <button onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
                Blackboard
              </button>
              <button onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
                Blackboard
              </button>
              <button onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
                Blackboard
              </button>
            </>
          )}
          {filters.finance && (
            <>
            <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
            Blackboard
            </button>
          </>
          )}
          {filters.academics && (
            <>
            <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
            Blackboard
            </button>
          </>
          )}
          {filters.resources && (
            <>
            <button onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
              PatriotWeb
            </button>
          </>
          )}
          {filters.extracurriculars && (
            <>
            <button onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
              Mason360
            </button>
          </>
          )}
          {filters.enrollment && (
            <>
            <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
            Blackboard
            </button>
          </>
          )}
          {filters.studentInfo && (
            <>
            <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
            Blackboard
            </button>
          </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
