enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Filme = {
    nome: string,
    anoLançamento: number,
    genero: GENERO
    pontuacao?: number
}

const filme:Filme = {
    nome: "Duna",
    anoLançamento: 2021,
    genero: GENERO.ACAO,
    pontuacao: 74
}
console.table(`nome: ${filme.nome}, anoLancamento: ${filme.anoLançamento}, genero: ${filme.genero}, pontuacao:${filme.pontuacao}`)