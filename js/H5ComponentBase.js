/* 基本图文组件对象 */

var H5ComponentBase =function ( name, cfg ) {
    var cfg = cfg || {};
    var id=cfg.id ||( 'h5_c_'+Math.random() ).replace('.','_')
   // var id = ( 'h5_c_'+Math.random() ).replace('.','_') ;

    // 把当前的组建类型添加到样式中进行标记
    var cls = ' h5_component_'+cfg.type;
    var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

    cfg.text   &&  component.text(cfg.text);
    cfg.html   &&  component.html(cfg.html);
    //debugger;
    if(cfg.width&&cfg.width.toString().indexOf("%")>=0){
        component.width(cfg.width);
    }else
    cfg.width  &&  component.width(cfg.width+"rem");
    if(cfg.height&&cfg.height.toString().indexOf("%")>=0){
        component.height(cfg.height);
    }else
        cfg.height &&  component.height(cfg.height+"rem");
    cfg.css && component.css( cfg.css );
    cfg.bg  && component.css('backgroundImage','url('+cfg.bg+')');

    if( cfg.center === true){
        if(cfg.width.toString().indexOf("%")>=0){
            component.css({
                left:(100-parseInt(cfg.width.replace("%","")))/2+"%"
            })
        }else{
            component.css({
                marginLeft : ( cfg.width/2 * -1) + 'rem',
                left:'50%'
            })
        }
    }
    //  ... 很多自定义的参数
    if( typeof cfg.onclick === 'function' ){
        component.on('click',cfg.onclick);
    }
    component.on('onLoad',function(){
       // debugger;
        console.log(cfg.animateIn)
        setTimeout(function(){
            component.addClass(cls+'_load').removeClass(cls+'_leave');
            cfg.animateIn && component.animate( cfg.animateIn);
        },cfg.delay || 0)
        return false;
    })
    component.on('onLeave',function(){
      //  debugger;
        setTimeout(function(){
            component.addClass(cls+'_leave').removeClass(cls+'_load');
            cfg.animateOut && component.animate( cfg.animateOut);
        },cfg.delay || 0)
        return false;
    })


    return component;
}