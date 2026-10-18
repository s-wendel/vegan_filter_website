export abstract class VeganIngredientRule {

	ingredient: string;

	constructor(ingredient: string) {
		this.ingredient = ingredient;
	}

	getRuleDescription() {
		return this.ingredient;
	}

	abstract doesIngredientPassRule(ingredient: string) : boolean;

	abstract getIngredientRuleDescription() : string;

}