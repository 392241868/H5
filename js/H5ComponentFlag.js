var H5ComponentFlag =function ( name, cfg ) {
    var component =  new H5ComponentBase( name ,cfg );
    $.each(cfg.data,function (i,v) {
        var flagImg = $('<div class="flagImg_'+i+'" >');
        flagImg.css(v[1]);
        component.append(flagImg);
    })
    component.on('onLoad',function(){
       // debugger;
        //console.log(11)
        $("div",this).addClass('flagImg');
    })
    component.on('onLeave',function(){
      //  debugger;
        $("div",this).removeClass('flagImg');
    })
    return component;
}