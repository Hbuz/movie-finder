const openPlaySample = () => {
  var videoSample = document.getElementById("videoSample");
  window.scrollTo(0, 0);
  document.getElementById('screen').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  videoSample.load();
  videoSample.play();
}


const closePlaySample = () => {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
}