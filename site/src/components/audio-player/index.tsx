import * as React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { compose, withStateHandlers } from 'recompose'

interface Props {
  src: string
  title: string,
  isPlaying: boolean,
  toggleIsPlaying: () => any
}

export default compose(
  withStateHandlers(
    { isPlaying: false },
    {
      toggleIsPlaying: ({ isPlaying }: { isPlaying: boolean }) => () => ({ isPlaying: !isPlaying })
    }
  )
)(({
  src,
  title,
  isPlaying,
  toggleIsPlaying
}: Props) => (
  <Wrapper>
    <section className="hero is-light">
      <ReactPlayer playing={isPlaying} url={src} height='0' width='0' />
      <div className="hero-body">
        <div className="container">
          <p className="title is-4 is-spaced">{title}</p>
          <CtrlWrapper className="subtitle is-flex">
            <div onClick={!isPlaying && toggleIsPlaying}>
              <i className="fas fa-play-circle" />
            </div>
            <div onClick={isPlaying && toggleIsPlaying}>
              <i className="fas fa-stop-circle" />
            </div>
          </CtrlWrapper>
        </div>
      </div>
    </section>
  </Wrapper>
))

const CtrlWrapper = styled.div`
  > div {
    margin-right: 15px;
    cursor: pointer;
  }
`
const Wrapper = styled.div`
  margin-top: 4rem;
`