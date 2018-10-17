const container = document.querySelector(".pic-container");

const picture = document.createElement("img");
picture.src = "people.jpg";

picture.onload = () => {
  let faceDetector = new FaceDetector();
  faceDetector
    .detect(picture)
    .then(what => console.log(what))
    .catch(e => {
      console.error("Boo, Face Detection failed: " + e);
    });
};
