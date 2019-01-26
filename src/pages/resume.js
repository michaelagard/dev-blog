import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components';

class Resume extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <ResumeContainer>
          <ResumeHeader>
            <ResumeName>Michael Agard</ResumeName>
            <ResumeContact>
              <ResumeContactItem>Graysville, TN</ResumeContactItem>
            </ResumeContact>
            <ResumeContact>
              <ResumeContactItem>423-381-0110</ResumeContactItem>
              <ResumeContactLink href="mailto://mdagard@gmail.com">mdagard@gmail.com</ResumeContactLink>
            </ResumeContact>
            <ResumeContact>
              <ResumeContactLink href="https://www.linkedin.com/in/mdagard" target="_blank">LinkedIn</ResumeContactLink>
              <ResumeContactLink href="https://github.com/michaelagard" target="_blank">GitHub</ResumeContactLink>
              <ResumeContactLink href="https://twitter.com/AdultAgard" target="_blank">Twitter</ResumeContactLink>
            </ResumeContact>
          </ResumeHeader>
          <ResumeSummary>
            Full stack web developer with 4 years of experience as a project manager. Most experienced with JavaScript and Python.
          </ResumeSummary>

          <Section>
            <SectionTitle>Skills</SectionTitle>
            <SectionRow>
              <SectionCol1>
                Front End
            </SectionCol1>
              <SectionCol2>
                <ColSummary>HTML, CSS, JavaScript</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                Frameworks
            </SectionCol1>
              <SectionCol2>
                <ColSummary>React, Redux, Express, Bootstrap</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                Backend
            </SectionCol1>
              <SectionCol2>
                <ColSummary>JavaScript, Python3, Node.js</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                Databases
            </SectionCol1>
              <SectionCol2>
                <ColSummary>SQLite, Microsoft SQL, PostgreSQL, Knex</ColSummary>
              </SectionCol2>
            </SectionRow>
          </Section>

          <Section>
            <SectionTitle>Work Experience</SectionTitle>
            <SectionRow>
              <SectionCol1>
                June 2014 to July 2018
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Pentius · Project Manager · Boca Raton, FL (Remote)</ColTitle>
                <ul>
                  <ListItem>Coordinate large and small scale development projects focusing in SQL and classic asp agile developement</ListItem>
                  <ListItem>Report on my developers' activity to the senior PM hourly</ListItem>
                  <ListItem>Automate daily and weekly tests and monitor reports for errors to ticket</ListItem>
                  <ListItem>Manage several credit based social media accounts across several platforms</ListItem>
                </ul>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                June 2011 to July 2014
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Walden Security · Security Officer · Chattanooga, TN</ColTitle>
                <ul>
                  <ListItem>Perform critical observations, routine tasks, and report regularly to a superior officer</ListItem>
                </ul>
              </SectionCol2>
            </SectionRow>
          </Section>

          <Section>
            <SectionTitle>Projects</SectionTitle>
            <SectionRow>
              <SectionCol1>
                Nov. 2018 to Dec. 2018
            </SectionCol1>
              <SectionCol2>
                <ColTitle>RateMyDIY · Team of 5 · <a href="https://www.qrafts.app/" target="_blank">Qrafts</a></ColTitle>
                <ColSummary>
                  RateMyDIY is a site that allows users to upload, rate, and review projects.
                </ColSummary>
                <ul>
                  <ListItem>Collaborate with team members designing and writing the Node.js / express server endpoints and API.</ListItem>
                  <ListItem>Implemented Bootstrap design to certain elements.</ListItem>
                  <ListItem>Implemented Auth0 as the authorization platform</ListItem>
                </ul>
                <ColSummary>
                  Tech Stack Utilized: React, Redux, Node.js, Express, Knex, Postgres
                </ColSummary>
              </SectionCol2>
            </SectionRow>

          </Section>

          <Section>
            <SectionTitle>Education</SectionTitle>
            <SectionRow>
              <SectionCol1>
                July 2018 to present
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Lambda School · Full Stack Web Development Track</ColTitle>
                <ColSummary>
                  Lambda School is an immersive hands-on Software Engineering and Computer Science Academy with a curriculum that includes:
                </ColSummary>
                <ul>
                  <ListItem>Programming Theory</ListItem>
                  <ListItem>Fundamentals of HTML, CSS, JavaScript, and Python</ListItem>
                  <ListItem>Soft skills, including peer programming</ListItem>
                </ul>
              </SectionCol2>
            </SectionRow>
          </Section>
        </ResumeContainer>
        <p><a href="/">return home</a></p>
      </Layout >
    )
  }
}

export default Resume

const ResumeContainer = styled.div`

`;

const ResumeHeader = styled.div`
  margin-bottom: 10px;
`;

const ResumeName = styled.div`
  color: #d4d4dc;
  font-size: 2.82843rem;
  font-weight: 600;
  font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
`;

const ResumeContact = styled.div`
  display: flex;
`;

const ResumeContactLink = styled.a`
  margin-right: 15px;
`;

const ResumeContactItem = styled.p`
  margin-right: 15px;
  margin-bottom: 0;
`;

const ResumeSummary = styled.p`
  text-align: justify;
`;

const Section = styled.div`
`;

const SectionTitle = styled.h3`
  margin: 5px 0 5px 0;
  border-bottom: 2px solid white;
`;

const SectionRow = styled.div`
  display: flex;
  height: auto;
`;

const SectionCol1 = styled.p`
  display: flex;
  width: 20%;
  flex-direction: column;
`;

const SectionCol2 = styled.p`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const ColTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  /* margin-bottom: 18px; */
`;

const ColSummary = styled.p`
text-align: justify;
`;

const ListItem = styled.li`
  list-style-position: outside;
  line-height: 22px;
`;