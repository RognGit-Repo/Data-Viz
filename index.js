console.log("Hello World");

const dateElement = document.getElementById("date");

console.log(dateElement.innerText);
const ctx = document.getElementById("myChart");

//Important Lesson 1 : Date Time Formatting

let currentDate = new Date();

let dateOptions = { year: "numeric", month: "long", day: "numeric" };

dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

//Rapid API code to retrieve trending twitter topics
const url = "https://twitter-trends5.p.rapidapi.com/twitter/request.php";
const data = new FormData();
data.append("woeid", "23424934");

const options = {
  method: "POST",
  headers: {
    "x-rapidapi-key": "4decbccf3amsh8419d580856e5d7p144fc3jsnba4b9a258189",
    "x-rapidapi-host": "twitter-trends5.p.rapidapi.com",
  },
  body: data,
};

const sampleFetch = async () => {
  try {
    const response = await fetch(url, options);
    //Json vs Text Response
    const result = await response.json();
    //const result2 = await response.text();
    const newResult = [];
    for (let i = 0; i < 99; i += 1) {
      newResult.push(result.trends[i]);
    }
    const names = newResult.map((trend) => {
      return trend.name;
    });

    const volumes = newResult.map((trend) => {
      return trend.volume;
    });

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: names,
        datasets: [
          {
            label: "# of Votes",
            data: volumes,
            borderWidth: 1,
          },
        ],
      },
      options: {
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        hoverBackgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// //100 request only
sampleFetch();

// let myPostDummy = {
//   name: "#FayeBDPartyInNanning",
//   query: "%23FayeBDPartyInNanning",
//   url: "search?q=%23FayeBDPartyInNanning",
//   volume: 103000,
//   volumeShort: "103K",
//   domainContext: "Only on X",
//   groupedTrends: [],
//   printHelloWorld: () => {
//     console.log("Hello World");
//   },
// };

// const groupData = [];

// groupData.push(myPostDummy);
// groupData.push(myPostDummy);

// //fetching using xml
// // const data2 = new FormData();
// // data.append("woeid", "23424934");

// // const xhr = new XMLHttpRequest();
// // xhr.withCredentials = true;

// // xhr.addEventListener("readystatechange", function () {
// //   if (this.readyState === this.DONE) {
// //     console.log(this.responseText);
// //   }
// // });

// // xhr.open("POST", "https://twitter-trends5.p.rapidapi.com/twitter/request.php");
// // xhr.setRequestHeader(
// //   "x-rapidapi-key",
// //   "4decbccf3amsh8419d580856e5d7p144fc3jsnba4b9a258189"
// // );
// // xhr.setRequestHeader("x-rapidapi-host", "twitter-trends5.p.rapidapi.com");

// // xhr.send(data2);

// let topics = groupData.map((el) => {
//   return el.name;
// });

// console.log(topics);
