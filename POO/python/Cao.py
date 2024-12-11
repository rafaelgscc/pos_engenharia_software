class Cao:
   #construtor
   def __init__(self, nome, cor, idade, peso):
       self.nome = nome
       self.cor = cor
       self.idade = idade
       self.peso = peso

   def Andar(self):
        return f"{self.nome} está andando!"