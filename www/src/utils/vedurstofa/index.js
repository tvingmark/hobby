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
    const hourplus2 = hour - 2
    
    if (hourplus2 >= 0 && hourplus2 < 6 ) {
        return "00"
    } else if(hourplus2 >= 6 && hourplus2 < 12 ) {
        return "06"
    } else if(hourplus2 >= 12 && hourplus2 < 18 ){
        return "12"
    }  else {
        return "18"
    }
}

function buildForecastURL(){
    return "https://www.vedur.is/photos/thattaspa_igb_su_2t/200716_0000_009.gif"
}

function buildHeatForecastURL(date,time,number){
    const prefix = "https://www.vedur.is/photos/thattaspa_igb_su_2t/"
    const postfix = ".gif"
}
