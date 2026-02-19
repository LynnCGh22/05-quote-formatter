const form = document.getElementById("form");
const nounInput = document.getElementById("noun");
const verbInput = document.getElementById("verb");
const adjectiveInput = document.getElementById("adjective");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const noun = nounInput.value;
  const verb = verbInput.value;
  const adjective = adjectiveInput.value;

  result.textContent = 
    `The ${adjective} ${noun} had one goal: to ${verb}. What happened next was unexpected.`;

  form.reset();
});
