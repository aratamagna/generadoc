$(function() {
  initapp();
});

var doc = 0;

function init(id){
  $.get( "doc/"+id, function( data ) {
    form = jQuery.parseJSON(data);
    var container = "";
    $("#doc_title").text( form.name );
    $.each(form.fields, function( index, value ) {
      var container = container+'<div class="form-group"><label>'+value.label+'</label><'+value.tag+' class="form-control" type="'+value.type+'" name="'+value.label+'"><small id="HelpBlock" class="form-text text-muted">'+value.help+'</small></div>';
    });
  }, "json");
  $(".field_container").append($(container));
}

function initapp() {
  var wizard = $("#wizard").steps({
    headerTag: "h1",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
  });
}

function setDoc(id){
  clear("field_container");
  doc = id;
  init(id);
}

function clear(id){
  $("."+id).remove();
}
