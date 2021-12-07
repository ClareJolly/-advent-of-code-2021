const constructReadme = (title, description, indexMarkdown, url) => {
  const readme = ` # Frontend Masters ${title}
  
  ${description}
  
  My notes from this course and any code created from it
  
  - [Link to course](${url || '<TBC>'})
  
  ---
  
  ## My Notes
  
  ${indexMarkdown}`;

  return readme;
};

module.exports = constructReadme;
