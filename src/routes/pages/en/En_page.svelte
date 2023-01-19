<script>
import {get} from 'svelte/store'
import {lang} from '../../db/language.db.json'
import Ar_page from '../ar/Ar_page.svelte';
import Fr_page from '../fr/Fr_page.svelte';
import Ru_page from '../ru/Ru_page.svelte';
import Menu from './menu/menu.svelte'
let str, bstr, language, run;
str = "russky"
bstr = "russky"
run = true
function chngestr(){
    if(run){
    if(str[0] == "r"){
        str = "français"
    }
    else if(str[0] == "f"){
        str = "العربية"
    }
    else{
        str = "russky"
    }
}
chngbstr()
}
function chnglang(){
    let inp = document.getElementById("inp")
    if(inp.value == "français"){
        lang.set("fr")
    }else if(inp.value == "русский"){
        lang.set("ru")
    }
    else if(inp.value == "" || inp.value == null){
    if(bstr[0] == "r"){
       lang.set("ru")
    }
    else if(bstr[0] == "f"){
        lang.set("fr")
    }
    else{
        lang.set("ar")
    }
    }
    else{
        lang.set("ar")
    }
    language = get(lang)
    console.log(language)
}
function chngbstr(){
    if(run){
    if(bstr[0] == "r"){
        bstr = "français"
    }
    else if(bstr[0] == "f"){
        bstr = "العربية"
    }
    else{
        bstr = "russky"
    }
}
}
function stop(){
    run = false
    bstr = document.getElementById("inp").value
}
setInterval(chngestr, 2000)
</script>
{#if get(lang) == "en" && !language}
<div class="in">
<p>hi</p>
</div>
<div class="in chng">
<input type="text" name="language" list="langname" placeholder={str} id="inp" on:change={stop}>
<datalist id="langname">
  <option value="العربية">
  <option value="français">
  <option value="русский">
</datalist>
<button on:click={chnglang}>{bstr}</button>
</div>
<Menu></Menu>
{/if}
{#if language == "ru"}
<Ru_page/>
{/if}
{#if language == "fr"}
<Fr_page/>
{/if}
{#if language == "ar"}
<Ar_page/>
{/if}
<style>
    .in{
        display: inline-block;
    }
    .chng{
        margin-left: 40vw;
    }
</style>