$(function() {
  init(2)
});

function init(id){
  $.get( "doc/"+id, function( data ) {
    console.log(data.name)
    $("#doc_title").text( ""+data.name );
  }, "json");
}
