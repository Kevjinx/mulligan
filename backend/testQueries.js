const db = require('./db/models')
const {Keyword, Card, User, Category, Deck} = require('./db/models')

Deck.findAll()
	.then(res => console.log(res))
	.then(res => console.log('done'))
