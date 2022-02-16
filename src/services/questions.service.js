const questions = {
  fetchQuestions() {
    return [
      {
        id: 1,
        type: 3,
        affirmation:
          "Quando você entra em um jogo é para vencer, e faz de tudo para que isso aconteça, pois gosta da vitória. Está sempre focado no resultado pois deseja ser reconhecido pelo que realiza.",
      },
      {
        id: 2,
        type: 6,
        affirmation:
          "Você está sempre se antecipando a imprevistos, pensando nas coisas mesmo antes delas acontecerem. É sempre bem precavido em todas as situações, desde uma viagem até atividades rotineiras do dia a dia. Sempre tem um plano para tentar prever o que pode acontecer.",
      },
      {
        id: 3,
        type: 9,
        affirmation:
          "As pessoas te veem como uma pessoa pacífica, que gosta de ser amigável e se dá bem com todo mundo. Normalmente agradável e bom ouvinte.",
      },
      {
        id: 4,
        type: 1,
        affirmation:
          "As pessoas te consideram crítico com elas e até consigo, e não gosta quando é criticado.",
      },
      {
        id: 5,
        type: 7,
        affirmation:
          "Você adora aventuras, e busca sempre por novidades, gosta de aprender coisas novas e está sempre abreto para viver novas experiências, e quanto mais coisas novas, melhor.",
      },
      {
        id: 6,
        type: 4,
        affirmation:
          "Você busca um significado profundo em tudo o que faz, seja no trabalho, na vida, em qualquer área. Não gosta de fazer somente por fazer. Para você é importante ser reconhecido pelo ser humano único que é.",
      },
      {
        id: 7,
        type: 2,
        affirmation:
          "Você tem facilidade em ajudar as pessoas, principalmente as mais queridas. Gosta elogiar e falar bem delas. Não mede esforços para auxiliar.",
      },
      {
        id: 8,
        type: 8,
        affirmation:
          "Você é prático, assertivo e o objetivo. Não gosta de muita enrolação e de fazer rodeios. Muitos lhe consideram agressivo pelo seu jeito firme e direto de ser. No fundo você acha que é muito drama da parte delas.",
      },
      {
        id: 9,
        type: 5,
        affirmation:
          "Você acredita que para tomar decisões é determinante analisar de forma lógica, racional e inteligente, pois decisões emocionais costumam não ser as melhores.",
      },
      {
        id: 10,
        type: 3,
        affirmation:
          "Você é extremamente adaptável a lugares e contextos diferentes, até mesmo na forma de se comportar, principalmente se for favorável para sua imagem ou conquista.",
      },
      {
        id: 11,
        type: 6,
        affirmation:
          'Você costuma ser ansioso por se preocupar com o risco de que algo dê errado. Sua ansiedade aumenta se não tem tempo para se planejar e estar preparado como gostaria. Normamente está pensando "E se algo acontecer?".',
      },
      {
        id: 12,
        type: 9,
        affirmation:
          "Você prefere o trabalho em equipe do que o indiviual e não gosta ser destaque do grupo, pois acredita que o mérito da vitória é do grupo e não apenas seu. Não se sentiria confortável se te colocassem em evidência como destaque da equipe.",
      },
      {
        id: 13,
        type: 1,
        affirmation:
          "Você gosta do trabalho bem feito. Não existe a possibilidade de fazer mais ou menos. Ou faz bem feito, ou não faz. Busca a perfeição nos mínimos detalhes.",
      },
      {
        id: 14,
        type: 7,
        affirmation:
          "Está sempre vendo o lado positivo das coisas com muito otimistmo. Te incomoda lidar com pessoas tristes e negativas. Busca sempre animá-las e ou se afasta delas. Você acredita que eslas deveriam ser otimistas como você, mas ao mesmo tempo as pessoas vivem dizendo que você deveria ser mais realista.",
      },
      {
        id: 15,
        type: 4,
        affirmation:
          "Você sente as emoçôes de forma intensa e quando elas aparecem você pode se fechar em seu mundo pensando nisso. Algumas pessoas podem o considerar dramático, mas para você elas não compreendem os seus sentimentos.",
      },
      {
        id: 16,
        type: 2,
        affirmation:
          "Você tem uma imensa dificuldade de pedir atenção e carinho. Acredita que as pessoas devem saber que você está precisando disso, assim como você sempre sabe quando elas estão precisando.",
      },
      {
        id: 17,
        type: 8,
        affirmation:
          "Você normalmente parte para ação. Tem o impulso de ser direto e rápido, enquanto outros ficam pensando, analisando e sentindo. Pode até parecer um caminhão sem freio que se não tomar cuidado, passa por cima das pessoas. Não tem paciência para ficar esperando que as coisas aconteçam. Age tanto pelo impulso que quando vê já foi, já falou ou fez o que talvez não deveria.",
      },
      {
        id: 18,
        type: 5,
        affirmation:
          "Você detesta quando as pessoas invadem seu espaço e/ou sua privacidade. Te irrita quando as pessoas chegam muito perto para falar, põem a mão em você e principalmente puxam assuntos fúteis.",
      },
      {
        id: 19,
        type: 3,
        affirmation:
          "Você costuma ter objetivos audáciosos, e normalmente faz de tudo para bater suas metas. Tem capacidade de se superar e conquistar os resultados de forma rápida.",
      },
      {
        id: 20,
        type: 6,
        affirmation:
          'Você costuma enxergar os riscos que as pessoas não enxergam, principalmente em projetos muito otimistas e fora da realidade normal. Por esse motivo acabam te chamando de cético. Quando na verdade pra você o importante é "Ver para Crer".',
      },
      {
        id: 21,
        type: 9,
        affirmation:
          "Você tem habilidade de negociar e mediar diversas situações. Prefere quando as decisões são baseadas na opinião de todos, acha importante chegar sempre em um consenso.",
      },
      {
        id: 22,
        type: 1,
        affirmation:
          "Você não gosta de desordem, acredita que as coisas devem estar sempre organizadas em seus devidos lugares. Costuma se irritar caso alguém mexa no que você arrumou.",
      },
      {
        id: 23,
        type: 7,
        affirmation:
          "Pra você, ter prazer e fazer as coisas que gosta é fundamental. Se em algum momento perder o prazer em alguma tarefa que está executando, você tende a deixá-la pra depois, ou até abandonar definitivamente para então iniciar outra tarefa que te dê mais prazer.",
      },
      {
        id: 24,
        type: 4,
        affirmation:
          "Seu humor costuma oscilar mais do que das outras pessoas. Muitas vezes durante um mesmo dia pode variar do extremo da felicidade ao profundo da tristeza, mesmo que as vezes não tenha um motivo claro.",
      },
      {
        id: 25,
        type: 2,
        affirmation:
          "Você está sempre ocupado cuidando de outras pessoas, que não sobra tempo para cuidar de você. É como se as necessidades dos outros fossem mais importantes do que as suas próprias.",
      },
      {
        id: 26,
        type: 8,
        affirmation:
          "Você é considerado uma pessoa forte, porém não suporta ver situações em que pessoas mais fortes abusam das mais fracas, e muitas vezes já comprou a briga para defender os mais fracos, pois busca sempre por justiça.",
      },
      {
        id: 27,
        type: 5,
        affirmation:
          "É comum as pessoas dizerem que você deveria interagir mais. Mas na verdade você se sente melhor nos momentos em que pode ficar sozinho pensando nas coisas. Muitos não entendem que são esses os momentos em que você se sente bem.",
      },
      {
        id: 28,
        type: 3,
        affirmation:
          "Você não costuma falar de seus fracassos e pontos fracos, prefere falar das suas qualidades e habilidades, pois a imagem de sucesso é importante para você.",
      },
      {
        id: 29,
        type: 6,
        affirmation:
          'Você não costuma confiar nas pessoas logo de cara, fica sempre com o pé atrás observando o que vai acontecer, e mesmo depois de conhecê-las, é bom "dar aquela conferida".',
      },
      {
        id: 30,
        type: 9,
        affirmation:
          "Você tem dificuldade de dizer não quando as pessoas lhe pedem algo e muitas vezes acaba se atrapalhando com as prioridades. Pode se distrair com facilidade, mesmo que esteja fazendo algo importante, principalmente se não usa uma agenda de tarefas.",
      },
      {
        id: 31,
        type: 1,
        affirmation:
          "Você se cobra em exesso quando erra. Tem baixo nível de tolerância com erros seus e de outras pessoas.",
      },
      {
        id: 32,
        type: 7,
        affirmation:
          "Você costuma fazer muitas coisas ao mesmo tempo e não gosta quando é obrigado a ficar muito tempo na mesma tarefa. Normalmente estuda várias coisas, lê mais de um livro ao mesmo tempo e mistura assuntos completamente diferentes.",
      },
      {
        id: 33,
        type: 4,
        affirmation:
          "Você não gosta de ser igual a todos, busca ser diferente e original em pelo menos uma coisa pois sente que isso o torna especial. Dessa forma, atrai a atenção das pessoas, pois é diferente.",
      },
      {
        id: 34,
        type: 2,
        affirmation:
          'Você costuma não falar "não" para as pessoas, principalmente aquelas que você mais ama, pois está sempre preocupado em não magoá-las. Está sempre preocupado com o que elas podem pensar a seu respeito.',
      },
      {
        id: 35,
        type: 8,
        affirmation:
          'Você naturalmente fala de uma firme e imponente, com um tom de voz normalmente alto. Alguns acreditam que está "gritando", quando na verdade está falando de forma natural.',
      },
      {
        id: 36,
        type: 5,
        affirmation:
          "Você busca conhecimento constantemente, lendo, estudando, pesquisando, pois valoriza o conhecimento e admira pessoas inteligentes.",
      },
      {
        id: 37,
        type: 3,
        affirmation:
          'Você não tem paciência com pessoas que considera "lentas", que tem um ritmo muito abaixo do seu, principalmente se isso atrapalha seus resultados ou pode comprometer sua imagem.',
      },
      {
        id: 38,
        type: 6,
        affirmation:
          "Você costuma duvidar de sua competência, mesmo que os outros digam que você tem capacidade. Por conta disso está sempre na dúvida se está indo no caminho certo. Tem dificuldade de acreditar que terá um bom desempenho em um cargo de responsabilidade.",
      },
      {
        id: 39,
        type: 9,
        affirmation:
          "Para você, mais importante do que a satisfação pessoal, é a harmonia entre as pessoas. Para isso, acaba abrindo mão da sua própria opinião e a aceitando a decisão das outras pessoas para evitar problemas e brigas.",
      },
      {
        id: 40,
        type: 1,
        affirmation:
          "Para você ter compromisso é algo indispensável. Você se irrita com quem é descompromissado e/ou irresponsável.",
      },
      {
        id: 41,
        type: 7,
        affirmation:
          "Pra você, sua liberdade está acima de tudo. Compromissos de longo prazo, ou situações que dependam muito de você te fazem sentir-se amarrado. Acredita que assim como você, as pessoas devam ter a liberdade de fazer o que quer, na hora que quer.",
      },
      {
        id: 42,
        type: 4,
        affirmation:
          "Você costuma sonhar e idealizar muito sobre uma situação que ainda não viveu, e normalmente quando ela acontece, tende a se decepcionar e deixa de querer tão intensamente depois que conquista.",
      },
      {
        id: 43,
        type: 2,
        affirmation:
          "Você costuma ser uma pessoa carinhosa e atenciosa com todos. Sempre dá muita importância aos relacionamentos pessoais, e por conta disso, até mesmo os colegas de trabalho acabam se tornando amigos pessoais, pois é visto como o conselheiro e confidente.",
      },
      {
        id: 44,
        type: 8,
        affirmation:
          "Você é direto e franco, fala o que tiver que falar a quem quer que seja. Fala sempre a verdade, independente se vai agradar ou não. E isso já te gerou problemas.",
      },
      {
        id: 45,
        type: 5,
        affirmation:
          "Você gosta de saber como as coisas funcionam, de forma lógica e em que elas estão baseadas. Prefere pensar para resolver as coisas do que pedir ajuda. Gosta de coisas que o fazem pensar, como charadas e quebra-cabeças.",
      },
    ];
  },
};

export default questions;
