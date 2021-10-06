/* ---------------------------------------------------------------------------------------------------------------
OOP : # With help of oop we can find color code in other i.e rgb to hex


FACTORY FUNC : # we are using this to convert rgb color code to hex code
-----------------------------------------------------------------------------------------------------------------*/

// logic to convert rgb color code to hex color code 
function hex(r, g, b) {
    return '#'+((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

console.log(hex(1,1,1));  // "#010101"


/*-------------------------------------------------------------------------------------------------------------------
But instead we are creating factory function ----> but still we not prefer this way (i.e we prefer constructor func.)
-------------------------------------------------------------------------------------------------------------------*/

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    // creating factory function   // i.e creating methods under color object
    color.rgb = function () {             
        // console.log(this);             // this refers to color object
        const {r,g,b} = this;             // Destructuring of objects
        return `rgb(${r},${g},${b})`;
    }

    color.hex = function () {
        const {r,g,b} = this;             // Destructuring of objects
        return '#'+((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
    }
    return color; 
}

console.log(makeColor(255,30,25)); // color object

const firstColor = makeColor(25,30,65);
console.log(firstColor.rgb());
console.log(firstColor.hex());

firstColor.r = 255;    // changing values
console.log(firstColor.rgb());  // rgb(255,30,65)

