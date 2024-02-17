import { useState } from 'react';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    showAll: true,
    academics: false,
    opportunities: false,
    resources: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...Object.fromEntries(Object.keys(prevFilters).map(key => [key, false])), // Reset all filters
      [filter]: true,
    }));
  };

  return (
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
                {filter === 'showAll' ? 'Show All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </aside>

      <div className="content">
        <h1>Mason Hub</h1>
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
              <button onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
                Blackboard
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
              <button onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
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
          {filters.opportunities && (
            <>
            <button onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
              PatriotWeb
            </button>
          </>
          )}
          {filters.resources && (
            <>
            <button onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
              Mason360
            </button>
          </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
