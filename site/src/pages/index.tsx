import * as React from 'react'
import styled from 'styled-components'
import AudioPlayer from '../components/audio-player'
import * as amaoto from '../audio/mp3/amaoto.mp3'
import * as movieStar from '../audio/mp3/movie_star.mp3'

interface Props {
  data: {
    site: {
      siteMetadata: {
        liveSchedule: {
          date: string,
          place: string,
          ticket: string,
          time: {
            open: string,
            start: string
          }[],
          url: string
        }[]
      }
    }
  }
}

export default ({ data }: Props) => (
  <Wrapper className='container'>
    <Section className='section is-medium'>
      <h3 className='title is-3 has-text-centered'>Biography</h3>
      <Contents className='content is-small'>
        <h2>Second level</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
      </Contents>
    </Section>
    <Section className='section is-medium'>
      <h3 className='title is-3 has-text-centered'>Live schedule</h3>
      <ul className='columns is-multiline is-3 is-variable'>
        {data.site.siteMetadata.liveSchedule.map((item, i) => (
          <li className='column is-4' key={i}>
            <div className='card'>
              <div className='card-header'>
                <p className='card-header-title'>{item.date}</p>
              </div>
              <div className='card-content'>
                <a href={item.url} target='_blank'>{item.place}</a>
                <p>Ticket: {item.ticket}</p>
                <p>Open: {item.time[0].open} / Start: {item.time[0].start}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
    <Section className='section is-medium'>
      <h3 className='title is-3 has-text-centered'>Demo</h3>
      <Contents className='content'>
        <AudioPlayer src={amaoto} title='雨音' />
        <AudioPlayer src={movieStar} title='movie star' />
      </Contents>
    </Section>
  </Wrapper>
)

const Wrapper = styled.main``
const Section = styled.div``
const Contents = styled.div``


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
