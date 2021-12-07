const path = require('path');

const padFilename = require('./generalHelpers');

const getFilename = (index, outputPath) => {
  const NOTES_PATH = path.join(outputPath, `notes`);
  return path.join(NOTES_PATH, `${padFilename(index)}.md`);
};

const getFilenameForIndex = (index) => {
  return `./notes/${padFilename(index)}.md`;
};

module.exports = { getFilename, getFilenameForIndex };
