/*Em java, criamos uma classe com class (public ou private)
poderiamos criar no main a classe, sem problemas, mas é uma boa prática
a divisão das classes em arquivos separados.
*/
public class Main {
    public static void main(String[] args) {
        Cao cachorro = new Cao();
        cachorro.nome = "Billy";
    }
}