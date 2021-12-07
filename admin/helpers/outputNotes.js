const fs = require('fs-extra')
const path = require('path')

const { generateMarkdown } = require('./generateMarkdown')
const { getFilename } = require('./getFilenames')

const outputNotes = (fullDetails, outputPath) => {
  fullDetails.forEach((section, i) => {
    fs.ensureDirSync(path.join(outputPath))
    const markdown = generateMarkdown(section)
    const filename = path.join(getFilename(i, outputPath))
    fs.ensureFileSync(filename)
    fs.writeFileSync(filename, markdown)
    fs.ensureDirSync(path.join(outputPath, 'notes', 'images'))
  })
}

module.exports = outputNotes
