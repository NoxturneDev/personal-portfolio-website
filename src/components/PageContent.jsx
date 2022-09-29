import React from 'react'
import PageFooter from './PageFooter'

function PageContent({ children: content, name, pageClass }) {
    return (
        <div className="container-flex-col page-wrapper" data-page={name}>
            <div className={`page-content ${pageClass}`}>
                {content}
            </div>
            <PageFooter></PageFooter>
        </div>
    )
}

export default PageContent