import neverWaitAgain from "../never-wait-again.png"


const Section3 = () => {
    return (
        <div className="block3-main">
            <div className="block3-left">
                <img id="section3-image" src={neverWaitAgain} alt="" />
            </div>
            <div className="block3-right">
                <div className="static3-header">Never let your employees wait for that next paycheck again</div>
                <h3 className="static3-subheader">Give control back to your employees by providing them with access to their future salary at no cost to you. Use our calculator below to help.</h3>
                {/* <h3 className="static3-subheader">Give control back to your employees by providing them the option to get paid as early as they want for a slight discount. Use our calculator below to help.</h3> */}
            </div>
        </div>
    )
}

export default Section3
