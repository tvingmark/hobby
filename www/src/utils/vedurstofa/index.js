// last forecast time 00 06 12 18 - buffer 2 hours
// counter from last forecast: incremental -> date,day and hour
//
export const lastForecast = () => {
    // Find nearest neighbour
    // var ts = Math.round((new Date()).getTime() / 1000);
    var hours = new Date().getHours()
    // var hours = ("0" + ts.getHours()).slice(-2);
    return currentForecast(hours)    
}

export const getDate = () => {
    var d = new Date()
    var day = d.getUTCDate()
    var month = d.getUTCMonth()
    var year = d.getUTCFullYear()
    return {
        "month": month < 10 ? "0"+(month+1) : month + 1,
        "day": day < 10 ? "0"+day : day,
        "year": year.toString().slice(-2)
    }
} 


function currentForecast(hour){
    const times = [0,6,12,18]
    const hourplus2 = hour - 3
    
    if (hourplus2 >= 0 && hourplus2 < 6 ) {
        return "0000"
    } else if(hourplus2 >= 6 && hourplus2 < 12 ) {
        return "0600"
    } else if(hourplus2 >= 12 && hourplus2 < 18 ){
        return "1200"
    }  else {
        return "1800"
    }
}

export function buildForecastURL(type, forecastTime, dateString, index){
    let prefix;
    let postfix = ".gif"
    switch (type) {
        case "HEAT":
            prefix = "https://www.vedur.is/photos/thattaspa_igb_su_2t/"
            break;
        case "WIND":
            prefix = "https://www.vedur.is/photos/thattaspa_igb_su_10uv/"
            break;
        case "PRECIP":
            prefix = "https://www.vedur.is/photos/thattaspa_igb_su_urk-msl-10uv/"
            break;
        default:
            prefix = ""
            break;
    }
    return prefix + dateString + "_" + forecastTime+ "_" + index + postfix
}

function buildHeatForecastURL(date,time,number){
    const prefix = "https://www.vedur.is/photos/thattaspa_igb_su_2t/"
    const postfix = ".gif"
}
