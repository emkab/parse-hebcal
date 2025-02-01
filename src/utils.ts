import { Token } from "./types";

export function tokenToString(token: Token) {
	return `${token.type}: ${token.literal}`;
}
