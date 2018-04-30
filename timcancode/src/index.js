import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Resume: {
        "Name": "Tim Ferguson",
        "Contact": {
          "Email": "trfergus@asu.edu",
          "LinkedIn": "www.linkedin.com/in/tim-ferguson",
          "Personal Site": "www.timcancode.com"
        },
        "Skills": [
          "Agile/Scrum Methodology",
          "C# with .NET framework",
          "SQL", "React/Node.js/jQuery/JavaScript",
          "Continuous Integration",
          "RESTful APIs",
          "Test Driven Development",
          "MongoDB"
        ],
        "Experience": [
          {
            "Company": "Intel",
            "Title": "Software Engineer",
            "Description": "Work as part of a Scrum team on data intensive desktop and web applications that allow users to optimize the Intel supply chain. Work is Primarily done in C#, SQL and Javascript/jQuery.",
            "Accomplishments": [
              "Implemented Microservices and Restful APIs in place of direct database calls",
              "Developed feature rich UIs using third party libraries like SpreadJS and KendoUI",
              "Owned the automation of maintenance tasks in the databases",
              "Built maintain and optimize data heavy reports",
              "Designed and maintained tools for users to project forward calculations in the supply chain and perform impact analysis",
              "Owned support and user acceptance testing for new releases",
              "Automated build processes using TFS Build to allow for continuous integration and better build management"
            ],
            "Start Date": "September 2015",
            "End Date": "Current Jobs"
          },
          {
            "Company": "U-Haul",
            "Title": "Software Developer",
            "Description": "Worked on a small team to rebuild a critical, but monolithic desktop tool into a modern web application. Most work was done in C# and jQuery/Javascript with a focus on implementing a Service Oriented Architecture.",
            "Accomplishments": [
              "Wrote reusable APIs and web services to be consumed by our application, and eventually other applications",
              "Worked closely with the end users to achieve a good user experience",
              "Improved performance of key functionality by using tried and true methods like caching commonly used data, and parallelizing data fetches where possible",
              "Integrated Bing Maps API to help users better visualize results"
            ],
            "Start Date": "March 2014",
            "End Date": "September 2015"
          }
        ]

      }

    };
  }
  render() {
    return (
      <div className="Resume">
        <h1>{this.state.Resume.Name}</h1>
        <h4>Contact</h4>
        <span> Email : <a href={"mailto:" + this.state.Resume.Contact.Email + "?Subject=Tim,%20Can%20I%20Hire%20You"} >{this.state.Resume.Contact.Email} </a></span> | <span>LinkedIn : <a href="{this.state.Resume.Contact.LinkedIn}">{this.state.Resume.Contact.LinkedIn}</a></span> | <span> Website : <a href='{this.state.Resume.Contact["Personal Site"]}'>{this.state.Resume.Contact["Personal Site"]} </a></span>
        <h4>Skills</h4>
        <ul>
          {this.state.Resume.Skills.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
        <h4>Experience</h4>
        <div>
          {this.state.Resume.Experience.map((item, index) =>
            <div><span>{item.Title} | {item.Company} | <span styles={{ float: 'right' }}> {item["Start Date"]} - {item["End Date"]}</span></span>
              <p>{item.Description}</p>
              <ul>
                {item.Accomplishments.map((accomplishment, accIndex) =>
                  <li>{accomplishment}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Resume />,
  document.getElementById('root')
);

