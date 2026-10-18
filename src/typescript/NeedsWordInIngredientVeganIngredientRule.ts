import { VeganIngredientRule } from "./VeganIngredientRule.ts";

export class NeedsWordInIngredientVeganIngredientRule extends VeganIngredientRule {

	word_list: string[];

	constructor(ingredient: string, word_list: string[]) {

		super(ingredient);

		this.word_list = word_list;

	}

	doesIngredientPassRule(ingredient: string) : boolean {

		let doesIngredientPassRule : boolean = false;

		let wordListIndex : number = 0;

		while(doesIngredientPassRule === false && wordListIndex < this.word_list.length) {

			let word : string = this.word_list[wordListIndex];

			if(ingredient.includes(word)) {

				doesIngredientPassRule = true;

			}

		}

		return doesIngredientPassRule;
	}

	getIngredientRuleDescription() : string {

		let word_list_concatenated : string = "";

		for(const word of this.word_list) {
			word_list_concatenated += word + ", ";
		}

		let word_list_concatenated_length : number = word_list_concatenated.length;

		if(word_list_concatenated_length >= 2) {
			word_list_concatenated = word_list_concatenated.substring(0, word_list_concatenated_length - 2);
		}

		return "Any ingredient containing the word \"" + this.ingredient + "\" needs to contain " + word_list_concatenated + "";
	}

	// Any ingredient containing the word "Milk" needs to contain Oat or Almond

}