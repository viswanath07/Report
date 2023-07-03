import './SideBar.css'
import lead_icon from './assets/Leads.svg'
import deals_icon from './assets/Deals.svg'
import outer_icon from './assets/outer.svg'
import call_icon from './assets/contact.svg'
import company_icon from './assets/Companies.svg'
import item_icon from './assets/Items.svg'
import quote_icon from './assets/Quotes.svg'
import calender from './assets/Calendar.svg'
import reports from './assets/Reports.svg'
import setting from './assets/Settings.svg'


function SideBar(){
    return(
        <>
            <div className='side-bar'>
            <div className='side-container'>
                <div className='navbar lead'>
                <img src={lead_icon} className='icons'></img>
                    <span className='font text1'>Leads</span>
                    
                </div>
                <div className='navbar deals'>
                    <img src={deals_icon} className='icons'></img>
                    <span className='font text2'>Deals</span>
                </div>  
                <div className='navbar contacts'>
                    <img src={call_icon} className='icons'></img>
                    <img src={outer_icon} className='icons outer'></img>
                    <span className='font text3'>Contacts</span>
                </div>
                <div className='navbar company'>
                    <img src={company_icon} className='icons'/>
                    <img src={outer_icon} className='icons outer'/>
                    <span className='font text4'>Companies</span>
                </div>
                <div className='navbar item'>
                    <img src={item_icon} className='icons'/>
                    <span className='font text5'>Items</span>
                </div>
                <div className='navbar quotes'>
                    <img src={quote_icon} className='icons'/>
                    <span className='font text6'>Quotes</span>
                </div>
                <div className='navbar calender'>
                    <img src={calender} className='icons'></img>
                    <span className='font text7'>Calender</span>
                </div>
                <div className='navbar reports'>
                    <img src={reports} className='icons'></img>
                    <span className='font text8'>Reports</span>
                </div>
                <div className='navbar setting'>
                    <img src={setting} className='icons'></img>
                    <span className='font text9'>Settings</span>
                </div>
            </div>
         </div>
         <div className='rewop'>rewop</div>
        </>
    )
}


export default SideBar