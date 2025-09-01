const params = new URLSearchParams();
const rating = params.get('rating');

document.getElementById('.result').textContent = `You chosen ${rating}`;