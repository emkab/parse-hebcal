import { HDate } from "@hebcal/core";
import { Lexer } from "./lexer";
import { Token } from "./types";

export default class Parser {
	private lexer: Lexer;
	private source: string;
	private tokens: Token[];

	private date: HDate | undefined;

	constructor(source: string, date?: Date | HDate | undefined) {
		this.lexer = new Lexer(source);
		this.source = source;
		this.tokens = this.lexer.tokenize();

		if (!date) {
			this.date = new HDate();
		} else if (date instanceof Date) {
			this.date = new HDate(date);
		} else if (date instanceof HDate) {
			this.date = date;
		}
	}

	parse() {}

	calculateKeywords() {
		this.parsedKeywords["DAY"] = this.date!.getDay().toString();
	}

	private parsedKeywords: { [key: string]: string } = {
		DAY: "DDDD",
		MONTH: "MMMM",
		YEAR: "YYYY",
		DAY_OF_WEEK: "ddd",
		MONTH_NAME: "mmm",
		YEAR_HEBREW: "yyyy",
	};
}
