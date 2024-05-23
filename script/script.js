// Pour la page d'accueil
// Attente que la page soit chargée
window.onload = function() {
    // Sélection des éléments par leurs identifiants
    var showMoreButton = document.getElementById('showMore');
    var showGalleryButton = document.getElementById('showGallery');
    var careerList = document.getElementById('careerList');
    var imageGallery = document.getElementById('imageGallery');

    // Ajout de l'écouteur d'événement pour le bouton 'showMore'
    showMoreButton.onclick = function() {
        // Basculer la visibilité de careerList
        careerList.classList.toggle('hidden');
    };

    // Ajout de l'écouteur d'événement pour le bouton 'showGallery'
    showGalleryButton.onclick = function() {
        // Basculer la visibilité de imageGallery
        imageGallery.classList.toggle('hidden');
    };
};
// Fin page d'accueil

// Page CV
document.addEventListener('DOMContentLoaded', (event) => {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.width = entry.target.getAttribute('data-percentage');
            }
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.skill-percentage').forEach(bar => {
        bar.setAttribute('data-percentage', bar.style.width);
        bar.style.width = '0';
        observer.observe(bar);
    });
});
// Fin page CV

// Page d'admission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Check answers
        var isViennoiserieCorrect = document.querySelector('input[name="viennoiserie"]:checked')?.value === 'Pain au chocolat';
        var isTerrineCorrect = document.querySelector('input[name="terrine"]:checked')?.value === 'De la pate et des pattes';
        var isLivreCorrect = document.querySelector('input[name="livre"]:checked')?.value === 'A au moins 1 239 mots';
        
        // For maryse, we need to make sure both correct answers are checked
        var maryseAnswers = Array.from(document.querySelectorAll('input[name="maryse"]:checked')).map(el => el.value);
        var isMaryseCorrect = maryseAnswers.includes('Une spatule') && maryseAnswers.includes('Une patisserie') && maryseAnswers.length === 2;
    
        // Determine if all answers are correct
        var allCorrect = isViennoiserieCorrect && isTerrineCorrect && isLivreCorrect && isMaryseCorrect;
    
        // Show appropriate message
        var message = allCorrect ? "La formation t'es bien destinée." : "La formation n'est pas faite pour toi.";
        alert(message);
    
        return false; // Prevent the form from submitting
    });
});
// Fin page d'admission





                                                       