const padFilename = (index) => {
  const indexStr = `${index + 1}`;
  return indexStr.padStart(2, '0');
};

module.exports = padFilename;
