import '../Outlet.css'

function General(props: { state: any }){
    return(
        <>
        <div className='general-on'  style={{display:(props.state)?'block':'none'}}>
                        <div className='title'>
                          <span className='title-head'>Title</span>
                          <input type='text'placeholder='Tile Name' className='input-field title-head'/>
                        </div>
                        <div className='description'>
                          <span className='title-head'>Description ( Optional )</span>
                          <input type='text' placeholder='Add some comments' className='input-area title-head weight'/>
                        </div>
                        <div className='display-unknown'>
                          <span className='title-head'>Display 'Unknown' value as:</span>
                          <input type='text' placeholder='Unknown' className='input-unknown'/>
                        </div>
                        <div className='chart-contain'>
                        <span className='title-head'>Chart Effect</span>
                        <input type='text' placeholder='Default' className='input-unknown'/>
                        </div>
                        <div className='show'>
                          <input type='radio' />
                          <span className='title-head weight2'>Show Missing Values</span>
                        </div>
                        </div>
        </>
    )
}

export default General