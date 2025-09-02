const params = new URLSearchParams(window.location.search);
const rating = params.get("rating");

if(rating){
    document.getElementById('result').textContent = `You selected ${rating} out of 5`;
}