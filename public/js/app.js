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
        }
        if (priorIndex == 1){
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
}

function clear(id){
  $("."+id).remove();
}
