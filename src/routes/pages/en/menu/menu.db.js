import {get} from 'svelte/store'
import {menu} from '../../../db/menu.db'
export const menus = get(menu)
