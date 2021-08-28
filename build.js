const fs = require("fs");
const path = require("path");
const { exec, execSync } = require("child_process");

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

const gitRepo = "git clone https://github.com/tailwindlabs/heroicons.git";

const imports = [];

const processRepo = () => {
  try {
    ["outline", "solid"].forEach((name) => {
      const srcFolder = path.join(folder, "optimized", name);
      const outFolder = path.join(iconsFolder, name);
      execSync(`rm -rf ${outFolder}`);

      if (!fs.existsSync(outFolder)) {
        console.log(`Creating ${outFolder}`);
        fs.mkdirSync(outFolder);
      }

      console.log(`Moving icons from ${srcFolder} to ${outFolder}!`);
      fs.readdirSync(srcFolder).map((svg) => {
        const src = path.join(srcFolder, svg);

        let everythingButExtension = svg.substr(0, svg.lastIndexOf("."));
        let outName = everythingButExtension + "-" + name; // name is "outline" or "solid"
        const outFileName = `${outName}.tsx`;
        const out = path.join(outFolder, outFileName);
        const pascalName = toPascalCase(outName);
        let contents = fs.readFileSync(src).toString();

        // React has different names for these (ie. they are camel cased)
        contents = contents.replace(
          /(clip-rule|fill-rule|stroke-linecap|stroke-linejoin|stroke-width)/g,
          (match) => {
            return toCamelCase(match);
          }
        );

        // Tracking for these issues https://github.com/tailwindlabs/heroicons/issues/93
        // Remove fill in academic-cap.svg and truck.svg
        // Also remove hardcoded stroke in arrows-expand, folder-add, folder-download and folder-remove
        contents = contents.replace(/ fill="#fff"/, "");
        contents = contents.replace(
          / stroke="#[a-zA-Z0-9]+"/,
          ' stroke="currentColor"'
        );

        imports.push([path.join(name, outFileName), pascalName]);

        let processed = contents.trim().split("\n").join("\n    ");
        processed = `<svg {...props} ref={ref} ${processed.substr(4)}`;

        fs.writeFileSync(
          out,
          `
import React from "react";

export const ${pascalName} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    ${processed}
  )
})
          `.trim() + "\n"
        );
      });
    });

    fs.writeFileSync(
      "index.ts",
      imports
        .sort(([_, a], [__, b]) => a.localeCompare(b))
        .map(([importPath, name]) => {
          console.log(`↳ ${name}`);
          return `export { ${name} } from "./${importPath.split(".")[0]}";`;
        })
        .join("\n") + "\n"
    );
  } finally {
    // console.log("Removing the repo...");
    // exec(`rm -rf ${folder}`);
  }
};

console.log(`Cloning ${gitRepo} to ${folder}`);
exec(`${gitRepo} ${folder}`, (error) => {
  if (error) {
    console.log("The repo already exists!");
  } else {
    console.log("Successfully cloned the repo!");
  }
  processRepo();
});
