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
const gitRepo = "git clone https://github.com/tailwindlabs/heroicons.git";

const exportNames = [];

const iconTypes = {
  outline: ["24", "outline"],
  solid: ["24", "solid"],
  "tiny-solid": ["20", "solid"],
};

const processRepo = () => {
  let code = 'import React from "react";\n\n';
  Object.entries(iconTypes).forEach(([svgType, iconPath]) => {
    const srcFolder = path.join(folder, "optimized", ...iconPath);

    fs.readdirSync(srcFolder).map((svg) => {
      const src = path.join(srcFolder, svg);

      let everythingButExtension = svg.substr(0, svg.lastIndexOf("."));
      let outName = everythingButExtension + "-" + svgType;
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

      exportNames.push(pascalName);

      let processed = contents.trim().split("\n").join("\n    ");
      processed = `<svg {...props} ref={ref} ${processed.substr(4)}`;

      const props = "React.SVGProps<SVGSVGElement>";
      const component = "SVGSVGElement";
      // Here I add "React.ForwardRefExoticComponent<React.PropsWithoutRef<${props}> & React.RefAttributes<${component}>>"
      // so that the declaration file is smaller. If the above code is removed it generates a 6.5 MB file as oppose to a
      // 139 KB file
      code +=
        `
export const ${pascalName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<${props}> & React.RefAttributes<${component}>> = React.forwardRef<${component}, ${props}>((props, ref) => {
  return (
    ${processed}
  )
});
          `.trim() + "\n\n";
    });
  });

  fs.writeFileSync("index.tsx", code);

  for (const exportName of exportNames.sort((a, b) => a.localeCompare(b))) {
    console.log(`↳ ${exportName}`);
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
