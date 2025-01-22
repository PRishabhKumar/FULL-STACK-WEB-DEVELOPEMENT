let button = document.querySelector(".clickButton");
let heading = document.querySelector(".heading");
let paragraph = document.querySelector(".showFacts");
let url = "https://catfact.ninja/fact";

button.addEventListener("click",  function () {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        paragraph.innerText = `Your new and random fact about cats is : ${data.fact}`;
        resolve("API call was successful !!!");
      })
      .catch((err) => {
        console.log(`Some error occured : ${err}`);
        reject(
          "The API call could not be made because either the reuqest you made was incorrect or it was rejected by the server"
        );
      });
  });
});
