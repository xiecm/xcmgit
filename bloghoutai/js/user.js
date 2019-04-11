// 修改
function Resive(){
    // 点击修改按钮
$('.one').click(function(e){
e.preventDefault();
$('.one').parent().parent().attr('class','tr');
$(this).parent().parent().attr('class','tr dom');
var num = $(this).parent().parent().children('.id').html();
$.cookie("id",num);
$.get("sele.php",function(text){
  var json;
  if(typeof text === 'string'){
      json = $.parseJSON(text);
  }else if(typeof text === 'object'){
      json = text;
  }
 $.each(json,function(index,value){        
     
  if(value.id == num){
      $('#Name').val(value.name);
      $('#Phone').val(value.phone);
      $('#Mail').val(value.email);
      $('#Sex').val(value.sex);
      $('#base64_output1').val(value.picture);
 
   }
 })
//  $('#picture1').on('change',function(e){
//     e.stopPropagation();
//     e.preventDefault();  
//     var file = $('#picture1')[0].files[0];
// // console.log(file)
// reader = new FileReader(); //本地预览
// console.log(reader)
// reader.onload = function(){
//     $('#base64_output1').val(reader.result);
//     return (bb = reader.result);
    
//    } 
// reader.readAsDataURL(file);    //Base64
// })
 //    点击修改里面的确认
$('#queren').on('click',function(e){
    e.stopPropagation();
    // alert('sdsg')
            e.preventDefault();
            $.cookie("id",num);
            $.cookie("Name",encodeURIComponent($('#Name').val()));
            $.cookie("Phone",encodeURIComponent($('#Phone').val()));
            $.cookie("Mail",encodeURIComponent($('#Mail').val()));
            $.cookie("Sex",encodeURIComponent($('#Sex').val()));


   })

          
})



})


//   点击修改页面里的修改
$('#revise').on('click',function(e){
e.stopPropagation();
e.preventDefault();
data ={
  id : $.cookie().id,
  Name:decodeURIComponent($.cookie().Name),
  Phone:decodeURIComponent($.cookie().Phone),
  Email:decodeURIComponent($.cookie().Mail),
  Sex:decodeURIComponent($.cookie().Sex),
  pic:decodeURIComponent($.cookie().pic)
  }
  console.log(data);
     
    //   $('.dom').find('.pic1').attr('src',decodeURIComponent($.cookie().pic));
$.ajax({
  type: "POST",
  url: "resive.php",
  data: data,
  success: function (response) {
    $.get('sele.php',function(text){
      var json;
      if(typeof text === 'string'){
          json = $.parseJSON(text);
      }else if(typeof text === 'object'){
          json = text;
      }
      $.each(json,function(index,value){
          if(data.id == json[index].id){
               i =index;
              return i;
          }
      })
      console.log(i)
    //   console.log($('.dom').find('.val'))
       $('#Name').val(data.Name);
      $('.dom').find('.val').eq(1).html(decodeURIComponent($.cookie().Name));
      $('.dom').find('.val').eq(2).html(decodeURIComponent($.cookie().Phone));
      $('.dom').find('.val').eq(3).html(decodeURIComponent($.cookie().Mail));
      $('.dom').find('.val').eq(4).html(decodeURIComponent($.cookie().Sex));
      $('.dom').find('.val').eq(6).html(decodeURIComponent(json[i].date));
    //   $('.dom').find('img').attr("src",decodeURIComponent(json[i].picture));
      
      })
    
      }
   });
  })
}
// 删除
function Delete(){
   $('.two').on('click',function(e){
      e.preventDefault();
        $.ajax({
            type: "POST",
            url: "delete.php",
            data: {
                send:true,
            id: $(this).parent().parent().children('.id').html()
            }
        });
      $(this).parent().parent().remove();
    })

}


