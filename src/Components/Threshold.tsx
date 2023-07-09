import '../Outlet.css'
import './Threshold.css'

function Threshold(props: { state: any }){
    return(
        <>
         <div className='threshold-bar' style={{display:(props.state)?'block':'none'}}>
            <div className='threshold-head'>
                <span className='thres-head'>Scope 1</span>
                <div className='remove-contain'>
                    <span className='red-text'>Remove</span>
                </div>
            </div>
            <div className='thres-body'>
            <div className='font-context'>
                    <span className='border-head-pos'>Scope</span>
                        <select className='select-border-name  font-text thres-right'>
                            <option className=' title-head weight'>Entire Tab</option>
                        </select>
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Reference Axis</span>
                        <select className='select-border-name  font-text thres-left col'>
                            <option className=' title-head weight'>Sum (Cost)</option>
                        </select>
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Value</span>
                        <div className='double-contain font-text'>
                        <select className='double-select'>
                            <option className='title-head weight'>Constant</option>
                        </select>
                        </div>
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Name</span>
                    <input type='text' className='select-border-name  font-text thres-right' placeholder='Enter Name'/>
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Formatting</span>
                        <select className='select-border-name  font-text'style={{right:40}}>
                            <option className=' title-head weight'>Default</option>
                        </select>
                </div>
                <div className='font-context'>
                    <span className='border-head-pos'>Color</span>
                    <input type='color' value='#FFFFFF' className='border-color grid-position' placeholder='Choose Color' style={{left:-10}}/>
                </div>
            <button className='thres-button' name='Add Scope'>Add Scope</button>
            </div>
         </div>
        </>
    )
}

export default Threshold