import React, { useEffect } from 'react'
import { Section, Container, Wrapper } from '../../components/Container'
import luxy from 'luxy.js'


function Main() {

  const smoothScroll = () => {
    // luxy.init()

    // luxy.settings.wrapperSpeed = 0.02
  }

  useEffect(() => {
    smoothScroll()
  }, [])

  return (
    <div style={{ overflowX: 'scroll'}} id="luxy">
      <Section customClass="w-max">
        <Section>
          <div className='header-xl inline-block'>Anjay</div>
        </Section>
        <Section>
          <div className='header-xl inline-block'>Anjay</div>
        </Section>
      </Section>
    </div>
  )
}

export default Main