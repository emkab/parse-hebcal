import { Token, TokenType } from "./types";
import { tokenToString } from "./utils";

class Lexer {
	private input: string;
	private position: number;
	private readPosition: number;
	private ch: string;
	private tokens: Token[];

	constructor(input: string) {
		this.input = input.trim();
		this.position = 0;
		this.readPosition = 0;
		this.ch = "";
		this.tokens = [];
		this.readChar();
	}

	private readChar(): void {
		if (this.readPosition >= this.input.length) {
			this.ch = "\0";
		} else {
			this.ch = this.input[this.readPosition];
		}
		this.position = this.readPosition;
		this.readPosition += 1;
	}

	public tokenize(): Token[] {
		const tokens: Token[] = [];
		let token: Token;
		do {
			token = this.nextToken();
			tokens.push(token);
		} while (token.type !== TokenType.EOF);
		this.tokens = tokens;
		return tokens;
	}

	private nextToken(): Token {
		let token: Token;

		switch (this.ch) {
			case this.ch.match(/\s/)?.[0]:
				token = new Token(TokenType.WHITESPACE, this.ch);
				break;

			case this.ch.match(/[a-zA-Z]/)?.[0]:
				let identifier = "";
				while (this.ch.match(/[a-zA-Z]/)?.[0]) {
					identifier += this.ch;
					this.readChar();
				}

				if (Object.values(hKeywords).includes(identifier)) {
					token = new Token(TokenType.KEYWORD, identifier);
				} else {
					token = new Token(TokenType.ILLEGAL, identifier);
				}
				break;

			case "\0":
				token = new Token(TokenType.EOF, "\0");
				break;

			default:
				token = new Token(TokenType.ILLEGAL, this.ch);
				break;
		}

		this.readChar();
		return token;
	}

	public toString(): string {
		if (this.tokens.length === 0) {
			return "";
		}

		let output = "";

		for (const token of this.tokens) {
			output += tokenToString(token) + "\n";
		}

		return output;
	}
}

const hKeywords: { [key: string]: string } = {
	DAY: "DDDD",
	MONTH: "MMMM",
	YEAR: "YYYY",
	DAY_OF_WEEK: "ddd",
	MONTH_NAME: "mmm",
	YEAR_HEBREW: "yyyy",
};

export { Lexer };
