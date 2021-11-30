import marketplace from "../marketplace.png"


const Section4 = () => {
    return (
        <div className="block4-main">
            <div className="block4-left">
                <div className="static4-header">Unlocking a new asset class</div>
                <h3 className="static3-subheader">Pipe gives institutional investors access to the first trading platform for employment contracts. You can choose the type of contract you'd like to purchase and adjust your risk profile accordingly. Employment contracts are batched together and offered by the firm.</h3>
                {/* <h3 className="static3-subheader">Gain exposure and trade salaries on our exchange platform if you're an investor. </h3> */}
            </div>
            <div className="block4-right">
                <img id="section4-image" src={marketplace} alt="" />
            </div>
        </div>
    )
}

export default Section4