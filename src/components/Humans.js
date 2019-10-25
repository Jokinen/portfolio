import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import RetinaImage from 'react-retina-image'
import useWindowDimensions from 'hooks/useWindowDimensions'
import useElementDimensions from 'hooks/useElementDimensions'
import useElementOffset from 'hooks/useElementOffset'
import Box from 'system/Box'
import Text from 'system/Text'
import MaxWidth from 'components/MaxWidth'
import Link from 'components/Link'

const Label = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  padding: 0 ${(props) => props.theme.space[3]}px;

  font-family: ${(props) => props.theme.fonts.proximaNova};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  letter-spacing: ${(props) => props.theme.letterSpacings[0]};

  background: ${(props) => props.theme.colors.fg};
  border-radius: ${(props) => props.theme.radii[2]}px;

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[4]}px;
  }
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgb(29, 54, 128);
  background: linear-gradient(
    10deg,
    rgba(9, 18, 22, ${(props) => props.opacity}) 34%,
    rgba(0, 212, 255, 0) 100%
  );

  ${(props) =>
    props.opacity <= 0 &&
    css`
      display: none;
    `}
`

const DetailBox = ({
  titleSection,
  body,
  additionalSection,
  ignoreFade,
  ...rest
}) => {
  const { height } = useWindowDimensions()
  const [refForDimensions, rect] = useElementDimensions()
  const offset = height * 0.5 - rect.height * 0.5
  const [refForOffset, percentageInView] = useElementOffset(offset)
  const opacity = ((percentageInView) => {
    const baseOpacity = 0.2
    const fadeInStart = 0
    const fadeInEnd = 0.6
    const fadeOutStart = 1.6
    const fadeOutEnd = 2

    if (percentageInView < fadeInStart) {
      return baseOpacity
    }

    if (percentageInView >= fadeInStart && percentageInView <= fadeInEnd) {
      const fullDistance = fadeInEnd - fadeInStart
      const traveledDistance = percentageInView - fadeInStart
      const traveledPercentage = traveledDistance / fullDistance
      const fadingInOpacity = (1 - baseOpacity) * traveledPercentage

      return baseOpacity + fadingInOpacity
    }

    if (percentageInView > fadeInEnd && percentageInView < fadeOutStart) {
      return 1
    }

    if (ignoreFade && percentageInView >= fadeOutStart) {
      return 1
    }

    if (percentageInView >= fadeOutStart && percentageInView <= fadeOutEnd) {
      const fullDistance = fadeOutEnd - fadeOutStart
      const traveledDistance = percentageInView - fadeOutStart
      const traveledPercentage = traveledDistance / fullDistance
      const extraOpacity = 1 - baseOpacity
      const fadingInOpacity = extraOpacity * traveledPercentage

      return 1 - fadingInOpacity
    }

    return baseOpacity
  })(percentageInView)

  const setRefs = useCallback(
    (ref) => {
      refForDimensions(ref)
      refForOffset(ref)
    },
    [refForDimensions, refForOffset]
  )

  return (
    <Box
      ref={setRefs}
      display="flex"
      flexDirection="column"
      maxWidth={600}
      {...rest}
      style={{ opacity, position: 'relative' }}
    >
      {titleSection}
      <Text variant="body" as="p" mb={4}>
        {body}
      </Text>
      <Box>{additionalSection}</Box>
      <Mask opacity={percentageInView >= 0.6 ? 0 : 1 - opacity} />
    </Box>
  )
}

function Humans() {
  const { height: windowHeight } = useWindowDimensions()
  const [sectionElement, { height: sectionHeight }] = useElementDimensions()
  const [titleBoxElement, { height: elementHeight }] = useElementDimensions()

  const topOffset =
    (sectionHeight < windowHeight ? sectionHeight : windowHeight) * 0.5 -
    elementHeight * 0.5

  return (
    <MaxWidth ref={sectionElement} display="flex" className="humans">
      <div>
        <Box
          ref={titleBoxElement}
          width={490}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          style={{ position: 'sticky', top: topOffset || 0 }}
        >
          <Text variant="title2" as="h4" mb={1}>
            Humans
          </Text>
          <Text variant="body" as="p">
            People need work together to create. Results need to be made for the
            people.
          </Text>
        </Box>
      </div>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Box display="flex" flexDirection="column">
          <Box height={200} />
          <DetailBox
            titleSection={
              <Box mb={4}>
                <RetinaImage alt="IDBM logo" src="/IDBM.png" />
              </Box>
            }
            body="Renewal is spurred on by those who can enable organisations to harness the different talents and viewpoints which exist within. Meaningful innovation requires people who are willing to work in uncertainty, with diversity and by facilitating the user."
            additionalSection={
              <>
                <Label>Master’s at Aaalto</Label>
                <Link href="https://www.idbm.aalto.fi/">To program page ↗</Link>
              </>
            }
          />
          <Box height={100} />
          <DetailBox
            titleSection={
              <Text variant="title1" as="h3" mb={4} lineHeight="0.74">
                Work
              </Text>
            }
            body="Removing obstacles creates happier co-workers. I want to bring a passion for working towards the common good. I value methods like retrospectives for findings things to improve."
            additionalSection={
              <>
                <Link href="https://www.idbm.aalto.fi/">
                  My bachelor's thesis about Retrospectives ↗
                </Link>
              </>
            }
          />
          <Box height={100} />
          <DetailBox
            titleSection={
              <Text variant="title1" as="h3" mb={4} lineHeight="0.74">
                User interface design
              </Text>
            }
            body="I have work experience as a graphical designer, and have worked with InDesign and Photoshop. Currently I am using the Affinity suite. I am competent with such tools as Figma or Sketch, have studied human computer interaction as a minor and have worked with design responsibilities."
            additionalSection={
              <>
                <Link href="https://www.idbm.aalto.fi/">
                  View this project's design in Figma ↗
                </Link>
              </>
            }
            ignoreFade
          />
        </Box>
      </Box>
    </MaxWidth>
  )
}

export default Humans
