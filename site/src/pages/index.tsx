import * as React from 'react'
import styled from 'styled-components'
import AudioPlayer from '../components/audio-player'
import * as amaoto from '../audio/mp3/amaoto.mp3'
import * as movieStar from '../audio/mp3/movie_star.mp3'
import * as circleImage from '../images/circle.jpg'
import * as selfImage from '../images/pic1.jpg'

interface Props {
  data: {
    site: {
      siteMetadata: {
        liveSchedule: {
          date: string
          place: string
          ticket: string
          time: {
            open: string
            start: string
          }[]
          url: string
        }[]
      }
    }
  }
}

export default ({ data }: Props) => (
  <Wrapper className="container">
    <div className="media">
      <Section className="section is-medium">
        <h3 className="title is-3 has-text-centered">Biography</h3>
        <Contents className="content is-small">
          <p>
            Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{' '}
            blandit. Quisque condimentum maximus mi, sit amet commodo arcu
            rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse
            potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at
            dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>
              Aliquam nec felis in sapien venenatis viverra fermentum nec
              lectus.
            </li>
            <li>Ut non enim metus.</li>
          </ul>
        </Contents>
      </Section>
      <div className="media-right">
        <p className="image is-256x256">
          <img src={selfImage} alt="" />
        </p>
      </div>
    </div>
    <Section className="section is-medium">
      <h3 className="title is-3 has-text-centered">Sound sources</h3>
      <CircleContents className="content">
        <AudioPlayer src={amaoto} title="雨音" />
        <AudioPlayer src={movieStar} title="movie star" />
      </CircleContents>
    </Section>
    <Section className="section is-medium">
      <h3 className="title is-3 has-text-centered">Live schedule</h3>
      <ul className="columns is-multiline is-3 is-variable">
        {data.site.siteMetadata.liveSchedule.map((item, i) => (
          <li className="column is-4" key={i}>
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">{item.date}</p>
              </div>
              <div className="card-content">
                <LivePlace href={item.url} target="_blank">
                  <i className="far fa-compass" />
                  {item.place}
                </LivePlace>
                <p>Ticket: {item.ticket}</p>
                <p>
                  Open: {item.time[0].open} / Start: {item.time[0].start}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  </Wrapper>
)

const Wrapper = styled.main``
const Section = styled.div``
const CircleContents = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.8) 45%),
      url(${circleImage}) no-repeat right center;
    background-size: 100%;
    opacity: 0.6;
    animation: bounce 4s infinite ease-in-out;
  }
`
const Contents = styled.div``
const LivePlace = styled.a`
  margin-bottom: 0.6rem;
  display: block;

  .fa-compass {
    margin-right: 0.5rem;
  }
`

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
  query LiveScheduleQuery {
    site {
      siteMetadata {
        liveSchedule {
          date
          place
          ticket
          time {
            open
            start
          }
          url
        }
      }
    }
  }
`
