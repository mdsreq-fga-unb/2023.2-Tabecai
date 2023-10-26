### Definição das atividades presentes em cada MVP

No nosso projeto, a análise de viabilidade para construção dos MVP`s foi feito ultilizando Matriz de priorização, afim de se identificar o que é mais importante, ela conta com 2 critérios: Valor de negócio (VALOR) e Complexidade Técnica (ESFORÇO). <br/>  
Na tabela a seguir, referente a Valor de Negócio, cada US recebe uma nota de 1 a 5, aparti de 3 sub-tópicos: 
 - *Necessário;* 
    - Fundamental para o funcionamento eficaz do negócio.

 - *Urgente;*, 
    - Precisam ser atendidas imediatamente. De impacto imediato nos resultados ou na continuidade do produto.

 - *Desejavel;*
   - Aprimoramento, visando a satisfação do cliente.

Na coluna, Média Complexidade Técnica, cada US possui a media das notas dadas por cada integrante do grupo, de 1 a 5, aparti de 2 sub-tópicos: 
 - *Tempo para realizar a Atividade;*
 - *Nível de difulculdade de execução;*

| **US** | **É necessário?(2pt)** | **É urgente? (2pts)** | **É desejavel? (1pt)** | **Soma Valor de Negócio** | **Média Complexidade Técnica** |
|---|---|---|---|---|---|
| [**US01**] Eu como administrador, quero ser capaz de deletar um funcionário, para caso não faça mais parte da minha empresa. | 2 | 2 | 1 | 5 |
| [**US02**] Eu como administrador, quero ser capaz  de editar um funcionário, para poder mudar as informações do mesmo.| 2 | 1 | 1 | 4 |
| [**US03**] Eu como administrador, quero ser capaz  de criar um funcionário, para que ele possa exercer a função dele.| 2 | 2 | 1 | 5 |
| [**US04**] Eu como administrador, quero ser capaz  de ler um funcionário ou todos os funcionários, para poder ter relatórios dos mesmos. | 2 | 2 | 1 | 5 |
| [**US05**] Eu como funcionário, quero ser capaz de cobrar uma compra, para saber que a compra a prazo foi paga. | 1 | 2 | 1 | 4 |
| [**US06**] Eu como funcionário, quero ser capaz de criar um cliente, para poder atribuir compras.| 1 | 2 | 1 | 4 |
| [**US07**] Eu como administrador, quero ser capaz de deletar um administrador, para caso não faça mais parte da minha empresa.| 2 | 2 | 1 | 5 |
| [**US08**] Eu como administrador, quero ser capaz de editar um administrador, para poder mudar as informações do mesmo.| 2 | 2 | 1 | 5 |
| [**US09**] Eu como administrador, quero ser capaz de criar um administrador, para que ele possa exercer a função dele.| 2 | 2 | 1 | 5 |
| [**US10**] Eu como administrador, quero ser capaz de ler um  administrador ou todos os administradores, para poder ter relatórios dos mesmos.| 2 | 2 | 1 | 5 |
| [**US11**] Eu como administrador, quero ser capaz de criar um cliente, para poder cobrar uma venda.| 2 | 0 | 1 | 3 |
| [**US12**] Eu como administrador, quero ser capaz de editar um cliente, para poder dizer se já foi pago.| 2 | 0 | 1 | 3 |
| [**US13**] Eu como administrador, quero ser capaz de deletar um cliente, para dizer que não é mais meu cliente.| 2 | 0 | 1 | 3 |
| [**US14**] Eu como administrador, quero ser capaz de ler um cliente ou todos os clientes, para verificar  quantos clientes tem.| 2 | 0 | 1 | 3 |
| [**US15**]  um relatória do cliente, para poder cobrar uma venda.| 1 | 0 | 1 | 2 |
| [**US16**] Eu como funcionário, quero ser capaz de atribuir uma compra a um cliente, para gerenciar dívidas. | 1 | 0 | 1 | 2 |
| [**US17**] Eu como funcionário, quero ser capaz de criar uma compra, para o rastreamento das vendas do dia no sistema.| 2 | 2 | 1 | 5 |
| [**US18**] Eu como administrador, quero ser capaz de criar uma compra, para poder cobrá-la.| 2 | 2 | 1 | 5 |
| [**US19**] Eu como administrador, quero ser capaz de editar uma compra, para dizer se o valor aumentou.| 2 | 1 | 1 | 4 |
| [**US20**] Eu como administrador, quero ser capaz de deletar uma compra, para dizer que ela já foi paga.| 2 | 2 | 1 | 5 |
| [**US21**] Eu como administrador, quero ser capaz de ler uma compra, para fazer um relatório.| 1 | 1 | 1 | 3 |
| [**US22**]  o relatório de um caixa, para ter um melhor planejamento. | 2 | 2 | 1 | 5 |
| [**US23**] Eu como administrador, quero ser capaz de  ler um caixa, para poder gerar as informações do mesmo.| 2 | 2 | 1 | 5 |
| [**US24**] Eu como administrador, quero ser capaz de deletar um caixa, para dizer que ele não existe mais na loja.| 2 | 2 | 1 | 5 |
| [**US25**] Eu como administrador, quero ser capaz de editar uma caixa, para mudar o responsável.| 2 | 2 | 1 | 5 |
| [**US26**] Eu como administrador, quero ser capaz de editar uma caixa, para mudar o responsável.| 2 | 1 | 1 | 4 |
| [**US27**] Eu como administrador, quero ser capaz de criar um produto, para ser registrado em compras.| 2 | 2 | 1 | 5 |
| [**US28**] Eu como administrador, quero ser capaz de editar um produto, para atualizar suas informações.| 2 | 1 | 1 | 4 |
| [**US29**] Eu como administrador, quero ser capaz de deletar um produto, para que não seja atribuído a compras.| 2 | 2 | 1 | 5 |


Cada Épico receberá seu grau de prioridade de acordo com a média ponderada desses critérios para cada US:  (ESFORÇO + (VALOR DO ÉPICO * 2))/3 = PONDERAÇÃO.
Um Épico pode ter sido Sub-divido, contemplando apenas uma parte das suas US`s.
- Esforço ->  Média da Complexidade Técnica das US`s relacionadas
- Valor do Épico -> Média da Complexidade Técnica das US`s relacionadas


Epico   | Capacidade | História de usuário | Esforço | Valor do Épico| Ponderação
------- | ------- | -------- | -------- | -------- | --------
1-Usuarios Logado | 1-Usuarios Logado                              | US01, US02, US03, US04               | 6.67 | 3.4 | 3.11
1-Usuarios Logado | 1.1 Gerenciamento de Funcionário               | US05, US06                           | 6.4 | 11.5 | 11.23
1-Usuarios Logado | 1.2 Gerenciamento de Administrador             | US07, US08, US09, US10               | 13.3 | 19 | 25.29
1-Usuarios Logado | 2-Cliente                                      | US11, US12, US13, US14               | 19 | 8 | 15.22
1-Usuarios Logado | 3-Caixa                                        | US17, US18, US19, US20,              | 17 | 19 | 22.33
1-Usuarios Logado | 3-Caixa                                        | US23, US24, US25, US26               | 9.9 | 2.9 | 2.78
1-Usuarios Logado | 3-Caixa                                        | US27, US28, US29                     | 14 | 19 | 26.67
