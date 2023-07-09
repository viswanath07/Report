import { useState } from 'react'
import '../Outlet.css'
import close_icon from '../assets/close.svg'

function FormatPop(props){
    const [pop,setPop]=useState(true)

    function handleClick(){
        props.child(false)
    }
    
    return(
        <>
            <div className='small-popup' style={{display:(props.state)?'block':'none'}}>
                <div className='small-pop-head'>
                    <span className='pop-head'>Format Column</span>
                    <img src={close_icon} onClick={handleClick} style={{width:16 ,height:16,flexShrink:0,position:'relative',left:130}}/>
                </div>
                <div className='small-body'>
                    <div className='samll-in'>
                        <div className='small-pop-frame'>
                            <span className='title-head'>Column Name</span>
                            <input type='text' className='input-pop-up' placeholder={props.place1}/>
                        </div>
                        <div className='small-pop-frame'>
                            <span className='title-head'>Datatype</span>
                            <input type='text' className='input-pop-up' placeholder={props.place2}/>
                        </div>
                    </div>
                </div>
                <button className='small-button'>Ok</button>

            </div>
        </>
    )
}

export default FormatPop