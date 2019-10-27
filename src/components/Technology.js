import React from 'react'
import styled from 'styled-components/macro'
import Box from 'system/Box'
import Text from 'system/Text'
import MaxWidth from 'components/MaxWidth'
import Link from 'components/Link'
import { ReactComponent as ReactLogo } from 'vectors/react-logo.svg'
import { ReactComponent as UnofficialJSLogo } from 'vectors/unofficial-js-logo.svg'

const Code = styled.code`
  padding: 0.2em 0.4em;

  font-size: 85%;
  font-family: ${(props) => props.theme.fonts.mono};

  border-radius: ${(props) => props.theme.radii[1]}px;
  background: ${(props) => props.theme.colors.primarys[0]};
`

const DetailBox = ({ titleSection, body, additionalSection, big, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={big ? 600 : 400}
      {...rest}
    >
      {titleSection}
      {body}
      {additionalSection && <Box>{additionalSection}</Box>}
    </Box>
  )
}

function Technology() {
  const subTechnologies = [
    {
      titleSection: (
        <>
          <Code>git</Code>
        </>
      ),
      body: (
        <>
          I'm well versed in <Code>git</Code> and general best practices when it
          comes to version control. I appreciate a well formatted commit history
          and PR descriptions which help reviewers to understand changes. I am
          in the <Code>rebase</Code> camp.
        </>
      ),
      additionalSection: (
        <>
          <Link href="https://github.com/Jokinen?tab=repositories">
            Check commit history ↗
          </Link>
        </>
      ),
    },
    {
      titleSection: <>Testing</>,
      body: (
        <>
          I have written tests with <Code>enzyme</Code> and{' '}
          <Code>@testing-library/react</Code>, preferring the latter because
          test cases tend to align better with how the software is used. I have
          used <Code>mocha</Code>, <Code>chai</Code> and <Code>karma</Code> but
          now mostly just use <Code>jest</Code>.
        </>
      ),
      additionalSection: (
        <>
          <Link href="https://github.com/Jokinen?tab=repositories">
            To my GitHub profile ↗
          </Link>
        </>
      ),
    },
    {
      titleSection: <>Typed variants</>,
      body: (
        <>
          I've used <Code>Flow</Code> extensively and <Code>Typescript</Code>. I
          prefer having the option to work with types. Based on my experiences,
          of the two mentioned here, <Code>Typescript</Code> offers a better DX.
        </>
      ),
    },
    {
      titleSection: <>Project management</>,
      body: (
        <>
          I've completed a project management certificate and been responsible
          for small projects. I am familiar with common practices in tech teams
          such as <Code>Kanban</Code> or <Code>Scrum</Code>, and have used
          popular tools like <Code>GitHub</Code>, <Code>GitLab</Code>,{' '}
          <Code>Trello</Code> and <Code>Slack</Code>.
        </>
      ),
      additionalSection: (
        <>
          <Link href="https://github.com/Jokinen?tab=repositories">
            Project management certificate ↗
          </Link>
        </>
      ),
    },
    {
      titleSection: <>Python</>,
      body: (
        <>
          I learned web development by doing <Code>Django</Code> projects, and
          it's still my goto framework for personal projects.
        </>
      ),
      additionalSection: (
        <>
          <Link href="https://github.com/Jokinen?tab=repositories">
            Event calendar made with Django ↗
          </Link>
        </>
      ),
    },
    {
      titleSection: <>Code quality</>,
      body: (
        <>
          I use tools like <Code>prettier</Code> and <Code>eslint</Code> to
          enforce common disagreements, preferring defacto defaults. When it
          comes to code quality, I focus on clarity of intention and the health
          of the architecture.
        </>
      ),
    },
  ]

  return (
    <MaxWidth display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={8}
      >
        <Text variant="title1" as="h3" mb={3}>
          Technology
        </Text>
        <Text variant="body" as="p">
          My hard skills are in JavaScript based stacks and UI development.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        mb={7}
      >
        <Box width={[1, 0.45]} pr={6}>
          <Box display="flex" justifyContent="flex-end">
            <UnofficialJSLogo style={{ width: 140 }} />
            <ReactLogo style={{ width: 240, marginLeft: -70 }} />
          </Box>
        </Box>
        <Box width={[1, 1 / 2]}>
          <DetailBox
            titleSection={
              <Text variant="title2" as="h4" mb={4}>
                JavaScript
              </Text>
            }
            body={
              <Text variant="body" as="p" mb={4}>
                I have industry experience in <Code>AngularJS</Code>,{' '}
                <Code>Meteor</Code>, <Code>Express</Code>, <Code>Node.js</Code>{' '}
                and <Code>React</Code>, with React being my strongest framework.
                I'm comfortable with <Code>npm</Code>, <Code>webpack</Code> and
                some of the older tools like <Code>grunt</Code> or{' '}
                <Code>gulp</Code>. Nowadays I prefer to work with React,
                CSS-in-JS and <Code>Typescript</Code>.
              </Text>
            }
            additionalSection={
              <>
                <Link href="https://www.idbm.aalto.fi/">
                  View this project in GitHub ↗
                </Link>
              </>
            }
            big
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {subTechnologies.map((tech, i) => (
          <DetailBox
            key={i}
            {...tech}
            titleSection={
              <Text variant="title3" as="h5" mb={3}>
                {tech.titleSection}
              </Text>
            }
            body={
              <Text variant="body3" as="p" mb={3}>
                {tech.body}
              </Text>
            }
            width={[1, 1 / 2, 1 / 3]}
            mb={[5, 6]}
            flexGrow={1}
          />
        ))}
      </Box>
    </MaxWidth>
  )
}

export default Technology
