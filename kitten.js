console.log('Kittens of the world unite');

let fileNames = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let imgs = document.getElementsByTagName('img');

for (img of imgs) {
    let r = Math.floor(Math.random() * fileNames.length);
    let file = 'flowers/' + fileNames[r];
    let url = chrome.extension.getURL(file);
    img.src = url;
    console.log(url);
}