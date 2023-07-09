
import './Outlet.css'
import back_icon from './assets/Group 35562.svg'




import { Link, useLocation, useParams } from 'react-router-dom'

import SideBar from './SideBar'
import NavBar from './NavBar'

import RenderEcharts from './RenderEcharts'
import { useState } from 'react'

import filters from '../src/assets/Filter.svg'
import vector from '../src/assets/Vector.svg'
import settings from '../src/assets/setting.svg'
import menu from '../src/assets/menu.svg'
import arrow_right from '../src/assets/Arrow-right.svg'
import plus from '../src/assets/plus.svg'
import open from '../src/assets/Open.svg'
import copy from '../src/assets/Copy.svg'
import expor from '../src/assets/export.svg'
import delet from '../src/assets/Delete.svg'
import collection from '../src/assets/Collection.svg'
import privat from '../src/assets/Private.svg'
import edit from '../src/assets/Collection (1).svg'
import email from '../src/assets/email.svg'
import embed from '../src/assets/embed.svg'
import url from '../src/assets/url.svg'
import headphone from '../src/assets/headphone.svg'
import export_vector from '../src/assets/export-vector.svg' 
import close_icon from '../src/assets/close.svg'
import pie from '../src/assets/v2-donut-chart-color.svg'
import pie_full from '../src/assets/v2-donut-chart-color (1).svg'
import line1 from '../src/assets/line1.svg'
import line2 from '../src/assets/line2.svg'
import line3 from '../src/assets/line3.svg'
import line4 from '../src/assets/line4.svg'
import bar1 from '../src/assets/bar1.svg'
import bar2 from '../src/assets/bar2.svg'
import bar3 from '../src/assets/bar3.svg'
import column1 from '../src/assets/column1.svg'
import column2 from '../src/assets/column2.svg'
import column3 from '../src/assets/column3.svg'
import arae1 from '../src/assets/area1.svg'
import arae2 from '../src/assets/area2.svg'
import arae3 from '../src/assets/area3.svg'
import General from './Components/General'
import Format from './Components/Format'
import Legend from './Components/Legend'
import Threshold from './Components/Threshold'
import axios from 'axios'
import FormatPop from './Components/FormatPop'
import CommonChart from './Components/CommonChart'
import Filter from './Components/Filter'



