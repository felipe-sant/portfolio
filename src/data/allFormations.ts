import InformationProps from "../types/props/Information.props";
import fatec from "../assets/formations/fatec.png"
import etec from "../assets/formations/etec.png"
import microcamp from "../assets/formations/microcamp.png"

const allFormations: InformationProps[] = [
    {
        "name": "Fatec",
        "type": "Desenvolvimento de Software Multiplataforma",
        "img": fatec,
        "description": "Aprendizado na criação de aplicações que incluem Python, Java, JavaScript ou TypeScript. Conhecimento em MySQL, manipulação de bases de dados e programação orientada a objetos, além de projetos utilizando a metodologia SCRUM, com prazos e requisitos bem definidos.",
        "startTime": "2023",
        "endTime": "Atualmente"
    },
    {
        "name": "Etec",
        "type": "Desenvolvimento de Sistemas",
        "img": etec,
        "description": "O aprendizado no curso conteve conhecimentos sobre o desenvolvimento de projetos na área técnica, aprendizado de linguagens de marcação como HTML e CSS, além de linguagens de programação como Python, C# e PHP. Também ouve o aprendizado em conceitos de banco de dados e fundamentos tecnológicos.",
        "startTime": "2020",
        "endTime": "2022"
    },
    {
        "name": "Microcamp",
        "type": "Informatica",
        "img": microcamp,
        "description": "Ouve um aprendizado na utilização do pacote Office e em programas da Adobe, além de uma pequena introdução a HTML e CSS, proporcionou uma sólida base para o desenvolvimento de habilidades técnicas e criativas futuramente",
        "startTime": "2017",
        "endTime": "2019"
    }
]

export default allFormations