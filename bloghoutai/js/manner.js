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
//   console.log(json)
  var dd = [];
 $.each(json,function(index,value){        

  if(value.id == num){
    
      $('#Role').val(value.role);
      $('#Remark').val(value.remark);
      dd = value.jurisdiction;
   }
 })
 var jurisdiction =[]
  jurisdiction = dd.split(' ');
//   console.log($('.Jurisdiction'))
  $('.Jurisdiction').each(function(index,value){
    //   console.log($(this).val())
    if($(this).val() == jurisdiction[index]){
        $(this).attr('checked',true);
    }
})



 //    点击修改里面的确认
$('#queren').on('click',function(e){
    e.stopPropagation();
    // console.log($('.Jurisdiction').val())
    // alert('sdsg')
            e.preventDefault();
            $.cookie("id",num);
            $.cookie("Role",encodeURIComponent($('#Role').val()));
            $.cookie("remark",encodeURIComponent($('#Remark').val()));
            var ci = document.getElementsByClassName("Jurisdiction");
            console.log(ci)
            // 遍历复选框数组  如果被选中ci[i].checked的值就是true
            var jd =[];
		for(var i = 0;i < ci.length;i++){
			if(ci[i].checked==true){
                jd[i] = ci[i].value;
			}
        }
           
        var jj = jd.join(' ')
        // var dd = jj.split('[]')
console.log(jj)
$.cookie("Jurisdiction",encodeURIComponent(jj));
   })

          
})



})

//   点击修改页面里的修改
$('#revise').on('click',function(e){
e.stopPropagation();
e.preventDefault();
data ={
  id : $.cookie().id,
  Role:decodeURIComponent($.cookie().Role),
  Remark:decodeURIComponent($.cookie().remark),
  Jurisdiction:decodeURIComponent($.cookie().Jurisdiction),
  }
  console.log(data);
     
    //   $('.dom').find('.pic1').attr('src',decodeURIComponent($.cookie().pic));
$.ajax({
  type: "POST",
  url: "mannerResive.php",
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
    //   console.log(i)
    //   console.log($('.dom').find('.val'))
      $('#Name').val(data.Name);
      $('.dom').find('.val').eq(1).html(decodeURIComponent($.cookie().Role));
      $('.dom').find('.val').eq(3).html(decodeURIComponent($.cookie().remark));
      $('.dom').find('.val').eq(2).html(decodeURIComponent($.cookie().Jurisdiction));
      // console.log($('.dom').find('.val'));
      
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
    $.each(json,function(index,value){
        $('NAME').html(value.name);
        console.log(value.remark);
        aa[index] = value.id+','+value.role+','+value.jurisdiction+','+value.remark;
        $('tbody').append('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="col-xs-1 val id"></td>'+'<td class="col-xs-3 val"></td>'+'<td class="col-xs-3 val"></td>' +' <td class="col-xs-3 val"></td>'+'<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
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
    console.log(res)
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
                
                if($('#ROLE').val() == value.role && $('#ROLE').val() !=''){
                   
                    $('.checkTable').append('<div class="checked"><div class="ID allChoose first"><span class = "allchoose"></span>'+'<span class = "choose"></span></div>'+'<div class="col-xs-1 val id">'+value.id+'</div>'+'<div class="col-xs-3 val">'+value.name+'</div>'+'<div class="col-xs-3 val">'+value.jurisdiction+'</div>' +' <div class="col-xs-3 val">'+value.remark+'</div>'+'<div class="editor col-xs-1 mid"></div>');
                }
          })
          $('.checked').css({background:'#fff',height:'38px',width:'100%',overflow:'hidden'}).children().css({float:'left',display:'inline-block',height:'100%',padding:'0 0 0 15px',border:'1px solid #e6e6e6',borderLeft:'none',textAlign:'left',lineHeight:'38px'});
                    $('.checkTable').css('height','497px');
                    $('.checked').children('.first').css('borderLeft','1px solid #e6e6e6');

         })
     })
});
// 注册
$('#add').click(function (e) {
    e.preventDefault();  
    $('.table-body').css('display','block');
    $('.checked').css('display','none');
   console.log($('#form').serialize());
        $.ajax({
            type: "POST",
            url: "manner.php",
            data: $('#form').serialize(),
            success: function (response){
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
                            var i = 1;

                            
                            // 创建节点，每添加一条，创建一个
                            
                            $('tbody').append('<tr class="tr"><td class="ID allChoose"><span class = "allchoose"><img src="img/choose.png" alt=""></span>'+'<span class = "choose"><img src="img/choose.png" alt=""></span></td>'+'<td class="col-xs-1 val id"></td>'+'<td class="col-xs-3 val"></td>'+'<td class="col-xs-3 val"></td>' +' <td class="col-xs-3 val"></td>'+'<td class="editor col-xs-1 mid"><span id ="one" class="one" data-toggle="modal" data-target="#mymodal">编辑</span>'+'<span id ="two" class="two">删除</span></td></tr>'+'<br/>');
                            
                            // 将数组内有效信息取出
                            $.each(json,function(index,value){
                                aa[index] = value.id+','+value.role+','+value.jurisdiction+','+value.remark;
                                
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
