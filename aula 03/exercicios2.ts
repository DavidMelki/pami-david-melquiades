function saudacao(nome: string, saudacaoPadrao?: string): string {
    if (saudacaoPadrao === undefined) {
      saudacaoPadrao = "Olá";
    }
    return saudacaoPadrao + ", " + nome + "!";
  }
  console.log(saudacao("João")); // "Olá, João!"

  function saudacao2(nome: string, saudacaoPadrao: string = "Olá"): string {
    return saudacaoPadrao + ", " + nome + "!";
  }
  console.log(saudacao2("Maria")); // "Olá, Maria!"

  function somarTudo(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
  }
  console.log(somarTudo(1, 2, 3, 4)); // 10

  function exibirMensagem(mensagem: string): void {
    console.log(mensagem);
  }
  exibirMensagem("TypeScript é poderoso!");
  