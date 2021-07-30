import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab} = props
  const {tabId, displayText} = tabDetails
  const clicked = () => {
    updateActiveTab(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={clicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
