import ProjectItemProps from "../types/props/ProjectItem.props";
import azimuth from "../assets/projets/azimuth.png"
import maps from "../assets/projets/maps.png"
import coletorDeClima from "../assets/projets/coletorDeTempo.png"
import importData from "../assets/projets/importData.png"
import tdd from "../assets/projets/tdd.png"
import currencyConverter from "../assets/projets/currencyConverter.png"
import goldenTiger from "../assets/projets/goldenTiger.png"
import cartesianPlane from "../assets/projets/cartesianPlane.png"
import pedidoDeNamoroIrrecusavel from "../assets/projets/pedidoDeNamoroIrrecusavel.png"
import arvoreDeNatal from "../assets/projets/arvoreDeNatal.png"
import controleDeDespesas from "../assets/projets/controleDeDespesa.png"
import epMegasena from "../assets/projets/epMegasena.png"
import lojaSimples from "../assets/projets/lojaSimples.png"
import importCSV from "../assets/projets/importCsv.png"
import calculadoraCLI from "../assets/projets/calculadoraCLI.png"
import neo4j from "../assets/projets/neo4j.png"
import cassandra from "../assets/projets/cassandra.png"
import petLover from "../assets/projets/petlover.png"
import redisMongo from "../assets/projets/redisMongo.png"
import atlantis from "../assets/projets/atlants.png"
import redis from "../assets/projets/redis.png"
import mongo from "../assets/projets/mongodb.png"
import conversor from "../assets/projets/conversor.png"
import libras from "../assets/projets/libras.png"
import covidinho from "../assets/projets/covidinho.gif"
import youtan from "../assets/projets/youtan.gif"
import callnet from "../assets/projets/callnet.gif"
import vitalu from "../assets/projets/vitalu.png"

