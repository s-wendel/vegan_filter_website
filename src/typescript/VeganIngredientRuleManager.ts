import { VeganIngredientRule } from "./VeganIngredientRule";
import { NeedsWordInIngredientVeganIngredientRule } from "./NeedsWordInIngredientVeganIngredientRule";

export class VeganIngredientRuleManager {

	all_rules: VeganIngredientRule[] = [
		new NeedsWordInIngredientVeganIngredientRule("Sugar", ["Organic"]),
		new NeedsWordInIngredientVeganIngredientRule("Milk", ["Soy", "Almond", "Oat", "Coconut", "Pea"])
	];

	getAllRules() : VeganIngredientRule[] {
		return this.all_rules;
	}

}