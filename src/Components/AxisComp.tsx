import '../Outlet.css'


function AxisComp(props: { state: any }){
    return(
        <>
            <div className='axis-on' style={{display:(props.state)?'block':'none'}}>
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
        </>
    )
}

export default AxisComp