jQuery(document).ready(function(){
            $('.chart__green').each(function(){
            $(this).easyPieChart({
                    size:200,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#009989',
                    trackColor: '#e5e3e3',
                    lineWidth: 10
                });
            });
            $('.chart__red').each(function(){
            $(this).easyPieChart({
                    size:200,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#f34739',
                    trackColor: '#e5e3e3',
                    lineWidth: 10
                });
            });
            $('.chart__blue').each(function(){
            $(this).easyPieChart({
                    size:200,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#152b3c',
                    trackColor: '#e5e3e3',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});

        new WOW().init();

