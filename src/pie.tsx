import ReactEcharts from 'echarts-for-react'


function Pie(){

  


    return(
        <>
        
        <ReactEcharts
        option = {
           {
           
            legend: {
              orient: 'vertical',
    right: 10,
    top: 'center'
            },
            
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap:true,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  scale: true, 
                scaleSize: 20,  
                  label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ]
              }
            ],
            responsive: true,
maintainAspectRatio: false
            ,
            width:'500px',
            height:'500px'
          }
        }
        
          />
        
          
        </>
    )
}


export default Pie