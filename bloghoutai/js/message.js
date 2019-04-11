$('#username').val(decodeURIComponent($.cookie().username));
$('.short').attr('checked',false);
$.get('sele.php',function(text){
    var json;
    if(typeof text === 'string'){
        json = $.parseJSON(text);
    }else if(typeof text === 'object'){
        json = text;
    }
    console.log(json)
    var a;
    $.each(json,function(index,value){
        if(json[index].name == decodeURIComponent($.cookie().username)){
            $("#role").val(value.role);
            $('#nickname').val(value.nickname);
            $('#phone').val(value.phone);
            $('#email').val(value.email);
            $('#remark').val(value.remark);
            console.log(value.picture)
            $('#inputfile').val(value.picture);
            $('#imgOne').attr('src',value.picture);
            if(value.sex == '男'){
                $('#man').attr('checked',true);
            }
            else if(value.sex == '女'){
                $('#felman').attr('checked',true);
            }
            $.cookie('PWDid',index);
            $.cookie('NUM',json[index].id);
        }
    })
    console.log($('#inputfile').val())
})
$('#submit').click(function(e){
    e.preventDefault();
    console.log($('input[name="nan"]:checked').val())
    data={
        id:$.cookie().NUM,
        nickname:$('#nickname').val(),
        phone:$('#phone').val(),
        email:$('#email').val(),
        remark:$('#remark').val(),
        picture:$('#inputfile').val(),
        Sex:$('input[name="nan"]:checked').val()
    }
    
    $.ajax({
        type: "POST",
        url: "message.php",
        data: data,
        success: function (response) {
            console.log(response)
        }
    });
})

$('#picture').on('change',function(e){
    e.stopPropagation();
    e.preventDefault();  
    var file = $('#picture')[0].files[0];
// console.log(file)
reader = new FileReader(); //本地预览
console.log(reader)
reader.onload = function(){
    $('#inputfile').val(reader.result);
    $('#imgOne').attr('src',reader.result);
    $('#imgOne').show();
   } 
reader.readAsDataURL(file);    //Base64
})