const allProjects: ProjectItemProps[] = [
    {
        "img": azimuth,
        "name": "Azimith",
        "description": `
            Projeto de aprendizagem integrada do 4º semestre. O objetivo foi desenvolver um aplicativo mobile para monitoramento da localização de uma boia em tempo real. Fui responsável pelo desenvolvimento do aplicativo, com foco nas seguintes atividades: renderização e manipulação de mapas, implementação de sistemas de autenticação e geração de relatórios de localização em formato CSV.
        `,
        "tags": ["graphql", "mongodb", "react-native"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/jacksonrcmachado/AZIMUTH",
        "lastUpdate": new Date(2025, 5, 16, 19, 28)
    },
    {
        "img": maps,
        "name": "Maps",
        "description": `
            Site que gera dois pontos geográficos aleatórios dentro do território brasileiro e simula uma rota de voo entre eles, considerando com precisão a curvatura da Terra. O sistema integra a API do IBGE para gerenciar as coordenadas geográficas e identificar os estados brasileiros atravessados pela aeronave durante a simulação.
        `,
        "tags": ["express", "react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/Maps",
        "linkProj": "https://front-maps.vercel.app/",
        "lastUpdate": new Date(2025, 5, 15, 15, 52)
    },
    {
        "img": coletorDeClima,
        "name": "Coletor de Clima",
        "description": `
            Desenvolvimento de um site para análise e visualização de dados de temperatura e umidade coletados por sensores conectados a um Arduino. Fui responsável por implementar tanto o frontend quanto o backend da aplicação, incluindo a renderização de gráficos de linha para exibição dos dados em tempo real e a coleta, armazenamento e geração de relatórios dos dados no backend.
        `,
        "tags": ["express", "mongodb", "react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/coletorDeTempo",
        "linkProj": "https://front-coletor-de-tempo.vercel.app/",
        "lastUpdate": new Date(2025, 4, 7, 19, 40)
    },
    {
        "img": importData,
        "name": "ImportData",
        "description": `
            Projeto de importação e manipulação de dados geoespaciais utilizando PostgreSQL com extensão PostGIS. Os dados são importados a partir de um arquivo .geojson e armazenados no banco de dados. Em seguida, é aplicada uma lógica de rotas para disponibilizar informações específicas, como a listagem de todas as cidades ou a obtenção do GeoJSON de uma cidade específica por seu ID.
        `,
        "tags": ["express", "postgre"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/importData-Postgree",
        "lastUpdate": new Date(2025, 4, 28, 17, 19)
    },
    {
        "img": tdd,
        "name": "TDD",
        "description": `
            Projeto de coleta e análise de dados de ações, utilizando uma API para obter as informações do mercado. Foram aplicadas boas práticas de manipulação de dados, como o uso de arquivos temporários para evitar requisições repetidas à API. A formatação e o tratamento dos dados foram realizados com a biblioteca Pandas, e a visualização dos resultados foi feita por meio de gráficos utilizando a biblioteca Matplotlib.
        `,
        "tags": ["pandas"],
        "tagModel": "backend",
        "tagScope": "profissional",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/TDD-Api",
        "lastUpdate": new Date(2025, 2, 24, 23, 12)
    },
    {
        "img": currencyConverter,
        "name": "Currency Converter",
        "description": `
            Site de conversão de moedas, que utiliza uma API externa para obter cotações atualizadas de diversas moedas. A aplicação foi desenvolvida com foco no aprendizado de React Context, utilizado para o controle do tema, e React Redux, empregado na gestão do estado e nas funcionalidades principais da aplicação.
        `,
        "tags": ["react"],
        "tagModel": "frontend",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/CurrencyConverter",
        "linkProj": "https://currency-converter-ten-puce.vercel.app/",
        "lastUpdate": new Date(2025, 2, 11, 22, 58)
    },
    {
        "img": goldenTiger,
        "name": "Golden Tiger",
        "description": `
            Projeto em desenvolvimento com o objetivo de simular a perda real associada a jogos de azar. A plataforma também servirá como um hub para outros projetos pessoais com temáticas de jogos, onde os usuários poderão utilizar uma moeda virtual para jogar. Até o momento, o sistema conta com autenticação via login e a lógica de apostas por rodada, incluindo o controle da quantidade de moedas apostadas e a chance de vitória ou derrota.
        `,
        "tags": ["express", "mongodb", "react"],
        "tagModel": "fullstack",
        "tagScope": "pessoal",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/GoldenTiger",
        "linkProj": "https://front-goldentiger.vercel.app/",
        "lastUpdate": new Date(2025, 0, 25, 14, 26)
    },
    {
        "img": cartesianPlane,
        "name": "Plano Cartesiano",
        "description": `
            Projeto desenvolvido com foco no aprendizado e experimentação com planos cartesianos. A aplicação tem como objetivo principal testar e validar conceitos relacionados à representação de dados em um plano cartesiano, servindo como base para implementações futuras que envolvam a visualização de informações espaciais ou distribuídas graficamente. Esse ambiente de testes permite entender melhor o posicionamento e a manipulação de pontos, facilitando futuras aplicações em projetos que exijam esse tipo de visualização.
        `,
        "tags": ["react"],
        "tagModel": "frontend",
        "tagScope": "pessoal",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/Front-CartesianPlane",
        "linkProj": "https://front-cartesian-plane.vercel.app/",
        "lastUpdate": new Date(2024, 11, 30, 22, 44)
    },
    {
        "img": pedidoDeNamoroIrrecusavel,
        "name": "Pedido de Namoro",
        "description": `
            Site criado como um pedido de namoro impossível de recusar! A proposta é simples e divertida: sempre que o usuário tenta passar o mouse ou clicar no botão “Não”, ele se afasta, tornando impossível selecionar essa opção. O projeto foi desenvolvido como um hobbie, apenas por diversão. 😢
        `,
        "tags": ["react"],
        "tagModel": "frontend",
        "tagScope": "pessoal",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/pedido-de-namoro-irrecusavel",
        "linkProj": "https://pedido-de-namoro-irrecusavel-iota.vercel.app/",
        "lastUpdate": new Date(2024, 11, 27, 14, 36)
    },
    {
        "img": arvoreDeNatal,
        "name": "Árvore de Natal",
        "description": `
            Este programa tem como objetivo gerar uma representação em formato de árvore de Natal com base no tamanho fornecido pelo usuário. A aplicação foi desenvolvida como parte de um projeto da disciplina de Matemática para Computação, com o intuito de aplicar conceitos de lógica, estruturas em camadas e manipulação de laços de repetição.
        `,
        "tags": [],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/arvore-de-natal",
        "lastUpdate": new Date(2023, 9, 18, 12, 22)
    },
    {
        "img": controleDeDespesas,
        "name": "Expense control",
        "description": `
            Aplicação web desenvolvida para o controle de despesas pessoais, com o objetivo de praticar e consolidar os conceitos de operações CRUD (Create, Read, Update, Delete). O sistema permite cadastrar, visualizar, editar e excluir registros de despesas de forma simples e eficiente. Como parte do aprendizado, foi utilizada a base de dados MongoDB, explorando sua flexibilidade com documentos e coleções. Este projeto também contribuiu para o entendimento da integração entre frontend e backend em aplicações de gerenciamento de dados financeiros.
        `,
        "tags": ["express", "mongodb", "react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/ControleDeDespesas",
        "lastUpdate": new Date(2024, 10, 30, 18, 15)
    },
    {
        "img": epMegasena,
        "name": "EP Megasena",
        "description": `
            Aplicação desenvolvida para gerar relatórios analíticos a partir de um arquivo CSV contendo os dados dos ganhadores da Mega-Sena dos últimos anos. O projeto tem como foco o reforço do aprendizado em programação orientada a objetos (POO), além da prática de raspagem de dados e manipulação de arquivos. A ferramenta permite processar, organizar e extrair informações relevantes do histórico de sorteios, como frequência de números, distribuição por estados, entre outros insights. Essa aplicação serviu como base para exercitar conceitos fundamentais de organização de código, modularização e automação de análises com dados reais.
        `,
        "tags": [],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/EP-Megasena",
        "lastUpdate": new Date(2024, 10, 18, 20, 26)
    },
    {
        "img": lojaSimples,
        "name": "Loja Simples",
        "description": `
            Loja virtual simples, que permite adicionar e remover itens de um carrinho de compras, além de cadastrar novos produtos no estoque. A aplicação foi desenvolvida com o objetivo de praticar operações CRUD (Create, Read, Update, Delete) utilizando o banco de dados MongoDB. Além disso, foi implementado o uso do localStorage do navegador para gerenciar o estado do carrinho, permitindo uma experiência persistente mesmo após o recarregamento da página. O projeto serviu como base para o aprendizado de integração entre frontend e backend, além de manipulação de dados no cliente.
        `,
        "tags": ["express", "mongodb", "react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/Loja-Simples",
        "lastUpdate": new Date(2024, 10, 12, 21, 12)
    },
    {
        "img": importCSV,
        "name": "Import Dados CSV",
        "description": `
            Projeto desenvolvido para importar dados a partir de arquivos CSV diretamente para um banco de dados PostgreSQL. Após a importação, foram implementadas rotas com operações CRUD (Create, Read, Update, Delete) para cada uma das tabelas, permitindo o gerenciamento completo dos dados. O objetivo principal do projeto foi consolidar conhecimentos em manipulação de dados, integração com bancos relacionais e desenvolvimento de APIs RESTful.
        `,
        "tags": ["express", "postgre"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/Insercao-dados-csv",
        "lastUpdate": new Date(2024, 9, 12, 14, 6)
    },
    {
        "img": conversor,
        "name": "Unit converter",
        "description": `
            Site desenvolvido para conversão de unidades de medida, oferecendo suporte para diferentes categorias como comprimento (ex: metros para quilômetros), peso (ex: gramas para quilogramas) e temperatura (ex: Celsius para Fahrenheit). A aplicação foi criada com foco na praticidade e na experiência do usuário, permitindo conversões rápidas e precisas entre as unidades mais utilizadas no cotidiano.
        `,
        "tags": ["react"],
        "tagModel": "frontend",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/Conversor-de-Unidades",
        "linkProj": "https://conversor-de-unidades-ecru.vercel.app",
        "lastUpdate": new Date(2024, 8, 13, 19, 28)
    },
    {
        "img": calculadoraCLI,
        "name": "Calculadora CLI",
        "description": `
            Calculadora desenvolvida para interface de linha de comando (CLI), com suporte às operações básicas: soma, subtração, multiplicação e divisão. O projeto foi criado com foco no ensino e na prática de programação orientada a objetos (POO), explorando conceitos como encapsulamento, modularização e reutilização de código em um contexto simples e funcional.
        `,
        "tags": [],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/felipe-sant/Calculadora-CLI",
        "lastUpdate": new Date(2024, 8, 8, 16, 52)
    },
    {
        "img": neo4j,
        "name": "Neo4j CRUD",
        "description": `
            Aplicação desenvolvida para realizar operações CRUD utilizando o banco de dados Neo4j, um sistema não relacional orientado a grafos, ideal para armazenar e consultar dados altamente conectados. O projeto faz parte de uma série de atividades voltadas ao aprendizado e à prática com bancos de dados não relacionais.
        `,
        "tags": ["neo4j"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/Neo4j-CRUD",
        "lastUpdate": new Date(2024, 4, 26, 10, 17)
    },
    {
        "img": cassandra,
        "name": "Cassandra CRUD",
        "description": `
            Aplicação desenvolvida para realizar operações CRUD utilizando o banco de dados Cassandra, um sistema NoSQL distribuído, projetado para lidar com grandes volumes de dados com alta velocidade, escalabilidade e tolerância a falhas. O projeto integra uma série de atividades voltadas ao aprendizado e à prática com bancos de dados não relacionais, permitindo o aprofundamento em conceitos como consistência eventual, modelo baseado em colunas e replicação de dados em ambientes distribuídos.
        `,
        "tags": ["cassandra"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/Cassandra-CRUD",
        "lastUpdate": new Date(2024, 4, 20, 14, 42)
    },
    {
        "img": petLover,
        "name": "PetLovers",
        "description": `
            O projeto consiste no desenvolvimento de um sistema de gerenciamento de petshops, com foco na aplicação de conceitos de programação orientada a objetos (POO). Dividido em cinco etapas, o projeto abrange desde a criação da estrutura base até a adição de funcionalidades e o desenvolvimento do design da interface. Ao longo das atividades, foram trabalhados tanto os fundamentos da lógica orientada a objetos quanto a utilização do React para a construção da interface, proporcionando uma experiência completa de aprendizado prático.
        `,
        "tags": ["react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["java", "typescript"],
        "linkGit": "https://github.com/felipe-sant/PetLovers/",
        "lastUpdate": new Date(2024, 3, 24, 10, 45)
    },
    {
        "img": redisMongo,
        "name": "Mongo Redis CRUD",
        "description": `
            Aplicação CLI desenvolvida para realizar operações de CRUD com o banco de dados MongoDB, utilizando uma estrutura orientada a objetos. O projeto também integra o Redis, um banco de dados não relacional em memória do tipo key-value, conhecido por sua alta performance. O Redis é utilizado para implementar um sistema de autenticação e cache inteligente, no qual os dados são primeiramente inseridos ou atualizados no Redis para garantir rapidez nas operações, e posteriormente sincronizados com o MongoDB para persistência. Essa arquitetura visa otimizar o desempenho e reduzir o tempo de resposta da aplicação.
        `,
        "tags": ["mongodb", "redis"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/MongoRedis-CRUD",
        "lastUpdate": new Date(2024, 4, 18, 11, 53)
    },
    {
        "img": atlantis,
        "name": "Atlantis",
        "description": `
            Projeto de desenvolvimento de um sistema para gerenciamento de um parque aquático, com foco na aplicação de conceitos de programação orientada a objetos. Dividido em cinco etapas, abrange desde a criação da estrutura base até a implementação de funcionalidades e design da interface. Durante o processo, foram trabalhados os fundamentos da lógica orientada a objetos e o uso do React na construção da interface, promovendo uma experiência prática e completa de aprendizado.
        `,
        "tags": ["react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["java", "typescript"],
        "linkGit": "https://github.com/felipe-sant/Atlantis",
        "lastUpdate": new Date(2024, 4, 27, 22, 21)
    },
    {
        "img": redis,
        "name": "Redis CRUD",
        "description": `
            Aplicação CLI desenvolvida para realizar operações CRUD utilizando o Redis, um banco de dados não relacional em memória, do tipo key-value, conhecido por sua alta performance. O projeto foi criado com foco no aprendizado prático do Redis, servindo como base para o desenvolvimento de atividades futuras que também utilizam essa tecnologia.
        `,
        "tags": ["redis"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/Redis-CRUD",
        "lastUpdate": new Date(2024, 4, 2, 17, 1)
    },
    {
        "img": mongo,
        "name": "Mongo CRUD",
        "description": `
            Aplicação CLI desenvolvida para realizar operações CRUD utilizando o MongoDB, um banco de dados não relacional (NoSQL) orientado a documentos, que armazena os dados em um formato semelhante ao JSON. O projeto faz parte de uma série de atividades voltadas ao aprendizado prático de bancos de dados não relacionais, com foco em estrutura flexível, manipulação de documentos e integração com sistemas baseados em terminal.
        `,
        "tags": ["mongodb"],
        "tagModel": "backend",
        "tagScope": "academico",
        "tagLanguage": ["python"],
        "linkGit": "https://github.com/felipe-sant/Mongo-CRUD",
        "lastUpdate": new Date(2024, 3, 11, 6, 50)
    },
    {
        "img": libras,
        "name": "+Libras",
        "description": `
            Site desenvolvido com foco no ensino e aprendizado de Libras (Língua Brasileira de Sinais), contando com um sistema de autenticação implementado em PHP e uma plataforma de aulas organizada em módulos, além de dicionários interativos para auxiliar no processo de aprendizagem. O projeto foi realizado como Trabalho de Conclusão de Curso (TCC) no curso técnico de Desenvolvimento de Sistemas da ETEC de São José dos Campos.
        `,
        "tags": ["mysql"],
        "tagModel": "frontend",
        "tagScope": "academico",
        "tagLanguage": ["php"],
        "linkGit": "https://github.com/LibrasAPP/TCC",
        "lastUpdate": new Date(2022, 11, 5, 20, 22)
    },
    {
        "img": covidinho,
        "name": "Covidinho",
        "description": `
            Projeto desenvolvido como um site informativo voltado para dados sobre a Covid-19, com ênfase em seus efeitos prolongados — a chamada Covid Longa, conforme definido pela Organização Mundial da Saúde (OMS). A plataforma foi criada especialmente para jornalistas da Rede Vanguarda, com o objetivo de fornecer acesso rápido e intuitivo a dados e informações relacionadas à Covid Longa na região do Vale do Paraíba, auxiliando na produção de novas matérias jornalísticas com base em dados confiáveis.
        `,
        "tags": ["mysql"],
        "tagModel": "frontend",
        "tagScope": "academico",
        "tagLanguage": ["javascript", "python"],
        "linkGit": "https://github.com/Equipe-CodeLand/API-2023.1",
        "lastUpdate": new Date(2023, 4, 15, 10, 34)
    },
    {
        "img": callnet,
        "name": "Callnet",
        "description": `
            O sistema desenvolvido, chamado CallNet, tem como foco oferecer suporte eficiente para problemas relacionados à Internet Fixa, buscando otimizar o processo de Gerenciamento de Chamadas de Serviço. O principal objetivo é proporcionar aos clientes um atendimento mais rápido e eficaz, garantindo acesso a soluções de forma ágil e simplificada.
        `,
        "tags": ["mysql", "react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/Equipe-CodeLand/API-2023.2",
        "lastUpdate": new Date(2023, 11, 11, 20, 30)
    },
    {
        "img": youtan,
        "name": "Youtan",
        "description": `
            O objetivo do projeto foi desenvolver uma solução completa para o gerenciamento de ativos empresariais. A plataforma permite o cadastro detalhado dos ativos, manter um histórico de manutenções e oferecer um controle interativo com indicadores relevantes para o acompanhamento e tomada de decisões sobre os ativos da empresa.
        `,
        "tags": ["mysql", "react"],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["java", "typescript"],
        "linkGit": "https://github.com/Equipe-CodeLand/API-2024.1",
        "lastUpdate": new Date(2024, 5, 2, 17, 13)
    },
    {
        "img": vitalu,
        "name": "VitalU",
        "description": `
            Sistema de gerenciamento nutricional desenvolvido para permitir que os usuários registrem seus dados fisiológicos e nutricionais, realizem o cálculo de calorias e acompanhem o consumo diário por meio de relatórios informativos. O projeto prioriza a segurança, disponibilidade e usabilidade, oferecendo uma experiência confiável e acessível para o acompanhamento da saúde e da alimentação.
        `,
        "tags": [],
        "tagModel": "fullstack",
        "tagScope": "academico",
        "tagLanguage": ["typescript"],
        "linkGit": "https://github.com/Steel-Hard/VitalU",
        "lastUpdate": new Date(2024, 10, 22, 16, 41)
    }
]

export default allProjects