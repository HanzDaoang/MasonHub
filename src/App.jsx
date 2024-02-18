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
            <a href="https://studentaccounts.gmu.edu/" target="_blank">Account Inquiries</a>
            <a href="https://secure.touchnet.com/C20788_tsa/web/login.jsp" target="_blank">Make a Payment</a>
            <a href="https://gmu.academicworks.com/" target="_blank">Scholarships</a>
            <a href="https://www.gmu.edu/financial-aid" target="_blank">Financial Aid</a>
            <a href="https://secure.touchnet.com/C20788_tsa/web/login.jsp" target="_blank">TN Payment</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('academics')}>Academics</button>
          <div className="dropdown-content">
            <a href="https://mymasonportal.gmu.edu/ultra/course" target="_blank">Course Overview</a>
            <a href="https://mymasonportal.gmu.edu/ultra/grades" target="_blank">Grades</a>
            <a href="https://patriotweb.gmu.edu/" target="_blank">View Unofficial Transcript</a>
            <a href="https://patriotweb.gmu.edu/" target="_blank">View GPA</a>
            <a href="https://www.parchment.com/u/registration/34693/institution" target="_blank">Official Transcript Request</a>
            <a href="https://advising.gmu.edu/current_students/gpa_calculator.html" target="_blank">GPA Calculator</a>
            <a href="https://registrar.gmu.edu/students/graduation/process/" target="_blank">Apply for Graduation</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('resources')}>Resources</button>
          <div className="dropdown-content">
            <a href="https://writingcenter.gmu.edu/" target="_blank">Writing Center</a>
            <a href="https://info.gmu.edu/campus-maps-and-directions/" target="_blank">Campus Map</a>
            <a href="https://ds.gmu.edu/tutoring-services/" target="_blank">Virtual Tutoring</a>
            <a href="https://learningservices.gmu.edu/" target="_blank">Learning Services</a>
            <a href="https://ccmh.gmu.edu/" target="_blank">Center for Psychological Services</a>
            <a href="https://shs.gmu.edu/" target="_blank">Student Health Services</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('extracurriculars')}>Extracurriculars</button>
          <div className="dropdown-content">
            <a href="https://si.gmu.edu/calendar/" target="_blank">Student Involvement Calendar</a>
            <a href="https://gomason.com/calendar" target="_blank">GMU Sport Events</a>
            <a href="https://si.gmu.edu/fsl/" target="_blank">Fraternity & Sorority Life</a>
            <a href="https://www.gmu.edu/student-life/clubs-and-organizations" target="_blank">Clubs and Organizations</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('enrollment')}>Enrollment</button>
          <div className="dropdown-content">
          <a href="https://masononline.gmu.edu/student-resources/register/" target="_blank">Add Classes</a>
            <a href="https://publichealth.gmu.edu/students/academic-policies-and-procedures/course-withdrawal" target="_blank">Drop Classes</a>
            <a href="https://mymasonportal.gmu.edu/ultra/calendar" target="_blank">Class Schedule </a>
            <a href="https://registrar.gmu.edu/calendars/spring_2024/" target="_blank">Enrollment Dates</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => handleFilterChange('studentInfo')}>Student Info</button>
          <div className="dropdown-content">
            <a href="https://patriotweb.gmu.edu/" target="_blank">Personal Information</a>
            <a href="https://patriotweb.gmu.edu/" target="_blank">Student Records</a>
            <a href="https://gmu.t2hosted.com/Account/Portal" target="_blank">Parking Portal</a>
            <a href="https://transportation.gmu.edu/transportation-services/" target="_blank">Transportation Programs</a>
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
								
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}> 
										<img src="src\assets\Blackboard.jpg" alt="Blackboard" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">Blackboard</p>
								</div>
								
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>

								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
										<img src="src\assets\Mason360.png" alt="Mason 360" style={{ maxWidth: '100%', maxHeight: '100%',}} />
									</button>
									<p class="button-text">Mason360</p>
								</div>

								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://secure.touchnet.com/C20788_tsa/web/login.jsp'}>
										<img src="src/assets/Touchnet.jpg" alt="Touchnet Icon" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">TouchNet</p>
								</div>

								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://masondining.sodexomyway.com/'}>
										<img src="src\assets\MDining.jpg" alt="Dining" style={{ maxWidth: '100%', maxHeight: '100%' }} />
									</button>
									<p class="button-text">Mason Dining</p>
								</div>

								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://shibboleth.gmu.edu/idp/profile/SAML2/POST/SSO?execution=e1s1'}>
										<img src="src\assets\masonLogo.png" alt="Mason Logo Icon" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">Mason Website</p>
								</div>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://app.joinhandshake.com/'}>
										<img src="src\assets\Handshake.jpg" alt="Handshake Icon" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">Handshake</p>
								</div>
								
							</>
          	)}
						{filters.finance && (
							<>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://secure.touchnet.com/C20788_tsa/web/login.jsp'}>
										<img src="src/assets/Touchnet.jpg" alt="Touchnet Icon" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">TouchNet</p>
								</div>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>
							</>
						)}
						{filters.academics && (
							<>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://blackboard.gmu.edu'}> 
										<img src="src\assets\Blackboard.jpg" alt="Blackboard" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">Blackboard</p>
								</div>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>
						</>
						)}
						{filters.resources && (
							<>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://masondining.sodexomyway.com/'}>
										<img src="src\assets\MDining.jpg" alt="Dining" style={{ maxWidth: '100%', maxHeight: '100%' }} />
									</button>
									<p class="button-text">Mason Dining</p>
								</div>
						</>
						)}
						{filters.extracurriculars && (
							<>
							<div class="button-container">
								<button className="mainBtn" onClick={() => window.location.href='https://https://mason360.gmu.edu/home_login'}>
										<img src="src\assets\Mason360.png" alt="Mason 360" style={{ maxWidth: '100%', maxHeight: '100%',}} />
								</button>
									<p class="button-text">Mason360</p>
							</div>
						</>
						)}
						{filters.enrollment && (
							<>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>
						</>
						)}
						{filters.studentInfo && (
							<>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>
						</>
						)}
        	</div>
      	</div>
    	</div>
  	</div>
  );
}

export default App;
