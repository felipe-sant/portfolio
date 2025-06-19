import ProjectFavoriteProps from "../types/props/ProjectFavorites.props";
import azimuth from "../assets/projets/azimuth.png"
import maps from "../assets/projets/maps.png"
import coletorDeTempo from "../assets/projets/coletorDeTempo.png"

const projectsFavorite: ProjectFavoriteProps[] = [
    {
        "name": "⛵ Azimuth",
        "description": `
            Projeto de aprendizagem integrada do 4º semestre. O objetivo foi desenvolver um aplicativo mobile para monitoramento da localização de uma boia em tempo real. Fui responsável pelo desenvolvimento do aplicativo, com foco nas seguintes atividades: renderização e manipulação de mapas, implementação de sistemas de autenticação e geração de relatórios de localização em formato CSV.
        `,
        "img": azimuth,
        "linkGit": "https://github.com/jacksonrcmachado/AZIMUTH",
    },
    {
        "name": "🗺️ Maps",
        "description": `
            Site que gera dois pontos geográficos aleatórios dentro do território brasileiro e simula uma rota de voo entre eles, considerando com precisão a curvatura da Terra. O sistema integra a API do IBGE para gerenciar as coordenadas geográficas e identificar os estados brasileiros atravessados pela aeronave durante a simulação.
        `,
        "img": maps,
        "linkGit": "https://github.com/felipe-sant/maps",
        "linkProj": "https://front-maps.vercel.app/",
    },
    {
        "name": "🌦️ Clima",
        "description": `
            Desenvolvimento de um site para análise e visualização de dados de temperatura e umidade coletados por sensores conectados a um Arduino. Fui responsável por implementar tanto o frontend quanto o backend da aplicação, incluindo a renderização de gráficos de linha para exibição dos dados em tempo real e a coleta, armazenamento e geração de relatórios dos dados no backend.
        `,
        "img": coletorDeTempo,
        "linkGit": "https://github.com/felipe-sant/coletorDeTempo",
        "linkProj": "https://front-coletor-de-tempo.vercel.app/",
    },
]

export default projectsFavorite