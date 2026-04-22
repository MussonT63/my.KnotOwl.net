<!-- URL = host/path/?name=tim -->
<!-- class="tim brown" to highlight -->

window.onload = function() {
  // get the parameters of the current URL
  let params = new URLSearchParams(document.location.search);
  let name = params.get('name');
  // get a HTMLCollection of elements that have the matching class name
  let tags = document.getElementsByClassName(name);
  for (var i = 0; i < tags.length; i++) {
    tags[i].style.background = "#00ff00";
  }
}
