import Button from "./Button"

const Waitlist = ({ title }) => {
    return (
            <div className='waitlist-container'>
                <div className='waitlist-container-inner'>
                <div className='wailist-container-inner-animation'>
                    <div className='wrapper'> 
                        <div className='static-txt'>Pay upfront salary to your employees every </div>
                        <ul className='dynamic-txts'>
                            <li><span>month</span></li>
                            <li><span>quarter</span></li>
                            <li><span>week</span></li>
                        </ul>
                    </div>
                </div>
                    <h3 className="static-subheader">We’re a capital generative marketplace that enables companies to provide upfront salary for their employees at zero cost.</h3>
                    <Button />
                </div>
            </div>
    )
}

export default Waitlist
