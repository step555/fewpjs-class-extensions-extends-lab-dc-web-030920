class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        let perimeter = 0
        for(let i = 0; i < this.sides.length; i++){
            perimeter += this.sides[i]
        }
        return perimeter
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.sides.length === 3){
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }else{
            console.error("Not a triangle")
        }
    }
}

class Square extends Polygon{
    get area(){
        return this.sides[0] * this.sides[0]
    }
    get isValid(){
        if(this.sides.length === 4){
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }else{
            console.error("Not a triangle")
        }
    }
}