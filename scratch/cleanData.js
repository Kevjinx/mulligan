//converting the raw exported JSON file of card data into cleaner version to seed database


<<<<<<< HEAD
const exampleCards = {
	id: 100000,
	name: 'varcharName',
=======
const formattedCard = {
	id: 100000,
	name: 'varcharName',
	info: 'text text text text',
>>>>>>> testStructure
	strength: 7,
	provision: 8,
	armor: 3,
	factionId: 23,
	typeId: 3,
	categoryId: [12, 3, 2],
	keyWordId: [2, 5],
	rarityId: 2,
	setId: 3
}


<<<<<<< HEAD
const convertedCard = {
	id: 100000,
	name: 'varcharName',
	strength: 7,
	provision: 8,
	armor: 3,
	factionId: 23,
	typeId: 3,
	categoryId: [12, 3, 2],
	keyWordId: [2, 5],
	rarityId: 2,
	setId: 3
}

=======
>>>>>>> testStructure
const cardJson = require('../backend/db/card-api/cards-v3-low.json')

const exampleCard = cardJson[200147]
console.log(exampleCard);

<<<<<<< HEAD
const example = {
=======

//convert exampleCardData into the format of formattedCard example
const exampleCardData = {
>>>>>>> testStructure
  armor: 0,
  artist: 'Anna Podedworna',
  cardType: 'Unit',
  categories: [ 'Human', 'Druid' ],
  categoryIds: [ 'card_category_78', 'card_category_85' ],
  collectible: true,
  faction: 'Skellige',
  flavor: {
    'de-DE': 'Als ranghöchste Druidin genießt eine Flaminica nicht nur tiefen Respekt, sondern besitzt auch große Macht.',
    'en-US': 'A flaminica, the highest position among the druidesses, commands a great deal of respect and wields a great deal of power.',
    'es-ES': 'Una flaminica, el mayor rango entre las druidas, es acreedora de gran respeto y atesora mucho poder.',
    'es-MX': 'Una flamínica, la más alta posición entre las druidas, inspira mucho respeto y ostenta un gran poder.',
    'fr-FR': 'Dominant la hiérarchie des druidesses, la flaminica impose un grand respect dû entre autres à son grand pouvoir.',
    'it-IT': 'La flaminica, che rappresenta il rango più alto tra le druide, è tenuta in grande considerazione ed è molto, molto potente.',
    'ja-JP': '女性ドルイドの中でも、もっとも位が高い者は巫女長と呼ばれる。誰からも尊敬され、並外れた力を持つ',
    'ko-KR': '제관은 여성 드루이드에서 가장 높은 직책으로 존경의 대상이며 막강한 권력도 행사한다.',
    'pl-PL': 'Flaminika to najwyższy druidzki tytuł, jaki może nosić kobieta.',
    'pt-BR': 'Flaminique, a posição mais alta das druidas, impõe muito respeito e detém muito poder.',
    'ru-RU': 'Фламиника — предводительница круга друидов, которая обладает огромной властью и пользуется огромным уважением.',
    'zh-CN': '佛兰明妮卡是女德鲁伊最高领袖的头衔，她备受众人的崇敬，拥有无比的力量。',
    'zh-TW': '女德魯伊的最高職位「靈師」為人尊敬，並握有大權。'
  },
  info: {
    'de-DE': 'Heile am Ende deines Zugs alle anderen Einheiten in dieser Reihe um 1.\n',
    'en-US': 'At the end of your turn, Heal all other units on this row by 1.\n',
    'es-ES': 'Al final de tu turno, cura a todas las demás unidades de esta fila en 1.\n',
    'es-MX': 'Al final de tu turno, cura 1 de potencia a todas las demás unidades de esta fila.\n',
    'fr-FR': 'Au terme de votre tour, soignez toutes les autres unités sur cette ligne de 1 point(s).\n',
    'it-IT': 'Alla fine del tuo turno, cura di 1 tutte le altre unità di questa fila.\n',
    'ja-JP': '自軍ターン終了時、配置列にある自身を除く全てのユニットを1ずつ回復させる。\n',
    'ko-KR': '내 턴 종료마다, 이 전열의 다른 모든 유닛을 1 치유한다.\n',
    'pl-PL': 'Na koniec sojuszniczej tury uzdrów wszystkie inne jednostki w tym rzędzie z 1 pkt obrażeń.\n',
    'pt-BR': 'No fim do seu turno, cura em 1 todas as outras unidades nesta fileira.\n',
    'ru-RU': 'В конце вашего хода исцелите все остальные отряды в этом ряду на 1 ед.\n',
    'zh-CN': '己方回合结束时，治疗同排所有其他单位 1 点。\n'
  },
  infoRaw: {
    'de-DE': '<keyword=heal>Heile</keyword> am Ende deines Zugs alle anderen Einheiten in dieser Reihe um 1.\n',
    'en-US': 'At the end of your turn, <keyword=heal>Heal</keyword> all other units on this row by 1.\n',
    'es-ES': 'Al final de tu turno, <keyword=heal>cura</keyword> a todas las demás unidades de esta fila en 1.\n',
    'es-MX': 'Al final de tu turno, <keyword=heal>cura</keyword> 1 de potencia a todas las demás unidades de esta fila.\n',
    'fr-FR': 'Au terme de votre tour, <keyword=heal>soignez</keyword> toutes les autres unités sur cette ligne de 1 point(s).\n',
    'it-IT': 'Alla fine del tuo turno, <keyword=heal>cura</keyword> di 1 tutte le altre unità di questa fila.\n',
    'ja-JP': '自軍ターン終了時、配置列にある自身を除く全てのユニットを1ずつ<keyword=heal>回復</keyword>させる。\n',
    'ko-KR': '내 턴 종료마다, 이 전열의 다른 모든 유닛을 1 <keyword=heal>치유</keyword>한다.\n',
    'pl-PL': 'Na koniec sojuszniczej tury <keyword=heal>uzdrów</keyword> wszystkie inne jednostki w tym rzędzie z 1 pkt obrażeń.\n',
    'pt-BR': 'No fim do seu turno, <keyword=heal>cura</keyword> em 1 todas as outras unidades nesta fileira.\n',
    'ru-RU': 'В конце вашего хода <keyword=heal>исцелите</keyword> все остальные отряды в этом ряду на 1 ед.\n',
    'zh-CN': '己方回合结束时，<keyword=heal>治疗</keyword>同排所有其他单位 1 点。\n'
  },
  ingameArtId: '1452',
  ingameId: '200147',
  keywords: [ 'heal' ],
  loyalties: [ 'Loyal' ],
  name: {
    'de-DE': 'Heymaey-Flaminica',
    'en-US': 'Heymaey Flaminica',
    'es-ES': 'Flamínica Heymaey',
    'es-MX': 'Flamínica Heymaey',
    'fr-FR': 'Heymaey : flaminica',
    'it-IT': 'Heymaey: flaminica',
    'ja-JP': 'ヘイマイの巫女長',
    'ko-KR': '헤이마에이 제관',
    'pl-PL': 'Flaminika Heymaey',
    'pt-BR': 'Heymaey: Flaminique',
    'ru-RU': 'Хэймэй: фламиника',
    'zh-CN': '佛兰明妮卡',
    'zh-TW': '海玫靈師'
  },
  provision: 6,
  rarity: 'Epic',
  related: [],
  set: 'Base',
  strength: 6,
  type: 'Gold'
}
