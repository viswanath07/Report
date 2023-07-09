import { useState } from 'react'
import '../Outlet.css'


function Legend(props){


    const [legPosition,setLegPosition]=useState("")
    const [title,setTitle]=useState("")

    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleLeg(e){
        
        setLegPosition(e.target.value)

    }
    function handleSelect(e){
        e.preventDefault()    
            props.onselect(legPosition)
    }

    // (props.apply)?props.onselect(legPosition):''
    

    return(
        <>
           <div className='legend-container'>
                <div className='font-context'>
                    <span className='border-head-pos'>Legend Position</span>
                        <select className='select-border-name  font-text legend-pos' value={legPosition} onChange={handleLeg} onClick={handleSelect}>
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
                
                

           </div>
        </>
    )
}


export default Legend