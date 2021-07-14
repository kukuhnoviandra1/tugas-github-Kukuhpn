const command = process.argv[2];
// const param = process.argv.slice(3)

// console.log(command,param);

switch (command){
    case undefined:
        console.log("command kosong")
        break;
    case 'help':
        console.log("command help")
        break;
    case 'list':
        console.log("command list")
        break;
    case 'add':
        console.log("command add")
        break;
    case 'removed':
        console.log("command remove")
        break;
    case 'edit':
        console.log("command edit")
        break;
    case 'changeStatus':
        console.log("command changeStatus")
        break;
    default:
        console.log("Masukan Command...")
        break;
}


// /*
// inventory apps
// ada 5 command
// node app.js list
// node app.js add <name><type><price>
// node app,js remove <id>
// node app.js edit <name><type><price>
// node app.js changeStatus <id>

// 1. showItem()
// - menampilkan inventory

// Result
// *inventory item :
// 1.[x] Dell laptop, 750000
// 2.[ ] Hp hardware, 1750000

//add item (name,type,price)
// menambahkan item lke dalam jason,by default nya falsisSold = false
// result:
// "hp i-5" hass been added

//remove item
//menghapus item
//Dell has been remove

//jika barang tidak ada
// id is not found

//editItem(id,name,type,price)
//mengedit item berdasarkan id,lalu mengganti name type price

//input