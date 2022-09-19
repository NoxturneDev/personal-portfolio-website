import React from 'react'
import {NavIcon} from './Icons'

function PageHeader() {
    return (
        <div className="page-header container-flex">
            <h1 className='header'>HEADER</h1>
            <div className='nav-icon'>
                <NavIcon />
            </div>
        </div>
    )
}

export default PageHeader