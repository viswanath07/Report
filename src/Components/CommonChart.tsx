import ReactEcharts from 'echarts-for-react/'


function CommonChart(props){
    // const [left,top,bottom,width,min,max,minSize,maxSize,sort,gap]=props.fun
    
    const option={
        title:props.title,
        legend:props.legend,
        xAxis: props.xaxis,
          yAxis: props.yaxis,
          series: [
            {
              
              type:props.type,
              smooth:props.smooth,
              
              left: props.left,
  top: props.top,
  bottom: props.bottom,
  width: props.width,
  min: props.min,
  max: props.max,
  minSize: props.minSize,
  maxSize: props.maxSize,
  sort: props.sort,
  gap: props.gap,
              
              radius: props.radius,
            label:props.label,
              
            
        
              data: props.data,
              itemStyle:props.itemstyle
            }
          ],
          height:props.height
    };
    (props.areastyle)?(option.series[0].areaStyle={}):''
    return(
        <>
        <ReactEcharts 
        
        option = {option}
        style={props.style}
        
        />
        
        </>
    )
}

export default CommonChart
