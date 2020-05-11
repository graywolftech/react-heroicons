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

const imports = [];

const processRepo = () => {
  try {
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

        let everythingButExtension = svg.substr(0, svg.lastIndexOf("."));
        if (name === 'solid-sm' && everythingButExtension === 'md-library') {
          // This should not be in the solid-sm folder
          // It's actually a dup so we can ignore it
          return;
        } else if (name === "outline-md" && everythingButExtension === "sm-view-grid-add") {
          // again, this is a dup
          // tracking https://github.com/refactoringui/heroicons/issues/39
          return;
        }

        const outFileName = `${everythingButExtension}.tsx`;
        const out = path.join(outFolder, outFileName);

        const pascalName = toPascalCase(everythingButExtension);

        let contents = fs.readFileSync(src).toString();
        // React has different names for these (ie. they are camel cased)
        contents = contents.replace(
          /(clip-rule|fill-rule|stroke-linecap|stroke-linejoin|stroke-width)/g,
          (match) => {
            return toCamelCase(match);
          },
        );

        imports.push([path.join(name, outFileName), pascalName]);

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

    fs.writeFileSync(
      "index.ts",
      imports.map(([importPath, name]) => {
        return `export { ${name} } from "./${importPath.split('.')[0]}";`
      }).join("\n") + "\n",
    )
  } finally {
    // console.log("Removing the repo...");
    // exec(`rm -rf ${folder}`);
  }
}

console.log(`Closing ${gitRepo} to ${folder}`);
exec(`${gitRepo} ${folder}`, (error) => {
  if (error) {
    console.log("The repo already exists!");
  } else {
    console.log("Successfully cloned the repo!");
  }
  processRepo();
});