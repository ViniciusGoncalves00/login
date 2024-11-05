const postcss = require("postcss");
const postcssJs = require("postcss-js");
const { readFileSync } = require("fs");
const path = require("path");

function handle_css_file(filename, addBase, addComponents, addUtilities) {
    const css = readFileSync(filename, "utf8");
    const root = postcss.parse(css);
    const jss = postcssJs.objectify(root);

    if ("@layer base" in jss) {
        addBase(jss["@layer base"]);
    }
    if ("@layer components" in jss) {
        addComponents(jss["@layer components"]);
    }
    if ("@layer utilities" in jss) {
        addUtilities(jss["@layer utilities"]);
    }
    for (const key in jss) {
        if (key.includes("@import")) {
            const match = key.match(/"([^"]+)"/);
            if (match && !key.includes("tailwindcss")) {
                const importedFile = match[1];
                const file_path = path.resolve(path.dirname(filename), importedFile);
                handle_css_file(file_path, addBase, addComponents, addUtilities);
            }
        }
    }
}

require.extensions[".css"] = function (module, filename) {
    module.exports = ({ addBase, addComponents, addUtilities }) => {
        handle_css_file(filename, addBase, addComponents, addUtilities);
    };
};