import '../Outlet.css'
import close from '../assets/close.svg'


function Format(props: { state: any }){
    return(
        <>
            <div style={{display:(props.state)?'flex':'none'}}>
            <div className='format'>
                <div className='format-head-contain'>
                    <span className='for-head'>Format Column</span>
                    <img className='close' src={close} onClick={() => (props.set)}/>
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
                            <input type='checkbox' style={{width:16, height:16}}/>
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
        </>
    )
}

export default Format