# desafio-globo
Você terá que criar um sistema que converta números romanos para decimais ou vice-versa.

O programa pode ser executado recebendo a entrada por STDIN ou como parâmetro "input-file" um arquivo de entrada.

Por STDIN
Exemplos:

$ ./roman2decimals <(echo CLXXVIII)
CLXXVIII => 178
$ echo CLXXVIII | ./roman2decimals
CLXXVIII => 178
$ echo 14 | ./roman2decimals
14 => XIV
Por arquivo de entrada
Arquivo de entrada contendo uma lista de algarismos romanos ou decimais (um por linha), retorne o valor em decimal ou algarismo romano equivalente.

Formato do arquivo de entrada
V
4
VI
42
XXVI
26
CLXXVIII
Exemplo:

$ ./roman2decimals --input-file=input.txt
V => 5
4 => IV
VI => 6
42 => XLII
XXVI => 16
26 => XXVI
CLXXVIII => 178
Referência
https://pt.wikipedia.org/wiki/Numera%C3%A7%C3%A3o_romana
