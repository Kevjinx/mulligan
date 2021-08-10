//convert raw exported JSON file into simplified version to seed and query from

const fs = require('fs')
const cardJson = require('../../backend/db/card-api/cards-v3-low.json')

const finalCardObj = {}

const script = () => {

	for (cardId in cardJson) {

		const card = cardJson[cardId]

		const cardObj = {
			name: card.name['en-US'],
			strength: card.strength,
			provision: card.provision,
			armor: card.armor || 0,
			info: card.info['en-US'],
			faction: card.faction,
			type: card.type,
			rarity: card.rarity,
			set: card.set,
			category: card.categories,
			keyword: card.keywords
		}

		finalCardObj[cardId] = cardObj

	}

	console.log('done');
	console.log('finalCardObj length:', Object.keys(finalCardObj).length);

	const dataJSON = JSON.stringify(finalCardObj)

	fs.writeFileSync('cleanedCardv1.json', dataJSON, err => console.log(err))
}

script()
