import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TrailForecast from "../components/trailForecast"


const IndexPage = () => (
    <div>
        Dellan.is - Laugavegurinn
        <h1 id="subdomain"></h1>          
        <TrailForecast url="https://www.vedur.is/photos/thattaspa_igb_su_10uv/200716_0000_009.gif" />
        <TrailForecast url="https://www.vedur.is/photos/thattaspa_igb_su_2t/200716_0000_009.gif" />
        <TrailForecast url="https://www.vedur.is/photos/thattaspa_igb_su_urk-msl-10uv/200716_0000_009.gif" />
        <p>ÉG ELSKA ÞIG EDDA</p>
        <p>Byggt á gögnum frá Vegagerðinni & Veðurstofu Íslands</p>
    </div>  
)

export default IndexPage
