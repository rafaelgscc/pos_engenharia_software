#Metodo de orientação a objetos no python

from Cao import Cao

def main():

    #Ao contrário do java, no pyton vc precisa instanciar todos os valores
    cachorro = Cao("billy", "vermelho", 4, 11.2)

    print(f"O nome do cachorro é: {cachorro.nome}")
    print(cachorro.Andar())

#necessário para chamar o main
if __name__ == "__main__":
    main()