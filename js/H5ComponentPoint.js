/* 散点图表组件对象 */

var H5ComponentPoint =function ( name, cfg ) {
   var component =  new H5ComponentBase( name ,cfg );
   
   var base = cfg.data[0][1];   //  以第一个数据的 比例为大小的 100%

   //   输出每个 Point
   $.each( cfg.data,function( idx ,item ){
        var point = $('<div class="point point_'+idx+'" >');
        var name = $('<div class="name">'+item.title+'</div>');
        var size = $('<div class="size">'+item.size+'</div>');
        name.append(size);
        point.append(name);
        point.addClass('point_focus');
        point.width(item.width).height(item.height);
            point.css('background-color',item.color);
            if(item.left!=undefined)
            point.css('left',item.left).css('top',item.top);
            else
                point.css('right',item.right).css('top',item.top);
        point.css('transition','all 1s '+idx*.5+'s')
        component.append( point );
   } );
   //  任务三：onLoad之后取出暂存的left、top 并且附加到 CSS 中

   // 任务 四：onLeave之后，还原初始的位置
   component.find('.point').on('click',function(){
        component.find('.point').removeClass('point_focus');
        $(this).addClass('point_focus');
        return false;
   }).eq(0).addClass('point_focus')
   return component;
}