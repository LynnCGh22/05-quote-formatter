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

   // Convert verb to -ing form (basic version)
  const verbIng = verb + "ing";

  const sentence = 
    `${verbIng} ${adjective} ${noun} is the real test of character. #LifeRules`;

  result.textContent = sentence;

  form.reset();
});

