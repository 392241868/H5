var phoneScale = parseInt(window.innerWidth);
console.log("phoneScale="+phoneScale);
var ratio=phoneScale/10;
var heightRatio=1;//当为苹果4时，高度很小，所以需要设置一个系数
var windowWidth=window.innerWidth;
if(window.innerHeight<568)
    heightRatio=0.7;
if(windowWidth>640){
    windowWidth=375;
    ratio=37.5;
}
$("html").css("fontSize",ratio);
// document.write('<meta name="viewport" content="width=375, minimum-scale = ' + phoneScale + ',maximum-scale= ' + phoneScale + ', target-densitydpi=device-dpi">');
data = [["2017-06-05",116],["2017-06-06",129],["2017-06-07",135],["2017-06-08",86 ],["2017-06-09",73 ],["2017-06-10",85 ],["2017-06-11",73],
        ["2017-06-12",68 ],["2017-06-13",92 ],["2017-06-14",130],["2017-06-15",245],["2017-06-16",139],["2017-06-17",115],["2017-06-18",111],
        ["2017-06-19",309],["2017-06-20",206],["2017-06-21",137],["2017-06-22",128],["2017-06-23",85 ],["2017-06-24",94 ],["2017-06-25",71],
        ["2017-06-26",106],["2017-06-27",84 ],["2017-06-28",93 ],["2017-06-29",85 ],["2017-06-30",73 ],["2017-07-01",83 ],
        ["2017-07-02",125],["2017-07-03",107],["2017-07-04",82 ],["2017-07-05",44 ],["2017-07-06",72 ],["2017-07-07",106],
        ["2017-07-08",107],["2017-07-09",66 ],["2017-07-10",91 ],["2017-07-11",92 ],["2017-07-12",113],["2017-07-13",107],
        ["2017-07-14",131],["2017-07-15",111],["2017-07-16",64 ],["2017-07-17",69 ],["2017-07-18",88 ],["2017-07-19",77 ],["2017-07-20",83],
        ["2017-07-21",111],["2017-07-22",57 ],["2017-07-23",55 ],["2017-07-24",60]];

