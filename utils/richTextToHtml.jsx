import parse from "html-react-parser";

export function richTextToHtml(richTextJson) {
  if (!Array.isArray(richTextJson) || richTextJson.length === 0) return "";

  const htmlString = richTextJson
    .map(block => {
      switch (block.type) {
        case "paragraph":
          return `<p>${parseChildren(block.children)}</p>`;

        case "heading":
          return `<h${block.level || 1}>${parseChildren(block.children)}</h${block.level || 1}>`;

        case "list":
          const listTag = block.format === "ordered" ? "ol" : "ul";
          return `<${listTag}>${parseList(block.children)}</${listTag}>`;

        case "list-item":
          return `<li>${parseChildren(block.children)}</li>`;

        case "image":
          if (block.image && block.image.url) {
            return `<img src="${block.image.url}" alt="${block.image.alternativeText || "Image"}" width="${block.image.width || "auto"}" height="${block.image.height || "auto"}" />`;
          }
          return "";

        default:
          return "";
      }
    })
    .join("");

  return parse(htmlString);
}

function parseChildren(children) {
  return children
    .map(child => {
      if (child.type === "text") {
        let textValue = child.text || "";

        if (child.bold) textValue = `<b>${textValue}</b>`;
        if (child.italic) textValue = `<i>${textValue}</i>`;
        if (child.underline) textValue = `<u>${textValue}</u>`;

        return textValue;
      }

      if (child.type === "link" && child.url) {
        return `<a href="${child.url}" target="_blank" rel="noopener noreferrer">${parseChildren(child.children)}</a>`;
      }

      return "";
    })
    .join("");
}

function parseList(items) {
  return items
    .map(item => {
      if (item.type === "list-item") {
        return `<li>${parseChildren(item.children)}</li>`;
      }
      return "";
    })
    .join("");
}
