/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const Footer = ({forecastTime, index ,setIndex}) => {
  
  return (
    <>
        <div
            style={{
                width: '100%',
                position: 'sticky',
                display: 'flex',
                justifyContent: 'space-between',
                bottom: 0,
                backgroundColor: 'purple',
                padding: '25px',
            }}>
                <button
                onClick={() => setIndex(index + 6)}>
                +6
                </button>
                <button
                onClick={() => setIndex(index - 6)}>
                -6
                </button>
                <button
                onClick={() => setIndex(index + 1)}>
                +1
                </button>
                <button
                onClick={() => setIndex(index - 1)}>
                -1
                </button>                              
        </div>
    </>
  )
}

export default Footer
