//take from card keys and create seed
const {keywordArr, categoryArr} = require('../backend/db/card-api/card-keys')
const cardJson = require('../backend/db/card-api/cards-simplified.json')
const fs = require('fs')

//seeders to generate:
// keywords
// categories
// cards

const keywordSeeder = []
const categorySeeder = []
const cardSeeder = []

const script = () => {

	keywordArr.forEach(keyword => {
		const seed = { name: keyword}
		keywordSeeder.push(seed)
	})

	categoryArr.forEach(cat => {
		const seed = { name: cat }
		categorySeeder.push(seed)
	})



}

script()
