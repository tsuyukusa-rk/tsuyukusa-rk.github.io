import * as React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { compose, withStateHandlers, withHandlers } from 'recompose'

interface Props {
  src: string
  title: string
  isPlaying: boolean
  toggleIsPlaying: () => any
  playedSeconds: number
  updatePlayedSeconds: (playedSeconds: number) => any
  createRef: (ref: any) => any
  stopPlaying: () => any
  goPlaying: () => any
  backPlaying: () => any
}

export default compose(
  withStateHandlers(
    {
      isPlaying: false,
      playedSeconds: 0,
    },
    {
      stopIsPlaying: () => () => ({ isPlaying: false }),
      toggleIsPlaying: ({ isPlaying }: { isPlaying: boolean }) => () => ({
        isPlaying: !isPlaying,
      }),
      updatePlayedSeconds: () => (playedSeconds: number) => ({
        playedSeconds: Math.round(playedSeconds),
      }),
    }
  ),
  withHandlers(() => {
    let $ref: any
    return {
      createRef: () => (ref: any) => {
        $ref = ref
      },
      stopPlaying: ({ stopIsPlaying }: { stopIsPlaying: () => any }) => () => {
        stopIsPlaying()
        $ref.seekTo(0)
      },
      goPlaying: () => () => {
        const currentTime = $ref.getCurrentTime()
        $ref.seekTo(currentTime + 10)
      },
      backPlaying: () => () => {
        const currentTime = $ref.getCurrentTime()
        $ref.seekTo(currentTime - 10)
      },
    }
  })
)(
  ({
    src,
    title,
    isPlaying,
    toggleIsPlaying,
    playedSeconds,
    updatePlayedSeconds,
    createRef,
    stopPlaying,
    goPlaying,
    backPlaying,
  }: Props) => (
    <Wrapper>
      <ReactPlayer
        ref={createRef}
        onProgress={({ playedSeconds }) => {
          updatePlayedSeconds(playedSeconds)
        }}
        playing={isPlaying}
        url={src}
        height="0"
        width="0"
      />
      <div className="hero-body">
        <Title className="title is-4 is-spaced has-text-centered">
          <i className="fas fa-signature" />
          {title}
        </Title>
        <CtrlWrapper className="subtitle is-flex">
          <Time>
            {playedSeconds < 10
              ? `0:0${playedSeconds}`
              : playedSeconds < 60
                ? `0:${playedSeconds}`
                : `${Math.floor(playedSeconds / 60)}:${
                    playedSeconds % 60 < 10 ? 0 : ''
                  }${playedSeconds % 60}`}
          </Time>
          <div onClick={!isPlaying && toggleIsPlaying}>
            <i className="far fa-play-circle" />
          </div>
          <div onClick={isPlaying && toggleIsPlaying}>
            <i className="far fa-pause-circle" />
          </div>
          <div onClick={stopPlaying}>
            <i className="far fa-stop-circle" />
          </div>
          <div onClick={backPlaying}>
            <i className="fas fa-angle-double-left" />
          </div>
          <div onClick={goPlaying}>
            <i className="fas fa-angle-double-right" />
          </div>
        </CtrlWrapper>
      </div>
    </Wrapper>
  )
)

const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Title = styled.div`
  line-height: 1.125 !important;
  color: #aaa !important;

  > .fa-signature {
    font-weight: 100;
    font-size: 1.5rem;
    color: #999;
    margin-right: 0.8rem;
  }
`
const CtrlWrapper = styled.div`
  color: #aaa !important;

  > div {
    margin-right: 1.5rem;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
`
const Time = styled.div`
  padding-right: 1.5rem;
  border-right: 1px solid #aaa;
`
