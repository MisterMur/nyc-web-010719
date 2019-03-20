import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.eatenSushi);
  // debugger

  const inBetweenFunction = () => {
    props.sushiClick(props.id)
  }
  return (
    <div className="sushi">
      <div className="plate"
           onClick={inBetweenFunction}>
        {
          /* Tell me if this sushi has been eaten! */
          props.eatenSushi.find(sushi=>sushi.id===props.id) ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
