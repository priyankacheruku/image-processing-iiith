function openCity(evt,choice) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(choice).style.display = "block";
  evt.currentTarget.className += " active";
}

function slider(argument) {
  
  var x_scale = document.getElementById("x_scale");
  var x_scale_output = document.getElementById("x_scale_value");
  x_scale_output.innerHTML = x_scale.value;
  x_scale.oninput = function() {
    x_scale_output.innerHTML = this.value;
  }

  var angle_slider = document.getElementById("angle");
  var angle_output = document.getElementById("angle_value");
  angle_output.innerHTML = angle_slider.value;
  angle_slider.oninput = function() {
    angle_output.innerHTML = this.value;
  }

  var x_rotate_slider = document.getElementById("x_rotate");
  var x_rotate_output = document.getElementById("x_rotate_value");
  x_rotate_output.innerHTML = x_rotate_slider.value;
  x_rotate_slider.oninput = function() {
    x_rotate_output.innerHTML = this.value;
  }

  var y_rotate_slider = document.getElementById("y_rotate");
  var y_rotate_output = document.getElementById("y_rotate_value");
  y_rotate_output.innerHTML = y_rotate_slider.value;

  y_rotate_slider.oninput = function() {
    y_rotate_output.innerHTML = this.value;
}

}