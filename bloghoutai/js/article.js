function Resive(){
    // 点击修改按钮
$('.one').click(function(e){
e.preventDefault();
$('.one').parent().parent().attr('class','tr');
$(this).parent().parent().attr('class','tr dom');
var num = $(this).parent().parent().children('.id').html();
$.cookie("artId",num);
$.get("sele3.php",function(text){
  var json;
  if(typeof text === 'string'){
      json = $.parseJSON(text);
  }else if(typeof text === 'object'){
      json = text;
  }

 $.each(json,function(index,value){
  if(value.id == num){
    
      $('#Title').val(value.title);
      $('#Author').val(value.author);
      $('#Label').val(value.label);
      $('#Span').html(value.state);
   }
 })

 //    点击修改里面的确认
$('#queren').on('click',function(e){
    e.stopPropagation();
    // alert('sdsg')
            e.preventDefault();
            $.cookie("Title",encodeURIComponent($('#Title').val()));
            $.cookie("Author",encodeURIComponent($('#Author').val()));
            $.cookie("Label",encodeURIComponent($('#Label').val()));
            $.cookie("Span",encodeURIComponent($('#Span').html()));
   })

          
})



})

//   点击修改页面里的修改
$('#revise').on('click',function(e){
e.stopPropagation();
e.preventDefault();
data ={
  id : $.cookie().artId,
  Title:decodeURIComponent($.cookie().Title),
  Author:decodeURIComponent($.cookie().Author),
  Label:decodeURIComponent($.cookie().Label),
  state:decodeURIComponent($.cookie().Span)
  }
  console.log(data);
     
    //   $('.dom').find('.pic1').attr('src',decodeURIComponent($.cookie().pic));
$.ajax({
  type: "POST",
  url: "articleResive.php",
  data: data,
  success: function (response) {
      console.log(response)
    $.get('sele3.php',function(text){
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
      console.log($('.dom').find('.val'))
       $('#Name').val(data.Name);
      $('.dom').find('.val').eq(2).html(decodeURIComponent($.cookie().Title));
      $('.dom').find('.val').eq(3).html(decodeURIComponent($.cookie().Author));
      $('.dom').find('.val').eq(1).html(decodeURIComponent($.cookie().Label));
      $('.dom').find('.val').eq(4).html(decodeURIComponent(json[i].date));
      $('.dom').find('.val').eq(5).html(decodeURIComponent($.cookie().Span));
      
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
$.get('sele3.php',function(text){
    var json;
    if(typeof text === 'string'){
        json = $.parseJSON(text);
    }else if(typeof text === 'object'){
        json = text;
    }
    var aa=[];
    var i = 1;
    $.each(json,function(index,value){
        $('NAME').html(value.name);
        aa[index] = value.id+','+value.label+','+value.title+','+value.author+','+value.time+','+value.state;
        $('tbody').prepend('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="val id"></td>' +'<td class="col-xs-2 val"></td>' +' <td class="col-xs-2 val"></td>' +'<td class="val"></td>' + ' <td class="col-xs-2 val"></td>'+ '<td class="col-xs-2 val"></td>'+'<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
    })
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
         $.get('sele3.php',function(text){
            var json;
            if(typeof text === 'string'){
                json = $.parseJSON(text);
            }else if(typeof text === 'object'){
                json = text;
            }
            $('.table-body').css('display','none');
            $('#table').append('<div class="checkTable"></div>')
            $.each(json,function(index,value){ 
                console.log(value)
                if($('#checktitle').val() == value.title &&  $('#checktitle').val()!=''){
                   
                    $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class=" val id" style="width:87px;">'+value.id+'</div>'+'<div class="col-xs-2 val">'+value.label+'</div>'+'<div class="col-xs-2 val">'+value.title+'</div>' +' <div class="col-xs-2 val">'+value.author+'</div>' +'<div class=" val width" style="width:248px">'+value.time+'</div>' + '<div class="col-xs-2 val">'+value.state+'</div>'+'<div class="editor col-xs-1 mid"></div>');
                }
               else if($('#checklabel').val() == value.label && $('#checklabel').val()!=''){
                   
                    $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class=" val id" style="width:87px;">'+value.id+'</div>'+'<div class="col-xs-2 val">'+value.label+'</div>'+'<div class="col-xs-2 val">'+value.title+'</div>' +' <div class="col-xs-2 val">'+value.author+'</div>' +'<div class=" val width" style="width:248px">'+value.time+'</div>' + '<div class="col-xs-2 val">'+value.state+'</div>'+'<div class="editor col-xs-1 mid"></div>');
                }else if($('#checkauthor').val() == value.author && $('#checkauthor').val()!=''){
                   
                    $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class=" val id" style="width:87px;">'+value.id+'</div>'+'<div class="col-xs-2 val">'+value.label+'</div>'+'<div class="col-xs-2 val">'+value.title+'</div>' +' <div class="col-xs-2 val">'+value.author+'</div>' +'<div class=" val width" style="width:248px">'+value.time+'</div>' + '<div class="col-xs-2 val">'+value.state+'</div>'+'<div class="editor col-xs-1 mid"></div>');
                }else if($('#checkid').val() == value.id &&  $('#checkid').val()!=''){
                   
                    $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class=" val id" style="width:87px;">'+value.id+'</div>'+'<div class="col-xs-2 val">'+value.label+'</div>'+'<div class="col-xs-2 val">'+value.title+'</div>' +' <div class="col-xs-2 val">'+value.author+'</div>' +'<div class=" val width" style="width:248px">'+value.time+'</div>' + '<div class="col-xs-2 val">'+value.state+'</div>'+'<div class="editor col-xs-1 mid"></div>');
                }
          })
          $('.checked').css({background:'#fff',height:'38px',width:'100%',overflow:'hidden'}).children().css({float:'left',display:'inline-block',height:'100%',padding:'0 0 0 15px',border:'1px solid #e6e6e6',borderLeft:'none',textAlign:'left',lineHeight:'38px'});
                    $('.checkTable').css('height','497px');
                    $('.checked').children('.first').css({'borderLeft':'1px solid #e6e6e6','width':'40px'});

         })
     })
}); 
//添加里的option
$.get("sele2.php",function(text){
        var json;
        if(typeof text === 'string'){
            json = $.parseJSON(text);
        }else if(typeof text === 'object'){
            json = text;
        }
        $.each(json,function(index,value){
            $('#label').append('<option value ="'+value.leibie+'" class="label" style="color:#000; font-weight:400;font-size:14px">'+value.leibie+'</option>');
            $('.input-lg').append('<option value ="'+value.leibie+'" class="label" style="color:#000;font-weight:400;font-size:14px">'+value.leibie+'</option>');
        })
    })

//修改里的option
 $.get("sele2.php",function(text){
        var json;
        if(typeof text === 'string'){
            json = $.parseJSON(text);
        }else if(typeof text === 'object'){
            json = text;
        }
        
        $.each(json,function(index,value){
            $('#Label').append('<option value ="'+value.leibie+'" class="Label" style="color:#000; font-weight:400;font-size:14px">'+value.leibie+'</option>');
        })
    })
$('#add').click(function (e) {
    e.preventDefault();  
    $('.table-body').css('display','block');
    $('.checked').css('display','none');
    console.log($('#label').val());
        $.ajax({
            type: "POST",
            url: "articleadd.php",
            data: {
                title:$('#title').val(),
                author:$('#author').val(),
                label:$('#label').val(),
                state:$('#span').html()
            },
            success: function (response) {
                if($('#name').val() == ''){
                    alert('未填写内容');
                }else{
                    
                        $.get('sele3.php',function(text){
                            var json;
                            if(typeof text === 'string'){
                                json = $.parseJSON(text);
                            }else if(typeof text === 'object'){
                                json = text;
                            }
                            var aa=[];
                            var i = 1;

                            
                            // 创建节点，每添加一条，创建一个
                            
                            $('tbody').prepend('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="val id"></td>' +'<td class="col-xs-2 val"></td>' +' <td class="col-xs-2 val"></td>' +'<td class="val"></td>' + ' <td class="col-xs-2 val"></td>'+ '<td class="col-xs-2 val"></td>'+'<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
                            
                            // 将数组内有效信息取出
                            $.each(json,function(index,value){
                                aa[index] = value.id+','+value.label+','+value.title+','+value.author+','+value.time+','+value.state;
                                
                            })
                            // 倒序
                            var bb = aa.reverse();
                            var res = [];


                            // 将res数组变成json数组
                            for(var i = 0;i<bb.length;i++){
                                res[i] =bb[i].split(',');
                            }
                            console.log(res)


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
        });
        
        
  
     }
    )
