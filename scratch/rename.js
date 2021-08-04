const fs = require('fs')
const testDir = '/home/kevjinx/kevin/mulligan/scratch/test-images'

const files = fs.readdirSync(testDir)


const changeName = fileName => {
	return testDir + '/' + 'test'
}

for (let i = 0; i < files.length; i++ ) {
	const file = files[i]

	const newFileName = `${testDir}/test${i}`

	const oldPath = testDir + '/' + file

	fs.rename(oldPath, newFileName, err => {
		if (err) console.log(err);
	})

}
