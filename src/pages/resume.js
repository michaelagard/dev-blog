import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components';

class Resume extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <ResumeContainer>
          <ResumeHeader>
            <ResumeName>
              michael agard
            </ResumeName>
            <ResumeContact>
              <ResumeContactLink href="mailto://mdagard@gmail.com">mdagard@gmail.com</ResumeContactLink>
              <ResumeContactLink href="https://goo.gl/maps/K2Hh1z4ZkVo" target="_blank">Graysville TN</ResumeContactLink>
              <ResumeContactLink href="https://www.linkedin.com/in/michael-agard-7a1289105/" target="_blank">Linkedin</ResumeContactLink>
              <ResumeContactLink href="https://github.com/michaelagard" target="_blank">Github</ResumeContactLink>
              <ResumeContactLink href="https://twitter.com/AdultAgard" target="_blank">AdultAgard</ResumeContactLink>
            </ResumeContact>
          </ResumeHeader>
          <ResumeSummary>
            I am a Full Stack Web developer with 4 years of experience as a project manager. I'm most experienced with Javascript, and I've also worked with Python.
          </ResumeSummary>
          <Section>
            <SectionTitle>Education</SectionTitle>
            <SectionRow>
              <SectionCol1>
                June 2014 to July 2018
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Pentius · Project Manager · Remote</ColTitle>
                <ColSummary>Coordinating large and small scale development projects focusing in SQL and classic asp.</ColSummary>
              </SectionCol2>
            </SectionRow>
          </Section>
          <Section>
            <SectionTitle>Education</SectionTitle>
            <SectionRow>
              <SectionCol1>
                July 2018 to Mar. 2019
              </SectionCol1>
              <SectionCol2>
                <ColTitle>Lambda School</ColTitle>
                <ColSummary>Full Stack Web Development Track</ColSummary>
              </SectionCol2>
            </SectionRow>
          </Section>
          <Section>
            <SectionTitle>Skills</SectionTitle>
            <SectionRow>
              <SectionCol1>
                FRONT END
            </SectionCol1>
              <SectionCol2>
                <ColSummary>HTML, CSS, Javascript</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                DATABASES
            </SectionCol1>
              <SectionCol2>
                <ColSummary>SQLite, Microsoft SQL, PostgreSQL</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                FRAMEWORKS
            </SectionCol1>
              <SectionCol2>
                <ColSummary>React, Gatsby</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                BACKEND
            </SectionCol1>
              <SectionCol2>
                <ColSummary>Javascript, Python3</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                SERVER SIDE
            </SectionCol1>
              <SectionCol2>
                <ColSummary>Node, Express</ColSummary>
              </SectionCol2>
            </SectionRow>
            <SectionRow>
              <SectionCol1>
                OTHER
            </SectionCol1>
              <SectionCol2>
                <ColSummary>Yarn, NPM, JSON Web Tokens, CSS Media Queries, Jest Testing</ColSummary>
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
                <ColTitle><a href="https://ratemydiy-dev.netlify.com/" target="_blank">RateMyDIY</a></ColTitle>
                <ColSummary>RateMyDIY was a labs project that was worked on over the course of a month, that demonstrated advanced CRUD operations using Javascript, React, Redux, Node and MySQL.</ColSummary>
              </SectionCol2>
            </SectionRow>
          </Section>

          <Section>

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
`;

const ResumeContact = styled.div`
  display: flex;
`;

const ResumeContactLink = styled.a`
  margin-right: 15px;
`;

const ResumeSummary = styled.p`
  margin-top: 15px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
margin-top: -1px;
`;

const SectionRow = styled.div`
  display: flex;
`;

const SectionCol1 = styled.p`
  display: flex;
  width: 35%;
  margin-bottom: -15px;
  flex-direction: column;
`;

const SectionCol2 = styled.p`
  display: flex;
  width: 65%;
  flex-direction: column;
`;

const ColTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

const ColSummary = styled.p`
  margin-bottom: 5px;
`;