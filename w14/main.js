function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
}

async function getPhotos() {
    try {
        const link = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await link.json();
        onSuccess(link.thumbnailUrl);
        renderPhotos(photos);
    }catch(error) {
        OOPS(error);
    }
    function onSuccess(link) {
        console.log(`Done!`);
    }
    function OOPS(error) {
        console.log(`Error Detected: ${error}`);
    }
}

async function start() {
    getPhotos();
}

start();