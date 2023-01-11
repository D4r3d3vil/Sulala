<script>
    import {get} from 'svelte/store'
    import {lang} from '../../db/language.db'
    import Ar_page from '../ar/Ar_page.svelte';
    import En_page from '../en/En_page.svelte';
    import Fr_page from '../fr/Fr_page.svelte'
    let str, bstr, language, run;
    str = "english"
    bstr = "english"
    run = true
    function chngestr(){
        if(run){
        if(str[0] == "e"){
            str = "français"
        }
        else if(str[0] == "f"){
            str = "العربية"
        }
        else{
            str = "english"
        }
    }
    chngbstr()
    }
    function chnglang(){
        let inp = document.getElementById("inp")
        if(inp.value == "français"){
            lang.set("fr")
        }else if(inp.value == "english"){
            lang.set("en")
        }
        else if(inp.value == "" || inp.value == null){
        if(bstr[0] == "r"){
           lang.set("en")
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
            bstr = "english"
        }
    }
    }
    function stop(){
        run = false
        bstr = document.getElementById("inp").value
    }
    setInterval(chngestr, 2000)
    </script>
    {#if get(lang) == "ru" && !language}
    <div class="in">
    <p>Привет</p>
    </div>
    <div class="in chng">
    <input type="text" name="language" list="langname" placeholder={str} id="inp" on:change={stop}>
    <datalist id="langname">
      <option value="العربية">
      <option value="français">
      <option value="english">
    </datalist>
    <button on:click={chnglang}>{bstr}</button>
    </div>
    {/if}
    {#if language == "en"}
    <En_page/>
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