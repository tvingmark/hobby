import React from 'react'

interface BannerProps {
    subtitle: string
    title: JSX.Element
    paragraph?: string | JSX.Element
    linkPath: string
    linkText: string
    img: JSX.Element
}

const Banner: React.SFC<BannerProps> = ({subtitle, title, paragraph, linkPath, linkText, img, children}) => (
     <div className="row">
        <div role="banner" className="banner">
            <div className="banner__text">
                <h3 className="sub">{subtitle}</h3>
                {title}
                { paragraph ? <p className="para">{paragraph}</p> : null }
                {children}
            </div>
            {img}
        </div>
     </div>
)

export default Banner