/*let number = 0; //--1
const titleArea = document.getElementById("title"); //--2
const contentArea = document.getElementById("content"); //--2
const videoArea = document.getElementById("video"); //--2
const button = document.getElementById('btn'); //--3

function getData() {
  button.addEventListener('click', e => { //--4
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
          titleArea.innerHTML = request.response[number].title; //--5
          contentArea.innerHTML = request.response[number].content; //--5
          videoArea.setAttribute("src", request.response[number].url); //--6
          number == 2 ? number = 0 : number++; //--7
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  })
}

window.onload = getData;*/

let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const xhr = new XMLHttpRequest();
function getData() {
  console.log('excuted');
  // ajax.jsonからデータを取得する処理を記述
    console.log("this excuted");
    if(data.length == 0) {
      xhr.onreadystatechange = function() {
        console.log("this excuted");
        if(xhr.readyState ==4 && xhr.status == 200){
         for(i=0; i<3; i++){
          data.push(xhr.response[i]);
         }
        }
      };
      xhr.open("GET", "ajax.json");
      xhr.responseType = "json";
      xhr.send(null);
    }
}
function changeVideo() {
  getData();
  button.addEventListener("click", e=>{
    console.log("donée recuperer");

    titleArea.innerHTML = data[number]?.title;
    contentArea.innerHTML = data[number]?.content;
    videoArea.setAttribute("src",data[number]?.url);
    number == 2? number = 0: number++;
    console.log(data);
  })
}

window.onload = changeVideo;