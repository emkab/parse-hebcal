import { Lexer } from "./lexer";
let input = `
ddd,,, DDDD/MMMM/YYYY AAA DDD 1234, @#$%^&*()_+{}|:"<>?[]\;',.
     ASDDDD
`;

let lexer = new Lexer(input);
lexer.tokenize();
console.log(lexer.toString());
