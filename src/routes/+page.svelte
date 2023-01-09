<script>
    export const ssr = true
    import {get} from 'svelte/store'
    import {lang} from './db/language.db'
    let language = get(lang)
    function db_set_en(){
       lang.set('en')
       console.log(get(lang))
    }
    function db_set_ar(){
       lang.set('ar')
       console.log(get(lang))
    }
    function db_set_fr(){
       lang.set('fr')
       console.log(get(lang))
    }
    function db_set_ru(){
       lang.set('ru')
       console.log(get(lang))
    }
</script>
{#if language}
{#if language = "en"}
<En_page/>
{/if}
{#if language = "ar"}
<Ar_page/>
{/if}
{#if language = "fr"}
<Fr_page/>
{/if}
{#if language = "ru"}
<Ru_page/>
{/if}
{:else}
<div class="alert">
   <button class="lang" on:click={db_set_en}>English</button><button class="lang" on:click={db_set_ar}>العربية</button><button class="lang" on:click={db_set_fr}>français</button><button class="lang" on:click={db_set_ru}>русский(rusky)</button>
</div>
{/if}