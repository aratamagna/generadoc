$(function() {
  init(1);
  $('#smartwizard').smartWizard({
    selected: 0,
    autoAdjustHeight:true,
    cycleSteps: false,
    lang: {  // Language variables
      next: 'Siguiente',
      previous: 'Volver'
    },
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarButtonPosition: 'right',
      showNextButton: true,
      showPreviousButton: true
    },
    theme: 'dots'});
  });

  function init(id){
    $.get( "doc/"+id, function( data ) {
      form = jQuery.parseJSON(data);
      $("#doc_title").text( form.name );
      $.each(form.fields, function( index, value ) {
        var field = '<div class="form-group"><label>'+value.label+'</label><'+value.tag+' class="form-control" type="'+value.type+'" name="'+value.label+'"><small id="HelpBlock" class="form-text text-muted">'+value.help+'</small></div>';
        $(".field_container").append($(field));
      });
    }, "json");
  }
