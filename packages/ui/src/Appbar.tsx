// import { Avatar } from "./Avatar.js"
export const Appbar = () => {
    return <div className="p-4 ">
        <div>
            <div className="flex justify-between ">
                <div className="flex items-center gap-3">
                    <Location_Logo />
                    <div className="">
                        <h1 className="font-bold text-red-600">Restaurant Name</h1>
                        <p className="text-red-600 italic ">Restaurant Location</p>
                    </div>
                </div>
                <div>
                    {/* <Avatar /> */}
                </div>
            </div>
        </div>
        <div>

        </div>

    </div>
}

const Location_Logo = () => {
    return <div>
        <svg width="28" height="32" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6569 14.6333L12.5663 15.7494C11.7625 16.5658 10.7196 17.6155 9.43705 18.8986C8.6357 19.7005 7.36431 19.7004 6.56305 18.8984L3.35551 15.6695C2.95239 15.2599 2.61495 14.9145 2.34314 14.6333C-0.781047 11.4001 -0.781047 6.15805 2.34314 2.92488C5.46733 -0.308292 10.5327 -0.308292 13.6569 2.92488C16.781 6.15805 16.781 11.4001 13.6569 14.6333ZM10.2971 9.04026C10.2971 7.72732 9.26864 6.663 8.00001 6.663C6.73137 6.663 5.70289 7.72732 5.70289 9.04026C5.70289 10.3531 6.73137 11.4175 8.00001 11.4175C9.26864 11.4175 10.2971 10.3531 10.2971 9.04026Z" fill="#FF0000" />
        </svg>
    </div>
}