var dateList = data.map(function(item){
    return item[0];
});
var valueList = data.map(function (item) {
    return item[1]*10000;
});
var h5=new H5();
h5.addPage('face')
    .addComponent('topic',{
        center:true,
        width:7*1.6/2,
        height:2.5*1.6/2,
        bg:'img/face_logo.png',
        css:{opacity:0},
        animateIn:{opacity:1,top:"3rem"},
        animateOut:{opacity:0},
    })
    .addComponent('desc',{
        // center:true,
        width:"90%",
        "text":"用户画像又称用户角色（Persona），作为一种勾画目标用户、联系用户诉求与设计方向的有效工具，用户画像在各领域得到了广泛的应用。我们在实际操作的过程中往往会以最为浅显和贴近生活的话语将用户的属性、行为与期待联结起来。",
        css:{opacity:0,top:0},
        animateIn:{opacity:1,top:"5rem"},
        animateOut:{opacity:0,top:0},
        //   delay:500,
        center:true
    })
    .addComponent('face_img_left',{
        width:5.5*1.6/2,
        height:7.4*1.6/2,
        bg:'img/face_img_left.png',
        css:{opacity:0,left:-50,bottom:-50},
        animateIn:{opacity:1,left:0,bottom:0},
        animateOut:{opacity:0,left:-50,bottom:-50},
        //   delay:1000
    })
    .addComponent('face_img_right',{
        width:5.52*1.6/2,
        height:7.4*1.6/2,
        bg:'img/face_img_right.png',
        css:{opacity:0,right:-50,bottom:-50},
        animateIn:{opacity:1,right:0,bottom:0},
        animateOut:{opacity:0,right:-50,bottom:-50},
        //delay:1000
    })
           .addPage()
    .addComponent('caption',{text:"企业用户概括"})
    .addComponent('userIntro',{
        type : 'point',
        width :windowWidth/ratio,
        height :(window.innerHeight-150)/ratio,
        data:[
            {title:"累积电视量","size":50000,color:"#4499e6",width:"4rem",height:"4rem",left:20,top:0},
            {title:"年增长率","size":"20%",color:"#59ebe8",width:"4rem",height:"4rem",right:20,top:0},
            {title:"OTT电视激活量","size":30000,color:"#c5b2fc",width:"4rem",height:"4rem",left:20,top:"5rem"},
            {title:"激活率","size":"50%",color:"#d4a4eb",width:"4rem",height:"4rem",right:20,top:"5rem"}
        ],
        css : {
            top:'4.5rem'
        },
        center : true
    })
    // .addPage()
    // .addComponent("catalog",{
    //     type:"catalog",
    //     width:"90%",
    //     height:800/ratio,
    //     center:true,
    //     css : {
    //         top:0,
    //         opacity:0
    //     },
    //     animateIn:{opacity:1,top:"3rem"},
    //     animateOut:{opacity:0,top:0},
    //     data:[
    //         {
    //             title:"智能电视用户特征洞察",
    //             width:windowWidth*0.9,
    //             height:50,
    //             fillStyleColor:"#4499e6"
    //
    //         },
    //         {
    //             title:"人口学属性分布"
    //         },
    //         {
    //             title:"设备属性分布"
    //         },
    //         {
    //             title:"家庭属性分布"
    //         },
    //         {
    //             title:"观影行为分析"
    //         },
    //         {
    //             title:"付费行为分析"
    //         }
    //     ]
    // })
    .addPage()
    .addComponent('caption',{text:"人口学属性分布"})
    .addComponent('pieDeviceForSex',{
        type:"echart",
        width :(windowWidth/ratio)/2,
        height :((window.innerHeight-150)/ratio)/2,
        id:"pieDeviceForSex",
        css : {
            top:0,
            opacity:0
        },
        animateIn:{opacity:1,top:150},
        animateOut:{opacity:0,top:0},
        // delay:500,
        option:{
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                y: 'top',
                data:['男','女']
            },
            series: [
                {
                    name:'性别设备量饼图',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'男'},
                        {value:310, name:'女'},
                    ]
                }
            ]
        }
    })
    .addComponent('pieDeviceForAge',
        {
            type:"echart",
            width :(windowWidth/ratio)/2,
            height :((window.innerHeight-150)/ratio)/2,
            id:"pieDeviceForAge",
            css : {
                top:0,
                opacity:0,
                left:0
            },
            animateIn:{opacity:1,top:150,left:"50%"},
            animateOut:{opacity:0,top:0,left:0},
            // delay:1000,
            option:{
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal',
                    y: 'top',
                    data:['50岁','30岁','10岁']
                },
                series: [
                    {
                        name:'年龄设备量饼图',
                        type:'pie',
                        radius: ['30%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'50岁'},
                            {value:210, name:'30岁'},
                            {value:110, name:'10岁'},
                        ]
                    }
                ]
            }
        }
    )
    .addComponent('mapDevice',{
        type:"echart",
        width :windowWidth/ratio,
        height :((window.innerHeight-150)/ratio)/2,
        id:"mapDevice",
        css : {
            bottom:0,
            opacity:0
        },
        animateIn:{opacity:1,bottom:50},
        animateOut:{opacity:0,bottom:0},

        // delay:1000,
        option:{
            title : {
//                    text: '地域设备分布',
//                    subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                y:'bottom',
                data:['地域设备分布']
            },
            dataRange: {
                min: 0,
                max: 2500,
                x: 'left',
                y: 'bottom',
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true
            },
            toolbox: {
                show: true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            roamController: {
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [
                {
                    name: '地域设备分布',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    itemStyle:{
                        normal:{label:{show:false}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '北京',value: Math.round(Math.random()*1000)},
                        {name: '天津',value: Math.round(Math.random()*1000)},
                        {name: '上海',value: Math.round(Math.random()*1000)},
                        {name: '重庆',value: Math.round(Math.random()*1000)},
                        {name: '河北',value: Math.round(Math.random()*1000)},
                        {name: '河南',value: Math.round(Math.random()*1000)},
                        {name: '云南',value: Math.round(Math.random()*1000)},
                        {name: '辽宁',value: Math.round(Math.random()*1000)},
                        {name: '黑龙江',value: Math.round(Math.random()*1000)},
                        {name: '湖南',value: Math.round(Math.random()*1000)},
                        {name: '安徽',value: Math.round(Math.random()*1000)},
                        {name: '山东',value: Math.round(Math.random()*1000)},
                        {name: '新疆',value: Math.round(Math.random()*1000)},
                        {name: '江苏',value: Math.round(Math.random()*1000)},
                        {name: '浙江',value: Math.round(Math.random()*1000)},
                        {name: '江西',value: Math.round(Math.random()*1000)},
                        {name: '湖北',value: Math.round(Math.random()*1000)},
                        {name: '广西',value: Math.round(Math.random()*1000)},
                        {name: '甘肃',value: Math.round(Math.random()*1000)},
                        {name: '山西',value: Math.round(Math.random()*1000)},
                        {name: '内蒙古',value: Math.round(Math.random()*1000)},
                        {name: '陕西',value: Math.round(Math.random()*1000)},
                        {name: '吉林',value: Math.round(Math.random()*1000)},
                        {name: '福建',value: Math.round(Math.random()*1000)},
                        {name: '贵州',value: Math.round(Math.random()*1000)},
                        {name: '广东',value: Math.round(Math.random()*1000)},
                        {name: '青海',value: Math.round(Math.random()*1000)},
                        {name: '西藏',value: Math.round(Math.random()*1000)},
                        {name: '四川',value: Math.round(Math.random()*1000)},
                        {name: '宁夏',value: Math.round(Math.random()*1000)},
                        {name: '海南',value: Math.round(Math.random()*1000)},
                        {name: '台湾',value: Math.round(Math.random()*1000)},
                        {name: '香港',value: Math.round(Math.random()*1000)},
                        {name: '澳门',value: Math.round(Math.random()*1000)}
                    ]
                }
            ]
        }
    })
    .addPage()
    .addComponent('caption',{text:"设备属性分布"})
    .addComponent('deviceDistribute',
        {
            type:"echart",
            width :windowWidth/ratio,
            height :(window.innerHeight-200)/ratio,
            id:"deviceDistribute",
            css : {
                bottom:0,
                opacity:0
            },
            center:true,
            animateIn:{opacity:1,bottom:50},
            animateOut:{opacity:0,bottom:0},
            // delay:100,
            option:
                {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['广东省', '四川省', '湖南省', '山东省', '江西省', '河南省', '湖北省'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'活跃用户',
                            type:'bar',
                            barWidth: '60%',
                            data:[1126891, 469704, 568853, 635402, 465640, 599618, 514218]
                        }
                    ]
                }


        }
    )
    .addPage()
    .addComponent('caption',{text:"家庭属性分布"})
    .addComponent('familyDistribute',
        {
            type:"echart",
            width :windowWidth/ratio,
            height :(window.innerHeight-200)/ratio,
            id:"familyDistribute",
            css : {
                top:0,
                opacity:0
            },
            center:true,
            animateIn:{opacity:1,top:180},
            animateOut:{opacity:0,top:0},
            //    delay:100,
            option:
                {
                    tooltip: {},
                    legend: {
                        data: ['青少年', '中老年']
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: '精选', max: 6500},
                            { name: 'VIP', max: 16000},
                            { name: '购物', max: 30000},
                            { name: '教育', max: 38000},
                            { name: '影视', max: 52000}
                        ]
                    },
                    series: [{
                        name: '青少年 vs 中老年',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '青少年'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '中老年'
                            }
                        ]
                    }]
                }


        }
    )
    .addPage()
    .addComponent('caption',{text:"活跃用户分析"})
    .addComponent('playTimeLong',
        {
            type:"echart",
            width :windowWidth/ratio,
            height :(window.innerHeight-200)/ratio,
            id:"playTimeLong",
            css : {
                bottom:0,
                opacity:0
            },
            center:true,
            animateIn:{opacity:1,bottom:30},
            animateOut:{opacity:0,bottom:0},
            //   delay:100,
            option:{
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['活跃用户率','活跃用户']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '活跃用户',
                        min:0,
                        max:400000,
                        interval: 50000,
                        axisLabel: {
                            formatter:function (a,b) {
                                return a/1000+"k";
                            }

                        }
                    },
                    {
                        type: 'value',
                        name: '活跃用户率',
                        min: 0,
                        max: 1,
                        interval: 0.2,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name:'活跃用户',
                        type:'bar',
                        data:[178832,289909,364799,210011,278899,369900,178866,276688]
                    },
                    {
                        name:'活跃用户率',
                        type:'line',
                        yAxisIndex: 1,
                        data:[0.034,0.0355,0.0455,0.0544,0.0444,0.0455,0.4553,0.0333]
                    }
                ]
            }

        }
    )
    .addPage()
    .addComponent('caption',{text:"付费行为分析"})
    .addComponent('payBehaviour',
        {
            type:"echart",
            width :windowWidth/ratio,
            height :((window.innerHeight-150)/ratio)/2,
            id:"payBehaviour",
            css : {
                top:0,
                opacity:0
            },
            center:true,
            animateIn:{opacity:1,top:100},
            animateOut:{opacity:0,top:0},
            //  delay:100,
            option:
                {
                // Make gradient line here
                visualMap: [{
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    min: 0,
                    max: 400
                }
                ],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [{
                    data: dateList
                }
                ],
                grid:{
                    left:"13%"
                },
                yAxis: [{
                    boundaryGap: true,
                    splitLine: {show: false},
                     axisLabel: {
                         formatter:function (a,b) {
                             return a/1000+"k";
                         }

                     }
                }
                ],
//                        grid: [{
//                            bottom: '60%'
//                        }
//                        ],
                series: [{
                    type: 'line',
                    showSymbol: false,
                    data: valueList
                }
                ]
            }
        }
    )
    .addComponent('payMap',{
        type:"echart",
        width :windowWidth/ratio,
        height :((window.innerHeight-150)/ratio)/2,
        id:"payMap",
        css : {
            bottom:0,
            opacity:0
        },
        animateIn:{opacity:1,bottom:50},
        animateOut:{opacity:0,bottom:0},
        // delay:1000,
        option:{
            title : {
//                    text: '地域设备分布',
//                    subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                x:'left',
                data:['地域设备分布']
            },
            dataRange: {
                min: 0,
                max: 2500,
                x: 'left',
                y: 'bottom',
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true
            },
            toolbox: {
                show: true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            roamController: {
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [
                {
                    name: '地域设备分布',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    itemStyle:{
                        normal:{label:{show:false}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '北京',value: Math.round(Math.random()*1000)},
                        {name: '天津',value: Math.round(Math.random()*1000)},
                        {name: '上海',value: Math.round(Math.random()*1000)},
                        {name: '重庆',value: Math.round(Math.random()*1000)},
                        {name: '河北',value: Math.round(Math.random()*1000)},
                        {name: '河南',value: Math.round(Math.random()*1000)},
                        {name: '云南',value: Math.round(Math.random()*1000)},
                        {name: '辽宁',value: Math.round(Math.random()*1000)},
                        {name: '黑龙江',value: Math.round(Math.random()*1000)},
                        {name: '湖南',value: Math.round(Math.random()*1000)},
                        {name: '安徽',value: Math.round(Math.random()*1000)},
                        {name: '山东',value: Math.round(Math.random()*1000)},
                        {name: '新疆',value: Math.round(Math.random()*1000)},
                        {name: '江苏',value: Math.round(Math.random()*1000)},
                        {name: '浙江',value: Math.round(Math.random()*1000)},
                        {name: '江西',value: Math.round(Math.random()*1000)},
                        {name: '湖北',value: Math.round(Math.random()*1000)},
                        {name: '广西',value: Math.round(Math.random()*1000)},
                        {name: '甘肃',value: Math.round(Math.random()*1000)},
                        {name: '山西',value: Math.round(Math.random()*1000)},
                        {name: '内蒙古',value: Math.round(Math.random()*1000)},
                        {name: '陕西',value: Math.round(Math.random()*1000)},
                        {name: '吉林',value: Math.round(Math.random()*1000)},
                        {name: '福建',value: Math.round(Math.random()*1000)},
                        {name: '贵州',value: Math.round(Math.random()*1000)},
                        {name: '广东',value: Math.round(Math.random()*1000)},
                        {name: '青海',value: Math.round(Math.random()*1000)},
                        {name: '西藏',value: Math.round(Math.random()*1000)},
                        {name: '四川',value: Math.round(Math.random()*1000)},
                        {name: '宁夏',value: Math.round(Math.random()*1000)},
                        {name: '海南',value: Math.round(Math.random()*1000)},
                        {name: '台湾',value: Math.round(Math.random()*1000)},
                        {name: '香港',value: Math.round(Math.random()*1000)},
                        {name: '澳门',value: Math.round(Math.random()*1000)}
                    ]
                }
            ]
        }
    })
    // .addPage()
    // .addComponent("catalog",{
    //     type:"catalog",
    //     width:"90%",
    //     height:800/ratio,
    //     center:true,
    //     css : {
    //         top:0,
    //         opacity:0
    //     },
    //     animateIn:{opacity:1,top:"3rem"},
    //     animateOut:{opacity:0,top:0},
    //     data:[
    //         {
    //             title:"智能电视家庭行为偏好",
    //             width:windowWidth*0.9,
    //             height:50,
    //             fillStyleColor:"#799CF5"
    //         },
    //         {
    //             title:"观影行为分析"
    //         },
    //         {
    //             title:"观影偏好分析"
    //         },
    //         {
    //             title:"付费行为分析"
    //         },
    //         {
    //             title:"购物偏好"
    //         },
    //         {
    //             title:"应用偏好"
    //         },
    //         {
    //             title:"国庆活跃人群分析"
    //         }
    //     ]
    // })
    .addPage()
    .addComponent('caption',{text:"观影行为分析"})
    .addComponent('deviceDistribute1',
        {
            type:"echart",
            width :windowWidth/ratio,
            height :(window.innerHeight-200)/ratio,
            id:"deviceDistribute1",
            css : {
                top:0,
                opacity:0
            },
            center:true,
            animateIn:{opacity:1,top:"4rem"},
            animateOut:{opacity:0,top:0},
            // delay:100,
            option:
                {
                    color: ['#3398DB'],
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        data:['人均起播量']
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['倒霉熊第三季', '小猪佩奇全集', '宝宝巴士儿歌', '赛罗奥特曼格斗', '疯狂的兔子', '远大前程'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'人均起播量',
                            type:'bar',
                            barWidth: '60%',
                            data:[1000, 651, 357, 351, 297, 240]
                        }
                    ]
                }


        }
    )
    // .addPage()
    // .addComponent('caption',{text:"观影偏好分析"})
    // .addComponent('filmReferenceAnalyse',{
    //     type:"echart",
    //     width :windowWidth/ratio,
    //     height :5*1.6,
    //     id:"filmReferenceAnalyse",
    //     css : {
    //         top:0,
    //         right:0,
    //         opacity:0
    //     },
    //     animateIn:{opacity:1,top:"4rem",right:"2%"},
    //     animateOut:{opacity:0,top:0,right:0},
    //     //  delay:500,
    //     option:{
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             x: 'right',
    //             data:['电影','电视剧']
    //         },
    //         series: [
    //             {
    //                 name:'性别设备量饼图',
    //                 type:'pie',
    //                 radius: ['50%', '70%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         textStyle: {
    //                             fontSize: '30',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data:[
    //                     {value:335, name:'电影'},
    //                     {value:310, name:'电视剧'},
    //                 ]
    //             }
    //         ]
    //     }
    // })
    // .addComponent('filmReferenceAnalyse1',
    //     {
    //         type:"echart",
    //         width :windowWidth/ratio,
    //         height :5*1.6,
    //         id:"filmReferenceAnalyse1",
    //         css : {
    //             top:0,
    //             left:0,
    //             opacity:0
    //         },
    //         animateIn:{opacity:1,top:"4rem",left:"2%"},
    //         animateOut:{opacity:0,top:0,left:0},
    //         //  delay:1000,
    //         option:{
    //             tooltip: {
    //                 trigger: 'item',
    //                 formatter: "{a} <br/>{b}: {c} ({d}%)"
    //             },
    //             legend: {
    //                 orient: 'vertical',
    //                 x: 'left',
    //                 data:['50岁','30岁','10岁']
    //             },
    //             series: [
    //                 {
    //                     name:'年龄设备量饼图',
    //                     type:'pie',
    //                     radius: ['50%', '70%'],
    //                     avoidLabelOverlap: false,
    //                     label: {
    //                         normal: {
    //                             show: false,
    //                             position: 'center'
    //                         },
    //                         emphasis: {
    //                             show: true,
    //                             textStyle: {
    //                                 fontSize: '30',
    //                                 fontWeight: 'bold'
    //                             }
    //                         }
    //                     },
    //                     labelLine: {
    //                         normal: {
    //                             show: false
    //                         }
    //                     },
    //                     data:[
    //                         {value:335, name:'50岁'},
    //                         {value:210, name:'30岁'},
    //                         {value:110, name:'10岁'},
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // )
    // .addComponent('filmReferenceAnalyse2',
    //     {
    //         type:"echart",
    //         width :windowWidth*2/ratio,
    //         height :17*heightRatio,
    //         id:"filmReferenceAnalyse2",
    //         css : {
    //             bottom:0,
    //             opacity:0
    //         },
    //         animateIn:{opacity:1,bottom:30},
    //         animateOut:{opacity:0,bottom:0},
    //         // delay:100,
    //         option:
    //             {
    //                 legend: {
    //                     data: ['图一','图二'],
    //                     orient: 'horizontal',
    //                     y: 'bottom',
    //                 },
    //                 radar: [
    //                     {
    //                         indicator: [
    //                             { text: '指标一' },
    //                             { text: '指标二' },
    //                             { text: '指标三' },
    //                             { text: '指标四' },
    //                             { text: '指标五' }
    //                         ],
    //                         center: ['50%', '50%'],
    //                         radius: 80,
    //                         startAngle: 90,
    //                         splitNumber: 4,
    //                         shape: 'circle',
    //                         name: {
    //                             formatter:'【{value}】',
    //                             textStyle: {
    //                                 color:'#72ACD1'
    //                             }
    //                         },
    //                         splitArea: {
    //                             areaStyle: {
    //                                 color: ['rgba(114, 172, 209, 0.2)',
    //                                     'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
    //                                     'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
    //                                 shadowColor: 'rgba(0, 0, 0, 0.3)',
    //                                 shadowBlur: 10
    //                             }
    //                         },
    //                         axisLine: {
    //                             lineStyle: {
    //                                 color: 'rgba(255, 255, 255, 0.5)'
    //                             }
    //                         },
    //                         splitLine: {
    //                             lineStyle: {
    //                                 color: 'rgba(255, 255, 255, 0.5)'
    //                             }
    //                         }
    //                     }
    //                 ],
    //                 series: [
    //                     {
    //                         name: '雷达图',
    //                         type: 'radar',
    //                         itemStyle: {
    //                             emphasis: {
    //                                 // color: 各异,
    //                                 lineStyle: {
    //                                     width: 4
    //                                 }
    //                             }
    //                         },
    //                         data: [
    //                             {
    //                                 value: [100, 8, 0.40, -80, 2000],
    //                                 name: '图一',
    //                                 symbol: 'rect',
    //                                 symbolSize: 5,
    //                                 lineStyle: {
    //                                     normal: {
    //                                         type: 'dashed'
    //                                     }
    //                                 }
    //                             },
    //                             {
    //                                 value: [60, 5, 0.30, -100, 1500],
    //                                 name: '图二',
    //                                 areaStyle: {
    //                                     normal: {
    //                                         color: 'rgba(255, 255, 255, 0.5)'
    //                                     }
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //
    //
    //     }
    // )
    // .addPage()
    // .addComponent('caption',{text:"付费行为分析"})
    // .addComponent('playAnalyse',
    //     {
    //         type:"echart",
    //         width :windowWidth*2/ratio,
    //         height :(window.innerHeight-200)*2/ratio,
    //         id:"playAnalyse",
    //         css : {
    //             bottom:0,
    //             opacity:0
    //         },
    //         center:true,
    //         animateIn:{opacity:1,bottom:50},
    //         animateOut:{opacity:0,bottom:0},
    //         // delay:100,
    //         option:
    //             {
    //                 color: ['#3398DB'],
    //                 tooltip : {
    //                     trigger: 'axis',
    //                     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //                         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //                     }
    //                 },
    //                 grid: {
    //                     left: '3%',
    //                     right: '4%',
    //                     bottom: '3%',
    //                     containLabel: true
    //                 },
    //                 xAxis : [
    //                     {
    //                         type : 'category',
    //                         data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //                         axisTick: {
    //                             alignWithLabel: true
    //                         }
    //                     }
    //                 ],
    //                 yAxis : [
    //                     {
    //                         type : 'value'
    //                     }
    //                 ],
    //                 series : [
    //                     {
    //                         name:'直接访问',
    //                         type:'bar',
    //                         barWidth: '60%',
    //                         data:[10, 52, 200, 334, 390, 330, 220]
    //                     }
    //                 ]
    //             }
    //
    //
    //     }
    // )
    // .addPage()
    // .addComponent('caption',{text:"购物偏好"})
    // .addComponent("shopLove",{
    //     type:"echart",
    //     width :windowWidth*2/ratio,
    //     height :(window.innerHeight-200)*2/ratio,
    //     id:"shopLove",
    //     css : {
    //         top:0,
    //         opacity:0
    //     },
    //     center:true,
    //     animateIn:{opacity:1,top:160},
    //     animateOut:{opacity:0,top:0},
    //     option:
    //         {
    //             tooltip : {
    //                 trigger: 'axis',
    //                 axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //                 }
    //             },
    //             legend: {
    //                 data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    //             },
    //             grid: {
    //                 left: '3%',
    //                 right: '4%',
    //                 bottom: '3%',
    //                 containLabel: true
    //             },
    //             xAxis:  {
    //                 type: 'value'
    //             },
    //             yAxis: {
    //                 type: 'category',
    //                 data: ['周一','周二','周三','周四','周五','周六','周日']
    //             },
    //             series: [
    //                 {
    //                     name: '直接访问',
    //                     type: 'bar',
    //                     stack: '总量',
    //                     label: {
    //                         normal: {
    //                             show: true,
    //                             position: 'insideRight'
    //                         }
    //                     },
    //                     data: [320, 302, 301, 334, 390, 330, 320]
    //                 },
    //                 {
    //                     name: '邮件营销',
    //                     type: 'bar',
    //                     stack: '总量',
    //                     label: {
    //                         normal: {
    //                             show: true,
    //                             position: 'insideRight'
    //                         }
    //                     },
    //                     data: [120, 132, 101, 134, 90, 230, 210]
    //                 },
    //                 {
    //                     name: '联盟广告',
    //                     type: 'bar',
    //                     stack: '总量',
    //                     label: {
    //                         normal: {
    //                             show: true,
    //                             position: 'insideRight'
    //                         }
    //                     },
    //                     data: [220, 182, 191, 234, 290, 330, 310]
    //                 },
    //                 {
    //                     name: '视频广告',
    //                     type: 'bar',
    //                     stack: '总量',
    //                     label: {
    //                         normal: {
    //                             show: true,
    //                             position: 'insideRight'
    //                         }
    //                     },
    //                     data: [150, 212, 201, 154, 190, 330, 410]
    //                 },
    //                 {
    //                     name: '搜索引擎',
    //                     type: 'bar',
    //                     stack: '总量',
    //                     label: {
    //                         normal: {
    //                             show: true,
    //                             position: 'insideRight'
    //                         }
    //                     },
    //                     data: [820, 832, 901, 934, 1290, 1330, 1320]
    //                 }
    //             ]
    //         }
    //
    // })
    // .addPage()
    // .addComponent("catalog",{
    //     type:"catalog",
    //     width:"90%",
    //     height:800/ratio,
    //     center:true,
    //     css : {
    //         top:0,
    //         opacity:0
    //     },
    //     animateIn:{opacity:1,top:"3rem"},
    //     animateOut:{opacity:0,top:0},
    //     data:[
    //         {
    //             title:"国庆活跃人群分析",
    //             width:windowWidth*0.9,
    //             height:50,
    //             fillStyleColor:"#BB84FF"
    //         },
    //         {
    //             title:"假期行为分析"
    //         },
    //         {
    //             title:"活跃率对比"
    //         },
    //         {
    //             title:"付费率对比"
    //         }
    //     ]
    // })

    // .addPage()
    // .addComponent('caption',{text:"假期行为分析"})
    // .addPage()
    // .addComponent('caption',{text:"活跃率对比"})
    // .addPage()
    // .addComponent('caption',{text:"付费率对比"})
    .addPage('tail')
    .addComponent('logo',{
        center:true,
        width:(359/ratio)/2,
        height:(129/ratio)/2,
        bg:'img/face_logo.png',
        css:{top:240,opacity:0},
        animateIn:{opacity:1,top:210},
        animateOut:{opacity:0,top:240},
    })
    .addComponent('slogan',{
        center:true,
        width:100/ratio,
        height:30/ratio,
        text:"谢谢观看",
        css:{top:280,opacity:0},
        animateIn:{opacity:1,left:'50%'},
        animateOut:{opacity:0,left:'0%'},
        delay:500
    })
    .addComponent('back',{
        width:26/ratio,
        height:25/ratio,
        bg:'img/tail_back.png',
        center:true,
        onclick : function(){
            $.fn.fullpage.moveTo( 1 )
        }
    })
    .loader();