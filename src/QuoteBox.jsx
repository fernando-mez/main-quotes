import React from "react"
import quotes from './assets/json/quotes.json'


const QuoteBox = ({btnClick,rColor,rColorC,nRandom}) => {

    rColor=rColor.toString(16)
    rColorC=rColorC.toString(16)
    
    const cardStyle= {
        color: `#${rColor}`,
        backgroundColor: `#${rColorC}`
    }

    const btnStyle={
        backgroundColor: `#${rColor}`,
        color: `#${rColorC}`
    }

    const bgColor = {
        backgroundColor: `#${rColor}`
      }
    console.log(rColor,rColorC,nRandom)

    return (

        <div class="Viewport" style={bgColor}>
            <div className="cardBx" style={cardStyle}>
                <p>
                    <p className="quote">
                    <i class='bx bxs-chevron-right-circle'></i>

                    {quotes[nRandom].quote}
                    </p>

                    <p>{quotes[nRandom].author}</p>
                </p>
                {/* <button className='btn' style={btnStyle} onClick={btnClick}>{'>'}</button> */}
                <button onClick={btnClick} className='btn' style={btnStyle}><i class='bx bxs-chevron-right-circle'></i></button>

            </div>



        </div>

    )
}

export default QuoteBox