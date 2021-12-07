núcleos const  = [ 

"AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Bege",
  "Bisque",
  "Preto",
  "BlanchedAlmond",
  "Azul",
  "BlueViolet",
  "Marrom",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Carmesim",
  "Ciano",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "Darkorange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fúcsia",
  "Gainsboro",
  "GhostWhite",
  "Ouro",
  "GoldenRod",
  "Cinza",
  "Cinza",
  "Verde",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Marfim",
  "Cáqui",
  "Lavanda",
  "LavandaBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmão",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Prata",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Neve",
  "SpringGreen",
  "SteelBlue",
  "Bronzeado",
  "Teal",
  "Cardo",
  "Tomate",
  "Turquesa",
  "Violeta",
  "Trigo",
  "Branco",
  "WhiteSmoke",
  "Amarelo",
  "YellowGreen",
];


const menorOuMaior = (posicaoCor: número, posicaoEscolha: número) => {
  se (posicaoCor > posicaoEscolha) {
    retorno "inferior";
  }
  retorno "superior";
};


const checarOrdemAlfabetica = (arr: Array<qualquer>, resposta: string, escolha: string) => {
  const posicaoCor = arr. indexOf(resposta);
  const posicaoEscolha = arr. indexOf(escolha);


  se (posicaoCor === -1 || posicaoEscolha === -1) {
    retorno nulo;
  }
  retorno menorOuMaior(posicaoCor, posicaoEscolha);
};


vamos coresSelecionadas: string[] = [];


para (let i = 0; i < 10; i++) {
  índice const = Matemática. piso(Matemática. núcleos aleatórios() * . comprimento);
  coresSelecionadas = [... ... coresSelecionadas, núcleos[índice]];
}


coresSelecionadas = coresSelecionadas. ordenar();


índice const = Matemática. piso(Matemática. aleatório() * 10);


var resposta = coresSelecionadas[índice];


console. log(resposta);


deixe disponiveis = "|";
para (deixe cor de coresSelecionadas) {
  disponiveis += cor + " | ";
}


fazer {
  var escolha = prompt('${disponiveis}  \n\nQual cor estou pensando?');


  se (escolha) {
    const ordem = checarOrdemAlfabetica(coresSelecionadas, resposta, escolha);


    se (! ordem) {
      alerta('Escolha inválida!');
    } mais se (resposta. toLowerCase() !== escolha. toLowerCase()) {
      alerta(
        'Seu chute não está correto!\n Dica: seu cor é alfabeticamente  ${ordem}  à minha.\n Tente novamente :)'
      );
    }
  }


} enquanto (resposta. toLowerCase() !== escolha?. toLowerCase());


alerta("Você Ganha!");








