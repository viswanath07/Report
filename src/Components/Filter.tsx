import '../Outlet.css'


function Filter(props){
    return(
        <>
            <div className='filter-frame' style={{display:(props.state)?'inline-flex':'none'}}>
                <div className='filter-head-frame'>
                    <span className='filter-head'>FILTER</span>
                </div>
                <div className='view-contain'>
                    <span className='view-text'>View by</span>
                    <div className='view-frame1'>
                        <div className='view-frame2'>
                            <span className='day-name'>Day</span>
                            <span className='day-name'>Week</span>
                            <span className='day-name'>Month</span>
                            <span className='day-name'>Quarter</span>
                            <span className='day-name'>Year</span>
                        </div>
                    </div>
                </div>
                <div className='data-range'>
                    <span className='range-head'>Data Range</span>
                    <div className='sel-data'>
                    <select className='range-select'>
                        <option>From</option>
                    </select>
                    <select className='range-select'>
                        <option>To</option>
                    </select>
                    </div>
                </div>
                <div className='data-range'>
                    <span className='range-head'>Data Range</span>
                    <div className='sel-data'>
                    <select className='range-select'>
                        <option>From</option>
                    </select>
                    <select className='range-select'>
                        <option>To</option>
                    </select>
                    </div>
                </div>
                <button className='filter-button' onClick={() => {props.child(false)}}>Apply</button>

            </div>
        </>
    )
}


export default Filter