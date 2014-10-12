(function (window,$){

    var  privateInformation = {
        addEvents:(function(){

            $('#career li').on('click', function( e ){
                e.preventDefault();
                e.stopPropagation();
                var career = escape( $( this ).data( 'name' ) );                    

                $('#information-container').load('careers/' + career + '.html', function(){
                    var sizeContainer = 0;
                    sizeContainer = $('.wording-container').height() || 500;
                    $('.menu').height(sizeContainer);                    
                } );
            });

        })
    }
    return{
        init: function(){
            privateInformation.addEvents();
        }
    }
})(window, jQuery).init();
