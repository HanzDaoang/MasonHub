import { useState } from 'react';
import './App.css';
import TwitterFeed from './TwitterFeed';

function App() {
  const [filters, setFilters] = useState({
    showAll: true,
    academics: false,
    opportunities: false,
    resources: false,
    finance: false,
    enrollment: false
  });

  function handleFilterChange(filter) {
    setFilters((prevFilters) => ({
      ...Object.fromEntries(Object.keys(prevFilters).map(key => [key, false])), // Reset all filters
      [filter]: true,
    }));
  }


  
  return (
    <div>
      <h1>Mason Hub</h1>

      <div className="top-bar">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('finance')}>Finance</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('academics')}>Academics</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('resources')}>Resources</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('extracurriculars')}>Extracurriculars</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('enrollment')}>Enrollment</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('studentInfo')}>Student Info</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>
      </div>

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
      <div className="twitter">
          <TwitterFeed />
        </div>
        <div className="card">
          {filters.showAll && (
            <>
            <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
            <img src="src\assets\Blackboard.jpg" alt="Blackboard" style={{ maxWidth: '100%', maxHeight: '100%', marginRight: '5px' }} />
<span style={{ maxWidth: 'calc(100% - 24px)' }}>Blackboard</span>
            </button>
            <button onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
            <img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', marginRight: '5px' }} />
<span style={{ maxWidth: 'calc(100% - 24px)' }}>PatriotWeb</span>
            </button>
            <button onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
            <img src="src\assets\Mason360.png" alt="Mason 360" style={{ maxWidth: '100%', maxHeight: '100%', marginRight: '5px' }} />
<span style={{ maxWidth: 'calc(100% - 24px)' }}>Mason360</span>
            </button>
            <button onClick={() => window.location.href='https://secure.touchnet.com/C20788_tsa/web/login.jsp'}>
            <img src="src/assets/Touchnet.jpg" alt="Touchnet Icon" style={{ maxWidth: '100%', maxHeight: '110%', marginRight: '5px' }} />
<span style={{ maxWidth: 'calc(100% - 24px)' }}>Touchnet</span>
            </button>
            <button onClick={() => window.location.href='https://masondining.sodexomyway.com/'}>
            <img src="src\assets\MDining.jpg" alt="Dining" style={{ maxWidth: '100%', maxHeight: '125%', marginRight: '5px' }} />
<span style={{ maxWidth: 'calc(100% - 24px)' }}>Dining</span>
            </button>
            <button onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
            <img src="src\assets\masonLogo.png" alt="Mason Logo Icon" style={{ maxWidth: '100%', maxHeight: '100%', marginRight: '5px' }} />
<span style={{ maxWidth: 'calc(100% - 24px)' }}>Mason Website</span>
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
          {filters.enrollment && (
            <>
            <button onClick={() => window.location.href='https://blackboard.gmu.edu'}>
            Blackboard
            </button>
          </>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
