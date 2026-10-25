// Завдання 1


const readBooksLi = document.getElementById("read-books-li");
const viewFilmsLi = document.querySelector("#view-films-li");

readBooksLi.addEventListener("click", readBooksLiClick);
viewFilmsLi.addEventListener("click", viewFilmsLiClick);

// CSS-класи для зміни стилів елементів при натисканні

const READ_BOOKS_FIRST_CLICK_CLS = "read-books-after-first-click";
const READ_BOOKS_SECOND_CLICK_CLS = "read-books-after-second-click";
const VIEW_FILMS_FIRST_CLICK_CLS = "view-films-after-first-click";
const VIEW_FILMS_SECOND_CLICK_CLS = "view-films-after-second-click";

// Стилі за замовчуванням

readBooksLi.classList.add(READ_BOOKS_SECOND_CLICK_CLS);
viewFilmsLi.classList.add(VIEW_FILMS_SECOND_CLICK_CLS);

// Обробники подій

function readBooksLiClick()
{
    readBooksLi.classList.toggle(READ_BOOKS_FIRST_CLICK_CLS);
    readBooksLi.classList.toggle(READ_BOOKS_SECOND_CLICK_CLS);
}

function viewFilmsLiClick()
{
    viewFilmsLi.classList.toggle(VIEW_FILMS_FIRST_CLICK_CLS);
    viewFilmsLi.classList.toggle(VIEW_FILMS_SECOND_CLICK_CLS);
}


// Завдання 2


const imageContainer = document.getElementById("image-container");
const addImageBtn = document.getElementById("add-image");
const increaseImageBtn = document.getElementById("increase-image");
const decreaseImageBtn = document.getElementById("decrease-image");
const removeImageBtn = document.getElementById("remove-image");

addImageBtn.addEventListener("click", addImage);
increaseImageBtn.addEventListener("click", increaseImage);
decreaseImageBtn.addEventListener("click", decreaseImage);
removeImageBtn.addEventListener("click", removeImage);

const MAX_IMAGE_WIDTH = 1600;
const MIN_IMAGE_WIDTH = 200;
const IMG_SIZE_STEP = 100;

// Обробники подій

function addImage()
{
    const link = document.createElement("a");
    link.href = "https://miskrada-ks.gov.ua/";
    link.title = "Натисніть, щоб перейти на сайт міста";

    const img = document.createElement("img");
    img.src = "image.jpg";
    img.alt = "Херсон";
    img.width = 1000;

    link.appendChild(img);
    imageContainer.appendChild(link);
}

function increaseImage()
{
    const img = getLastImage();
    if (img && img.width + IMG_SIZE_STEP <= MAX_IMAGE_WIDTH) 
    {
        img.width += IMG_SIZE_STEP;
    }
}

function decreaseImage()
{
    const img = getLastImage();
    if (img && img.width - IMG_SIZE_STEP >= MIN_IMAGE_WIDTH) {
        img.width -= IMG_SIZE_STEP;
    }
}

function removeImage()
{
    const lastLink = getLastImageLink();
    if (lastLink) {
        lastLink.remove();
    }
}

function getLastImage() {
    const lastLink = getLastImageLink();
    return lastLink ? lastLink.querySelector("img") : null;
}

function getLastImageLink() {
    return imageContainer.querySelector("a:last-of-type");
}