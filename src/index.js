function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function getPoem(event) {
  event.preventDefault();
  let message = document.querySelector("#poem");
  message.innerHTML = "Generating poem...";
  let userInput = document.querySelector(".input-suggestion");
  let apiKey = "24a6f34aet30b286677e3ofdb3c4aea0";
  let prompt = `Please use ${userInput.value} as a subject to generate a short poem.`;
  let context =
    "You love poetry. Please include only a short poem with no more than 6 sentences. Separate each sentence with a <br/>. At the end of the poem, please include an extra <br/> and then sign it using SheCodes AI in a <strong> element ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", getPoem);
