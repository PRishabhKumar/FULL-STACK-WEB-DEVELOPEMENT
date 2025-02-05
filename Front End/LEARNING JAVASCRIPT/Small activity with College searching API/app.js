let country = document.querySelector(".country");

let button = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?name=";
let list = document.querySelector(".result");
async function getColleges(country) {
  list.innerText = "";
  let query = url + country;
  try {
    let response = await axios.get(query);
    let collegeArray = response.data;
    console.log(collegeArray);
    for (college of collegeArray) {
      if (college.country == country) {
        let collegeName = college.name;
        let li = document.createElement("li");
        li.innerHTML = `<b>${collegeName}</b>;`;
        list.appendChild(li);
      }
    }
  } catch (e) {
    console.log(`Some error occured : ${e}`);
  }
}

button.addEventListener("click", async () => {
  let countryName = country.value;
  await getColleges(countryName);
});

country.addEventListener("keyup", async (e) => {
  if (e.key == "Enter") {
    let countryName = country.value;
    await getColleges(countryName);
  }
});
