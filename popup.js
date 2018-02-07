function loadUrls(){
// fetch urls from textarea and load them
// _new, _blank,
// "top = 100, left = 200, height = 400, width = 900" NEW WINDOW specified size
  var urltypes = ["http", "https", "file", "view-source"];
  var urls = document.getElementById('urls').value.split('\n');
  

function saveUrls(){
  // fetch urls and save in chrome storage
}

document.getElementById('button').addEventListener('click', loadUrls);
//document.getElementById('button').addEventListener('click', saveUrls);
