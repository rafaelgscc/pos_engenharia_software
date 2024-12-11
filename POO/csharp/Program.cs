// See https://aka.ms/new-console-template for more information
using System;

//csharp é muito parecido com java, porém é necessário criar um espaço usando "dotnet new console -o app" 
namespace csharp
{
  class Program
  {
    static void Main(string[] args)
    {
        Cao cachorro = new Cao();
        cachorro.nome = "billy";
        Console.WriteLine(cachorro.nome);
    }
  }
}
