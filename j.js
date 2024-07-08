let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let blur = document.getElementById("blur");
let grayscale = document.getElementById("grayscale");
let sepia = document.getElementById("sepia");
let hue = document.getElementById("hue-rotate");
let download = document.getElementById("download");
let img = document.getElementById("img");
let reset = document.querySelector(".s");
let imgbox = document.querySelector(".img-b");
let upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgbox.style.display = "none";
};
upload.onchange = function () {
  download.style.display = "block";
  reset.style.display = "block";
  imgbox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};

let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `saturate(${saturate.value}%)
   contrast(${contrast.value}%)
  blur(${blur.value}px)
  brightness(${brightness.value}%)
   grayscale(${grayscale.value})
sepia(${sepia.value}%)
hue-rotate(${hue.value}deg)`;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

function resetValue() {
  ctx.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hue.value = "0";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
download.onclick = function () {
  download.href = canvas.toDataURL("image/jpeg");
};
