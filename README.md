# nlwTogether6Node
Projeto da trilha de Node do Next Level Week Together 6

Comandos realizados:

- Iniciar o projeto ```yarn init -y``
- Instalar a dependência do Typescript ``yarn add typescript -D`` (-D é porque só será usado no desenvolvimento)
- Inicia a execução do typescript ``yarn tsc --init``
- Para rodar os codigos Typescript no Node é preciso passar para Javascript, ``yarn tsc`` resolverá isso refazendo os códigos em Typescript para Javascript

O projeto usará o framework Express, que disponibilizará o controle de rotas e várias coisas.
- Adicionar o Express ``yarn add express``
Muitas bibliotecas tem os arquivos de interface separados e é preciso baixar para conseguir o auto  complete, nomalmente se tem ``@types``
- Para adicionar ``yarn add @types/express -D``

No processo, os arquivos Typescript são recriados em Javascript.
- ``yarn add ts-node-dev -D`` Usando essa biblioteca o processo de criar e rodas já acontecerá automaticamente, lendo o arquivo novamente a cada salvamento. Lembre, é preciso tem a macro em "scripts" no arquivo "package.json".
- Agora para rodar o projeto é ``yarn dev``;

Métodos

Get -> Buscar informação
Post -> Mandar/Inserir informação
Put -> Alterar informação
Delete -> Remover um dado
Patch -> Alterar uma informação específica

No desenvolviment é usado: 
- Insomnia: para fazer as requisições de teste;
- Beekeeper Studio: O Sistema de gerenciamento de banco de dados;