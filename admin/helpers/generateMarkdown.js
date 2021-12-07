const padFilename = require('./generalHelpers');
const { getFilenameForIndex } = require('./getFilenames');

const generateIndexMarkdown = (subsection) => {
  const toc = subsection.map((sub) => `- [${sub}](#${sub})`).join('\n');
  const headings = subsection.map((sub) => `\n\n## ${sub}`).join('\n\n---');
  return { toc, headings };
};

const generateMarkdown = (section) => {
  const indexMd = generateIndexMarkdown(section.sub);
  const markdown = `# ${section.main} <!-- omit in toc -->\n\n---\n${indexMd.toc}\n---${indexMd.headings}\n`;
  return markdown;
};

const getMainIndex = (data, i) => {
  return data
    .map(
      (d, i) => `- [${padFilename(i)} - ${d.main}](${getFilenameForIndex(i)})`
    )
    .join('\n');
};

module.exports = { generateMarkdown, getMainIndex };
