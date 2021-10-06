/* ------------------------------------------------------------------------------------------------------------------------
# we can create String, array like this new String() , new Array() 
# REMEMBER : 'this' keyword always refers to an Object

Constructor Function :  # PLZZ WATCH THE CONSTRUCTOR FUNC VIDEO BEFORE COMING TO THIS
                        # use first letter as CAPITAL to say this is constructor function

new Keyword : # new keyword creates an object                       

-------------------------------------------------------------------------------------------------------------------------*/

function Color(r,g,b) {
    this.r = r;     // passing this varibles as properties of object --> object will have name as name of func. i.e Color
    this.g = g;
    this.b = b;
    console.log(this);
}

Color(10,20,30);        // without new keyword it does'nt creates an object and 'this' keyword will refer to window object 
new Color(10,20,30);    // new keyword creates Oject





// now adding methods to Prototypes under color object
Color.prototype.rgb = function () {
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
    const {r,g,b} = this;
    return '#'+((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a=1.0) {
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
}

const color1 = new Color(10,20,30);
const color2 = new Color(100,250,330);
console.log(color1);
console.log(color2);
console.log(color1.rgb());
console.log(color2.rgba(0.9));

document.body.style.backgroundColor = color2.rgba(0.8);






