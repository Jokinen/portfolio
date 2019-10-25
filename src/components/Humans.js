import React, { useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components/macro'
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
  top: -10px;
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
  quote,
  quoteAuthor,
  additionalSection,
  ignoreFade,
  ...rest
}) => {
  const { height } = useWindowDimensions()
  const [refForDimensions, rect] = useElementDimensions()
  const offset = height * 0.5 - rect.height * 0.5
  const [refForOffset, percentageInView] = useElementOffset(offset)
  const getOpacity = useCallback(
    (percentageInView) => {
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
    },
    [ignoreFade]
  )

  const setRefs = useCallback(
    (ref) => {
      refForDimensions(ref)
      refForOffset(ref)
    },
    [refForDimensions, refForOffset]
  )
  const opacity = useMemo(() => getOpacity(percentageInView), [
    percentageInView,
    getOpacity,
  ])

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
      {quote && (
        <figure style={{ marginLeft: 0, marginTop: 0 }}>
          <Text variant="quote2" as="blockquote" mb={2} color="secondarys.0">
            {quote}
          </Text>
          <Text variant="body3" as="figcaption" mb={2} color="secondarys.0">
            — {quoteAuthor}
          </Text>
        </figure>
      )}
      <Box>{additionalSection}</Box>
      <Mask opacity={percentageInView >= 0.6 ? 0 : 1 - opacity} />
    </Box>
  )
}

function Humans() {
  const boxes = [
    {
      titleSection: (
        <Box mb={4}>
          <RetinaImage alt="IDBM logo" src="/IDBM.png" />
        </Box>
      ),
      body:
        'Renewal is spurred on by those who can enable organisations to harness the different talents and viewpoints which exist within. Meaningful innovation requires people who are willing to work in uncertainty, with diversity and by using human centered approaches.',
      additionalSection: (
        <>
          <Label>Master’s at Aaalto</Label>
          <Link href="https://www.idbm.aalto.fi/">To program page ↗</Link>
        </>
      ),
    },
    {
      titleSection: (
        <Text variant="title1" as="h3" mb="26px" lineHeight="0.74">
          Coworkers
        </Text>
      ),
      body:
        'Removing obstacles creates happier co-workers. I want to bring a passion for making work more enjoyable. I value methods like retrospectives for findings things to improve.',
      /*
        Edistit työyhteisöämme vetämällä luovasti ikimuistoisia co-creationaalisia tapahtumia, kuten workshoppeja, parikoodausta, retroja
      */
      quote:
        '"Helped forward our work community by organising unforgettable co-creation events, such as workshops, pair programming and retrospectives."',
      quoteAuthor: (
        <Link href="https://www.linkedin.com/in/josia-nyman-970b44137/">
          Josia Nyman ↗
        </Link>
      ),
    },
    {
      titleSection: (
        <Text variant="title1" as="h3" mb="26px" lineHeight="0.74">
          User interface design
        </Text>
      ),
      body:
        'I have work experience with InDesign and Photoshop. Currently I am using the Affinity suite. I am competent with such tools as Figma or Sketch, have studied human computer interaction as a minor and have worked with design responsibilities.',
      additionalSection: (
        <>
          <Link href="https://www.idbm.aalto.fi/">
            View this project's design in Figma ↗
          </Link>
        </>
      ),
    },
  ]

  return (
    <MaxWidth
      display="flex"
      flexDirection={['column', 'row']}
      className="humans"
    >
      <div>
        <Box
          width={['auto', 490]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          style={{
            position: 'sticky',
            top: `50%`,
            transform: 'translateY(-50%)',
          }}
        >
          <Text variant="title2" as="h4" mb={3}>
            Humans
          </Text>
          <Text variant="body" as="p">
            Meaningful purpose means to the people's benefit.
          </Text>
        </Box>
      </div>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Box display="flex" flexDirection="column">
          <Box height={[100, 200]} />
          {boxes.map((box, i, arr) => {
            const isLast = arr.length - 1 === i

            return (
              <React.Fragment key={box.body}>
                <DetailBox {...box} ignoreFade={isLast} />
                {!isLast && <Box height={100} />}
              </React.Fragment>
            )
          })}
        </Box>
      </Box>
    </MaxWidth>
  )
}

export default Humans
