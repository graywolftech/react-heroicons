const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

function toCamelCase(text) {
  return text.replace(/-\w/g, clearAndUpper);
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

const folder = path.join(__dirname, "heroicons");
const iconsFolder = __dirname; // Beware that this could break if the file is moved

const gitRepo = "git clone https://github.com/refactoringui/heroicons.git";

console.log(`Closing ${gitRepo} to ${folder}`);
exec(`${gitRepo} ${folder}`, (error, stdout, stderr) => {
  try {
    if (error) {
      throw error;
    }

    console.log("Successfully cloned the repo!");
    ["outline-md", "solid-sm"].forEach((name) => {
      const srcFolder = path.join(folder, "dist", name);
      const outFolder = path.join(iconsFolder, name);

      if (!fs.existsSync(outFolder)) {
        console.log(`Creating ${outFolder}`);
        fs.mkdirSync(outFolder);
      }

      console.log(`Moving icons from ${srcFolder} to ${outFolder}!`);
      fs.readdirSync(srcFolder).map((svg) => {
        const src = path.join(srcFolder, svg);

        const everythingButExtension = svg.substr(0, svg.lastIndexOf("."));
        const out = path.join(outFolder, `${everythingButExtension}.tsx`);

        const pascalName = toPascalCase(everythingButExtension);

        let contents = fs.readFileSync(src).toString();
        // React has different names for these (ie. they are camel cased)
        contents = contents.replace(
          /(clip-rule|fill-rule|stroke-linecap|stroke-linejoin|stroke-width)/g,
          (match) => {
            return toCamelCase(match);
          },
        );

        let processed = contents.trim().split("\n").join("\n    ");
        processed = `<svg {...props} ${processed.substr(4)}`;

        fs.writeFileSync(
          out,
          `
import React from "react";

export const ${pascalName} = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    ${processed}
  )
}
          `.trim() + "\n",
        );
      });
    });
  } finally {
    console.log("Removing the repo...");
    exec(`rm -rf ${folder}`);
  }
});