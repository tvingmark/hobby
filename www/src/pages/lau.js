import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TrailForecast from "../components/trailForecast"
import Footer from "../components/footer"
import { 
        getDate, 
        buildForecastURL,
        lastForecast
} from "../utils/vedurstofa"


const IndexPage = () => {
    const { day, month, year }  = getDate()
    console.log(day)
    console.log(month)
    console.log(year)
    const [index, setIndex] = useState(1);
    let dateString = year + month + day
    let indexString = index < 10 ? "00" + index : "0" + index
    let forecastTime = lastForecast()
    const urls = {
        'WIND': buildForecastURL('WIND',forecastTime, dateString, indexString),
        'HEAT': buildForecastURL('HEAT',forecastTime, dateString, indexString),
        'PRECIP': buildForecastURL('PRECIP', forecastTime, dateString, indexString)
    }    
    return (
        <div>
            Dellan.is - Laugavegurinn
            <h1 id="subdomain"></h1>          
            <TrailForecast 
                url={urls.WIND}
            />
            <TrailForecast
                url={urls.HEAT}
            />
            <TrailForecast 
                url={urls.PRECIP}
            />
            <Footer
                setIndex={setIndex}
                index={index}
            />
            <p>ÉG ELSKA ÞIG EDDA</p>
            <p>Byggt á gögnum frá Vegagerðinni & Veðurstofu Íslands</p>
        </div>  
    )
}

export default IndexPage
