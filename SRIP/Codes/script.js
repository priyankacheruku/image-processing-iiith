var checkedValue;
function openCity(evt,choice) {
  if(checkedValue){
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
  else{
    alert("select image first");
  }
}
function load(argument) {
  
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



  // the selector will match all input controls of type :checkbox
  // and attach a click event handler 
  $("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } 
    else {
      $box.prop("checked", false);
    }
  });

}//load close
    
function getImageId(argument) {

  checkedValue = $('.radio:checked').val();
  if(checkedValue){
     $(document).ready(function(){
        $('#select_image').modal('hide');
        document.getElementById('input_image').src = "img"+checkedValue+".jpeg";

     });
  }
  else{
    alert("Select one image");
  }
}

function reset(argument) {
  var c=confirm("will reset all values");
  if(c){
    location.reload(true);   
  }
}

$(document).ready(function(){

  $("input[name='input_radio']").click(function(){
    var radioValue = $("input[name='input_radio']:checked").val();  
    if (radioValue==1) {
      $('input[name="Scaling"]').removeAttr('disabled');
      $(".wrap1").css('opacity', '1');
      $('input[name="Rotation"]').attr('disabled', 'disabled');
      $(".wrap2").css('opacity', '.2');
      $('input[name="Translation"]').attr('disabled', 'disabled');
      $(".wrap3").css('opacity', '.2');
    }
 
    else if (radioValue==2) {
      $('input[name="Scaling"]').attr('disabled', 'disabled');
      $(".wrap1").css('opacity', '.2');
      $('input[name="Rotation"]').removeAttr('disabled');
      $(".wrap2").css('opacity', '1');
      $('input[name="Translation"]').attr('disabled', 'disabled');
      $(".wrap3").css('opacity', '.2');

    }
    else if(radioValue==3){
      $('input[name="Scaling"]').attr('disabled', 'disabled');
      $(".wrap1").css('opacity', '.2');
      $('input[name="Rotation"]').attr('disabled', 'disabled');
      $(".wrap2").css('opacity', '.2');
      $('input[name="Translation"]').removeAttr('disabled');
      $(".wrap3").css('opacity', '1');

    }
  });

  $("input[name='Scaling']").click(function(){
    $('input[name="Scaling_value"]').removeAttr('disabled');
      
  });
});
