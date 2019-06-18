import "../functions/Slice_splice";

export const LinksFunc = (start, textContent, link, text) => {
  return new Promise(resolve => {
    const content = text.splice(start, 0, `[${textContent}](${link})`);
    resolve(content);
  });
};
