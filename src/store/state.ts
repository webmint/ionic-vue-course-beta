import { Recipe } from "@/interfaces/Recipe";

export const state = {
    counter: 0,
    recipes: [
        {
            id: 'r1',
            title: 'Eggs Benedict',
            imageUrl: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Eggs-Benedict-3.jpg',
            ingredients: ['Eggs', 'Butter', 'Salt', 'Pepper'],
        },
        {
            id: 'r2',
            title: 'Ramen',
            imageUrl: 'https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-The-Flavor-Bender-6066.jpg',
            ingredients: ['Vegetables', 'Meat', 'Noodles', 'Eggs', 'Garlic'],
        },
    ] as Recipe[],
}

export type State = typeof state;
