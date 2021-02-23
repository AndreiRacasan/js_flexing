const button = document.getElementById('btn');
const food = document.getElementById('food');

button.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(r => r.json())
  .then(r => {
    makeFood(r.meals[0]);
  });
});

const makeFood = (f) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if(f[`strIngredient${i}`]) {
      ingredients.push(`${f[`strIngredient${i}`]} - ${f[`strMeasure${i}`]}`)
    } else {
      break;
    }
  }

  const newInnerHTML = `
		<div class="row">
			<div>
				<img src="${f.strMealThumb}" alt="foood">
				${f.strCategory ? `<p><strong>Category:</strong> ${f.strCategory}</p>` : ''}
				${f.strArea ? `<p><strong>Area:</strong> ${f.strArea}</p>` : ''}
				${f.strTags ? `<p><strong>Tags:</strong> ${f.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div>
				<h4>${f.strMeal}</h4>
				<p>${f.strInstructions}</p>
			</div>
		</div>
	`;

  food.innerHTML = newInnerHTML;
}