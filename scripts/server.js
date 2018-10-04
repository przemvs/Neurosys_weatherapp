const fs = require('fs')

const path = 'db.json'

const generateDatabase = () => {
  const db = {
    weatherCities: []
  }

  fs.writeFile('db.json', JSON.stringify(db), err => {
    if (err) throw err
    console.log(`\n\nCustom empty database has been created!`)
    console.log(`Database file name: db.json!`)
  })
}

if (fs.existsSync(path)) {
  console.log(`\nDatabase file already exists!\n`)
} else {
  generateDatabase()
}
