const Notification = (props) => {
    const { notificationMessage, updateNotificationMessage} = props;

    const handleClick = () => {
        updateNotificationMessage(null);
    }

    return(
        notificationMessage && <div className="notification is-warning"><button onClick={handleClick} className="delete"></button>{notificationMessage}</div>
    )
}

export default Notification;