enum TokenType {
	KEYWORD = "KEYWORD",
	NUMBER = "NUMBER",
	WHITESPACE = "WHITESPACE",
	ILLEGAL = "ILLEGAL",
	EOF = "EOF",
}

class Token {
	type: TokenType;
	literal: string;

	constructor(type: TokenType, literal: string) {
		this.type = type;
		this.literal = literal;
	}
}

export { TokenType, Token };
