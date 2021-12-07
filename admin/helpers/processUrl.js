const fs = require('fs-extra')
const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const fetch = require('node-fetch')

const fetchHtml = async url => {
  let body = ''
  await fetch(url).then(res => (body = res.text()))
  return body
}
const fetchInput = async url => {
  let body = ''
  await fetch(`${url}/input`).then(res => (body = res.text()))
  return body
}

const getDescription = document => {
  const article = document.querySelectorAll(`article`)
  // const sub = document.getElementsByClassName('day-desc')[0].getElementsByTagName('*')
  const sub = document.getElementsByClassName('day-desc')[0].childNodes
  const arr = Array.from(sub)
  const map = arr.map(m => ({ element: m, tag: m.tagName || 'text' }))
  console.log('🚀 ~ file: processUrl.js ~ line 18 ~ map', map)
  console.log('🚀 ~ file: processUrl.js ~ line 16 ~ day', sub)
  // const sub = day.querySelectorAll(':scope ')
  // console.log('🚀 ~ file: processUrl.js ~ line 15 ~ sub', sub)
  // console.log('🚀 ~ file: processUrl.js ~ line 20 ~ Array.from(sub)', Array.from(sub).length)
  // map[0].innerHTML
  console.log('🚀 ~ file: processUrl.js ~ line 31 ~ map[0].innerHTML', map[1].innerHTML)
  return arr
    .slice(1)
    .map(p =>
      p.tagName === 'PRE'
        ? `\`\`\`\n${p.innerHTML.replace(/<\/?code>/g, '')}\n\`\`\``
        : p.innerHTML,
    )
    .slice(0, arr.length - 2)
    .join('\n')
}

const getTitle = document => {
  const sub = document.querySelectorAll(`h2`)
  return Array.from(sub).map(t => t.innerHTML.replace(/---\s|\s---/g, ''))
}

const processUrl = async url => {
  try {
    const html = await fetchHtml(url)
    const input = await fetchInput(url)
    // console.log('🚀 ~ file: processUrl.js ~ line 31 ~ html', html)

    const dom = new JSDOM(html)
    const { window } = dom
    const { document } = window
    const description = url ? getDescription(document) : '<TBC>'
    const title = url ? getTitle(document) : '<TBC>'

    // var mainSections = document.querySelectorAll('h2.lessongroup')

    // const fullDetails = Array.from(mainSections).map((m, i) => {
    //   const sub = document.querySelectorAll(`ul:nth-of-type(${i + 1} ) > li > a > div.heading > h3`)
    //   const subHeadings = Array.from(sub).map(s => s.innerHTML)
    //   return { main: m.innerHTML, sub: subHeadings }
    // })

    return { input, description, title }
  } catch (e) {
    console.error(e)
  }
}

module.exports = processUrl
