import React from 'react'
import PageContent from './PageContent'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

function PageWrapper() {
    return (
        <div className="container-flex-col page-wrapper">
            <PageHeader></PageHeader>
            <PageContent></PageContent>
            <PageFooter></PageFooter>
        </div>
    )
}

export default PageWrapper