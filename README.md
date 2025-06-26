Simulação de Física com p5.js e Matter.js
Este projeto apresenta uma simulação interativa de física desenvolvida com as bibliotecas p5.js para desenho e Matter.js para o motor de física. O objetivo é demonstrar conceitos básicos de física, como gravidade, colisão e aplicação de forças, em um ambiente visual simples.

Visão Geral
A simulação consiste em:

Uma bola controlável pelo usuário.

Um chão fixo para as colisões.

Várias pequenas bolinhas que caem do topo da tela e interagem com a bola principal e o chão.

Recursos
Motor de Física Realista: Utiliza Matter.js para simular gravidade, colisão e atrito.

Controle do Usuário: A bola principal pode ser movida usando as teclas de seta.

Elementos Dinâmicos: Bolinhas com propriedades físicas aleatórias (restrição e atrito de ar).

Visualização p5.js: Renderiza os corpos físicos de forma simples e colorida.

Como Executar
Para executar esta simulação, você precisará de um navegador web. Não é necessária nenhuma instalação complexa.

Clone o repositório:

git clone https://github.com/ElPrimmo0/El-Luchadorftgyhjhdghfndrtyhjsdrtyh0.git
cd El-Luchadorftgyhjhdghfndrtyhjsdrtyh0


(Substitua SeuUsuario/NomeDoSeuRepositorio pelo seu próprio usuário e nome do repositório no GitHub.)

Crie um arquivo index.html:
Crie um arquivo chamado index.html na mesma pasta onde o seu código JavaScript (sketch.js ou similar) está localizado e adicione o seguinte conteúdo:

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulação de Física</title>
    <!-- Inclua a biblioteca p5.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <!-- Inclua a biblioteca Matter.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>
    <!-- Seu arquivo de script (assumindo que o código está em sketch.js) -->
    <script src="sketch.js"></script>
    <style>
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #333;
            overflow: hidden; /* Evita barras de rolagem */
        }
        canvas {
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.5); /* Sombra para destacar o canvas */
        }
    </style>
</head>
<body>
</body>
</html>

Importante: Se o seu código JavaScript não estiver em um arquivo chamado sketch.js, atualize a linha <script src="sketch.js"></script> para o nome correto do seu arquivo.

Abra o index.html:
Abra o arquivo index.html em qualquer navegador web (arraste e solte o arquivo na janela do navegador ou clique duas vezes nele).

Controles
Setas do Teclado (← → ↑ ↓): Controle a bola vermelha aplicando força nas direções correspondentes.

Bibliotecas Utilizadas
p5.js: Uma biblioteca JavaScript para programação criativa, com foco em tornar a codificação acessível para artistas, designers, educadores e iniciantes.

Matter.js: Um motor de física 2D para a web, que permite criar simulações de física complexas com facilidade.

Contribuição
Sinta-se à vontade para explorar o código, fazer melhorias ou adicionar novos recursos. Se você tiver alguma ideia ou encontrar um bug, por favor, abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a licença MIT. 

