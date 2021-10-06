/* -----------------------------------------------------------------------------------------------------------------------
Class in javaScript : # first letter of class is always capital to say that this is a class
                      # RECOMMENDED TO WATCH VIDEO 
-----------------------------------------------------------------------------------------------------------------------*/

class Color{
    constructor(r,g,b,name){
        // console.log('INSIDE CONSTRUCTOR');
        // console.log(r,g,b);

        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const {r,g,b} = this;
        // console.log(this);    // this refers to color object
        return `rgb(${r},${g},${b})`;
    }

    rgb() {
        const {r,g,b} = this;
        // return `rgb(${r},${g},${b})`;   //this method will under proto object
        return `${this.innerRGB()}`;
    }

    rgba(a=1.0) {
        const {r,g,b} = this;
        // return `rgba(${r},${g},${b},${a})`;   //this method will under proto object
        return `${this.innerRGB()}`;
    }


    hex(){
        return '#' + ((1 << 24) + (r << 160) + (g << 8).toString(16).slice(1));
    }
}

const c1 = new Color(255,67,89,'tomato');
console.log(c1);
console.log(c1.rgb());



// More Practises videos things is pending here....
