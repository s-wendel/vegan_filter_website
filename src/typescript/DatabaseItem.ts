class DatabaseItem {

	item_name: string;
	ingredients: string[];

	constructor(item_name: string, ingredients: string[]) {
		this.item_name = item_name;
		this.ingredients = ingredients;
	}

	getItemName() : string {
		return this.item_name;
	}

	getIngredients() : string[] {
		return this.ingredients; 
	}

}