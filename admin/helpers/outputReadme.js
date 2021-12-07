const fs = require('fs-extra')
const path = require('path')

const constructReadme = require('./constructReadme')
const { getMainIndex } = require('./generateMarkdown')

const outputReadme = ({ title, description, fullDetails, url, outputPath }) => {
  const readme = constructReadme(title, description, getMainIndex(fullDetails), url)

  fs.ensureFileSync(path.join(outputPath, `README.md`))
  fs.writeFileSync(path.join(outputPath, `README.md`), readme)
}

module.exports = outputReadme
