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
              <ResumeContactLink href="mailto://mdagard@gmail.com">mdagard@gmail.com</ResumeContactLink>
              <ResumeContactItem>Graysville TN</ResumeContactItem>
              <ResumeContactLink href="https://www.linkedin.com/in/mdagard" target="_blank">LinkedIn</ResumeContactLink>
              <ResumeContactLink href="https://github.com/michaelagard" target="_blank">GitHub</ResumeContactLink>
              <ResumeContactLink href="https://twitter.com/AdultAgard" target="_blank">Twitter</ResumeContactLink>
            </ResumeContact>
          </ResumeHeader>
          <ResumeSummary>
            Full stack web developer with 4 years of experience as a project manager. I'm most experienced with JavaScript, and I've also worked with Python.
          </ResumeSummary>
          <Section>
            <SectionTitle>Projects</SectionTitle>
            <SectionRow>
              <SectionCol1>
                Nov. 2018 to Dec. 2018
            </SectionCol1>
              <SectionCol2>
                <ColTitle>RateMyDIY · Team of 5 · <a href="https://ratemydiy-dev.netlify.com/" target="_blank">ratemydiy-dev.netlify.com</a></ColTitle>
                <ColSummary>RateMyDIY was a labs project that was worked on over the course of a month, that demonstrates database manipulation and 3rd party authentication using Javascript, React, Redux, Node and MySQL.
                <ul>
                    <ListItem>Contributed to Node.js / express server endpoints and API.</ListItem>
                    <ListItem>Wrote several components for </ListItem>
                  </ul>
                </ColSummary>
              </SectionCol2>
            </SectionRow>
          </Section>
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
                Databases
            </SectionCol1>
              <SectionCol2>
                <ColSummary>SQLite, Microsoft SQL, PostgreSQL</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                Frameworks
            </SectionCol1>
              <SectionCol2>
                <ColSummary>React, Gatsby</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                Backend
            </SectionCol1>
              <SectionCol2>
                <ColSummary>JavaScript, Python3</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                Server side
            </SectionCol1>
              <SectionCol2>
                <ColSummary>Node.js, Express</ColSummary>
              </SectionCol2>
            </SectionRow>
          </Section>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            <SectionRow>
              <SectionCol1>
                June 2014 to July 2018
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Pentius · Project Manager · Boca Raton, FL (Remote)</ColTitle>
                <ColSummary>
                  <ul>
                    <ListItem>Coordinate large and small scale development projects focused in SQL and classic asp agile developement.</ListItem>
                    <ListItem>Report on my developers' activity to the senior PM hourly.</ListItem>
                    <ListItem>Automate daily and weekly tests and monitor reports for errors to ticket.</ListItem>
                    <ListItem>Manage several credit based social media accounts across several platforms.</ListItem>
                  </ul>
                </ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                June 2011 to July 2014
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Walden Security · Security Officer · Chattanooga, TN</ColTitle>
                <ColSummary>
                  <ul>
                    <ListItem>Performed critical observations, routine tasks, and reported regularly to a superior.</ListItem>
                    <ListItem>Logged all activitiy hourly.</ListItem>
                  </ul>
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
                <ColTitle>Lambda School</ColTitle>
                <ColSummary>Full Stack Web Development Track
                  Lambda School is an immersive hands-on Software Engineering and Computer Science Academy with acurriculum that includes:</ColSummary>
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
    `;
const ResumeSummary = styled.p`
          /* margin-top: 1px; */
        `;

const Section = styled.div`
          display: flex;
          flex-direction: column;
        `;

const SectionTitle = styled.h3`
        margin: 5px 0 10px 0;
        border-bottom: 2px solid white;
        `;

const SectionRow = styled.div`
          display: flex;
        `;

const SectionCol1 = styled.p`
          display: flex;
          width: 20%;
          margin-bottom: -15px;
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
          margin-bottom: 18px;
        `;

const ColSummary = styled.p`
          /* margin-bottom: 5px; */
`;

const ListItem = styled.li`
  list-style-position: outside;
`;