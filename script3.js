fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let factDiv = document.querySelector(".factOTD");
    let funfact = data.text;
    let p = document.createElement("p");
    p.innerHTML = "Fact of the Day: " + funfact ;
    factDiv.appendChild(p);
  });