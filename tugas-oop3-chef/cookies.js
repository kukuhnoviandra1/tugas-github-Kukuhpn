class Cookies {
    constructor(id,name,price,type){
        this.id     = id;
        this.name   = name;
        this.price  = price;
        this.type   = type;
    }
}
class Chocolate extends Cookies{
    constructor(id,name,type,isSweet){
    super (id,name,type,isSweet);
    this.isSweet = isSweet || true;
    }
}
class Sweet extends Cookies{
    constructor(id,name,type,isSweet){
    super (id,name,type,isSweet);
    this.isSweet = isSweet || true;
    }
}
class Strawberry extends Cookies{
    constructor(id,name,type,isSweet){
    super (id,name,type,isSweet);
    this.isSweet = isSweet || true;
    }
}

module.exports = {
    Chocolate, Sweet, Strawberry}