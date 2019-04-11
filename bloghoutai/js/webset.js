$.get('setweb.php',function(text){
    var json;
    if(typeof text === 'string'){
        json = $.parseJSON(text);
    }else if(typeof text === 'object'){
        json = text;
    }
    console.log(json)
    $.each(json, function (index, value) { 
         $('#designation').val(value.designation); 
         $('#domain').val(value.domain); 
         $('.one').val(value.cache); 
         $('.two').val(value.uploading); 
         $('#file').val(value.file);
         $('#headline').val(value.headline);
         $('#antistop').val(value.antistop);
         $('#miaosu').val(value.miaosu);
         $('#copyright').val(value.copyright);
    });
})
$('#submit').click(function(e){
    e.preventDefault();
    var aa = [];
    for(var i = 0;i<$('.val').length;i++){
        aa[i] = $('.val').eq(i).val();
    }
    var data ={
        id :'1',
        designation:$('#designation').val(),
        domain:$('#domain').val(),
        cache : $('.one').val(),
        uploading : $('.two').val(),
        file : $('#file').val(),
        headline : $('#headline').val(),
        antistop : $('#antistop').val(),
        miaosu : $('#miaosu').val(),
        copyright : $('#copyright').val()
    }
    $.ajax({
        type: "POST",
        url: "webset-resive.php",
        data: data,
        success: function (response) {
            for(var i = 0;i<aa.length;i++){
                $('.val').eq(i).val = aa[i];
            }
        }
    });
})