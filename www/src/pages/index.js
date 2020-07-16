import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <div>
        
        <p id="subdomain">Dellan.is <Link to="lau">Lau</Link></p>
        <img
            style={{
                margin: '0'
            }}
            src="http://www.vegagerdin.is/vgdata/vefmyndavelar/myndir/now/landvegamot_4.jpg" />
        <img src="https://www.vedur.is/photos/thattaspa_igb_su_urk-msl-10uv/200715_1200_006.gif"/>
        <p>ÉG ELSKA ÞIG EDDA</p>
        <p>Byggt á gögnum frá Vegagerðinni & Veðurstofu Íslands</p>
    </div>  
)

export default IndexPage
