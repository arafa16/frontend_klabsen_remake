import userNotFound from "../../assets/images/user/userNotFound.jpg";
const UserProfile = (props:any) => {
    const {dataUser} = props;

    return (
        <div>
            {/* BEGIN: Seller Report */}
                <div className="p-5 mt-4 intro-y box">
                    <div className="relative px-3">
                    <div className="w-40 mx-auto flex justify-center lg:w-auto">
                        <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit">
                        <img
                            alt="user image"
                            src={dataUser && dataUser.url_image ? `${import.meta.env.VITE_REACT_APP_API_URL+dataUser.url_image}` : userNotFound}
                            />
                        </div>
                    </div>
                    </div>
                    <div className="mx-auto mt-6 w-full lg:w-auto">
                        <div className="grid grid-cols-12 items-center">
                            <span className="truncate col-span-4">Name</span>
                            <span className="col-span-8"> : {dataUser && dataUser.name}</span>
                        </div>
                        <div className="grid grid-cols-12 mt-4">
                            <span className="truncate col-span-4">Email</span>
                            <span className="col-span-8">: {dataUser && dataUser.email}</span>
                        </div>
                        <div className="grid grid-cols-12 mt-4">
                            <span className="truncate col-span-4">Status</span>
                            <span className="col-span-8">: {dataUser && dataUser.status && dataUser.status.name}</span>
                        </div>
                    </div>
                </div>
            {/* END: Seller Report */}
        </div>
    )
}

export default UserProfile