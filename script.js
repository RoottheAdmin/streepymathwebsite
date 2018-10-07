var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.style.backgroundColor = "#4286f4";
    }
}
else {
    if (document.body) {
        document.body.style.backgroundColor = "#1E2239";
    }
}
