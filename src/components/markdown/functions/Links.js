import "../functions/Slice_splice";

const LinksFunc = (start, textContent, link, text) => {
  const content = text.splice(start, 0, `[${textContent}](${link})`);
  return content;
};

export default LinksFunc;
