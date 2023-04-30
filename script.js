document.getElementById("blueButton").onclick = switchBlue;
document.getElementById("pinkButton").onclick = switchPink;
document.getElementById("yellowButton").onclick = switchYellow;
document.getElementsByTagName("body")[0].style.backgroundColor = "#B2DFF0";
document.getElementById("item-image").src = "./assets/Blue_umbrella.png";

function switchBlue() {
  document.getElementById("chosen-image").style.opacity = 0;
  document.getElementById("item-image").style.opacity = 0;
  document.getElementsByTagName("body")[0].style.backgroundColor = "#B2DFF0";
  document.getElementById("container-svg").style.fill = "skyblue";
  document.getElementById("container-svg").style.opacity = 1;
  document.getElementById("new-file").style.backgroundColor = "#0AAAE9";
  setTimeout(() => {
    document.getElementById("container-svg").style.opacity = 0;
    document.getElementById("item-image").style.opacity = 1;
    document.getElementById("item-image").src = "./assets/Blue_umbrella.png";
    document.getElementById("chosen-image").style.opacity = 1;
  }, 2000);
}

function switchPink() {
  document.getElementById("chosen-image").style.opacity = 0;
  document.getElementById("item-image").style.opacity = 0;
  document.getElementsByTagName("body")[0].style.backgroundColor = "#F7B9F1";
  document.getElementById("container-svg").style.fill = "deeppink";
  document.getElementById("container-svg").style.opacity = 1;
  document.getElementById("new-file").style.backgroundColor = "#DF59D2";

  setTimeout(() => {
    document.getElementById("item-image").style.opacity = 1;
    document.getElementById("container-svg").style.opacity = 0;
    document.getElementById("item-image").src = "./assets/Pink_umbrella.png";
    document.getElementById("chosen-image").style.opacity = 1;
  }, 2000);
}

function switchYellow() {
  document.getElementById("chosen-image").style.opacity = 0;
  document.getElementById("item-image").style.opacity = 0;
  document.getElementsByTagName("body")[0].style.backgroundColor = "#F5F5CA";
  document.getElementById("container-svg").style.fill = "yellow";
  document.getElementById("container-svg").style.opacity = 1;
  document.getElementById("new-file").style.backgroundColor = "#EDED6F";

  setTimeout(() => {
    document.getElementById("item-image").style.opacity = 1;
    document.getElementById("container-svg").style.opacity = 0;
    document.getElementById("item-image").src = "./assets/Yellow_umbrella.png";
    document.getElementById("chosen-image").style.opacity = 1;
  }, 2000);
}

// const file = document.querySelector("#file");
// file.addEventListener("change", function () {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     document.querySelector("#uploadImg").src = reader.result;
//   });
//   reader.readAsDataURL(this.files[0]);
// });

let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
document.getElementById("new-file").onclick = uploadLogo;

function uploadLogo() {
  document.getElementById("upload-icon").style.opacity = 0;

  document.getElementById("button-svg").style.opacity = 1;
  document.getElementById("upload-div").style.opacity = 0.7;
}

uploadButton.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);

  reader.onload = () => {
    setTimeout(() => {
      document.getElementById("upload-caption").style.opacity = 0;
    }, 2000);

    setTimeout(() => {
      document.getElementById("button-svg").style.opacity = 0;
      document.getElementById("file-name").style.opacity = 1;
      chosenImage.setAttribute("src", reader.result);
      document.getElementById("upload-div").style.opacity = 1;
      fileName.textContent = uploadButton.files[0].name;
      document.getElementById("upload-icon").style.opacity = 1;
      document.getElementById("cross").style.opacity = 1;
    }, 2000);
  };
};
