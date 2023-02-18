import './index.css'

const HistoryItem = props => {
  const {historyListDetails, deleteHistoryList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListDetails

  const deleteItem = () => {
    deleteHistoryList(id)
  }

  return (
    <li className="list-item">
      <div className="list">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p className="title">{title}</p>
        <p className="domain-Url">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default HistoryItem
