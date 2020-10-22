import "./styles/main.pcss";

console.log('Works!444444444444444');

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";