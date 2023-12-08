function openPopup(imageSrc, title, description) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    var popupTitle = document.getElementById("popup-title");
    var popupDescription = document.getElementById("popup-description");

    popup.style.display = "block";
    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupDescription.textContent = description;
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
