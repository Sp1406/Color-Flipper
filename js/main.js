let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let hexCode = [];

$(".click").on("click", function() {
    randomNum()
    let hexCodeCombined = ""
    hexCodeCombined = hexCode.join('')
    console.log(hexCodeCombined);
    $("body").css('backgroundColor', '#'+hexCodeCombined)
    $(".currentColor").text("Current Color: #"+hexCodeCombined)
    hexCode = [];
})

function randomNum() {
    for(let i = 0; i < 6; i++) {
        let randomNum = Math.random() * hex.length;
        randomNum = Math.floor(randomNum)
        let char = hex[randomNum]
        hexCode.push(char)
    }
    return hexCode;
}