import React from 'react'

/**
 * 
 * @param {String} children - components children
 * @param {String} custom - custom tailwind classes for the components
 * @param {Boolean} full - default : false, fullscreen size
 * @param {String} direction - default : row, values = [top, bot] 
 * @param {String} align - default : center, values [center, left, right, top, bot]
 * @returns react container components
 */

const rowContainer = {
    center: 'container-flex',
    right: 'container-flex-r',
    left: 'container-flex-l',
    top: 'container-flex items-start',
    bot: 'container-flex items-end'
}

const colContainer = {
    center: 'container-flex-col',
    right: 'container-flex-col items-end',
    left: 'container-flex-col items-start',
    top: 'container-flex-col-t',
    bot: 'container-flex-col-b'
}

function handleType(align, direction) {
    switch (direction) {
        case 'row': {
            for (const al in rowContainer) {
                if (align === al) {
                    return rowContainer[al]
                }
            }
        }
        case 'column': {
            for (const al in colContainer) {
                if (align === al) {
                    return colContainer[al]
                }
            }
        }
    }
}


export function Container({ children, customClass = '', full = false, align = 'center', direction = 'row' }) {
    return (
        <div className={`px-4 py-8 ${handleType(align, direction)} ${full ? 'h-screen w-screen' : 'h-full w-full'} ${customClass}`}>
            {children}
        </div>
    )
}

// WITHOUT PADDING, WIDTH AND HEIGHT ADJUST TO IT'S CHILDREN
export function Wrapper({ children, customClass = '', align = 'center', direction = 'row' }) {
    return (
        <div className={`h-max w-max ${handleType(align, direction)} ${customClass}`}>
            {children}
        </div>
    )
}


export function Section({ children, customClass, align = "center", direction}) {
    return (
        <Container full={true} direction={direction} align={align} customClass={`${customClass}`}>
            {children}
        </Container>
    )
}

