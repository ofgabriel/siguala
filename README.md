# Selo Diversidade

## Como contribuir

1. Instale os softwares necessários no seu computador.

    - Docker
       - [Linux](https://docs.docker.com/engine/install)
       - [Windows](https://docs.docker.com/docker-for-windows/install)
       - [Mac](https://docs.docker.com/docker-for-mac/install)
    - [Visual Studio Code](https://code.visualstudio.com/download)
    - [Node.js 14](https://nodejs.org)

2. Clone o repositório.

    ```bash
    $ git clone https://git-lab.cos.ufrj.br/eel873/selo_diversidade
    ```

3. Instale as dependencias necessárias para o front end.

    ```bash
    $ cd selo_diversidade/client
    $ npm install
    $ cd ..
    ```

4. Abra a pasta do projeto no VSCode.

    Linux/Windows/Mac:
    ```bash
    $ code .
    ```

5. Instale as extensões recomendadas:

    `ctrl+shift+p` Extensions: Show Recommended Extensions

    Na barra lateral esquerda, clique no botão com uma nuvem: "Install Workspace Recommended Extensions".

    Pronto! Suas extensões e configurações estão sincronizadas com os outros contribuidores do projeto.

6. Inicialize a aplicação com docker-compose:

    Na pasta do projeto, execute no terminal:

    ```bash
    $ docker-compose up
    $ docker-compose up -d #detached mode
    ```

    A versão de desenvolvimento do **Selo Diversidade** está disponível localmente em http://localhost:8080


    E acabou! :tada: Bom desenvolvimento :smiley:
