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
let rlist = ["Italian “expresso”  The word espresso comes from Italian and means “expressed” or “forced out”. Espresso is made by forcing very hot water under high pressure through finely ground, compacted coffee",
    "In Turkey, the bridegroom was once required to make a vow during the wedding to always make sure to provide their wives with coffee. If they did not do so it was considered grounds for divorce.",
    "In Turkey, the intended bride is required to serve coffee to her parents and future husband when he comes to ask for her hand in marriage; however, she has no say so in the outcome of the request. Tradition has it that her response is in the sweetness or lack thereof of the coffee. Sweet coffee supposedly means she is okay with the arrangement while salty means she is not.",
    "Contrary to popular belief, espresso has one-third the caffeine of a cup of coffee, simply due to serving size differences.",
    "King Frederick of Germany created a special task force to search out illicit coffee smugglers. The task force was known as the Kaffee Schnuffler. The king believed that soldiers who drank coffee were not dependable.",
    "Excelso or Supremo do not mean a better quality of coffee when used to describe coffee beans, it refers to the size of the coffee bean.",
    "In 1674 a group of London women formed a group called WPAC (Women's Petition Against Coffee). They didn't like the amount of time their husbands spent in coffee houses rather than being home (where they belonged).",
    "Beethoven counted the number of coffee beans he used to make his coffee and insisted on 60 beans per cup.",
    "During the American Civil War soldiers who were craving coffee and couldn't get it tried roasting sweet potatoes and corn to make a beverage similar to coffee. It obviously didn't become a popular choice.",
    "Tips, such as is left in restaurants for good service, comes from the days of the London coffeehouses where there were brass boxes monogrammed on the front with $ to ensure promptness. This encouraged customers to pay for expeditious service.",
    "Brazil produced a postal stamp that smelled like coffee in December 2001. It was designed to promote their coffee and the smell is supposed to last for up to 5 years.",
    "Coffee grounds sprinkled on the ground around plants and the garden will stop snails and slugs from eating the plants.",
    "Oil is the most widely used commodity in the world, coffee is next in line.",
    "Water is the only beverage more popular than coffee.",
    "Coffee contains over 1200 chemicals and over half of those are responsible for creating its flavor.",
    "The average coffee drinker consumes 3 cups of coffee per day.",
    "Just three countries consume 70% of the world's coffee: USA, France, Germany, Saudi Arabia.",
    "The Japanese believe that bathing in coffee grounds fermented with pineapple pulp will reduce wrinkles and beautify the skin.",
    "The first American to be granted a license as a coffee trader was Dorothy Jones of Boston and the year was 1670.",
    "Coffee beans are not really beans at all but berries from the coffee tree bush."
]
export let menu = writable(
    {
        en:{
    menus:{
        1:{
            feature: tm,
            feature_desc: "description",
            link: './pages/en/menu/items/hot/',
            for: 'Hot drinks',
            iod: rlist[Math.ceil(Math.random() * rlist.length)],
            hashtags: ['hazelnut', 'coconut', 'cookie', 'natural', 'toffee', 'saffron', 'turkish', "chocolate"],
            items:[
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), name: "Espresso", cid: String(Math.random()), did:String(Math.random()), img:tm, price: 9, detail: "N/A", contains:[c, e],available:true , items:{type: "menu", stuff:[{name: "cookie", available:true}, {name:"chocolate", available:true}, {name: "regular", available:true}], "cookie": {contains:[e], price:15, detail: "N/A"}, "chocolate": {contains:[ch, c, e], price:15, detail: "N/A"}, "regular":{contains:[e], price:9, detail: "N/A"}}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Turkish Coffee", cid: String(Math.random()), img:tm,did:String(Math.random()), contains: [c, natural], detail: "N/A",available:true,items: {type: "toggle", on:{price:7.1, contains:[m, c],}, off:{price:7, contains:[c],}, detail: m}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Coconut", img:tm, cid: String(Math.random()),did:String(Math.random()), contains: [natural], detail: "N/A",available:true,items:{type: "toggle", on:{price: 18, contains:[c, m, cr, s],}, off:{price:15, contains:[m, cr, s],},detail: e}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Cortado", contains:[c],cid: String(Math.random()),did:String(Math.random()), img:tm, nop:true,detail: "N/A",available:true, price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Cookie creme", cid: String(Math.random()),did:String(Math.random()),contains:[m, s],img:tm,detail: "N/A", available:true,nop:true, price:11},
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), cid: String(Math.random()),did:String(Math.random()),contains:[m, c], price: 11, detail: "N/A",name: "Lattee",available:true, img:tm, items:{type: "menu", stuff:[{name: "regular", available:true}, {name: "toffee", available:true}, {name: "saffron", available:true}, {name: "spanish", available:true}, {name: "pistachio", available:true}], "regular":{contains:[m, c], price:11, detail: "N/A"}, "toffee": {contains:[m, c], price:11, detail: "N/A"}, "saffron": {contains:[m, c], price:14, detail: "N/A"}, "spanish": {contains:[m, c, e, s], price:13, detail: "N/A",}, "pistachio": {contains:[s, c, e], price:14, detail: "N/A",}}},
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), price: 3,did:String(Math.random()),cid: String(Math.random()), name: "Tea", detail: "N/A",contains: [natural],available:true, img:tm, items:{type: "menu", stuff:[{name: "regular", available:true}, {name: "morrocan", available:true}, {name: "green", available:true}, {name: "english", available:true}], "regular":{contains:[n], price:3, detail: "N/A",}, "morrocan": {contains:[n], price:4, detail: "N/A",}, "green": {contains:[n], price:3, detail: "N/A",}, "english": {contains:[n], price:4, detail: "N/A",}, "natural": {}}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Picallo", did:String(Math.random()),contains: [c], cid: String(Math.random()),img:tm,detail: "N/A", nop:true,available:true ,price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Macchiato", did:String(Math.random()),contains: [c, m], cid: String(Math.random()),img:tm,detail: "N/A",available:true, nop:true, price: 11},
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), did:String(Math.random()),price: 11, contains:[natural], cid: String(Math.random()),name: "French",detail: "N/A",available:true ,img:tm, items:{type: "menu", stuff:[{name: "vanilla", available:true}, {name: "hazelnut", available:true}, {name: "vanilla espresso", available:true}, {name: "hazelnut espresso", available:true}], "vanilla":{contains:[v], price:11, detail: "N/A",}, "vannila espresso": {contains:[v, e, c], price:15, detail: "N/A",}, "hazelnut": {contains:[n], price:11, detail: "N/A",}, "hazelnut espresso": {contains:[e, n, c], price:15, detail: "N/A",}}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Hot Chocolate",did:String(Math.random()), contains: [ch, m], img:tm, cid: String(Math.random()),detail: "N/A",nop:true,available:true, price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Restritto",did:String(Math.random()), contains: [c], img:tm, nop:true, cid: String(Math.random()),detail: "N/A",available:true,price: 9},
                {id: String(Math.random()), bid: String(Math.random()),name: "Americano",did:String(Math.random()), contains:[c], img:tm, nop:true, cid: String(Math.random()),detail: "N/A",available:true,price: 9},
                {id: String(Math.random()), bid: String(Math.random()),name: "Longo", contains:[c],did:String(Math.random()), img:tm, nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 9},
                {id: String(Math.random()), bid: String(Math.random()),name: "Cappacino", did:String(Math.random()),contains:[c, m], img:tm, nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Saudi coffee", did:String(Math.random()),contains:[natural], img:tm, nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 5},
                {id: String(Math.random()), bid: String(Math.random()),name: "Flat White", did:String(Math.random()),img:tm, contains:[c, e, m], nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 11},
            ]    
           },
           2:{
            feature: tm,
            feature_desc: "description",
            link: './pages/en/menu/items/iced-cold/',
            for: 'Cold drinks',
            iod: rlist[Math.ceil(Math.random() * rlist.length)],
            hashtags: ["latte"],
            items:[
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), name: "Latte", cid: String(Math.random()), did:String(Math.random()), img:tm, price: 9, detail: "N/A", contains:[c, e],available:true , items:{type: "menu", stuff:[{name: "vanilla", available:true}, {name:"honey", available:true}, {name: "sulala", available:true}, {name: "count espresso", available:true},{name: "regular", available:true}, {name: "toffee", available:true}, {name: "spanish", available:true}, {name: "saffron", available:true}, {name: "pistachio", available:true}, {name: "caramel", available:true}], "cookie": {contains:[e], price:15, detail: "N/A"}, "chocolate": {contains:[ch, c, e], price:15, detail: "N/A"}, "regular":{contains:[e], price:9, detail: "N/A"}}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Turkish Coffee", cid: String(Math.random()), img:tm,did:String(Math.random()), contains: [c, natural], detail: "N/A",available:true,items: {type: "toggle", on:{price:7.1, contains:[m, c],}, off:{price:7, contains:[c],}, detail: m}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Coconut", img:tm, cid: String(Math.random()),did:String(Math.random()), contains: [natural], detail: "N/A",available:true,items:{type: "toggle", on:{price: 18, contains:[c, m, cr, s],}, off:{price:15, contains:[m, cr, s],},detail: e}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Cortado", contains:[c],cid: String(Math.random()),did:String(Math.random()), img:tm, nop:true,detail: "N/A",available:true, price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Cookie creme", cid: String(Math.random()),did:String(Math.random()),contains:[m, s],img:tm,detail: "N/A", available:true,nop:true, price:11},
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), cid: String(Math.random()),did:String(Math.random()),contains:[m, c], price: 11, detail: "N/A",name: "Lattee",available:true, img:tm, items:{type: "menu", stuff:[{name: "regular", available:true}, {name: "toffee", available:true}, {name: "saffron", available:true}, {name: "spanish", available:true}, {name: "pistachio", available:true}], "regular":{contains:[m, c], price:11, detail: "N/A"}, "toffee": {contains:[m, c], price:11, detail: "N/A"}, "saffron": {contains:[m, c], price:14, detail: "N/A"}, "spanish": {contains:[m, c, e, s], price:13, detail: "N/A",}, "pistachio": {contains:[s, c, e], price:14, detail: "N/A",}}},
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), price: 3,did:String(Math.random()),cid: String(Math.random()), name: "Tea", detail: "N/A",contains: [natural],available:true, img:tm, items:{type: "menu", stuff:[{name: "regular", available:true}, {name: "morrocan", available:true}, {name: "green", available:true}, {name: "english", available:true}], "regular":{contains:[n], price:3, detail: "N/A",}, "morrocan": {contains:[n], price:4, detail: "N/A",}, "green": {contains:[n], price:3, detail: "N/A",}, "english": {contains:[n], price:4, detail: "N/A",}, "natural": {}}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Picallo", did:String(Math.random()),contains: [c], cid: String(Math.random()),img:tm,detail: "N/A", nop:true,available:true ,price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Macchiato", did:String(Math.random()),contains: [c, m], cid: String(Math.random()),img:tm,detail: "N/A",available:true, nop:true, price: 11},
                {id: String(Math.random()), bid: String(Math.random()), lid: String(Math.random()), did:String(Math.random()),price: 11, contains:[natural], cid: String(Math.random()),name: "French",detail: "N/A",available:true ,img:tm, items:{type: "menu", stuff:[{name: "vanilla", available:true}, {name: "hazelnut", available:true}, {name: "vanilla espresso", available:true}, {name: "hazelnut espresso", available:true}], "vanilla":{contains:[v], price:11, detail: "N/A",}, "vannila espresso": {contains:[v, e, c], price:15, detail: "N/A",}, "hazelnut": {contains:[n], price:11, detail: "N/A",}, "hazelnut espresso": {contains:[e, n, c], price:15, detail: "N/A",}}},
                {id: String(Math.random()), bid: String(Math.random()),name: "Hot Chocolate",did:String(Math.random()), contains: [ch, m], img:tm, cid: String(Math.random()),detail: "N/A",nop:true,available:true, price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Restritto",did:String(Math.random()), contains: [c], img:tm, nop:true, cid: String(Math.random()),detail: "N/A",available:true,price: 9},
                {id: String(Math.random()), bid: String(Math.random()),name: "Americano",did:String(Math.random()), contains:[c], img:tm, nop:true, cid: String(Math.random()),detail: "N/A",available:true,price: 9},
                {id: String(Math.random()), bid: String(Math.random()),name: "Longo", contains:[c],did:String(Math.random()), img:tm, nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 9},
                {id: String(Math.random()), bid: String(Math.random()),name: "Cappacino", did:String(Math.random()),contains:[c, m], img:tm, nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 11},
                {id: String(Math.random()), bid: String(Math.random()),name: "Saudi coffee", did:String(Math.random()),contains:[natural], img:tm, nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 5},
                {id: String(Math.random()), bid: String(Math.random()),name: "Flat White", did:String(Math.random()),img:tm, contains:[c, e, m], nop:true, cid: String(Math.random()),available:true,detail: "N/A",price: 11},
            ]    
           },
    }
}
    }
        )