# Requisitos funcionais 

* O simulador deve receber as informações relativas ao potencial empréstimo por meio de uma página web
* Usuário deve informar o valor que deseja simular de empréstimo (até R$ 100 mil)
* Usuário deve indicar em quantos meses deseja realizar o pagamento (de 3 a 12)
* Usuário deve indicar a taxa de juros (3% a 8% ao mês)
* O sistema deve apresentar o valor da parcela conforme a taxa de juros, montante a prazo selecionados. Para o cálculo das parcelas, é necessário usar o sistema francês de amortização (tabela price).
* Ao clicar no botão de solicitar empréstimo
* Alterar tela para solicitar o email e cnpj
* Dados devem ser validados no cliente e submetidos

# Requisitos não funcionais

* A tela deve alterar os dados similação conforme o usuário informa os dados no simulador (tempo real)
* Deve ser utilizado o https://httpbin.org/ para simular requisições **GET** e **POST**
* O código fonte deve estar disponível no **github**
* O projeto deve ser publicado na pasta `/docs` do **github** e habilitar o **github-pages** com o endereço https://{usuario}.github.io/{repositorio} apontando para a pasta `/docs` que torne 
* O tamanho final do projeto na pasta docs não pode ser maior que 2MB

## Recomendações

* Bootstrap 4
* Webstorm
* lodash ou underscore 
* Não usar jquery, angular ou react# table-price-simulator
