<script>
    import {get} from 'svelte/store'
    import {lang} from './db/language.db'
    import En_page from './pages/en/En_page.svelte'
    let lange;
    function db_set_en(){
       lang.set('en')
       console.log(get(lang))
       lange = get(lang)
    }
    function db_set_ar(){
       lang.set('ar')
       console.log(get(lang))
       lange = get(lang)
    }
    function db_set_fr(){
       lang.set('fr')
       console.log(get(lang))
       lange = get(lang)
    }
    function db_set_ru(){
       lang.set('ru')
       console.log(get(lang))
       lange = get(lang)
    }
    lange = get(lang)
</script>
{#if lange == ""}
<div class="alert">
   <button class="lang" on:click={db_set_en}>English</button><button class="lang" on:click={db_set_ar}>العربية</button><button class="lang" on:click={db_set_fr}>français</button><button class="lang" on:click={db_set_ru}>русский(rusky)</button>
</div>
{:else}
<En_page/>
{/if}
