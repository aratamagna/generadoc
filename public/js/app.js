$(function() {
  init()
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

$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
