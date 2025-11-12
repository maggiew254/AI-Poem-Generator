function displayPoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings:
      "This is the poem you are looking for. Roses are red, violets are blue. Sugar is sweet and so are you",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  //let prompt = "";
  //let apiUrl =
  //  "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}";
  //let apiKey = "24a6f34aet30b286677e3ofdb3c4aea0";
}
let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", displayPoem);
