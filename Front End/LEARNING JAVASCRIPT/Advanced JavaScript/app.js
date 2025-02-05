let heading = document.querySelector("#ayncJS");

function changeColour(colour, delay, nextColour) {
  setTimeout(() => {
    heading.style.color = colour;
    if (nextColour) {
      nextColour();
    }
  }, delay);
}

changeColour("orange", 500, () => {
  changeColour("red", 500, () => {
    changeColour("green", 500, () => {
      changeColour("blue", 500, () => {
        changeColour("yellow", 500, () => {
          changeColour("pink", 500, () => {
            changeColour("purple", 500, () => {
              changeColour("royalblue", 500, () => {
                changeColour("violet", 500, () => {
                  changeColour("indigo", 500);
                });
              });
            });
          });
        });
      });
    });
  });
});

// Below is one of the methods on how to achieve a simple system that stores a data in the database based on the internet speed available.
function saveData(data) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1; // generating random numbers between 1 and 10 as ther internet speed
  if (internetSpeed >= 5) {
    alert("Data was saved successfully !!");
  } else {
    alert("Data was not saved in the database due to low internet speed !!!");
  }
}

// saveData("P Rishabh Kumar");

// In the above approach , we are only prinitng a single line both in the case of success as well as failure but if we want to execute a lot of other lines of code upon success and failure, then we need to create functions for them and pass those functions as parameters to the main function as shown below

function newSaveData(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed >= 5) {
    success();
  } else {
    failure();
  }
}

// this is another representation where what to do in the case of failure and success is not explicitly mentioned but is stored in dedidcated functions

// newSaveData(
//   "P Rishabh Kumar",
//   () => {
//     console.log("Your data was saved successfully !!!");
//     newSaveData(
//       "Yug Raithatha",
//       () => {
//         console.log("Success2: The second data was saved successfully");
//         newSaveData(
//           "Rajvi Solanki",
//           () => {
//             console.log("Success3: The third data was saved successfully");
//           },
//           () => {
//             console.log(
//               "Failure3: The thir data could not be saved due to slow internet speeds"
//             );
//           }
//         );
//       },
//       () => {
//         console.log(
//           "Failure2: The second data could not be saved due to low internet speeds"
//         );
//       }
//     );
//   },
//   () => {
//     console.log("Data not saved due to slow internet speeds");
//   }
// );

// promise is an object in JS which assures you that some operation will be performed although it is uncertain whether it will be successfull or not.

// This object has three states and two callbacks.

// The states are
// (i) Pending which means it is not sure whether the operation will be successfull or not as it is not yet processed.
// (ii) Fulfilled which means whatever task we had to perform has been performed successfully
// (ii) Rejected which means the desired operation (here saving a data in the data base) was unseccessful

// The callbacks it takes are :
// (i) resolve() which is executed when the operation is completed successfully
// (ii) raject() which is executed when the operation fails

// Now we will see how we can write the above confusing code in a comparatively simpler format using promises

function saveToDBUsingPromise(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed >= 5) {
      resolve("Data saved");
    } else {
      reject("Data not saved due to slow internet speeds");
    }
  });
}

//this is the approach we use using promises
// Now lets see how to refactor the above code using promises

// Now we will see about the then() and catch() function as they are used to write the code that has be executed when the operation succeeds and fails respectively and we will use these methods to get the structure of the above long confusing code using promises

// let reponse = saveToDBUsingPromise("P S Rao");
// console.log(reponse);
// reponse
//   .then(() => {
//     console.log("Success: Data was saved successfully");
//     let reponse1 = saveToDBUsingPromise("P Laxmi");
//     response1
//       .then(() => {
//         console.log("Success2: The second data was saced successfully");
//         let response2 = saveToDBUsingPromise("P Rishabh Kumar")
//           .then(() => {
//             console.log("Success3: The third data was saved successfully");
//           })
//           .catch(() => {
//             console.log(
//               "Failure3: The third data was not saved successfully due to slow internet speeds"
//             );
//           });
//       })
//       .catch(() => {
//         console.log(
//           "Failure2: The second data was not saved due to slow internet speeds"
//         );
//       });
//   })
//   .catch(() => {
//     console.log("Data was not saved due to slow internet speeds !!!");
//   });

// a further compact format to represent the above code is as shown below :

