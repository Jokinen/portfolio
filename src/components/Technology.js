import React from 'react'
import styled from 'styled-components'
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

const DetailBox = ({ titleSection, body, additionalSection, ...rest }) => {
  return (
    <Box display="flex" flexDirection="column" maxWidth={600} {...rest}>
      {titleSection}
      {body}
      {additionalSection && <Box>{additionalSection}</Box>}
    </Box>
  )
}

function Technology() {
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
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        mb={7}
      >
        <Box width={1 / 2} pr={3}>
          <Box display="flex" justifyContent="flex-end">
            <UnofficialJSLogo style={{ width: 140 }} />
            <ReactLogo style={{ width: 240, marginLeft: -70 }} />
          </Box>
        </Box>
        <Box width={1 / 2}>
          <DetailBox
            titleSection={
              <Text variant="title2" as="h4" mb={4}>
                JavaScript
              </Text>
            }
            body={
              <Text variant="body" as="p" mb={4}>
                I have industry experience in <Code>AngularJS</Code>,{' '}
                <Code>Meteor</Code>, <Code>Express</Code> and <Code>React</Code>
                , with React being my strongest framework. I'm comfortable with{' '}
                <Code>npm</Code>, <Code>webpack</Code> and some of the older
                tools like <Code>grunt</Code> or <Code>gulp</Code>. Nowadays I
                prefer to work with React, CSS-in-JS and Typescript.
              </Text>
            }
            additionalSection={
              <>
                <Link href="https://www.idbm.aalto.fi/">
                  View this project in GitHub ↗
                </Link>
              </>
            }
          />
        </Box>
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="flex-start" mb={6}>
        <Box width={1 / 2}>
          <DetailBox
            titleSection={
              <Text variant="title3" as="h5" mb={3}>
                Project management
              </Text>
            }
            body={
              <Text variant="body2" as="p" mb={3}>
                I've completed a project management certificate and been
                responsible for small projects.
              </Text>
            }
            additionalSection={
              <>
                <Link href="https://github.com/Jokinen?tab=repositories">
                  Project management certificate ↗
                </Link>
              </>
            }
          />
        </Box>
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="flex-start" mb={6}>
        <Box width={1 / 2}>
          <DetailBox
            titleSection={
              <Text variant="title3" as="h5" mb={3}>
                Studies
              </Text>
            }
            body={
              <Text variant="body2" as="p" mb={3}>
                I've studied information technology or computer sciences in two
                Finnish universities completing master level courses in both.
              </Text>
            }
          />
        </Box>
        <Box width={1 / 2}>
          <DetailBox
            titleSection={
              <Text variant="title3" as="h5" mb={3}>
                Python
              </Text>
            }
            body={
              <Text variant="body2" as="p" mb={3}>
                I learned web development by doing <Code>Django</Code> projects,
                and it's still my goto framework for personal projects.
              </Text>
            }
            additionalSection={
              <>
                <Link href="https://github.com/Jokinen?tab=repositories">
                  To my GitHub profile ↗
                </Link>
              </>
            }
          />
        </Box>
      </Box>
    </MaxWidth>
  )
}

export default Technology
