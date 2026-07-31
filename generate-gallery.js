const fs = require("fs");
const path = require("path");

const galleryRoot = path.join(__dirname, "public", "images", "gallery");
const outputFile = path.join(__dirname, "public", "gallery.json");

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

const gallery = [];

if (!fs.existsSync(galleryRoot)) {
    console.log("Gallery folder not found.");
    process.exit();
}

const categories = fs.readdirSync(galleryRoot);

categories.forEach(category => {

    const categoryPath = path.join(galleryRoot, category);

    if (!fs.statSync(categoryPath).isDirectory()) {
        return;
    }

    const files = fs.readdirSync(categoryPath);

    files
        .map(file => ({
            file,
            time: fs.statSync(path.join(categoryPath, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time)
        .forEach(({ file }) => {

            const ext = path.extname(file).toLowerCase();

            if (!imageExtensions.includes(ext)) {
                return;
            }

            const title = path.basename(file, ext)
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase());

            gallery.push({

                image: `images/gallery/${category}/${file}`,

                category: category,

                title: title

            });

        });

});

fs.writeFileSync(
    outputFile,
    JSON.stringify(gallery, null, 2),
    "utf8"
);

console.log(`gallery.json generated successfully.`);
console.log(`${gallery.length} images found.`);