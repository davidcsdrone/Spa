const track = document.querySelector("#image-track");

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage= track.dataset.percentage;
}

window.onmousemove = e => {
  if (track.dataset.mouseDownAt === "0") return;

const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    track.dataset.percentage = nextPercentage;
  
    track.style.transform = `translate(${percentage}%, -50%)`;

for(const image of track.getElementsByClassName("image")) {
  image.style.objectPosition = '${nextPercentage} 50%';
}
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}