javascript:{
    (function(){
        $axure.utils.chartPaths = {
            echart:'https://edenchu.gitee.io/extras/echarts.min.js',
            localChart:'echarts.min.js',
            antv:'https://edenchu.gitee.io/extras/antv.min.js',
            localAntv:'antv.min.js',
            initOnline:'https://edenchu.gitee.io/extras/chart.interface.js',
            initLocal:'resources/scripts/extras/chart.interface.js'
        };

        let initialize = function(chart){
            let chartPath = {};
            console.log(chart+'开始初始化');
            switch (chart){
                case 'echart':{
                    chartPath.onlineFile = $axure.utils.chartPaths.echart;
                    chartPath.LocalFile = $axure.utils.chartPaths.localChart;
                    break;
                }
                case 'antv':{
                    chartPath.onlineFile = $axure.utils.chartPaths.antv;
                    chartPath.LocalFile = $axure.utils.chartPaths.localAntv;
                    break;
                }
                default: return;
            }
            initOnline(chart, chartPath.onlineFile, chartPath.LocalFile ,false);
        };

        const initOnline =function(chart,online,local,isLast){
            $.getScript(online)
                .done(function(){
                    if(!isLast){
                        initOnline('int',$axure.utils.chartPaths.initOnline, $axure.utils.chartPaths.initLocal, true);
                    }
                })
                .fail(function(){
                    initLocal(local,isLast);
                })
        };

        const initLocal = function(local,isLast){
            let script = this.document.createElement("script");
            script.type = 'text/javascript';
            script.src = local;
            this.document.head.appendChild(script);
            if (isLast) {return;}
            var _initLocal = $axure.utils.chartPaths.initLocal;
            initLocal(_initLocal, true);
        };

        $(function(){
            if(! $axure.utils.chartRepeater){
                $axure.utils.chartRepeater = true;
                initialize('echart',false);
            }
        })
    }())
}




javascript:{
    (function(){
        $axure.utils.echartPaths = {
            echart:'https://edenchu.gitee.io/extras/echarts.min.js',
            localChart:'resources/scripts/extras/echarts.min.js',
            initOnline:'https://edenchu.gitee.io/extras/echarts.init.js',
            initLocal:'resources/scripts/extras/echarts.init.js'
        };

        let initialize = function(chart){
            let onlineFile = $axure.utils.echartPaths.echart, LocalFile = $axure.utils.echartPaths.localChart;
            initOnline(chart, onlineFile, LocalFile ,false);
        };

        const initOnline =function(chart,online,local,isLast){
            $.getScript(online)
                .done(function(){
                    if(!isLast){
                        initOnline('int',$axure.utils.chartPaths.initOnline, $axure.utils.chartPaths.initLocal, true);
                    }
                })
                .fail(function(){
                    initLocal(local,isLast);
                })
        };

        const initLocal = function(local,isLast){
            let script = this.document.createElement("script");
            script.type = 'text/javascript';
            script.src = local;
            this.document.head.appendChild(script);
            if (isLast) {return;}
            var _initLocal = $axure.utils.chartPaths.initLocal;
            initLocal(_initLocal, true);
        };

        $(function(){
            if(! $axure.utils.chartRepeater){
                $axure.utils.chartRepeater = true;
                initialize('echart',false);
            }
        })
    }())
}

javascript:$(function(){
    if($axure.utils.chartECStat) return;
    $axure.utils.chartECStat = true;
    let paths = {
        online:'https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.min.js',
        initOnline:'https://edenchu.gitee.io/extras/echarts.init.js',
        ecStatOnline : 'https://edenchu.gitee.io/extras/ecStat.min.js',
        local:'resources/scripts/extras/echarts.min.js',
        initLocal:'resources/scripts/extras/echarts.init.js',
        ecStatLocal :'resources/scripts/extras/ecStat.min.js'
    };
    const initialize = function(online, local, position){
        $.getScript(online).done(function(){
            switch (position){
                case 'second':{initialize(paths.ecStatOnline,paths.ecStatLocal,'last');break;}
                case 'last':{initialize(paths.initOnline,paths.initLocal,'none');break;}
                default: break;
            };
        }).fail(function(){
            initLocal(local, position);
        });
    };
    const initLocal = function(local,position) {
        let script = this.document.createElement("script");
        script.type = 'text/javascript';
        script.src = local;
        this.document.head.appendChild(script);
        switch (position) {
            case 'second': {initLocal(paths.ecStatLocal, 'last');break;}
            case 'last': {initLocal(paths.initLocal, 'last');break;}
            default:break;
        };
    };
    initialize(paths.online,paths.local,'second');
});

