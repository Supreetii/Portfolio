document.addEventListener('DOMContentLoaded', function() {
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const addRecipeModal = document.getElementById('addRecipeModal');
    const closeModalBtn = document.getElementById('closeModal');
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');

    addRecipeBtn.addEventListener('click', function() {
        addRecipeModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        addRecipeModal.style.display = 'none';
    });

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const recipeName = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h3>${recipeName}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
        `;

      
        recipeList.appendChild(recipeCard);

       
        addRecipeModal.style.display = 'none';

        
        recipeForm.reset();
    });
});
