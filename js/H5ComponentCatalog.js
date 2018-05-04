var H5ComponentCatalog=function (name,cfg) {
    var component = new H5ComponentBase(name, cfg);
    this.addRect=function (data,marginTop) {
        var w=data.width;
        var h=data.height;
        var cns=document.createElement("canvas");
        var ctx=cns.getContext("2d");
        cns.width=ctx.width=w;
        cns.height=ctx.height=h;
        component.append(cns);
        ctx.fillStyle =cfg.data[0].fillStyleColor;
        //绘制图形
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle="#fff";
        ctx.font="20px sans-serif";
        ctx.fillText(data.title,(w-ctx.measureText(data.title).width)/2,marginTop);
        ctx.save();
        ctx.scale(1.5,1.5);
        ctx.restore();
    }
    this.addText=function (cxt,text,x,y) {
        cxt.font="10px sans-serif";
        cxt.fillText(text,x,y);
        return cxt;
    }
    /**
     *
     * @param rectW 下面目录的宽度
     * @param rectH 下面目录的长度
     * lineH  线的长度
     */
    this.addLine=function (rectW,rectH,lineH) {
        var w=cfg.data[0].width;
        var c=document.createElement("canvas");
        var cxt = c.getContext("2d");
        c.width=cxt.width=w;
        c.height=cxt.height=window.innerHeight;
        cxt.moveTo(w/2,0);
        cxt.lineTo(w/2,lineH);
        cxt.lineTo(rectW,lineH);
        cxt.moveTo(w/2,lineH);
        cxt.lineTo(w-rectW,lineH);
        cxt.moveTo(rectW,lineH);
        cxt.lineTo(rectW,lineH*2);
        var lineNum=cfg.data.length-2;
        var lineW=(w-rectW*2)/lineNum;
        cxt.moveTo(rectW,lineH*2);
        cxt.fillStyle =cfg.data[0].fillStyleColor;
        cxt.fillRect(rectW/2,lineH*2,rectW,rectH);
        cxt.strokeStyle="#fff";
        var obj=this;
        $.each(cfg.data,function (i,v) {
            if(i>0){
                cxt.moveTo(lineW*(i-1)+rectW,lineH);
                cxt.lineTo(lineW*(i-1)+rectW,lineH*2);
                cxt.fillStyle = cfg.data[0].fillStyleColor;
                cxt.fillRect(lineW*(i-1)+rectW/2,lineH*2,rectW,rectH);
                cxt.fillStyle="#fff";
                var titleArr=v.title.split("");
                for(var j=0;j<titleArr.length;j++){
                    obj.addText(cxt,titleArr[j],lineW*(i-1)+rectW-6,lineH*2+20*(j+1))
                }
            }
        })
        cxt.stroke();
        component.append(c);
    }

    this.addRect(cfg.data[0],32);
    this.addLine(30,200,30);
     var obj=this;
    // component.on('onLoad',function(){
    // })
    // component.on('onLeave',function(){
    //
    // })
    return component;
}