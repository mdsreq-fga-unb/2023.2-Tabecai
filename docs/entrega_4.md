### Reunião com Cliente
<iframe width="560" height="315" src="https://www.youtube.com/embed/vuhkUjsRhJo?si=vMdI1vAzSrLb8rMm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Diagrama UML  

![Alt text](./assets/diagramaUML.png)

### Especificação de Caso de Uso  

#### Avaliar Serviço da Viagem

##### 1. Avaliar Serviço da Viagem
     1.1. Breve Descrição	
        Neste caso de uso permite-se ao viajante avaliar uma determinada experiência de viagem, acomodação ou atividade, já realizada por ele, adquirida a partir da aplicação. O FeedBack é salvo e registrado, tornando-se público aos demais viajantes interessados. Possibilitando que outros usuários possam averiguar a qualidade do serviço em questão e que o sistema entenda o gosto do viajante para futuras ofertas oferecidas.
    1.2. Ator    
        - Viajante

##### 2.	FLUXO BÁSICO	
    2.1. fluxo Principal	
        Este caso de uso é iniciado quando o viajante escolhe a opção "Avaliar Serviço da Viagem".
            2.1.1. O sistema lista todos os serviços com pendência de Avaliação [RN01] [FE01]	
            2.1.2. O Viajante seleciona o serviço que deseja avaliar 
            2.1.3. O Sistema gera perguntas de avaliação com base no serviço de viagem do viajante. [RN02] 	
            2.1.4. O viajante, a partir das perguntas feitas, avalia o serviço.	
            2.1.5. O Sistema registra a avaliação.	
            2.1.6. O caso de uso é encerrado.	

    2.2. Fluxo Alternativo
        Não se aplica

    2.3. Fluxo De Excessão
       2.3.1 [FE01] Não existir avaliação pendente
            No Passo 2.1.1 o sistema é responsável por listar todos os serviços com pendência de Avaliação, caso nenhuma pendência exista é exibido a mensagem “Não existem avaliações pendentes”. O sistema Avança para o passo 2.1.6

##### 3.	REQUISITOS ESPECIAIS
    Não se aplica

##### 4.	REGRAS DE NEGÓCIO
    4.1 [RN01] A listagem deve ser apresentada da Seguinte forma:
        4.1.1 Cada item da lista deve conter o tipo de serviço, nome, imagem associada a ele e a data de quando foi usufruído
        4.1.2 A lista deve ser ordenada, de maneira que as mais recentes estejam mais acima 


    4.2 [RN02] As perguntas de feedBack devem ser a:
        4.2.1 Quantitativas devem solicitar valores em uma escala de 0 a 5
        4.2.2 Textuais devem possuir limite de caracter, mas não são obrigatórias

##### 5.	PRECONDIÇÃO
    5.1. Login
        O viajante deve estar autenticado no sistema antes de acessar a funcionalidade de feedback da experiência de viagem.
    5.2.Uso de algum serviço
        O viajante deve ter concluído uma experiência de viagem associada à qual o feedback será fornecido.

##### 6.	PÓS-CONDIÇÃO
    Não se Aplica.
##### 7. PONTOS DE EXTENSÃO E INCLUSÃO
    Não se Aplica.

#### Organizar Itinerário da viagem

##### 1. Organizar Itinerário da viagem
     1.1. Breve Descrição	
        Neste caso de uso permite ao viajante, usuari do sistema, registrar o planejamento sua viajem (voos, aluguel de carros e outros planos) em uma lista de itens, de manira que o sistema vincule tais  atividades a seu caléndario calendário. Poossibilitando assim com que o viajante receba futuramente lembretes e atualizaçõs desse planejamento.
    1.2. Ator    
        - Viajante

##### 2.	FLUXO BÁSICO	
    2.1. fluxo Principal	
        Este caso de uso é iniciado quando o viajante Selecina a opção "Planejar Itinerário".
            2.1.1. O sistema lista todos as viagens futuras [RN01] [FE01]	
            2.1.2. O Viajante seleciona o viajem que deseja planejar 
            2.1.3. O Sistema solicita uma tarefas a ser adicionada ao itinerario [RN02]
            2.1.4. O viajante preenche a tarefa
            2.1.5. Caso o Viajante tenha mais atividades a ser adicionada, volta-se ao tópico 2.1.3.
            2.1.6. O caso de uso é encerrado.	

    2.2. Fluxo Alternativo
        Não se aplica

    2.3. Fluxo De Excessão
       2.3.1 [FE01] Não existir viagens futuras
            No Passo 2.1.1 o sistema é responsável por listar todos viagens futuras do viajante, caso nenhuma viagem exista é exibido a mensagem “Não existem viagens futuras". O sistema Avança para o passo 2.1.6

