const fs = require('fs');
const { Chocolate,Sweet,Strawberry } = require ('./cookies')

class kitchen {
    constructor(cookies){
        this.kitchen = cookies || [];
    }

bake(...baking){
    let cookies = this.getCookies();
    let id = cookies[cookies.length - 1].id + 1;
    let [name,price,type,isSweet] = baking;

    switch (type) {
        case 'Chocolate':
            cookies.push (new Chocolate(+id, name, price, type,isSweet))
            break;
        case 'Sweet':
            cookies.push (new Sweet(+id, name, price, type,isSweet))
            break;
        case 'Strawberry':
            cookies.push (new Strawberry(+id, name, price, type,isSweet))
            break;
    }
        console.log(`${name} is baking...`);
}

eat(){
    
}

addSugar(){
    
}

showCookies(){
    let cookies = this.getCookies();
    console.log("Cookies List: ");
    cookies.forEach((cookie) => {
        let { id,name,price,type } = cookie
        console.log(`${id},${name},${price},Type : ${type}`)
    })
    
    
}

getCookies(){
    let dataCookies = fs.readFileSync('./cookies.csv','utf8')
    let tempData = dataCookies.split('\r\n')
    // console.log(tempData)
    
    let cookiesArray = [];
        for (let i = 1; i < tempData.length; i++) {
            cookiesArray.push(tempData[i].split(','))
        }

        let cookies = cookiesArray.map(cookie => {
            let [id, name, price, type] = cookie;
            switch (type) {
                case 'Chocolate':
                    return new Chocolate(+id, name, price, type)
                    break;
                case 'Sweet':
                    return new Sweet    (+id, name, price, type)
                    break;
                case 'Strawberry':
                    return new Strawberry(+id, name, price, type)
                    break;
            }
        })

        return cookies
    }

}
module.exports = kitchen