// import ReactEcharts from 'echarts-for-react'


import './Report.css'


import {Link} from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'
import RenderEcharts from './RenderEcharts'
import CommonChart from './Components/CommonChart'

function Report(){

//     const data=[
//         { value: 1048, name: 'Search Engine  ' },
//         { value: 735, name: 'Direct' },
//         { value: 580, name: 'Email' },
//         { value: 484, name: 'Union Ads' },
//         { value: 300, name: 'Video Ads' }
//       ]
      const fun= [
        { value: 60,itemStyle: {color: '#00D7E1'} ,name:'Direct'},
        { value: 40 ,itemStyle: {color: '#00D2AA'},name:'Email'},
        { value: 20,itemStyle: {color: '#8CD26E'} ,name:'Union ads'},
        { value: 80,itemStyle: {color: '#00AAE1'},name:'Video Ads'},
        { value: 100,itemStyle: {color: '#0082D2'} ,name:'Engige'}
      ]
//       const style={ height: "80vh", width: "50vw" }
//       const legend= {
//         orient: 'vertical',
//         left:0,
// top: 'center'
//       }
const data= [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ]
  const xaxis={
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  }
  const yaxis={
    
      type: 'value'
    
  }
  const itemStyle={normal: {color: '#00D2AA'}}
  const legend={top: '5%',
  left: 'center'}
  const radius=['40%', '70%']
  const style={ height: "80vh", width: "50vw" }
  const label= {
    show: false,
    position: 'center'
  }
  const funbar={left: '10%',
  top: "70",
  bottom: "60",
  width: '80%',
  min: "0",
  max: "100",
  minSize: '0%',
  maxSize: '100%',
  sort: 'ascending',
  gap: "2"}
   
   
    
    
    return(
        <>
         <SideBar/>
         <NavBar/>
            <div className='common-frame frame-1'>
                <Link to='/outlet' state={{type:'pie',data:data,legend:legend,style:style,head:"Todays Leads",radius:radius}}>
                <div className='common-report report-1' name="report_1"  > 
                    <div className='container-1'>
                        <div className='echart-1'>
                            {/* <RenderEcharts type='pie' data={data} export={false} radius={30}/> */}
                            <CommonChart type="pie" data={data} radius={radius}   /> 
                        </div>
                            {/* <span className='common-footer footer-1'>Leads obtain Today</span> */}
                            <span className='common-header header-1'>Today Leads</span>
                    </div>
                </div> 
                </Link>
                <Link to='/outlet' state={{type:'pie',data:data,legend:legend,style:style,head:"Lead and their states",radius:radius}}>
                <div className='common-report report-2' name="report_2">
                    <div className='container-1'>
                        <div className='echart-1'>
                        {/* <RenderEcharts type='pie' data={data} export={false} radius={30}/> */}
                        <CommonChart type="pie" data={data} radius={radius}   /> 
                        </div>
                            {/* <span className='common-footer footer-2'>Leads By state</span> */}
                            <span className='common-header header-2'>Lead and their states</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet'state={{type:'pie',data:data,legend:legend,style:style,head:"lead and their soures",radius:radius}}>
                <div className='common-report report-3' name="report_3">
                    <div className='container-1'>
                        <div className='echart-1'>
                        {/* <RenderEcharts type='pie' data={data} export={false} radius={30}/> */}
                        <CommonChart type="pie" data={data} radius={radius}   /> 
                        </div>
                            {/* <span className='common-footer footer-3'>Leads By source</span> */}
                            <span className='common-header header-3'>Lead and their sources</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet' state={{type:'pie',data:data,legend:legend,style:style,head:"Lead trends",radius:radius}}>
                <div className='common-report report-4' name="report_4">
                    <div className='container-1'>
                        <div className='echart-1'>
                        {/* <RenderEcharts type='pie' data={data} export={false} radius={30}/> */}
                        <CommonChart type="pie" data={data} radius={radius}   /> 
                        </div>
                            {/* <span className='common-footer footer-4'>Leads trends</span> */}
                            <span className='common-header header-4'>Lead trends</span>
                    </div>
                </div>
                </Link>
                

            </div>
            <div className='common-frame frame-2'>
            <Link to='/outlet' state={{type:'bar',data:data,style:style,head:"Junk leads by source"
            ,legend:legend,xaxis:xaxis ,yaxis:yaxis,itemstyle:itemStyle}}>
                <div className='common-report report-1' name="report_5">
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='bar' data={data} export={false}/> */}
                        <CommonChart type="bar" data={data} xaxis={xaxis} yaxis={yaxis} height={80}  itemstyle={itemStyle} /> 
                        </div>
                            {/* <span className='common-footer footer-5'>Junk leads by source</span> */}
                            <span className='common-header header-2'>Junk leads by source</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet' state={{type:'bar',data:data,style:style,head:"Junk leads by source"
            ,legend:legend,xaxis:xaxis ,yaxis:yaxis,itemstyle:itemStyle}}>
                <div className='common-report report-2' name="report_6">
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='bar' data={data} export={false}/> */}
                        <CommonChart type="bar" data={data} xaxis={xaxis} yaxis={yaxis} height={80}  itemstyle={itemStyle} /> 
                        </div>
                            {/* <span className='common-footer footer-5'>best deal conversion </span> */}
                            <span className='common-header header-5'>Top deal conversion source</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet' state={{type:'bar',data:data,style:style,head:"Junk leads by source"
            ,legend:legend,xaxis:xaxis ,yaxis:yaxis,itemstyle:itemStyle}}>
                <div className='common-report report-3' name="report_7">
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='bar' data={data} export={false}/> */}
                        <CommonChart type="bar" data={data} xaxis={xaxis} yaxis={yaxis} height={80}  itemstyle={itemStyle} /> 
                        </div>
                            {/* <span className='common-footer footer-5'>Lead to deals</span> */}
                            <span className='common-header header-6'>Lead to deal conversion</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet' state={{type:'bar',data:data,style:style,head:"Junk leads by source"
            ,legend:legend,xaxis:xaxis ,yaxis:yaxis,itemstyle:itemStyle}}>
                <div className='common-report report-4' name="report_8">
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='bar' data={data} export={false}/> */}
                        <CommonChart type="bar" data={data} xaxis={xaxis} yaxis={yaxis} height={80}  itemstyle={itemStyle} /> 
                        </div>
                            {/* <span className='common-footer footer-6'>Top 5 deals - current month</span> */}
                            <span className='common-header header-6'>Top 5 deals - current month</span>
                    </div>
                </div>
                </Link>
            </div>
            <div className='common-frame frame-3'>
            <Link to='/outlet' state={{type:'funnel',data:fun,style:style,head:"Top 5 deals - current quarter",height:'400',legend:legend,fun:funbar}}>
                <div className='common-report report-1' name="report_9">
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='funnel' data={fun} export={false}/> */}
                        <CommonChart type="funnel" data={fun}  height={80}  {...funbar} /> 
                        </div>
                            {/* <span className='common-footer footer-6'>Top 5 deals - current quarter</span> */}
                            <span className='common-header header-5'>Top 5 deals - current quarter</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet' state={{type:'funnel',data:fun,style:style,head:"Deals won",height:'400',legend:legend,fun:funbar}}>
                <div className='common-report report-2' name="report_10">
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='funnel' data={fun} export={false}/> */}
                        <CommonChart type="funnel" data={fun}  height={80}  {...funbar} /> 
                        </div>
                            {/* <span className='common-footer footer-4'>Deals won</span> */}
                            <span className='common-header header-4'>Deals won</span>
                    </div>
                </div>
                </Link>
                <Link to='/outlet' state={{type:'funnel',data:fun,style:style,head:"Sales Funnel",height:'400',legend:legend,fun:funbar}}>
                <div className='common-report report-3'>
                    <div className='container-1'>
                        <div className='echart-2'>
                        {/* <RenderEcharts type='funnel' data={fun} export={false}/> */}
                        <CommonChart type="funnel" data={fun}  height={80}  {...funbar} /> 
                        </div>
                            {/* <span className='common-footer footer-6'>count of deals in each state</span> */}
                            <span className='common-header header-4'>Sales Funnel</span>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}


export default Report