saveToDBUsingPromise("P S Rao")
  .then(() => {
    console.log("Success: Data was saved successfully");
    saveToDBUsingPromise("P Laxmi")
      .then(() => {
        console.log("Success2: The second data was saced successfully");
        saveToDBUsingPromise("P Rishabh Kumar")
          .then(() => {
            console.log("Success3: The third data was saved successfully");
          })
          .catch(() => {
            console.log(
              "Failure3: The third data was not saved successfully due to slow internet speeds"
            );
          });
      })
      .catch(() => {
        console.log(
          "Failure2: The second data was not saved due to slow internet speeds"
        );
      });
  })
  .catch(() => {
    console.log("Data was not saved due to slow internet speeds !!!");
  });

// Now lets try refactor the code we wrote to change the colour of the heading periodically using async functions and the await keyword

let newHeading = document.querySelector(".asyncAwait");
// function newColourChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       newHeading.style.color = color;
//       console.log(`The colour of the heding has been change to ${color}`);
//       resolve("Colour change successful !!");
//     }, delay);
//   });
// }

// async function colourChangeDemo() {
//   await newColourChange("orange", 1000);
//   await newColourChange("red", 1000);
//   await newColourChange("green", 1000);
//   await newColourChange("blue", 1000);
//   await newColourChange("yellow", 1000);
//   await newColourChange("pink", 1000);
//   await newColourChange("purple", 1000);
//   await newColourChange("royalblue", 1000);
//   await newColourChange("violet", 1000);
//   await newColourChange("indigo", 1000);
// }

// While using multiple function calls using async-await keywords, there is a possibility that out of say the 10 function calls we are makiing any one random function call may result in a rejected promise and in this case the console will throw an error. If we want to perform some more operations after the function calls are over then these instruction will never be processed due to error thrown by the rejected promise.
// To resolve this issue, we can handle the rejections by keeping all those function calls which can throw an error inside the try block and catching the errors in the catch block as shown below

function newColourChange(color, delay) {
  return new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10) + 1;
    if (number >= 5) {
      setTimeout(() => {
        newHeading.style.color = color;
        console.log(`Color changed to ${color}`);
        resolve("Color changed successfully !!");
      }, delay);
    } else {
      reject(
        `The colour coould not be changed to ${color} due to some error !!!`
      );
    }
  });
}

async function changeColourDemo() {
  try {
    await newColourChange("orange", 1000);
    await newColourChange("red", 1000);
    await newColourChange("green", 1000);
    await newColourChange("blue", 1000);
    await newColourChange("yellow", 1000);
    await newColourChange("pink", 1000);
    await newColourChange("purple", 1000);
    await newColourChange("royalblue", 1000);
    await newColourChange("violet", 1000);
    await newColourChange("indigo", 1000);
  } catch (error) {
    console.log("Some error occured");
    console.log(error);
  }
  console.log(
    "This operation is intended to be performed after the execution of the function calls !!!"
  );
}

// NOW WE WILL SEE HOW TO KAKE API CALLS USING THE CONCEPTS OF ASYNC JS AND PROMISES LEARNT BEFORE

// Here, we will be using a random cat fact API  that siply returns a new and random fact about cats every time a GET request is made to the URL

let url = "https://catfact.ninja/fact";

// To make a reuqest to an API, the fetch() method is used that returns a promise

fetch(url) //This returns a promise
  .then((res1) => {
    return res1.json(); //This again  returns a promise !!
  })
  .then((data) => {
    console.log(`Fact number 1 : ${data.fact}`);
    fetch(url)
      .then((res2) => {
        return res2.json();
      })
      .then((data2) => {
        console.log(`Fact number 2 : ${data2.fact}`);
        fetch(url)
          .then((res3) => {
            return res3.json();
          })
          .then((data3) => {
            console.log(`Fact number 3 : ${data3.fact}`);
          });
      });
  })
  .catch((err) => {
    console.log("Some error occured : ", err);
  });

// The above code demonstrates the use of fetch() method to make API calls and also how nested API calls can be made using the fact that the fetch() method returns a promise and the concept of promise chaining.

// Now we will see the use of async and await to make similar nested API calls

console.log(
  "The three fact from here onwards are being fetched using async and await keywords !!!"
);

function callAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(` A random fact about cats is : ${data.fact}`);
          resolve("API call was successful !!");
        })
        .catch((err) => {
          console.log(`Some error occured : ${err}`);
          reject(
            "The API call could not be made because either the reuqest you made was incorrect or it was rejected by the server !!!"
          );
        });
    }, 1000);
  });
}

async function makeAPICall() {
  await callAPI();
  await callAPI();
  await callAPI();
}

makeAPICall();
