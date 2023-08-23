// get button
const b = document.getElementById("butkey")
console.log(b)
// create the arrow function
const randomColor = () => {
    let variable = '0123456789ABCDEF'
    let constant = '#'
    // create a for loop
    for (let index = 0; index < 6; index++) {
        constant = constant + variable[
            Math.floor(Math.random() * 16)
        ]
    }
    // return the value
    return constant
}
// change the color of the number if clicker
function changeColors() {
    document.body.style.backgroundColor = randomColor()
}
// add the event listener
b.addEventListener('click',changeColors)