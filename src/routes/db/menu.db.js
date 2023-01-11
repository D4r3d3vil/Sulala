import {writable} from 'svelte/store'
export const menu = writable(
    {
            1:{
                product: "dessert", 
            items: [
                {name: "pancake", img:"https://th.bing.com/th/id/OIP.IdpYbh48bATxlx9Q_v0pjwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7"}, 
                {name: "waffle", img: "https://th.bing.com/th/id/OIP.IdpYbh48bATxlx9Q_v0pjwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
                {name: "crepe", img: "https://th.bing.com/th/id/OIP.IdpYbh48bATxlx9Q_v0pjwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
            ]
            }
    }
        )