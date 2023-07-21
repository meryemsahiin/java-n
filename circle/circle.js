function circleArea(r) {
    let area = Math.PI*r*r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}


function circumference(r) {
    let circumference = Math.PI*2*r;
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circumference}`)
}


module.exports = {
    circleArea,
    circumference,
}