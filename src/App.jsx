import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TwitterFeed from './TwitterFeed';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';


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
  
	const localizer = momentLocalizer(moment);

	const today = new Date();

	const events = [
		// Add calendar events here
		{
			title: '1Eighty Sunday Service',
			start: new Date(2024, 1, 18, 7, 0), // Year, Month (0-11), Day, Hour, Minute
			end: new Date(2024, 1, 18, 9, 0),
		  },
		  {
			title: 'Explore your Faith',
			start: new Date(2024, 1, 18, 10, 0), // Year, Month (0-11), Day, Hour, Minute
			end: new Date(2024, 1, 18, 12, 0),
		  },
		  {
			title: 'Beta Theta Pi Chapter',
			start: new Date(2024, 1, 18, 14, 0), // Year, Month (0-11), Day, Hour, Minute
			end: new Date(2024, 1, 18, 15, 0),
		  },
		  {
			title: 'Zeta Psi Chapter Meeting',
			start: new Date(2024, 1, 18, 15, 0), // Year, Month (0-11), Day, Hour, Minute
			end: new Date(2024, 1, 18, 16, 0),
		  },
		  {
			title: 'Fashion Society Show Rehearsal',
			start: new Date(2024, 1, 18, 18, 0), // Year, Month (0-11), Day, Hour, Minute
			end: new Date(2024, 1, 18, 20, 0),
		  },
		  {
			title: 'R&B Super Jam',
			start: new Date(2024, 1, 18, 20, 0), // Year, Month (0-11), Day, Hour, Minute
			end: new Date(2024, 1, 18, 22, 0),
		  },

		  // February 19
		{
			title: 'Italian Tutoring',
			start: new Date(2024, 1, 19, 14, 0),
			end: new Date(2024, 1, 19, 15, 0),
		},
		{
			title: 'Humanity First General Meeting',
			start: new Date(2024, 1, 19, 16, 30),
			end: new Date(2024, 1, 19, 17, 30),
		},
		{
			title: 'Corazones Unidos Siempre/CUS eXpresso Neo Edition',
			start: new Date(2024, 1, 19, 17, 0),
			end: new Date(2024, 1, 19, 18, 0),
		},
		{
			title: 'Black Arts Club and Hispanic Cultural Review Vibe and Write',
			start: new Date(2024, 1, 19, 18, 0),
			end: new Date(2024, 1, 19, 19, 0),
		},
		{
			title: 'GRL MEMBERS ONLY MEETING',
			start: new Date(2024, 1, 19, 19, 15),
			end: new Date(2024, 1, 19, 20, 15),
		},
		{
			title: 'Best Buddies PAL-entines Meeting',
			start: new Date(2024, 1, 19, 19, 30),
			end: new Date(2024, 1, 19, 20, 30),
		},
		// February 20
		{
			title: 'Graduate Information Session | Health Administration and Policy',
			start: new Date(2024, 1, 20, 10, 0),
			end: new Date(2024, 1, 20, 11, 0),
		},
		{
			title: 'Graduate Admissions Drop-in Hours | Spring 2024',
			start: new Date(2024, 1, 20, 11, 0),
			end: new Date(2024, 1, 20, 12, 0),
		},
		{
			title: 'Monster Drink Philanthropy',
			start: new Date(2024, 1, 20, 12, 0),
			end: new Date(2024, 1, 20, 13, 0),
		},
		{
			title: 'DesignForce Presentation - Engineers Week',
			start: new Date(2024, 1, 20, 13, 0),
			end: new Date(2024, 1, 20, 14, 0),
		},
		{
			title: 'Baseball Game',
			start: new Date(2024, 1, 20, 14, 0),
			end: new Date(2024, 1, 20, 15, 0),
		},
		{
			title: 'Worship Day',
			start: new Date(2024, 1, 20, 15, 0),
			end: new Date(2024, 1, 20, 16, 0),
		},
		{
			title: 'Persian Club Chai Night Social Gathering',
			start: new Date(2024, 1, 20, 16, 0),
			end: new Date(2024, 1, 20, 17, 0),
		},
		{
			title: 'Brushing Boundaries P4P',
			start: new Date(2024, 1, 20, 17, 30),
			end: new Date(2024, 1, 20, 18, 30),
		},
		{
			title: 'Mental Health MatterZ',
			start: new Date(2024, 1, 20, 18, 30),
			end: new Date(2024, 1, 20, 19, 30),
		},
		{
			title: 'SHH General Body Meeting',
			start: new Date(2024, 1, 20, 20, 0),
			end: new Date(2024, 1, 20, 21, 0),
		},
		// February 21
		{
			title: 'GMU Toastmasters Hybrid Meeting',
			start: new Date(2024, 1, 21, 12, 0),
			end: new Date(2024, 1, 21, 13, 0),
		},
		{
			title: 'AMA February General Body Meeting',
			start: new Date(2024, 1, 21, 14, 0),
			end: new Date(2024, 1, 21, 15, 0),
		},
		{
			title: 'COMM Ambassadors Meeting',
			start: new Date(2024, 1, 21, 15, 0),
			end: new Date(2024, 1, 21, 16, 0),
		},
		{
			title: 'MoviesML Club Meeting',
			start: new Date(2024, 1, 21, 16, 0),
			end: new Date(2024, 1, 21, 17, 0),
		},
		{
			title: 'BHM movie night',
			start: new Date(2024, 1, 21, 17, 0),
			end: new Date(2024, 1, 21, 18, 0),
		},
		{
			title: 'ASA Trivia Night',
			start: new Date(2024, 1, 21, 18, 0),
			end: new Date(2024, 1, 21, 19, 0),
		},
		{
			title: 'Chi Alpha Women\'s Core Group Bible Study',
			start: new Date(2024, 1, 21, 19, 0),
			end: new Date(2024, 1, 21, 20, 0),
		},
		{
			title: 'Tasbeha/Worship with Coptic Club!',
			start: new Date(2024, 1, 21, 20, 0),
			end: new Date(2024, 1, 21, 21, 0),
		},
		{
			title: 'MSN Wed Hell Week Rehearsal 2024 Spring',
			start: new Date(2024, 1, 21, 22, 0),
			end: new Date(2024, 1, 21, 23, 0),
		},
		// February 22
		{
			title: 'KDC Mythic Open Studio',
			start: new Date(2024, 1, 22, 11, 0),
			end: new Date(2024, 1, 22, 12, 0),
		},
		{
			title: 'Pie an Aphi',
			start: new Date(2024, 1, 22, 12, 0),
			end: new Date(2024, 1, 22, 13, 0),
		  },
		  // February 22
		{
			title: 'UNICEF General Body Meeting',
			start: new Date(2024, 1, 22, 16, 0),
			end: new Date(2024, 1, 22, 17, 0),
		},
		{
			title: 'Cru Welcome Team Meeting',
			start: new Date(2024, 1, 22, 17, 0),
			end: new Date(2024, 1, 22, 18, 0),
		},
		{
			title: '1Eighty Thursday Bible Study',
			start: new Date(2024, 1, 22, 18, 0),
			end: new Date(2024, 1, 22, 19, 0),
		},
		{
			title: 'GMU VSA Acting Practice',
			start: new Date(2024, 1, 22, 19, 30),
			end: new Date(2024, 1, 22, 20, 30),
		},
		{
			title: 'Cru Large Group',
			start: new Date(2024, 1, 22, 20, 0),
			end: new Date(2024, 1, 22, 21, 0),
		},
		{
			title: 'Small Group Day',
			start: new Date(2024, 1, 22, 21, 0),
			end: new Date(2024, 1, 22, 22, 0),
		},
		// February 23
		{
			title: 'GMU VSA Culture Show Practice',
			start: new Date(2024, 1, 23, 12, 0),
			end: new Date(2024, 1, 23, 13, 0),
		},
		{
			title: 'JSA Kaiwa Tables',
			start: new Date(2024, 1, 23, 14, 0),
			end: new Date(2024, 1, 23, 15, 0),
		},
		{
			title: 'UMMAH Interest Meeting',
			start: new Date(2024, 1, 23, 15, 0),
			end: new Date(2024, 1, 23, 16, 0),
		},
		{
			title: 'AFA',
			start: new Date(2024, 1, 23, 17, 0),
			end: new Date(2024, 1, 23, 18, 0),
		},
		{
			title: 'Medusa Game Night',
			start: new Date(2024, 1, 23, 18, 0),
			end: new Date(2024, 1, 23, 19, 0),
		},
		{
			title: 'Cosplay Club at Mason General Meeting',
			start: new Date(2024, 1, 23, 19, 30),
			end: new Date(2024, 1, 23, 20, 30),
		},
		{
			title: 'Nate Bargatze - The Be Funny Tour',
			start: new Date(2024, 1, 23, 20, 0),
			end: new Date(2024, 1, 23, 21, 0),
		},
		// February 24
		{
			title: 'UK101 Practice',
			start: new Date(2024, 1, 24, 9, 0),
			end: new Date(2024, 1, 24, 10, 0),
		},
		{
			title: 'Mason Women\'s Basketball vs Richmond',
			start: new Date(2024, 1, 24, 15, 0),
			end: new Date(2024, 1, 24, 16, 0),
		},
		{
			title: 'Weekly Movie Night (FAS)',
			start: new Date(2024, 1, 24, 18, 0),
			end: new Date(2024, 1, 24, 19, 0),
		},
	];

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

			<div className="today-mason">
          	<h2>Today @ Mason</h2>
          	<ul>
			  <li>11a KDC Mythic Open Studio</li>
              <li>12p Pie an Aphi</li>
              <li>4p UNICEF General Body Meeting</li>
              <li>5p Cru Welcome Team Meeting</li>
              <li>6p 1Eighty Thursday Bible Study</li>
              <li>7:30p GMU VSA Acting Practice</li>
              <li>8p Cru Large Group</li>
              <li>9p Small Group Day</li>
          	</ul>
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
									<button className="mainBtn" onClick={() => window.location.href='https://patriotweb.gmu.edu/'}>
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
									<button className="mainBtn" onClick={() => window.location.href='https://patriotweb.gmu.edu/'}>
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
									<button className="mainBtn" onClick={() => window.location.href='https://patriotweb.gmu.edu/'}>
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
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://app.joinhandshake.com/'}>
										<img src="src\assets\Handshake.jpg" alt="Handshake Icon" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">Handshake</p>
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
									<button className="mainBtn" onClick={() => window.location.href='https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>
						</>
						)}
						{filters.studentInfo && (
							<>
								<div class="button-container">
									<button className="mainBtn" onClick={() => window.location.href='https://patriotweb.gmu.edu/'}>
										<img src="src\assets\PatriotWeb.jpg" alt="Patriot Web" style={{ maxWidth: '100%', maxHeight: '100%', }} />
									</button>
									<p class="button-text">PatriotWeb</p>
								</div>
						</>
						)}

			<div className = "calendar-container">
              <Calendar
                localizer={localizer}
                events={events}
                views={['week']} // Show only the week view
                defaultView={'week'} // Set the default view to week
				min={new Date(2024, 1, 20, 7, 0)} // Minimum visible date and time
          		max={new Date(2024, 1, 20, 23, 0)} // Maximum visible date and time
				onSelectEvent={(event) => {
					const eventDetails = `
                    Title: ${event.title}
                    Start: ${moment(event.start).format('LLL')}
                    End: ${moment(event.end).format('LLL')}`;

                  alert(eventDetails);
                }}
			  />
            </div>
        	</div>
      	</div>
    	</div>
  	</div>
  );
}

export default App;
