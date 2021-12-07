#!/usr/bin/env node
const path = require('path')
var inquirer = require('inquirer')

const { processUrl, outputNotes, outputReadme } = require('./helpers')

inquirer
  .prompt([
    {
      type: 'string',
      name: 'year',
      default: '2015',
      message: "What's the year?",
    },
    {
      type: 'string',
      name: 'day',
      message: "What's the day?",
    },
    {
      type: 'string',
      name: 'output',
      message: "What's the output folder - leave blank for default",
    },
  ])
  .then(answers => {
    const { year, day, output } = answers
    processDay(year, day, output)
  })

const processDay = async (year, day, output) => {
  const outputPath = output || path.join(__dirname, '../output')

  const url = `https://adventofcode.com/${year}/day/${day}`
  const { input, title, description } = await processUrl(url)
  console.log('🚀 ~ file: index.js ~ line 36 ~ processDay ~ input', input)
  console.log('🚀 ~ file: index.js ~ line 29 ~ processDay ~ description', description)
  console.log('🚀 ~ file: index.js ~ line 29 ~ processDay ~ title', title)

  // outputNotes(fullDetails, outputPath)
  // outputReadme({ title, description, fullDetails, url, outputPath })
}
