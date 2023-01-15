<script>
    import {menus} from '../menu.db'
    let ons = []
    let path = menus.en.menus[1]
    let searchTerm;
    let menuTerm;
    let icons = {'natural': "🌲", "milk": "🥛", "caffeine": "🫘", "creme": "☁️", "chocolate": "🍫", "nut": "🌰", "syrup": "🍯", "vanilla": "💮", "espresso": "☕"}
    searchTerm = ''
    function toggle(id, val, otherval, b_id, bval, botherval, c_id, cval, cotherval){
        let b = document.getElementById(b_id) 
        let i = document.getElementById(id) 
        console.log(i.innerHTML)
        if(ons.includes(c_id)){
            ons.pop(c_id)
            ons.includes(c_id)
        }else{
            ons.push(c_id)
        }
        if(i.innerHTML.includes(val)){
            i.innerHTML = "price: " + otherval
            b.innerHTML = bval
        }
        else{
            i.innerHTML = "price: " + val
            b.innerHTML = botherval
        }
        console.log(ons)
}
function inp_chng(id, listid, list){
    let priceid = document.getElementById(id)
    let inpid = document.getElementById(listid)
    try{
    priceid.innerHTML = "price: " + list[inpid.value].price
    }
    catch{
        priceid.innerHTML = "price: " + list['regular'].price
    }
}
function inp_clear(list_id, Var){
    document.getElementById(list_id).value = ""
    Var = ""
}
    </script>
    <div class="body">
<h2>{path.for}:</h2><input type="search" placeholder="search: " bind:value={searchTerm} id="searcher" on:click={() => inp_clear( searchTerm)}><br>
{#each path.items as info}
{#if info.name.toLowerCase().includes(searchTerm)}
{#if info.nop}
<div class="product"><product_name>{info.name}</product_name><br><product_price>price: {info.price}</product_price><button class="signature">signature</button><br>
    {#each info.contains as icon}
    <div class="in">
        <p class="icon in">{icons[icon]}</p>
    </div>
    {/each}
    <br><img src={info.img} alt="..." ></div>
{:else}
{#if info.items.type == "toggle"}
<div class="product"><product_name>{info.name}</product_name><br><product_price id={info.id}>price: {info.items.off.price}</product_price>
    <br>
    {#if ons.includes(info.cid)}
    {#each info.items.on.contains as iconn}
    <div class="in">
        <p class="in icon">{icons[iconn]}</p>
    </div>
    {/each}
    {:else}
    {#each info.items.off.contains as icon}
        <div class="in">
            <p class="in icon">{icons[icon]}</p>
        </div>
    {/each}
    {/if}
    <br>
    <button id={info.bid} on:keydown={console.log("key pressed")} on:click={() => toggle(info.id, info.items.on.price, info.items.off.price, info.bid, info.items.detail + "&#x274c", info.items.detail + "&#9989;", info.cid, info.items.on.contains, info.items.off.contains)}>{info.items.detail}?&#x274c</button><br><img src={info.img} alt="..."></div>
{:else}
<div class="product"><product_name>{info.name}</product_name><br><product_price id={info.bid}>price: {info.price}</product_price><br>
     <input type="text" list={info.id} on:change={() => inp_chng(info.bid, info.lid, info.items)} id={info.lid} placeholder="choose" on:click={() => inp_clear(info.lid)}>
    <datalist id={info.id}>
        {#each info.items.stuff as thing}
        <option value={thing}>
        {/each}
    </datalist>
    
    <br>
    <img src={info.img} alt="...">
</div>
{/if}
{/if}
{/if}
{/each}
    </div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100;1,200&display=swap');
    .product{
        border: solid 2px black;
        width: 18vw;
        text-align: center;
        display: inline-block;
        margin-left: 2.5vw;
        margin-top: 2.5vh;
        font-size:70%;
        min-width: calc(20vh / 1.5);
        border-radius: 25%;
        max-width: 200px;
        max-height: 200px;
        background-color: black;
    }
    *{
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        background-color: gold;
    }
    p, img{
        margin: auto;
    }
    img{
        width: 16vw;
        height: 20vh;
        min-width: calc(20vh / 1.5);
        max-height: 100px;
        border-radius: 75%;
        max-width: 200px;
    }
    button{
        font-family: 'Montserrat', 'sans-serif';
        font-weight: 300;
        width: 18vw;
        min-width: 12vw;
        display: inline;
        text-align: center;
        height: 3vh;
        max-width: 200px;
        background-color: black;
        color: gold;
        border: solid 1px grey;
    }
    input, option, datalist{
        font-family: 'Montserrat', 'sans-serif';
        font-weight: 400;
        width: 12vw; 
        min-width: calc(18vh / 1.5);
        text-align: center;
        height: 2.25vh;
        max-width: 200px;
        background-color: white;
        color: gold;
    }
    input[type="search"]{
        margin-left: 10vw;
        width: 75vw;
        height: auto;
        text-align: center;
        background-color: white;
        color: gold;
        border-radius: 10%;
    }
    .signature{
        background-color: white;
        border:none;
        background-color: black;
        color: gold;
    }
    product_name{
        background-color: black;
        color: gold;
        border-radius: 30%;
    }
    product_price{
        background-color: black;
        color: gold;
    }
    .icon{
        height: 5vh;
        width: 2vw;
        margin: 0%;
        padding: 0%;
        background-color: black;
        font-size: 3vw;
        color: white;
    }
    .in{
      display: inline;
    }
</style>