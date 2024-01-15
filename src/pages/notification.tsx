import NotList from "../components/notificationContent/notList";


const Notification = () => {

    return(
        <>
            <h2 className="font-bold mb-3">Notification</h2>
            
                <div className="bg-greyBg p-5 ">

                <NotList />
            </div>
        </>
    )
}

export default Notification;