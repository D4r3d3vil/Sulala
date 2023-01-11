<script>
    import {get} from 'svelte/store'
    import {lang} from '../../db/language.db'
    import Fr_page from '../fr/Fr_page.svelte'
    import En_page from '../en/En_page.svelte'
    import Ru_page from '../ru/Ru_page.svelte'
    let str, bstr, language, run;
    str = "english"
    bstr = "english"
    run = true
    function chngestr(){
        if(run){
        if(str[0] == "r"){
            str = "français"
        }
        else if(str[0] == "f"){
            str = "english"
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
            lang.set("en")
        }
        language = get(lang)
    }
    else{
        lang.set("en")
    }
    }
    function chngbstr(){
        if(run){
        if(bstr[0] == "r"){
            bstr = "français"
        }
        else if(bstr[0] == "f"){
            bstr = "english"
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
    {#if get(lang) == "ar" && !language}
    <div class="in">
    <p>مرحبا </p>
    </div>
    <div class="in chng">
    <input type="text" name="language" list="langname" placeholder={str} id="inp" on:change={stop}>
    <datalist id="langname">
      <option value="english">
      <option value="français">
      <option value="русский">
    </datalist>
    <button on:click={chnglang}>{bstr}</button>
    </div>
    {/if}
    {#if language == "ru"}
    <Ru_page/>
    {/if}
    {#if language == "fr"}
    <Fr_page/>
    {/if}
    {#if language == "en"}
    <En_page/>
    {/if}
    <style>
        .in{
            display: inline-block;
        }
        .chng{
            margin-left: 40vw;
        }
    </style>