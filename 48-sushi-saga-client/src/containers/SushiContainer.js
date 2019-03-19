import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const displaySushi = () => {
    return props.sushis.slice(props.displayIndex, props.displayIndex + 4).map(sushi=>{
      return <Sushi handleMoneyIssue={props.handleMoneyIssue} eatenSushi={props.eatenSushi} sushiClick={props.sushiClick} {...sushi}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          displaySushi()
        }
        <MoreButton moreButtonClick={props.moreButtonClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
