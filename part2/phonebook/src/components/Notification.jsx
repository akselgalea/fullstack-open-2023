const Notification = ({ notification }) => {
  if (!notification) return null

  return (
    <div className={`notification ${notification.status}`} >
      {notification.message}
    </div>
  )
}

export default Notification