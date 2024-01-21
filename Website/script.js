var currentImageIndex = 0;

    // Füge einen Event-Listener für das "click"-Ereignis auf dem gesamten Dokument hinzu
    document.addEventListener('click', function() {
        nextImage();}
    );

    function nextImage() {
        // Aktuelles Bild ausblenden
        var currentImage = document.getElementById('i' + currentImageIndex);
        currentImage.style.opacity = 0;

        // Nächstes Bild indexieren
        currentImageIndex = (currentImageIndex + 1) % 3; // Annahme: Es gibt 3 Bilder (image0, image1, image2)

        // Nächstes Bild einblenden
        var nextImage = document.getElementById('i' + currentImageIndex);
        nextImage.style.opacity = 1;
    }
