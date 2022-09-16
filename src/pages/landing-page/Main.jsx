import React, { useEffect } from 'react'
import { Section, Container, Wrapper } from '../../components/Container'
import Sphere from '../../components/Sphere'
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
        <Container full direction='col'>
          <Wrapper>
            <h2 className='header'>welcome</h2>
          </Wrapper>
          <Container>
            <Container direction='column' align='left'>
              <h1 className='header-xl'>Hi, Welcome!</h1>
              <h1 className='text-[4.5rem] font-light font-melodrama'>Im Galih Adhi Kusuma!</h1>
            </Container>
            <Container align='right'>
              <Sphere />
            </Container>
          </Container>
        </Container>
        <Section>
          <div className='header-xl inline-block'>Anjay</div>
        </Section>
      </Section>
    </div>
  )
}

export default Main