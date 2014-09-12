(function (window){
    var bindList = function ( name, jsonInfo ){ 
        var items = [];
        for(var counter = 0, allRegisters = jsonInfo.length ; counter < allRegisters; counter++ ){
            items[counter] = '<p>' + jsonInfo[counter] + '</p>';
        }
        return ('<header class="title">' + name + '</header>' + items.join(' ') );
    }
    $( '.linkInfo' ).on( 'click' , function(){
       var items = [],
           urlLink = 'json/' + escape($(this).attr('data-rel')) + '.json';
        $.ajax({
            url :  urlLink, 
            dataType: "json",
            success: function( data){
                items[0] = bindList( 'Objetivo', data.objetive );
                
                
                $('.Info-fluid').append( items.join(' ') );
            }                    
        });
    });
})(window)
