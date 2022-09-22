import React from 'react'
import PageContent from './PageContent'
import PageFooter from './PageFooter'

function PageWrapper({name}) {
    return (
        <div className="container-flex-col page-wrapper" data-page={name}>
            <PageContent></PageContent>
            <PageFooter></PageFooter>
        </div>
    )
}

export default PageWrapper