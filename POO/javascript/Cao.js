class Cao {
    // Atributos privados usando o símbolo #
    #nome;
    #cor;
    #idade;
    #peso;
  
    // Construtor
    constructor(nome, cor, idade, peso) {
      this.#nome = nome; // Inicializa nome
      this.#cor = cor;
      this.#idade = idade;
      this.#peso = peso;
    }
  
    // Getter e Setter para nome
    getNome() {
      return this.#nome;
    }
  
    setNome(novoNome) {
      this.#nome = novoNome;
    }
  
    // Getter e Setter para cor
    getCor() {
      return this.#cor;
    }
  
    setCor(novaCor) {
      this.#cor = novaCor;
    }
  
    // Getter e Setter para idade
    getIdade() {
      return this.#idade;
    }
  
    setIdade(novaIdade) {
      if (novaIdade >= 0) {
        this.#idade = novaIdade;
      } else {
        console.error("A idade não pode ser negativa!");
      }
    }
  
    // Getter e Setter para peso
    getPeso() {
      return this.#peso;
    }
  
    setPeso(novoPeso) {
      if (novoPeso > 0) {
        this.#peso = novoPeso;
      } else {
        console.error("O peso deve ser positivo!");
      }
    }
  }
  
  // Exporta a classe para ser usada em outro arquivo
  export default Cao;
  