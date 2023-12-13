const ChangeButton = document.getElementById("BackgroundChangeButton");
const background = document.getElementById("background");
const Tier = document.getElementById("Tier");

const images =[
    "배경1.webp", "배경2.jpg", "배경3.png", "배경4.webp", "배경5.webp", "배경6.webp", "배경7.webp"
];

const Tierimg = [
    "브론즈.png", "실버.png", "골드.png", "플레티넘.png", "다이아.png", "마스터.png", "챌린저.png"
]

function changeBackgroundImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    background.style.backgroundImage = `url('img/${chosenImage}')`;
}

function loadAndUpdateCount() {
    let count = parseInt(localStorage.getItem('checkCount')) || 0;
    updateTierImage(count);
    return count;
}

function updateTierImage(count) {
    let tierIndex = Math.floor(count / 30);
    tierIndex = tierIndex < Tierimg.length ? tierIndex : Tierimg.length - 1;

    const tierImageElement = document.getElementById("tierImage");
    tierImageElement.src = `img/${Tierimg[tierIndex]}`;
}

ChangeButton.addEventListener("click", changeBackgroundImage);

// 초기 배경 이미지 설정
changeBackgroundImage();