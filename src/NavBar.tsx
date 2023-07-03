import search_icon from './assets/Group 463.svg'
import './NavBar.css'
import bell from './assets/Text input.svg'
import chevron from './assets/chevron-down 2.svg'

function NavBar(){
    return(
        <>
             <div className='search-container'>
            {/* <div className='searchbar'> */}
                <input type='text' className='search-bar' placeholder='search'></input>
                <img src={search_icon} className='search-icon'></img>
                <div className='search-box'>
                    {/* <span className='search-text'>Search</span> */}
                </div>
            {/* </div> */}
         </div>
         <div className='manager-container'>
                <div className='box'>
                    <div className='inside-box'>
                    <span className='destination'>Project Manager</span>
                    <span className='name'>Ivan Rards</span>
                    </div>
                    <div className='chevron'>
                        <img src={chevron} ></img>
                    </div>
                </div>
                <div className='bell-container'>
                    <img src={bell} className='bell'></img>
                </div>
            </div>
        </>
    )
}

export default NavBar