export interface RobotImage {
  url: string
  legenda: string
  legendaEn: string
  competicao?: string
  ano?: string
}

export interface RobotTeamMember {
  nome: string
  funcao: string
}

export interface RobotAchievement {
  nome: string
  nomeEn: string
  medalha: "gold" | "silver" | "bronze" | "award"
  ano: string
  local: string
  localEn: string
}

export interface RobotTechnology {
  nome: string
  nomeEn: string
  descricao: string
  descricaoEn: string
}

export interface RobotSpecification {
  dimensoes: string
  peso: string
  arma: string
  armaEn: string
  motor: string
  bateria: string
  controlador: string
  materiais: string
  materiaisEn: string
}

export interface RelatedRobot {
  nome: string
  nomeEn: string
  slug: string
  categoria: string
  peso: string
  imagem: string
  especialidade: string
  especialidadeEn: string
}

export interface Robot {
  id: number
  slug: string
  nome: string
  nomeEn: string
  categoria: string
  categoriaEn: string
  peso: string
  anoEstreia: string
  especialidade: string
  especialidadeEn: string
  competicoes: number
  podios: number
  imagem: string
  imagemPrincipal: string
  descricao: string
  descricaoEn: string
  descricaoLonga?: string
  descricaoLongaEn?: string

  especificacoes: RobotSpecification
  equipe: RobotTeamMember[]
  conquistas: RobotAchievement[]
  tecnologias: RobotTechnology[]

  fotos: RobotImage[]
  fotosProcesso: RobotImage[]
  fotosCompeticao: RobotImage[]

  relacionados: RelatedRobot[]
}

