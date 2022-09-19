import React from 'react'
import Sphere from './Sphere'

function PageContent() {
    return (
        <div className="page-content welcome-page-content">
            <div className="title-wrapper">
                <h1 className='welcome-page-title container-flex'>Hi, Welcome !</h1>
                <h1 className='welcome-page-subtitle container-flex'>My name is Galih Adhi Kusuma</h1>
            </div>
            <Sphere />
        </div>
    )
}

export default PageContent