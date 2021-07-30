import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const clicked = () => {
    updateActiveTab(tabId)
  }
  const activateClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activateClass}`}
        onClick={clicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