// Database de robôs
const robots: Robot[] = [
  {
    id: 1,
    slug: "mini-joker",
    nome: "Mini Joker",
    nomeEn: "Mini Joker",
    categoria: "Antweight",
    categoriaEn: "Antweight",
    peso: "244g",
    anoEstreia: "2025",
    especialidade: "Arma vertical giratória",
    especialidadeEn: "Vertical spinning weapon",
    competicoes: 0,
    podios: 0,
    imagem: "/images/mini-joker/mini-joker-main.jpeg",
    imagemPrincipal: "/images/mini-joker/mini-joker-cover.jpeg",

    descricao:
      "O Mini Joker é um robô de combate da categoria Antweight (454g/1lb), equipado com uma arma vertical giratória. Seu design compacto e eficiente o torna ágil na arena, enquanto sua arma pode causar danos significativos aos oponentes.",
    descricaoEn:
      "Mini Joker is a combat robot in the Antweight category (454g/1lb), equipped with a vertical spinning weapon. Its compact and efficient design makes it agile in the arena, while its weapon can cause significant damage to opponents.",

    descricaoLonga:
      "O Mini Joker foi projetado para a categoria Antweight, com peso máximo de 454g (1lb). Seu chassi foi fabricado utilizando impressão 3D, o que permitiu um design otimizado e leve, pesando apenas 244g. A arma vertical giratória foi estrategicamente posicionada para atingir a parte inferior dos oponentes, uma vulnerabilidade comum em robôs de combate.\n\nO sistema de tração utiliza dois micro motores que proporcionam excelente manobrabilidade, permitindo que o Mini Joker se posicione rapidamente para ataques precisos. A estrutura compacta foi projetada para proteger os componentes eletrônicos internos, enquanto mantém a agilidade necessária para competições.",
    descricaoLongaEn:
      "Mini Joker was designed for the Antweight category, with a maximum weight of 454g (1lb). Its chassis was manufactured using 3D printing, which allowed for an optimized and lightweight design, weighing only 244g. The vertical spinning weapon was strategically positioned to hit the underside of opponents, a common vulnerability in combat robots.\n\nThe drive system uses two micro motors that provide excellent maneuverability, allowing Mini Joker to quickly position itself for precise attacks. The compact structure was designed to protect the internal electronic components while maintaining the agility needed for competitions.",

    especificacoes: {
      dimensoes: "12cm x 10cm x 6cm",
      peso: "244g",
      arma: "Spinner vertical com lâmina de aço",
      armaEn: "Vertical spinner with steel blade",
      motor: "2x Micro motores N20 para tração, 1x Motor para arma",
      bateria: "LiPo 2S 300mAh",
      controlador: "Receptor e ESC compactos",
      materiais: "Chassi em plástico impresso em 3D, componentes em aço",
      materiaisEn: "3D printed plastic chassis, steel components",
    },

    equipe: [
      { nome: "Carlos Silva", funcao: "Projetista/Construtor" },
      { nome: "Ana Oliveira", funcao: "Programadora" },
      { nome: "Pedro Santos", funcao: "Piloto" },
    ],

    conquistas: [
      {
        nome: "Em desenvolvimento para primeira competição",
        nomeEn: "In development for first competition",
        medalha: "award",
        ano: "2025",
        local: "São Paulo, Brasil",
        localEn: "São Paulo, Brazil",
      },
    ],

    tecnologias: [
      {
        nome: "Chassi Impresso em 3D",
        nomeEn: "3D Printed Chassis",
        descricao: "Estrutura leve e resistente fabricada com impressão 3D, otimizada para máxima eficiência.",
        descricaoEn:
          "Lightweight and resistant structure manufactured with 3D printing, optimized for maximum efficiency.",
      },
      {
        nome: "Sistema de Arma Compacto",
        nomeEn: "Compact Weapon System",
        descricao:
          "Arma vertical giratória com design compacto que maximiza o impacto enquanto mantém o peso reduzido.",
        descricaoEn:
          "Vertical spinning weapon with compact design that maximizes impact while maintaining reduced weight.",
      },
      {
        nome: "Controle de Tração Diferencial",
        nomeEn: "Differential Traction Control",
        descricao: "Sistema de controle que permite manobras precisas e rápidas mudanças de direção na arena.",
        descricaoEn: "Control system that allows precise maneuvers and quick direction changes in the arena.",
      },
    ],

    fotos: [
      {
        url: "/images/mini-joker/mini-joker-in-action.gif",
        legenda: "Mini Joker em ação",
        legendaEn: "Mini Joker in action",
      },
      {
        url: "/images/mini-joker/mini-joker-cad-1.jpeg",
        legenda: "Modelo 3D do chassi com sistema de arma",
        legendaEn: "3D model of chassis with weapon system",
      },
      {
        url: "/images/mini-joker/mini-joker-cad-2.jpeg",
        legenda: "Vista alternativa do modelo 3D",
        legendaEn: "Alternative view of 3D model",
      },
      {
        url: "/images/mini-joker/mini-joker-internal-1.jpeg",
        legenda: "Vista interna mostrando os componentes eletrônicos",
        legendaEn: "Internal view showing electronic components",
      },
      {
        url: "/images/mini-joker/mini-joker-internal-2.jpeg",
        legenda: "Outra vista dos componentes internos",
        legendaEn: "Another view of internal components",
      },
      {
        url: "/images/mini-joker/mini-joker-scale.jpeg",
        legenda: "Mini Joker na balança, pesando 244g",
        legendaEn: "Mini Joker on the scale, weighing 244g",
      },
      {
        url: "/images/mini-joker/mini-joker-3d-print.jpeg",
        legenda: "Processo de impressão 3D do chassi",
        legendaEn: "3D printing process of the chassis",
      },
    ],

    fotosProcesso: [
      {
        url: "/images/mini-joker/mini-joker-assembly-gif.gif",
        legenda: "Montagem do Mini Joker",
        legendaEn: "Mini Joker assembly",
      },
      {
        url: "/images/mini-joker/mini-joker-assembly-1.jpeg",
        legenda: "Montagem inicial dos componentes",
        legendaEn: "Initial assembly of components",
      },
      {
        url: "/images/mini-joker/mini-joker-assembly-2.jpeg",
        legenda: "Instalação dos motores e fiação",
        legendaEn: "Installation of motors and wiring",
      },
      {
        url: "/images/mini-joker/mini-joker-assembly-3.jpeg",
        legenda: "Montagem do sistema de arma",
        legendaEn: "Weapon system assembly",
      },
      {
        url: "/images/mini-joker/mini-joker-assembly-4.jpeg",
        legenda: "Teste de encaixe dos componentes",
        legendaEn: "Component fitting test",
      },
    ],

    fotosCompeticao: [],

    relacionados: [
      {
        nome: "Micro Crusher",
        nomeEn: "Micro Crusher",
        slug: "micro-crusher",
        categoria: "Fairyweight",
        peso: "150g",
        imagem: "/placeholder.svg?height=160&width=320",
        especialidade: "Arma tipo crusher",
        especialidadeEn: "Crusher-type weapon",
      },
      {
        nome: "Beetle Spinner",
        nomeEn: "Beetle Spinner",
        slug: "beetle-spinner",
        categoria: "Beetleweight",
        peso: "1,36kg",
        imagem: "/placeholder.svg?height=160&width=320",
        especialidade: "Arma horizontal giratória",
        especialidadeEn: "Horizontal spinning weapon",
      },
    ],
  },
  {
    id: 2,
    slug: "micro-crusher",
    nome: "Micro Crusher",
    nomeEn: "Micro Crusher",
    categoria: "Fairyweight",
    categoriaEn: "Fairyweight",
    peso: "150g",
    anoEstreia: "2024",
    especialidade: "Arma tipo crusher",
    especialidadeEn: "Crusher-type weapon",
    competicoes: 2,
    podios: 1,
    imagem: "/placeholder.svg?height=200&width=200",
    imagemPrincipal: "/placeholder.svg?height=600&width=1200",

    descricao:
      "O Micro Crusher é um robô da categoria Fairyweight (150g) que utiliza uma garra tipo crusher para comprimir e danificar seus oponentes. Seu design compacto e mecanismo de precisão o tornam um competidor formidável.",
    descricaoEn:
      "Micro Crusher is a robot in the Fairyweight category (150g) that uses a crusher-type claw to compress and damage its opponents. Its compact design and precision mechanism make it a formidable competitor.",

    descricaoLonga:
      "O Micro Crusher foi desenvolvido como um desafio técnico para criar um mecanismo de crusher funcional em um robô extremamente pequeno. Utilizando um sistema de engrenagens de alta precisão, conseguimos criar uma garra capaz de exercer pressão suficiente para danificar componentes de outros robôs.\n\nApesar de seu tamanho reduzido, o Micro Crusher possui uma estrutura robusta que protege seus componentes internos, enquanto mantém a agilidade necessária para posicionar sua arma de forma eficaz durante o combate.",
    descricaoLongaEn:
      "Micro Crusher was developed as a technical challenge to create a functional crusher mechanism in an extremely small robot. Using a high-precision gear system, we were able to create a claw capable of exerting enough pressure to damage components of other robots.\n\nDespite its reduced size, Micro Crusher has a robust structure that protects its internal components, while maintaining the agility needed to effectively position its weapon during combat.",

    especificacoes: {
      dimensoes: "8cm x 6cm x 4cm",
      peso: "150g",
      arma: "Garra tipo crusher com servo de alta torque",
      armaEn: "Crusher-type claw with high-torque servo",
      motor: "2x Micro motores para tração, 1x Servo para arma",
      bateria: "LiPo 1S 240mAh",
      controlador: "Receptor e ESC micro",
      materiais: "Chassi em plástico impresso em 3D, garra em aço",
      materiaisEn: "3D printed plastic chassis, steel claw",
    },

    equipe: [
      { nome: "Ana Oliveira", funcao: "Projetista/Construtora" },
      { nome: "Lucas Ferreira", funcao: "Programador" },
      { nome: "Mariana Lima", funcao: "Piloto" },
    ],

    conquistas: [
      {
        nome: "Vice-campeão Micro Robô Challenge",
        nomeEn: "Micro Robot Challenge Runner-up",
        medalha: "silver",
        ano: "2024",
        local: "São Paulo, Brasil",
        localEn: "São Paulo, Brazil",
      },
    ],

    tecnologias: [
      {
        nome: "Sistema de Engrenagens de Precisão",
        nomeEn: "Precision Gear System",
        descricao: "Conjunto de engrenagens que amplifica a força do servo para a garra crusher.",
        descricaoEn: "Gear set that amplifies the servo force for the crusher claw.",
      },
      {
        nome: "Chassi Ultra-Compacto",
        nomeEn: "Ultra-Compact Chassis",
        descricao: "Design otimizado para acomodar todos os componentes em um espaço extremamente reduzido.",
        descricaoEn: "Optimized design to accommodate all components in an extremely reduced space.",
      },
    ],

    fotos: [
      {
        url: "/placeholder.svg?height=300&width=300",
        legenda: "Micro Crusher em posição de ataque",
        legendaEn: "Micro Crusher in attack position",
      },
      {
        url: "/placeholder.svg?height=300&width=300",
        legenda: "Detalhe da garra crusher",
        legendaEn: "Detail of the crusher claw",
      },
      {
        url: "/placeholder.svg?height=300&width=300",
        legenda: "Vista superior do robô",
        legendaEn: "Top view of the robot",
      },
    ],

    fotosProcesso: [
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Projeto inicial em CAD",
        legendaEn: "Initial CAD design",
      },
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Impressão 3D do chassi",
        legendaEn: "3D printing of the chassis",
      },
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Montagem do mecanismo da garra",
        legendaEn: "Assembly of the claw mechanism",
      },
    ],

    fotosCompeticao: [
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Micro Crusher durante competição",
        legendaEn: "Micro Crusher during competition",
        competicao: "Micro Robô Challenge",
        ano: "2024",
      },
    ],

    relacionados: [
      {
        nome: "Mini Joker",
        nomeEn: "Mini Joker",
        slug: "mini-joker",
        categoria: "Antweight",
        peso: "244g",
        imagem: "/images/mini-joker/mini-joker-main.jpeg",
        especialidade: "Arma vertical giratória",
        especialidadeEn: "Vertical spinning weapon",
      },
      {
        nome: "Beetle Spinner",
        nomeEn: "Beetle Spinner",
        slug: "beetle-spinner",
        categoria: "Beetleweight",
        peso: "1,36kg",
        imagem: "/placeholder.svg?height=160&width=320",
        especialidade: "Arma horizontal giratória",
        especialidadeEn: "Horizontal spinning weapon",
      },
    ],
  },
  {
    id: 3,
    slug: "beetle-spinner",
    nome: "Beetle Spinner",
    nomeEn: "Beetle Spinner",
    categoria: "Beetleweight",
    categoriaEn: "Beetleweight",
    peso: "1,36kg",
    anoEstreia: "2023",
    especialidade: "Arma horizontal giratória",
    especialidadeEn: "Horizontal spinning weapon",
    competicoes: 3,
    podios: 2,
    imagem: "/placeholder.svg?height=200&width=200",
    imagemPrincipal: "/placeholder.svg?height=600&width=1200",

    descricao:
      "O Beetle Spinner é um robô da categoria Beetleweight (1,36kg/3lb) equipado com uma poderosa arma horizontal giratória. Seu design agressivo e alta velocidade de rotação da arma o tornam um oponente temido na arena.",
    descricaoEn:
      "Beetle Spinner is a robot in the Beetleweight category (1.36kg/3lb) equipped with a powerful horizontal spinning weapon. Its aggressive design and high weapon rotation speed make it a feared opponent in the arena.",

    descricaoLonga:
      "O Beetle Spinner foi projetado para maximizar o dano através de sua arma horizontal giratória de alta velocidade. Com um motor brushless dedicado, a arma pode atingir até 12.000 RPM, gerando impactos devastadores contra as laterais dos oponentes.\n\nO chassi foi construído com uma combinação de alumínio e polímeros de alta resistência, oferecendo um equilíbrio entre peso e durabilidade. O sistema de controle permite ajustes precisos na velocidade da arma e na movimentação, adaptando-se a diferentes estratégias de combate.",
    descricaoLongaEn:
      "Beetle Spinner was designed to maximize damage through its high-speed horizontal spinning weapon. With a dedicated brushless motor, the weapon can reach up to 12,000 RPM, generating devastating impacts against opponents' sides.\n\nThe chassis was built with a combination of aluminum and high-strength polymers, offering a balance between weight and durability. The control system allows precise adjustments to weapon speed and movement, adapting to different combat strategies.",

    especificacoes: {
      dimensoes: "25cm x 20cm x 8cm",
      peso: "1,36kg",
      arma: "Disco horizontal giratório de 400g, 12.000 RPM",
      armaEn: "Horizontal spinning disc of 400g, 12,000 RPM",
      motor: "2x Brushless para tração, 1x Brushless para arma",
      bateria: "LiPo 3S 850mAh",
      controlador: "Receptor e ESCs de alta performance",
      materiais: "Alumínio, polímeros de alta resistência, aço para arma",
      materiaisEn: "Aluminum, high-strength polymers, steel for weapon",
    },

    equipe: [
      { nome: "Pedro Santos", funcao: "Projetista/Construtor" },
      { nome: "Carlos Silva", funcao: "Programador" },
      { nome: "Fernanda Souza", funcao: "Piloto" },
    ],

    conquistas: [
      {
        nome: "Campeão Beetle Battle",
        nomeEn: "Beetle Battle Champion",
        medalha: "gold",
        ano: "2023",
        local: "Rio de Janeiro, Brasil",
        localEn: "Rio de Janeiro, Brazil",
      },
      {
        nome: "Vice-campeão Robótica Brasil - Categoria Beetle",
        nomeEn: "Robotics Brazil Runner-up - Beetle Category",
        medalha: "silver",
        ano: "2024",
        local: "São Paulo, Brasil",
        localEn: "São Paulo, Brazil",
      },
    ],

    tecnologias: [
      {
        nome: "Sistema de Arma de Alta Velocidade",
        nomeEn: "High-Speed Weapon System",
        descricao: "Motor brushless e controlador otimizados para máxima velocidade e torque na arma giratória.",
        descricaoEn: "Brushless motor and controller optimized for maximum speed and torque in the spinning weapon.",
      },
      {
        nome: "Chassi Modular",
        nomeEn: "Modular Chassis",
        descricao: "Design que permite rápida substituição de componentes danificados entre combates.",
        descricaoEn: "Design that allows quick replacement of damaged components between combats.",
      },
      {
        nome: "Sistema de Auto-Estabilização",
        nomeEn: "Self-Stabilization System",
        descricao: "Algoritmo que compensa o torque gerado pela arma, mantendo o controle direcional.",
        descricaoEn:
          "Algorithm that compensates for the torque generated by the weapon, maintaining directional control.",
      },
    ],

    fotos: [
      {
        url: "/placeholder.svg?height=300&width=300",
        legenda: "Beetle Spinner pronto para combate",
        legendaEn: "Beetle Spinner ready for combat",
      },
      {
        url: "/placeholder.svg?height=300&width=300",
        legenda: "Detalhe da arma horizontal",
        legendaEn: "Detail of the horizontal weapon",
      },
      {
        url: "/placeholder.svg?height=300&width=300",
        legenda: "Vista superior do robô",
        legendaEn: "Top view of the robot",
      },
    ],

    fotosProcesso: [
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Projeto em CAD",
        legendaEn: "CAD design",
      },
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Fabricação do chassi",
        legendaEn: "Chassis manufacturing",
      },
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Montagem do sistema de arma",
        legendaEn: "Weapon system assembly",
      },
    ],

    fotosCompeticao: [
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Beetle Spinner durante combate",
        legendaEn: "Beetle Spinner during combat",
        competicao: "Beetle Battle",
        ano: "2023",
      },
      {
        url: "/placeholder.svg?height=300&width=500",
        legenda: "Equipe celebrando vitória",
        legendaEn: "Team celebrating victory",
        competicao: "Beetle Battle",
        ano: "2023",
      },
    ],

    relacionados: [
      {
        nome: "Mini Joker",
        nomeEn: "Mini Joker",
        slug: "mini-joker",
        categoria: "Antweight",
        peso: "244g",
        imagem: "/images/mini-joker/mini-joker-main.jpeg",
        especialidade: "Arma vertical giratória",
        especialidadeEn: "Vertical spinning weapon",
      },
      {
        nome: "Micro Crusher",
        nomeEn: "Micro Crusher",
        slug: "micro-crusher",
        categoria: "Fairyweight",
        peso: "150g",
        imagem: "/placeholder.svg?height=160&width=320",
        especialidade: "Arma tipo crusher",
        especialidadeEn: "Crusher-type weapon",
      },
    ],
  },
]

// Função para obter todos os slugs dos robôs
export function getAllRobotSlugs(): string[] {
  return robots.map((robot) => robot.slug)
}

// Função para obter um robô pelo slug
export function getRobotBySlug(slug: string): Robot | undefined {
  return robots.find((robot) => robot.slug === slug)
}

// Função para obter todos os robôs
export function getAllRobots(): Robot[] {
  return robots
}
