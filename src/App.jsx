import { useState } from 'react';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
    filter6: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="filters">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((filterNum) => (
            <div key={filterNum} className="filter">
              <label>
                <input
                  type="checkbox"
                  checked={filters[`filter${filterNum}`]}
                  onChange={() => handleFilterChange(`filter${filterNum}`)}
                />
                Filter {filterNum}
              </label>
            </div>
          ))}
        </div>
      </aside>

      <div className="content">
        <h1>Mason Hub</h1>
        <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default App;