// 刷新页面显示已有用户
$.get('sele.php',function(text){
    var json;
    if(typeof text === 'string'){
        json = $.parseJSON(text);
    }else if(typeof text === 'object'){
        json = text;
    }
    var aa=[];
    var i = 1;
    var pic = [];
    $.each(json,function(index,value){
        $('NAME').html(value.name);
        pic[index] = value.picture;
        aa[index] = value.id+','+value.name+','+value.phone+','+value.email+','+value.sex+','+value.ip+','+value.date;
        $('tbody').append('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="col-xs-1 val id"></td>'+'<td class="col-xs-1 val"></td>'+'<td class="col-xs-1"><img  class ="pic1" src="" alt="" /></td>' +'<td class="col-xs-2 val"></td>' +' <td class="col-xs-1 val"></td>' +'<td class="val"></td>' + ' <td class="col-xs-2 val"></td>'+ '<td class="col-xs-2 val"></td>'+'<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
    })
    var bb = pic.reverse();
    for(var i = 0;i<pic.length;i++){
        $('.pic1').eq(i).attr('src',bb[i]);
    }
    $('.pic1').css({
        height:'30px',
        width:'30px',

    })
    console.log(pic)
    $('.val').css({
        'overflow':'hidden',
        'wordWrap':'break-word'
    })
    $(".choose").on('click',function(){
        i++;
        if(i%2==1){
            $(this).css('background-color','#5FB878');
            $(this).children().css('display','block');
        }else{
            $(this).css('background-color','#fff');
            $(this).children().css('display','none');
        }
    })
    $(".allchoose").on('click',function(){
        i++;
        if(i%2==1){
            $(this).css('background-color','#5FB878');
            $(this).children().css('display','block');
            $(".choose").css('background-color','#5FB878');
            $(".choose").children().css('display','block');
        }else{
            $(this).css('background-color','#fff');
            $(this).children().css('display','none');
            $(".choose").css('background-color','#fff');
            $(".choose").children().css('display','none');
        }
       
    }) ;

     var bb = aa.reverse();
    var res = [];
    for(var i = 0;i<bb.length;i++){
        res[i] =bb[i].split(',');
    }
   var trs = document.getElementsByClassName('tr');
//    console.log(trs);
   for(var i=0;i<trs.length;i++){
       var tds = trs[i].getElementsByClassName('val');
       for(var j =0;j<tds.length;j++){
           
           tds[j].innerHTML = res[i][j];
       }
   }

    // 修改
     Resive();
   // 删除
     Delete();
     
     
     //查询
     $('#check').click(function(){
        $('.checkTable').remove();
        $.get('sele.php',function(text){
           var json;
           if(typeof text === 'string'){
               json = $.parseJSON(text);
           }else if(typeof text === 'object'){
               json = text;
           }
           $('.table-body').css('display','none');
           $('#table').append('<div class="checkTable"></div>')
           $.each(json,function(index,value){ 
               
               if($('#checkname').val() == value.name && $('#checkname').val() !=''){
                  
                $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class="col-xs-1 val id">'+value.id+'</div>'+'<div class="col-xs-1 val">'+value.name+'</div>'+'<div class="col-xs-1 val"></div>' +'<div class="col-xs-2 val">'+value.phone+'</div>' +' <div class="col-xs-1 val">'+value.email+'</div>' +'<div class="val width">'+value.sex+'</div>' + ' <div class="col-xs-2 val"></div>'+ '<div class="col-xs-2 val"></div>'+'<div class="editor col-xs-1 mid"></div>');
               }else if($('#checkPhone').val() == value.phone && $('#checkPhone').val() !=''){
                  
                   $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class="col-xs-1 val id">'+value.id+'</div>'+'<div class="col-xs-1 val">'+value.name+'</div>'+'<div class="col-xs-1 val"></div>' +'<div class="col-xs-2 val">'+value.phone+'</div>' +' <div class="col-xs-1 val">'+value.email+'</div>' +'<div class="val width">'+value.sex+'</div>' + ' <div class="col-xs-2 val"></div>'+ '<div class="col-xs-2 val"></div>'+'<div class="editor col-xs-1 mid"></div>');
               }if($('#checkMail').val() == value.email && $('#checkMail').val() !=''){
                  
                   $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class="col-xs-1 val id">'+value.id+'</div>'+'<div class="col-xs-1 val">'+value.name+'</div>'+'<div class="col-xs-1 val"></div>' +'<div class="col-xs-2 val">'+value.phone+'</div>' +' <div class="col-xs-1 val">'+value.email+'</div>' +'<div class="val width">'+value.sex+'</div>' + ' <div class="col-xs-2 val"></div>'+ '<div class="col-xs-2 val"></div>'+'<div class="editor col-xs-1 mid"></div>');
               }if($('#checkSex').val() == value.sex && $('#checkSex').val() !=''){
                  
                   $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class="col-xs-1 val id">'+value.id+'</div>'+'<div class="col-xs-1 val">'+value.name+'</div>'+'<div class="col-xs-1 val"></div>' +'<div class="col-xs-2 val">'+value.phone+'</div>' +' <div class="col-xs-1 val">'+value.email+'</div>' +'<div class="val width">'+value.sex+'</div>' + ' <div class="col-xs-2 val"></div>'+ '<div class="col-xs-2 val"></div>'+'<div class="editor col-xs-1 mid"></div>');
               }
         })
         $('.checked').css({background:'#fff',height:'38px',width:'100%',overflow:'hidden'}).children().css({float:'left',display:'inline-block',height:'100%',padding:'0 0 0 15px',border:'1px solid #e6e6e6',borderLeft:'none',textAlign:'left',lineHeight:'38px'});
                   $('.checkTable').css('height','497px');
                   $('.checked').children('.width').css('width','85px');
                   $('.checked').children('.first').css('borderLeft','1px solid #e6e6e6');
    
        })
    })
});


 //上传图片

    $('#picture').on('change',function(e){
        e.stopPropagation();
        e.preventDefault();  
        var file = $('#picture')[0].files[0];
    // console.log(file)
    reader = new FileReader(); //本地预览
    console.log(reader)
    reader.onload = function(){
        $('#base64_output').val(reader.result);
        $('#imgOne').attr('src',reader.result);
        $('#imgOne').show();
       } 
    reader.readAsDataURL(file);    //Base64
   })
   

// 注册
$('#add').click(function (e) {
    e.preventDefault();  
    $('.table-body').css('display','block');
    $('.checked').css('display','none');
   
  

        $.ajax({
            type: "POST",
            url: "user.php",
            data: $('.form').serialize(),
            success: function (response) {
                if($('#name').val() == ''){
                    alert('未填写内容');
                }else{
                    
                        $.get('sele.php',function(text){
                            var json;
                            if(typeof text === 'string'){
                                json = $.parseJSON(text);
                            }else if(typeof text === 'object'){
                                json = text;
                            }
                            var aa=[];
                            var pic = [];
                            var i = 1;

                            
                            // 创建节点，每添加一条，创建一个
                            
                            $('tbody').prepend('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="col-xs-1 val id"></td>'+'<td class="col-xs-1 val"></td>'+'<td class="col-xs-1"><img  class ="pic1" src="" alt="" /></td>' +'<td class="col-xs-2 val"></td>' +' <td class="col-xs-1 val"></td>' +'<td class="val"></td>' + ' <td class="col-xs-2 val"></td>'+ '<td class="col-xs-2 val"></td>'+'<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
                            
                            // 将数组内有效信息取出
                            $.each(json,function(index,value){
                                pic[index] = value.picture;
                                aa[index] = value.id+','+value.name+','+value.phone+','+value.email+','+value.sex+','+value.ip+','+value.date;
                                
                            })

                            $('.pic1').css({
                                height:'30px',
                                width:'30px',
                            })
                            // 倒序
                            var bb = aa.reverse();
                            var res = [];
                            var cc = pic.reverse();
                            $('.pic1').eq(0).attr('src',pic[0]);

                            // 将res数组变成json数组
                            for(var i = 0;i<bb.length;i++){
                                res[i] =bb[i].split(',');
                            }


                            // 通过遍历，获取数组里的每一个值
                            var trs = document.getElementsByClassName('tr');
                            var tds = trs[0].getElementsByClassName('val');
                            // console.log(tds)
                            for(var j=0;j<tds.length;j++){
                            tds[j].innerHTML = res[0][j];
                           }

                        //  修改
                            Resive();
                        //  删除
                            Delete();    
                        });
                }
            }
      })
})


