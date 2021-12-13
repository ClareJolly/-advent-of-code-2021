export type Ingredients = IngredientDetails[]

export interface IngredientDetails extends IngredientAttributes {
  name: string
}

export interface IngredientAttributes {
  capacity: number
  durability: number
  flavor: number
  texture: number
  calories: number
}

export interface IngredientsWithScore extends IngredientAttributes {
  total: number
}