##### 3.	REQUISITOS ESPECIAIS
    Não se aplica

##### 4.	REGRAS DE NEGÓCIO
    4.1 [RN01] A listagem deve ser apresentada da Seguinte forma:
        4.1.1 Cada item da lista deve conter o indicadores do Pais e Estado do local que se vai viajar, alem da datae imagem associada ao local.
        4.1.2 A lista deve ser ordenada, de maneira que as viajens mais próximas estejam mais acima.


##### 5.	PRECONDIÇÃO
    5.1. Login
        O viajante deve estar autenticado no sistema antes de acessar a funcionalidade de Planejar Itinário da experiência de viagem.
    5.2. O Viajante deve ter alguma viajem futura 
        O viajante deve ter possuir alguma viagem futura para à qual irá planejar seu itinerário fornecido.

##### 6.	PÓS-CONDIÇÃO
    Não se Aplica.
##### 7. PONTOS DE EXTENSÃO E INCLUSÃO
    Não se Aplica.


#### Reservar Acomodação da Viagem

##### 1. Reservar Acomodação da Viagem
     1.1. Breve Descrição	
        Nesse caso de uso é permitido ao viajante reservar uma nova acomodação para a sua viajem, abrangindo desde a seleção da locação desejada, vizualização de informações até a expecificação de reserva, podendo estabelecer mais detalhes com o Serviço Contrato.
    1.2. Ator   
        - Viajante

##### 2. FLUXO BÁSICO	
    2.1. Fluxo Principal	
        Este caso de uso é iniciado quando o viajante Selecina Encontrar acomodações, dada uma região pesquisada.
            2.1.1. O Sistema solicita a data desejada do viajante para se acomodar. 
            2.1.2. O Sistema lista acomodaçõoes dado os filtros [RN01] [FE01]
            2.1.3. O Viajante escolha a acomodação de interresse
            2.1.4. O Sistema retorna detalhes da acomodação [RN02] [FA01]
            2.1.5. Caso o Viajante não tenha interresse, pode-se voltar ao tópico 2.1.2.
            2.1.6. O viajante seleciona reservar a acomodação da hospedagem. 
            2.1.7. O sistema exibe formulário de reserva. [RN03]
            2.1.8. O viajante preenche dados de reserva [FE02]
            2.1.9. O caso de uso é encerrado.	

    2.2. Fluxo Alternativo
       [FA01] Definir Mais Detalhes do Serviço
       2.2.1. O viajante seleciona conversar por chat diretamente com o Serviço Contratado
       2.2.2. O viajante retira dúvidas e volta ao fluxo 2.1.5.


    2.3. Fluxo De Excessão
      2.3.1 [FE01] Não existir acomodaçõs dispóniveis
            No Passo 2.1.2 o sistema é responsável por listar todas acomodações disponíveis dado o filtro passado pelo viajante, caso nenhuma acomodação esteja disponivel é exibido a mensagem “Não existem acomodaçõoes disponiveis". O sistema Avança para o passo 2.1.9.

##### 3.	REQUISITOS ESPECIAIS
    Não se aplica

##### 4.	REGRAS DE NEGÓCIO
    4.1 [RN01] A listagem deve ser apresentada da Seguinte forma:
        4.1.1 Cada item da lista deve conter 1 imagem da acomodação, nota dada por outros usuarios, preço e especificações de quantidade de quartos e banheiros.
        4.1.2 A lista deve ser ordenada, de maneira que os mais bem avaliados estejam mais acima.
    4.2 [RN02] Em detalhes da Acomodação é possivel ver carrossel de imagens do local, vizualização por Google maps, especificações de lugares próximos vantajosos(museus, praias, restaurantes), comentários de outros usuários do local, preço e especificações de quantidade de quartos e banheiros.
    4.3 [RN03] Exibe-se um form solicitando dados do viajante (Nome, sobrenome cpf, telefone, cep), dado de compra (boleto, pix, cartão) e dados de hospedagem (caso mais pessoas possam tambem usufruir da acomodação).


##### 5.	PRECONDIÇÃO
    5.1. Login
        O viajante deve estar autenticado no sistema antes de acessar a funcionalidade de Planejar Itinário da experiência de viagem..

##### 6.	PÓS-CONDIÇÃO
    Não se Aplica.
##### 7. PONTOS DE EXTENSÃO E INCLUSÃO
    Não se Aplica.

