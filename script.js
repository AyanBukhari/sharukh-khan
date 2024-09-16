// script.js

// Array of 50 different colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A6FF33",
    "#FF8C33", "#8CFF33", "#33FF8C", "#8C33FF", "#FF3333",
    "#33FF33", "#3333FF", "#FF3399", "#99FF33", "#FFCC33",
    "#33FFCC", "#CCFF33", "#FF6633", "#6633FF", "#33CCFF",
    "#CC33FF", "#33CC33", "#CC33CC", "#CCFF66", "#FF6666",
    "#66FF66", "#6666FF", "#FF66CC", "#66FFCC", "#FFCC66",
    "#66CCFF", "#CC66FF", "#66FF66", "#FFCC99", "#99FFCC",
    "#CC99FF", "#FF99CC", "#99CCFF", "#CCFF99", "#FFCCFF",
    "#FF9966", "#66FF99", "#99FF66", "#CCFF66", "#66CC99",
    "#FF6699", "#99CC66", "#66FFCC", "#FF99FF", "#CC99FF"
];

let currentColorIndex = 0;

function changeColor() {
    // Change the background color
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    // Update to the next color in the array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add event listeners
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', () => {
    changeColor();
});
