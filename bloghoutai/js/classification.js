// 修改
function Resive(){
    // 点击修改按钮
$('.one').click(function(e){
e.preventDefault();
$('.one').parent().parent().attr('class','tr');
$(this).parent().parent().attr('class','tr dom');
var num = $(this).parent().parent().children('.id').html();
$.get("sele2.php",function(text){
  var json;
  if(typeof text === 'string'){
      json = $.parseJSON(text);
  }else if(typeof text === 'object'){
      json = text;
  }
  console.log(json)
 $.each(json,function(index,value){        
     
  if(value.id == num){
      $('#Name').val(value.leibie);
   }
 })
 //    点击修改里面的确认
$('#queren').on('click',function(e){
    e.stopPropagation();
    // alert('sdsg')
            e.preventDefault();
            $.cookie("fenlei",num);
            $.cookie("leibie",encodeURIComponent($('#Name').val()));
            // var aa = document.getElementById('imgTwo');
            // $.cookie("pic",encodeURIComponent(aa.src));
   })

          
})



})

//   点击修改页面里的修改
$('#revise').on('click',function(e){
e.stopPropagation();
e.preventDefault();
data ={
  id : $.cookie().fenlei,
  Name:decodeURIComponent($.cookie().leibie),
  }
  console.log(data);
     
    //   $('.dom').find('.pic1').attr('src',decodeURIComponent($.cookie().pic));
$.ajax({
  type: "POST",
  url: "classResive.php",
  data: data,
  success: function (response) {
    $.get('sele2.php',function(text){
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
      $('.dom').find('.val').eq(1).html(decodeURIComponent($.cookie().leibie));
      
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
$.get('sele2.php',function(text){
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
        aa[index] = value.id+','+value.leibie;
        $('tbody').prepend('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="val id" ></td>'+'<td class="col-xs-10 val" style="padding-left:5px"></td>'+ '<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
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
     
});


   

// 注册
$('#add').click(function (e) {
    e.preventDefault();  
    console.log('sdd')
        $.ajax({
            type: "POST",
            url: "classification.php",
            data: $('.form').serialize(),
            success: function (response) {
                if($('#name').val() == ''){
                    alert('未填写内容');
                }else{
                    
                        $.get('sele2.php',function(text){
                            var json;
                            if(typeof text === 'string'){
                                json = $.parseJSON(text);
                            }else if(typeof text === 'object'){
                                json = text;
                            }
                            var aa = [];
                            var i = 1;

                            
                            // 创建节点，每添加一条，创建一个
                            
                            $('tbody').prepend('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="val id" ></td>'+'<td class="col-xs-10 val" style="padding-left:5px"></td>'+ '<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
                            
                            // 将数组内有效信息取出
                            $.each(json,function(index,value){
                                aa[index] = value.id +','+ value.leibie;
                                
                            })
                            // 倒序
                            var bb = aa.reverse();
                            var res =[];
                            console.log(aa);
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


