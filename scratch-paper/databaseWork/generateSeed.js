//take from card keys and create seed
const {keywordArr, categoryArr} = require('../../backend/db/card-api/card-keys')
const cardJson = require('../../backend/db/card-api/cards-simplified.json')
const fs = require('fs')

//seeders to generate:
// keywords
// categories
// cards


const script = () => {

	const keywordSeeder = []
	const categorySeeder = []
	const cardSeeder = []

	keywordArr.forEach(keyword => {
		const seed = { name: keyword}
		seed.createdAt = new Date()
		seed.updatedAt = new Date()
		keywordSeeder.push(seed)
	})

	categoryArr.forEach(cat => {
		const seed = { name: cat }
		seed.createdAt = new Date()
		seed.updatedAt = new Date()
		categorySeeder.push(seed)
	})


	for (cardId in cardJson) {
		const card = cardJson[cardId]
		card.createdAt = new Date()
		card.updatedAt = new Date()
		cardSeeder.push(card)
	}

	const keywordSeederJson = JSON.stringify(keywordSeeder)
	const categorySeederJson = JSON.stringify(categorySeeder)
	const cardSeederJson = JSON.stringify(cardSeeder)


	fs.writeFileSync('keywordSeeder.json', keywordSeederJson, err => console.log(err))
	fs.writeFileSync('categorySeeder.json', categorySeederJson, err => console.log(err))
	fs.writeFileSync('cardSeeder.json', cardSeederJson, err => console.log(err))

}

script()
