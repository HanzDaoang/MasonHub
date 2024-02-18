import { useState } from 'react';
import './App.css';
import TwitterFeed from './TwitterFeed';

function App() {
  const [filters, setFilters] = useState({
    showAll: true,
		finance: false,
    academics: false,
		resources: false,
    extracurriculars: false,
    enrollment: false,
		studentInfo: false
  });

  function handleFilterChange(filter) {
    setFilters((prevFilters) => ({
      ...Object.fromEntries(Object.keys(prevFilters).map(key => [key, false])), // Reset all filters
      [filter]: true,
    }));
  }

	const formatFilterName = (filter) => {
		if (filter === 'studentInfo') {
			return filter === 'studentInfo' ? 'Student Info' : filter.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + filter.slice(1);
		}
		return filter === 'showAll' ? 'Show All' : filter.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + filter.slice(1);
	}
  
  return (
    <div>
			<div className='Header'>
				<h1>Mason Hub</h1>
			</div>
      <div className="top-bar">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('finance')}>Finance</button>
          <div className="dropdown-content">
            <a href="https://studentaccounts.gmu.edu/">Account Inquiries</a>
            <a href="#">Make a Payment</a>
            <a href="#">Scholarships</a>
            <a href="#">Financial Aid</a>
            <a href="#">TN Payment</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('academics')}>Academics</button>
          <div className="dropdown-content">
            <a href="#">Course Overview</a>
            <a href="#">Grades</a>
            <a href="#">Class Schedule</a>
            <a href="#">View Unofficial Transcript</a>
            <a href="#">View GPA</a>
            <a href="#">Official Transcript Request</a>
            <a href="https://advising.gmu.edu/current_students/gpa_calculator.html">GPA Calculator</a>
            <a href="#">Apply for Graduation</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('resources')}>Resources</button>
          <div className="dropdown-content">
            <a href="#">Writing Center</a>
            <a href="#">Campus Map</a>
            <a href="#">Virtual Tutoring</a>
            <a href="#">Learning Services</a>
            <a href="#">Center for Psychological Services</a>
            <a href="#">Student Health Services</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('extracurriculars')}>Extracurriculars</button>
          <div className="dropdown-content">
            <a href="#">Student Involvement Calendar</a>
            <a href="#">GMU Sport Events</a>
            <a href="#">Fraternity & Sorority Life</a>
            <a href="#">Clubs and Organizations</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('enrollment')}>Enrollment</button>
          <div className="dropdown-content">
          <a href="#">Add Classes</a>
            <a href="#">Drop Classes</a>
            <a href="#">Class Schedule</a>
            <a href="#">Enrollment Dates</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('studentInfo')}>Student Info</button>
          <div className="dropdown-content">
            <a href="#">Personal Information</a>
            <a href="#">Student Records</a>
            <a href="#">Buy Parking Permit</a>
            <a href="#">Transportation Programs</a>
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
                	{formatFilterName(filter)}
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
								<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}>
									<img src="src\assets\Blackboard.jpg" alt="Blackboard" style={{ maxWidth: '100%', maxHeight: '110%', marginTop: 10, marginBottom: 10 }} />
									<span style={{ maxWidth: 'calc(100% - 24px)' }}>Blackboard</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
									<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 9, marginBottom: 8 }} />
									<span style={{ maxWidth: 'calc(100% - 24px)' }}>PatriotWeb</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
									<img src="src\assets\Mason360.png" alt="Mason 360" style={{ maxWidth: '120%', maxHeight: '120%', marginLeft: -8, marginBottom: 7 }} />
									<span style={{ maxWidth: 'calc(100% - 24px)' }}>Mason360</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://secure.touchnet.com/C20788_tsa/web/login.jsp'}>
									<img src="src/assets/Touchnet.jpg" alt="Touchnet Icon" style={{ maxWidth: '100%', maxHeight: '120%', marginTop: 10, marginBottom: 21 }} />
									<span style={{ maxWidth: 'calc(150% - 24px)' }}>Touchnet</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://masondining.sodexomyway.com/'}>
									<img src="src\assets\MDining.jpg" alt="Dining" style={{ maxWidth: '100%', maxHeight: '100%' }} />
									<span style={{ maxWidth: 'calc(100%)' }}>MasonDining</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
									<img src="src\assets\masonLogo.png" alt="Mason Logo Icon" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 10, marginBottom: 16 }} />
									<span style={{ maxWidth: 'calc(100% - 24px)' }}>MasonWeb</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://app.joinhandshake.com/'}>
									<img src="src\assets\Handshake.jpg" alt="Handshake Icon" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 10, marginBottom: 7 }} />
									<span style={{ maxWidth: 'calc(100% - 24px)' }}>Handshake</span>
								</button>
								<button className="mainBtn" onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
									Blackboard
								</button>
							</>
          	)}
						{filters.finance && (
							<>
							<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}>
								Blackboard
							</button>
							</>
						)}
						{filters.academics && (
							<>
							<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}>
								Blackboard
							</button>
						</>
						)}
						{filters.resources && (
							<>
							<button className="mainBtn" onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
								Mason360
							</button>
						</>
						)}
						{filters.extracurriculars && (
							<>
							<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
								PatriotWeb
							</button>
						</>
						)}
						{filters.enrollment && (
							<>
							<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}>
								Blackboard
							</button>
						</>
						)}
						{filters.studentInfo && (
							<>
							<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}>
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
