import {writable} from 'svelte/store'
let tm = "https://th.bing.com/th/id/OIP.CTb2C2NfamjWafHfdo-lZwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
let c = "caffeine"
let m = "milk"
let cr = "creme"
let s = "syrup"
let v = "vanilla"
let e = "espresso"
let ch = "chocolate"
let n = "nut"
let natural = "natural"
export let menu = writable(
    {
        en:{
    menus:{
        1:{
            feature: tm,
            link: './pages/en/menu/items/',
            for: 'Hot drinks',
            items:[
                {id: "1", bid: "01", lid: "001", name: "Espresso", cid: null, img:tm, price: 9, contains:[c, e], items:{type: "menu", stuff:["cookie", "chocolate", "regular"], "cookie": {contains:[e], price:15}, "chocolate": {contains:[ch, c, e], price:15}, "regular":{contains:[e], price:9}}},
                {id: "2", bid: "02",name: "Turkish Coffee", cid: "0001", img:tm, contains: [c, natural], items: {type: "toggle", on:{price:7.1, contains:[m, c]}, off:{price:7, contains:[c]}, detail: m}},
                {id: "3", bid: "03",name: "Coconut", img:tm, cid: "0002", contains: [natural], items:{type: "toggle", on:{price: 18, contains:[c, m, cr, s]}, off:{price:15, contains:[m, cr, s]},detail: e}},
                {id: "5", bid: "05",name: "Cortado", contains:[c],cid: null, img:tm, nop:true, price: 11},
                {id: "6", bid: "06",name: "Cookie creme", cid: null,contains:[m, s],img:tm, nop:true, price:11},
                {id: "7", bid: "07", lid: "002", cid: null,contains:[m, c], price: 11, name: "Lattee", img:tm, items:{type: "menu", stuff:["regular", "toffee", "saffron", "spanish", "pistachio"], "regular":{contains:[m, c], price:11}, "toffee": {contains:[m, c], price:11}, "saffron": {contains:[m, c], price:14}, "spanish": {contains:[m, c, e, s], price:13}, "pistachio": {contains:[s, c, e], price:14}}},
                {id: "8", bid: "08", lid: "003", price: 3,cid: null, name: "Tea", contains: [natural], img:tm, items:{type: "menu", stuff:["regular", "morrocan", "green", "english"], "regular":{contains:[], price:3}, "morrocan": {contains:[], price:4}, "green": {contains:[], price:3}, "english": {contains:[], price:4}}},
                {id: "9", bid: "09",name: "Picallo", contains: [c], cid: null,img:tm, nop:true, price: 11},
                {id: "10", bid: "010",name: "Macchiato", contains: [c, m], cid: null,img:tm, nop:true, price: 11},
                {id: "11", bid: "011", lid: "004", price: 11, contains:[natural], cid: null,name: "French", img:tm, items:{type: "menu", stuff:["vanilla", "hazelnut", "vanilla espresso", "hazelnut espresso"], "vanilla":{contains:[v], price:11}, "vannila espresso": {contains:[v, e, c], price:15}, "hazelnut": {contains:[n], price:11}, "hazelnut espresso": {contains:[e, n, c], price:15}}},
                {id: "12", bid: "012",name: "Hot Choco", contains: [ch, m], img:tm, cid: null,nop:true, price: 11},
                {id: "13", bid: "013",name: "Restritto", contains: [c], img:tm, nop:true, cid: null,price: 9},
                {id: "14", bid: "014",name: "Americano", contains:[c], img:tm, nop:true, cid: null,price: 9},
                {id: "15", bid: "015",name: "Longo", contains:[c], img:tm, nop:true, cid: null,price: 9},
                {id: "16", bid: "016",name: "Cappacino", contains:[c, m], img:tm, nop:true, cid: null,price: 11},
                {id: "17", bid: "017",name: "Saudi coffee", contains:[natural], img:tm, nop:true, cid: null,price: 5},
                {id: "18", bid: "018",name: "Flat White", img:tm, contains:[c, e, m], nop:true, cid: null,price: 11}
            ]    
           },
    }
}
    }
        )