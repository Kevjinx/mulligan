const fs = require('fs')
const testDir = '/home/kevjinx/kevin/mulligan/frontend/src/gwent-low'

const files = fs.readdirSync(testDir)

const regex = (/\d+/)

for (let i = 0; i < files.length; i++ ) {
	const file = files[i]
	const id = regex.exec(file)
	const oldFileName = `${testDir}/${file}`
	const newFileName = `${testDir}/${id}.png`

	fs.rename(oldFileName, newFileName, err => {
		console.log(err);
	})

}
