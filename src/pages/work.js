import React from 'react'
import Layout from '../components/layout'

import WorkItem from '../components/workItem'

import goToMeetingImage from '../images/gotomeeting.png'
import ibmQNetworkImage from '../images/ibm-q-network.png'
import lopdpImage from '../images/lopdp.png'
import codingCoachImage from '../images/coding-coach.png'
import planItImage from '../images/planit.png'

const WorkPage = () => (
  <Layout>
    <h1
      style={{
        textTransform: 'uppercase',
        fontWeight: '100',
        marginTop: '50px',
        fontSize: '25px',
        letterSpacing: '4px',
      }}
    >
      Development Work
    </h1>
    <WorkItem
      image={goToMeetingImage}
      title="Go To Meeting"
      date="2018 - current"
      tech="HTML, CSS, JavaScript, React, Redux, TypeScript."
      goal="Provide an accessible user interface to enhance the quality of your meetings."
      link="https://www.gotomeeting.com/"
    />
    <hr />
    <WorkItem
      image={ibmQNetworkImage}
      title="IBM Q Network"
      date="2017 - 2018"
      tech="HTML, CSS, JavaScript, Vue.js, Sass, W3C Accessibility, Webpack."
      goal="Provide a responsive and accessible website to inform users about the IBM Quantum Network."
      link="https://www.research.ibm.com/ibm-q/network/"
    />
    <hr />
    <WorkItem
      image={lopdpImage}
      title="Open Source Power & Availability Tool"
      date="2017"
      tech="HTML, CSS, JavaScript, WordPress, IBM Northstar Design."
      goal="Provide an easy-to-use solution for developers looking for Linux packages on the IBM Power platform."
      link="https://developer.ibm.com/linuxonpower/open-source-pkgs/"
    />
    <hr />
    <h1
      style={{
        textTransform: 'uppercase',
        fontWeight: '100',
        marginTop: '50px',
        fontSize: '25px',
        letterSpacing: '4px',
      }}
    >
      Design Work
    </h1>
    <WorkItem
      image={codingCoachImage}
      title="Coding Coach"
      date="2018 - present"
      tech="Sketch, Invision, Figma, GitHub, ZenHub."
      goal="Create a platform to connect mentors and mentees around the world."
      link="https://codingcoach.io/"
    />
    <hr />
    <WorkItem
      image={planItImage}
      title="PlanIt"
      date="2018"
      tech="Sketch, HTML, CSS, JavaScript Vue.js, GitHub, ZenHub."
      goal="Design a system to get banking customers more involved in eco-friendly lifestyles."
      link="https://emmawedekind.github.io/planIt/"
    />
  </Layout>
)

export default WorkPage
