import {get} from 'svelte/store'
import {menu} from '../../../db/menu.db.json'
export const menus = get(menu)
