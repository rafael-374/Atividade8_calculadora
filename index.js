let n1 = prompt("Qual o primeiro número?")
let n2 = prompt("Qual o segundo número?")
const operacao = prompt("Qual a operação?")
if (operacao === "+")
{
    alert(parseInt(n1)+parseInt(n2))
}
else if (operacao === "*")
{
    alert(n1*n2)
}
else if (operacao === "-")
{
    alert(n1-n2)
}
else if (operacao === "/")
{
    alert(n1/n2)
}