$(function() {
  initapp();
});

var doc = 0;

function init(id){
  $.get( "doc/"+id, function( data ) {
    form = jQuery.parseJSON(data);
    $("#doc_title").text( form.name );
    $.each(form.fields, function( index, value ) {
      container = '<div class="form-group"><label>'+value.label+'</label><'+value.tag+' class="form-control" type="'+value.type+'" name="'+value.label+'"><small id="HelpBlock" class="form-text text-muted">'+value.help+'</small></div>';
      $(".field_container").append($(container));
    });
  }, "json");
}

function initapp() {
  var wizard = $("#wizard").steps({
    headerTag: "h1",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true,
    onStepChanging: function (event, currentIndex, newIndex) {
      if (currentIndex == 0){
        if (doc == 0){
          return false;
        } else {
          return true;
        }
      }
      if (currentIndex == 1){
        if (newIndex == 0){
          doc = 0;
          clear("field_container");
        }
      }
      return true;
    },
    onStepChanged: function (event, currentIndex, priorIndex) {
    },
    onCanceled: function (event) { },
    onFinishing: function (event, currentIndex) { return true; },
    onFinished: function (event, currentIndex) { },
    labels: {
        cancel: "Cancelar",
        current: "paso actual:",
        pagination: "Paginacion",
        finish: "Finalizar",
        next: "siguiente",
        previous: "anterior",
        loading: "Cargando ..."
    }
  });
}

function setDoc(id){
  doc = id;
  init(id);
  $("#wizard").steps("next");
}

function clear(className){
  $("."+className).empty();
}
