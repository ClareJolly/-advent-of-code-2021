const processUrl = require('./processUrl');
const { generateMarkdown, getMainIndex } = require('./generateMarkdown');
const constructReadme = require('./constructReadme');
const { getFilename, getFilenameForIndex } = require('./getFilenames');
const padFilename = require('./generalHelpers');
const outputNotes = require('./outputNotes');
const outputReadme = require('./outputReadme');

module.exports = {
  processUrl,
  generateMarkdown,
  getMainIndex,
  constructReadme,
  getFilename,
  getFilenameForIndex,
  padFilename,
  outputNotes,
  outputReadme,
};
