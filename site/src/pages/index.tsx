import * as React from 'react'
import styled from 'styled-components'

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
    </Section>
  </Wrapper>
)

const Wrapper = styled.main``
const Section = styled.div``

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