function Summa(){

    
    const data=[
        { value: 1048, name: 'Search Engine  ' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
      const xaxis1={
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      }
      const yaxis1={
        
          type: 'value'
        
      }
      const itemStyle1={normal: {color: '#00D2AA'}}
      const fun= [
        { value: 60,itemStyle: {color: '#00D7E1'} },
        { value: 40 ,itemStyle: {color: '#00D2AA'}},
        { value: 20,itemStyle: {color: '#8CD26E'} },
        { value: 80,itemStyle: {color: '#00AAE1'}},
        { value: 100,itemStyle: {color: '#0082D2'} }
      ]
      const fun1=[
        { value: 60,},
        { value: 40 ,},
        { value: 20,},
        { value: 80,},
        { value: 100, }
      ]
      const style={ height: "80vh", left: 50, top: 50, width: "90vw" }
      const legend_side= {
        orient: 'vertical',
        left:0,
top: 'center'
      }
      const legend_right={
        orient: 'vertical',
        right:0,
top: 'center'
      }
      const legend_top={
        orient:'horizontal',
        top: '5%',
        left: 'center'
      }
      const legend_bottom= {
        orient:'horizontal',
        top: 'bottom',
        left: 'center'
      }
      function handleClick(e: { preventDefault: any }){
        e.preventDefault()
        setPosition(e.target.value)
        setLegend((position==='top')?legend_side:legend_bottom )

      }
      const location=useLocation()
      const state =location.state //link state
      
      const [funbar,setFunbar]=useState(state.fun)
      const radius=['0%', '70%']
      const [position,setPosition]=useState('')
      const [legend,setLegend]=useState({})
      const [menubar,setMenuBar]=useState(false)
      const [add,setAdd] = useState(false)
      const [share,setShare] = useState(false)
      const [exe,setExport]=useState(false)
      const [setting,setSetting]=useState(false)
      const [general,setGeneral]=useState(false)
      const [axis,setaxis]=useState(false)
      const [border,setBorder]=useState(false)
      const [chart,setchart]=useState(false)
      const [format,setFormat]=useState(false)
      const [pieReadius,setPieradius]=useState(state.radius)
      const [chartType,setType]=useState(state.type)
      const [mouse,setMouse]=useState(false)
      const [pop,setPop]=useState(false)
      const [legView,setLegView]=useState(false)
      const [legPosition,setLegPosition]=useState("")
    const [title,setTitle]=useState("")
    const [chartTitle,setChartTitle]=useState({})
    const [thres,setThres]=useState(false)
    const [smallPop,setSmall]=useState(false)
    const[place1,setPlace1]=useState("")
    const[place2,setPlace2]=useState("")
    const[xaxis,setXaxis]=useState(state.xaxis)
    const[yaxis,setyaxis]=useState(state.yaxis)
    const[itemstyle,setItemStyle]=useState(state.itemstyle)
    const[datas,setdatas]=useState(state.data)
    const[smooth,setSmooth]=useState(false)
    const[areaStyle,setAreaStyle]=useState(false)
    const[filter,setfilter]=useState(false)

    const getFilter= () =>{
      setfilter(!filter)
    }
    const title1={
      text: title,
      left: 'center'
    }
    function handleSmallPop(e){
      console.log(e.target.id)
      if(e.target.id==="pop1"){
        setPlace1("Date")
        setPlace2("Date")
      }
      else{
        setPlace1("Region")
        setPlace2("Plain Text")
      }
      setSmall(!smallPop)
    }
    
    function handleThreshold(){
      setThres(!thres)
    }
    function handleLegend(){
      setLegView(!legView)
    }

    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleLeg(e){
        
        setLegPosition(e.target.value)

    }
    

      const getData =(data) =>{
        setSmall(data)
      }
      const handleApply =  () =>{
        (legPosition==='Left')?setLegend(legend_side):
        (legPosition==='Bottom')?setLegend(legend_bottom):
        (legPosition==='Top')?setLegend(legend_top):setLegend(legend_right)

        
        setChartTitle(title1)
        
      }
      const handleDouble = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:8080/legend",legend)

      }
      
      function handlePop(){
        setPop(!pop)
      }
      function handleMouseEnter(){
        
        setMouse(true)
      }
      function handleMouseLeave(){
        setMouse(false)
      }

      function handleFormat(){
        setFormat(!format)
      }

      function handleChart(){
        setchart(!chart)
      }

      function handleBorder(){
        setBorder(!border)
      }
      function handleAxie(){
        setaxis(!axis)
      }

      function handleGeneral(){
        setGeneral(!general)
      }

      function handleSetting(){
          setSetting(!setting)
          
      }
      function handleExport(){
        setExport(!exe)
      }

      function handleShare(){
        
        setShare(!share)
      }
      
      function handleAdd(){
        
        setAdd(!add)
      }

      function handleMenu(){
        
          setMenuBar(!menubar)
          if(menubar==false)
        {
          setAdd(false)
          setShare(false)

        }
        
          
      }

      
      // function exportPdf(){
        
        
      //   (async () => {
      //     const browser = await puppeteer.launch();
      //     const page = await browser.newPage();
      //     await page.goto("http://localhost:5173/outlet", {
      //       waitUntil: "networkidle2",
      //     });
      //     await page.emulateMediaType("screen");
      //     await page.pdf({
      //       path: "./react.pdf",
      //       printBackground: true,
      //       format: "a4",
      //     });
      //     await browser.close();
      //   })();
      // }
      
     
    return(
        <>
        
           <NavBar/>
         <SideBar/>
         
            <div className='side-container1'>
                <div className='side-head1'>
                    <span className='head-name1'>{state.head}</span>
                    <Link to='/report'>
                    <img src={back_icon} className='back-icon' ></img>
                    </Link>
                </div>
                <div className='day-container'>
                    <div className='bar'>
                        {/* <span className='common-day days'>Day</span>
                        <span className='common-day week'>Week</span>
                        <span className='common-day month'>Month</span>
                        <span className='common-day quarter'>Quarter</span>
                        <span className='common-day year'>Year</span> */}
                        <img src={vector} className='iconss' onClick={handleChart}/>
                        <img src={filters} className='iconss' onClick={() => {setfilter(!filter)}}></img>
                        <img src={settings} className='iconss' onClick={handleSetting}/>
                        <img src={menu} className='iconss' onClick={handleMenu}/>
                    </div>
                </div>
              
                {/* <div className='legend'>
                    <button value='top' onClick={handleClick}>Top</button>
                    
                    <button value='bottom' onClick={handleClick}>bottom</button>
                </div> */}
                <div className='pie' id='pie'>
                {/* <RenderEcharts type={chartType} data={state.data} legend={legend}  style={state.style} height={state.height} export={true} radius={pieReadius} title={chartTitle}/> */}
                <CommonChart type={chartType} data={datas} legend={legend} style={state.style} height={state.height} radius={pieReadius}
                 xaxis={xaxis} yaxis={yaxis} itemstyle={itemstyle} title={chartTitle} {...funbar} smooth={smooth} areastyle={areaStyle}/>
                {/* <Pie/> */}
                {/* <RenderEcharts type='bar' data={data}  style={style} height='400'/> */}   
                </div>
                
                
                <div className='dropdown-menu' style={{display:(menubar)?'flex':'none'}}>
                  <div className='options'>
                    <span className='value'>OPTIONS</span>
                  </div>
                  <div className='drop'>
                    <div className='add' onClick={handleAdd}>
                      <img src={plus} className='small-icon'/>
                      <span className='drop-text add-position'>Add</span>
                      <img src={arrow_right} className='small-icon'/>

                    </div>
                    <div className='dropdown-element'>
                      <div className='ele'></div>
                    </div>
                    <div className='rename'>
                          <img src={open} className='small-icon'/>
                          <span className='drop-text rename-position'>Rename</span>
                    </div>
                    <div className='add'  onClick={handleShare} >
                      <img src={copy} className='small-icon'/>
                      <span className='drop-text add-position'>Share</span>
                      <img src={arrow_right} className='small-icon direction'/>
                    </div>
                    <div className='add' onClick={handleExport}>
                      <img src={expor} className='small-icon'/>
                      <span className='drop-text add-position'>Export</span>
                      <img src={arrow_right} className='small-icon direction1'/>
                    </div>
                    <div className='dropdown-element'>
                      <div className='ele'></div>
                    </div>
                    <div className='add'>
                      <img src={delet} className='small-icon'/>
                      <span className='del'>Delete</span>
                    </div>
                  </div>

                </div>
                <div className='add-dropdown' style={{display:(add)?'flex':'none'}}>
                  <div className='add-head'>
                    <span className='drop-text col'>ADD</span>
                  </div>
                  <div className='import'>
                    <img src={collection} className='small-icon'/>
                    <span className='drop-text'>Import Data</span>
                  </div>
                  <div className='import'>
                    <img src={privat} className='small-icon'/>
                    <span className='drop-text'>New Ouery Table</span>
                  </div>
                </div>
                <div className='share-dropdown' style={{display:(share)?'flex':'none'}}>
                  <div className='add-head'>
                    <span className='value'>SHARE</span>
                  </div>
                  <div className='rename'>
                    <img src={edit} className='small-icon'/>
                    <span className='drop-text'>Edit Shared Deatails</span>
                  </div>
                  <div className='rename'>
                    <img src={email} className='small-icon'/>
                    <span className='drop-text'>Email</span>
                  </div>
                  <div className='rename'>
                    <img src={embed} className='small-icon'/>
                    <span className='drop-text'>Embed Link</span>
                  </div>
                  <div className='rename'>
                    <img src={url} className='small-icon'/>
                    <span className='drop-text'>Copy URL Link</span>
                  </div>
                  <div className='dropdown-element'>
                      <div className='ele'></div>
                    </div>
                    <div className='rename'>
                  <img src={headphone} className='small-icon'/>
                  <span className='drop-text support'>Share to Support</span>
                </div>
                </div>
                <div className='export-dropdown'  style={{display:(exe)?'flex':'none'}}>
                  <div className='add-head'>
                    <span className='value'>EXPORT</span>
                  </div>
                  <div className='rename'>
                  <span className='export-text'>CSV</span>
                    <img className='small-icon' src={export_vector}/>
                    <span className='drop-text'>As  CSV</span>
                  </div>
                  <div className='rename'>
                    <span className='export-text xls'>XLS</span>
                    <img className='small-icon' src={export_vector}/>
                    <span className='drop-text'>As XLS</span>
                  </div>
                  <div className='rename'>
                    <span className='export-text pdf'>PDF</span>
                    <img className='small-icon' src={export_vector}/>
                    <span className='drop-text'>As PDF</span>
                  </div>


                </div>
                <div className='setting-bar' style={{display:(setting)?'flex':'none'}}>
                  <div className='setting-head'>
                    <div className='set-bar'>
                    <span className='set-text'>Setting</span>
                    </div>
                    
                    <div className='close-bar' onClick={handleSetting}>
                          <img src={close_icon} />
                    </div>
                  </div>
                   <div className='setting-body'>
                      <div className='set-frame'>
                        <div className='general' >
                          <span className='general-text'>General</span>
                          <label className="toggle-switch">
                                <input type="checkbox"   onClick={handleGeneral}/>
                                <span className="toggle-slider"></span>
                            </label>

                        </div>
                        <General  state={general}/>
                        <div className='general'>
                          <span className='general-text'>Axis</span>
                          <label className="toggle-switch">
                                <input type="checkbox" onClick={handleAxie}/>
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                           <div className='axis-on' style={{display:(axis)?'block':'none'}}>
                            <div className='x'>
                              <span className='xaxis'>X-AXIS</span>
                              <div className='xaxis-title-contain'>
                                  <span className='title-head'>Title</span>
                                  <input type='text' className='input-xaxis title-head weight' placeholder='Name'/>
                              </div>
                              <div className='xaxis-font'>
                                <div className='font-frames'>
                                  <span className='title-head'>Font</span>
                                  <select className='select-font  title-head weight'>
                                    <option className=' title-head weight'>Font Name</option>
                                  </select>
                                </div>
                                <div className='size-frames'>
                                  <div className='size-contain'>
                                    <span className='size-head'>Size (px)</span>
                                  </div>
                                </div>
                                <div className='weight-frame'>
                                <select className='select-weight  title-head weight'>
                                    <option className=' title-head weight'>Weight</option>
                                  </select>
                                </div>
                                <div className='color-frame'>
                                  <div className='color-box'>
                                    <span className='title-head weight'>Color</span>
                                  </div>
                                </div>
                              </div>
                              <div className='font-context'>
                                <span className='title-head'>Font</span>
                                <select className='select-font-name  font-text'>
                                    <option className=' title-head weight'>Font Name</option>
                                  </select>
                              </div>
                              <div className='font-context'>
                                <span className='title-head'>Direction</span>
                                <select className='select-font-name pos  font-text'>
                                    <option className=' title-head weight'>Auto</option>
                                  </select>
                              </div>
                            </div>
                            <div className='x'>
                              <span className='xaxis'>Y-AXIS</span>
                              <div className='xaxis-title-contain'>
                                  <span className='title-head'>Title</span>
                                  <input type='text' className='input-xaxis title-head weight' placeholder='Name'/>
                              </div>
                              <div className='xaxis-font'>
                                <div className='font-frames'>
                                  <span className='title-head'>Font</span>
                                  <select className='select-font  title-head weight'>
                                    <option className=' title-head weight'>Font Name</option>
                                  </select>
                                </div>
                                <div className='size-frames'>
                                  <div className='size-contain'>
                                    <span className='size-head'>Size (px)</span>
                                  </div>
                                </div>
                                <div className='weight-frame'>
                                <select className='select-weight  title-head weight'>
                                    <option className=' title-head weight'>Weight</option>
                                  </select>
                                </div>
                                <div className='color-frame'>
                                  <div className='color-box'>
                                    <span className='title-head weight'>Color</span>
                                  </div>
                                </div>
                              </div>
                              <div className='font-context'>
                                <span className='title-head'>Font</span>
                                <select className='select-font-name  font-text'>
                                    <option className=' title-head weight'>Font Name</option>
                                  </select>
                              </div>
                              <div className='font-context'>
                                <span className='title-head'>Direction</span>
                                <select className='select-font-name pos  font-text'>
                                    <option className=' title-head weight'>Auto</option>
                                  </select>
                              </div>
                            </div>
                           </div>
                        <div className='general'>
                          <span className='general-text'>Borders & Colors</span>
                          <label className="toggle-switch">
                                <input type="checkbox" onClick={handleBorder}/>
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                        <div className='border-container'  style={{display:(border)?'block':'none'}}>
                          <span className='title-head'>Border</span>
                          <div className='font-context'>
                                <span className='border-head-pos'>Line Style</span>
                                <select className='select-border-name  font-text'>
                                    <option className=' title-head weight'>Default</option>
                                  </select>
                              </div>
                              <div className='font-context'>
                                <span className='border-head-pos'>Layout</span>
                                <select className='select-font-name layout-pos  font-text'>
                                    <option className=' title-head weight'>Default</option>
                                  </select>
                              </div>
                              <div className='font-context'>
                                <span className='border-head-pos'>Grid Line Style</span>
                                <select className='select-font-name grid-pos font-text'>
                                    <option className=' title-head weight'>Default</option>
                                  </select>
                              </div>
                              <span className='title-head'>Color</span>
                          <div className='font-context'>
                                <span className='border-head-pos'>Border Line Color</span>
                                <input type='color' value='#FFFFFF' className='border-color' placeholder='Choose Color'/>

                              </div>
                              <div className='font-context'>
                                <span className='border-head-pos'>Grid Line Color</span>
                                <input type='color' value='#FFFFFF' className='border-color grid-position' placeholder='Choose Color'/>
                              </div>
                              <div className='font-context'>
                                <span className='border-head-pos'>Background Color</span>
                                <input type='color' value='#FFFFFF' className='border-color' placeholder='Choose Color'/>
                              </div>
                        </div>
                        <div className='general'>
                          <span className='general-text'>Format</span>
                          <label className="toggle-switch">
                                <input type="checkbox" onClick={handleFormat}/>
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                        <div className='format-container' style={{display:(format)?'block':'none'}}>
                           <div className='xaxis-format'>
                            <div className='format-head'>
                              <span className='title-head'>X Axis</span>
                              <span className='head-green' onClick={handleSmallPop} id="pop1">Format</span>
                            </div>
                            <div className='column-axis'>
                              <span className='title-head weight'>Column</span>
                              <input type='text' className='input-column' placeholder='Date'/>
                            </div>
                            <div className='tool-axis'>
                              <span className='title-head weight'>Tooltip Label</span>
                              <input type='text' className='tool-input' placeholder='Year of Date'/>
                            </div>
                           </div>
                           <div className='xaxis-format'>
                            <div className='format-head'>
                              <span className='title-head'>Y Axis</span>
                              <span className='head-green' onClick={handlePop}>Format</span>
                            </div>
                            <div className='column-axis'>
                              <span className='title-head weight'>Column</span>
                              <input type='text' className='input-column' placeholder='Cost'/>
                            </div>
                            <div className='tool-axis'>
                              <span className='title-head weight'>Tooltip Label</span>
                              <input type='text' className='tool-input' placeholder='Total Cost'/>
                            </div>
                           </div>
                           <div className='xaxis-format'>
                            <div className='format-head'>
                              <span className='title-head'>Color</span>
                              <span className='head-green' onClick={handleSmallPop} id='pop2'>Format</span>
                            </div>
                            <div className='column-axis'>
                              <span className='title-head weight'>Column</span>
                              <input type='text' className='input-column' placeholder='Redion'/>
                            </div>
                            <div className='tool-axis'>
                              <span className='title-head weight'>Tooltip Label</span>
                              <input type='text' className='tool-input' placeholder='Redion'/>
                            </div>
                           </div>
                          
                
                        </div>
                        <div className='general'>
                          <span className='general-text'>Legend</span>
                          <label className="toggle-switch">
                                <input type="checkbox" onClick={handleLegend}/>
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                        {/* <Legend  onselect={getData} apply={apply}/> */}
              <div className='legend-container' style={{display:(legView)?'block':'none'}}>
                <div className='font-context'>
                    <span className='border-head-pos'>Legend Position</span>
                        <select className='select-border-name  font-text legend-pos' value={legPosition} onChange={handleLeg}>
                        <option className=' title-head weight'>Default</option>
                            <option className=' title-head weight'>Right</option>
                            <option className=' title-head weight'>Left</option>
                            <option className=' title-head weight'>Top</option>
                            <option className=' title-head weight'>Bottom</option>
                        </select>
                </div>
                <div className='column-axis'>
                    <span className='title-head'>Title</span>
                    <input type='text' className='input-column back' placeholder='Title Name' value={title} onChange={handleTitle}/>
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Font</span>
                        <select className='select-border-name  font-text legend-right'>
                            <option className=' title-head weight'>Default</option>
                        </select>
                </div>
                <div className='leg-filter leg'>
                <input type='checkbox' style={{width:16, height:16}} className=''/>
                            <span className='title-head-1'>Legend Filter</span>
                   </div>
                <div className='legend-check-container'>
                  <div className='leg-check-sub'>
                      <input type='radio' name="check" style={{width:14, height:14}} className='checkbox'/>
                      <span className='check-text'>Solid</span>
                  </div>
                  <div className='leg-check-sub'>
                      <input type='radio' name="check" style={{width:14, height:14}} className='checkbox'/>
                      <span className='check-text'>Monochrome</span>
                  </div>
                  <div className='leg-check-sub'>
                      <input type='radio' name="check" style={{width:14, height:14}} className='checkbox'/>
                      <span className='check-text'>Gradient</span>
                  </div>
                  <div className='leg-check-sub'>
                      <input type='radio' name="check" style={{width:14, height:14}} className='checkbox'/>
                      <span className='check-text'>Pattern</span>
                  </div>
                  
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Gradient Palette</span>
                        <select className='select-border-name  font-text leg-pos'>
                            <option className=' title-head weight'>Gradient1</option>
                        </select>
                </div>
                <div className='leg-color-contain'>
                       <span className='border-head-pos'>Colors</span>
                       <div className='leg-color-bar'>
                       <input type='color' value='#FFFFFF' className='border-color-leg color-pos' placeholder='Choose Color'/>
                       <input type='color' value='#FFFFFF' className='border-color-leg border color-pos' placeholder='Choose Color'/>
                       </div>
                </div>
                

              </div>
                        <div className='general'>
                          <span className='general-text'>Threshold</span>
                          <label className="toggle-switch">
                                <input type="checkbox" onClick={handleThreshold}/>
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                        <Threshold state={thres}/>
                        <button className='setting-button' onClick={handleApply} onDoubleClick={handleDouble}>Apply</button>
                      </div>
                      
                   </div>
                   
                </div>
                <div className='chart-type-bar' style={{display:(chart)?'flex':'none'}}>
                  <div className='chart-head'>
                    <div className='chart-sub-head'>
                    <span className='set-text'>Chart Type</span>
                    </div>
                    <div className='close-bar' >
                          <img src={close_icon} onClick={handleChart}/>
                    </div>
                    
                  </div>
                  <div className='pie-container'>
                    <span className='pie-head'>Pie</span>
                    <div className='pie-box'>
                          <div className='chart-box' 
                          onClick={() => {((state.radius)? setPieradius(state.radius):setPieradius(['40%', '70%'])),
                          (chartType==='funnel')?setdatas(data):''
                            setType('pie'),setItemStyle({}),setFunbar({})}}>
                            <img src={pie} className='chart-css'/>
                            {mouse && <span className='hover-msg'>Donut Chart</span>}
                          </div>
                          <div className='chart-box' onClick={() => {setPieradius(radius)
                          setType('pie'),setItemStyle({})}} >
                            <img src={pie_full} className='chart-css'/>
                            {mouse && <span className='hover-msg'>Donut Chart</span>}
                          </div>
                    </div>
                  </div>
                  <div className='line-container'>
                    <span className='pie-head'>Line</span>
                    <div className='line-box'>
                          <div className='chart-box' onClick={() => {setType('line') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1),setSmooth(false),setAreaStyle(false)}}>
                            <img src={line1} className='chart-css'/>
                          </div>
                          <div className='chart-box' onClick={() => {setType('line') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1)}}>
                            <img src={line2} className='chart-css'/>
                          </div>
                          <div className='chart-box' onClick={() => {setType('line') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1), setSmooth(true)}}>
                            <img src={line3} className='chart-css'/>
                          </div>
                          <div className='chart-box' onClick={() => {setType('line') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1)}}>
                            <img src={line4} className='chart-css'/>
                          </div>
                    </div>
                  </div>
                  <div className='bar-container'>
                    <span className='pie-head'>Bar</span>
                    <div className='bar-box'>
                    <     div className='chart-box' onClick={() => {setType('bar') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1),setItemStyle(itemStyle1)}}>
                            <img src={bar1} className='chart-css'/>
                          </div>
                          <div className='chart-box' onClick={() => {setType('bar') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1),setItemStyle(itemStyle1)}}>
                            <img src={bar2} className='chart-css'/>
                          </div>
                          <div className='chart-box' onClick={() => {setType('bar') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1),setItemStyle(itemStyle1)}}>
                            <img src={bar3} className='chart-css'/>
                          </div>
                    </div>
                  </div>
                  <div className='bar-container chart-pos'>
                    <span className='pie-head'>Column</span>
                    <div className='bar-box'>
                    <     div className='chart-box' >
                            <img src={column1} className='chart-css'/>
                          </div>
                          <div className='chart-box'>
                            <img src={column2} className='chart-css'/>
                          </div>
                          <div className='chart-box'>
                            <img src={column3} className='chart-css'/>
                          </div>
                    </div>
                  </div>
                  <div className='bar-container chart-pos2'>
                    <span className='pie-head'>Area</span>
                    <div className='bar-box'>
                    <     div className='chart-box' onClick={() => {setType('line') 
                              setXaxis(xaxis1) ,setyaxis(yaxis1),setAreaStyle(true)}}>
                            <img src={arae1} className='chart-css' />
                          </div>
                          <div className='chart-box'>
                            <img src={arae2} className='chart-css'/>
                          </div>
                          <div className='chart-box'>
                            <img src={arae3} className='chart-css'/>
                          </div>
                    </div>
                    <button className='setting-button but-pos'>Apply</button>
                  </div>
                  
                </div>
                <div style={{display:(pop)?'block':'none'}}>
            <div className='format'>
                <div className='format-head-contain'>
                    <span className='for-head'>Format Column</span>
                    <img className='close' src={close_icon} onClick={handlePop}/>
                </div>
                <div className='format-frame-pop'>
                    <div className='sub-frame'>
                        <div className='for-input'>
                            <span className='popup-title'>Column Name</span>
                            <input type='text' className='pop-input' placeholder='Cost'/>
                        </div>
                        <div className='for-input'>
                            <span className='popup-title'>Datatype</span>
                            <input type='text' className='pop-input' placeholder='Currency'/>
                        </div>
                        <div className='check-frame'>
                            <input type='checkbox' style={{width:16, height:16}} className='checkbox'/>
                            <span className='title-head-1'>Use this format throughout the chart</span>
                        </div>
                        <div className='for-input'>
                            <span className='popup-title'>Currency Symbol</span>
                            <select className='pop-input title-head-1' placeholder='Currency'>
                                <option >Currency</option>
                            </select>
                        </div>
                        <div className='for-input'>
                            <span className='popup-title'>Units</span>
                            <select className='pop-input title-head-1' placeholder='Currency'>
                                <option >Auto (User Locale Specific)</option>
                            </select>
                        </div>
                        <div className='for-input'>
                            <span className='popup-title'>Decimal Places</span>
                            <select className='pop-input title-head-1' placeholder='Currency'>
                                <option >2</option>
                            </select>
                        </div>
                        <div className='for-input'>
                            <span className='popup-title'>Negative Number Display</span>
                            <select className='pop-input title-head-1' placeholder='Currency'>
                                <option >With Negative Sign. Eg: -$10</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                
                
                <button className='pop-button ok'>OK</button>
                
                
            </div>
            </div>
            <FormatPop state={smallPop} place1={place1} place2={place2} child={getData}/>
            <Filter state={filter} child={getFilter}/>
           
      
                {/* <Format state={pop} set={() => handlePop}/> */}
                
            </div>
            
            <div className='rewop'>rewop</div>
        </>
    )
}


export default Summa;