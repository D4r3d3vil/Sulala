import {writable} from 'svelte/store'
export const menu = writable([{'for': 'milkshake', 'items': ['blueberry', 'strawberry']}, {'for': [], 'items': []}])