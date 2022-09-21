import React from 'react'
import PageContent from './PageContent'
import PageFooter from './PageFooter'

function PageWrapper() {
    return (
        <div className="container-flex-col page-wrapper">
            <PageContent></PageContent>
            <PageFooter></PageFooter>
        </div>
    )
}

export default PageWrapper