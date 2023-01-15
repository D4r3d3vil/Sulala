<script>
import {menus} from './menu.db'
</script>
<hr>
{#each Object.values(menus.en.menus) as catagory}
<div class="catagory"><img src={catagory.feature} alt="..."><a href={catagory.link}>{catagory.for}</a></div>
{/each}