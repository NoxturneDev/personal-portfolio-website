import React from 'react'
import Pages from '../../components/Pages'
import PagesWrapper from '../../components/PageWrapper'

function Main() {
  return (
    <Pages>
      <PagesWrapper name="HOME" />
      <PagesWrapper name="ABOUT" />
      <PagesWrapper name="PROJECT" />
    </Pages>
  )
}

export default Main