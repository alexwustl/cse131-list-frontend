import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface GlobalNavProps {
    id: string,
    userToken: string,
    username: string,
    fullName: string,
    refreshUserInfo(): void,
    goHome(): void,
    logout(inactivity: boolean): Promise<boolean>,
    disableAudioAlerts: boolean
}

const GlobalNav: React.FC<GlobalNavProps>  = ({id, userToken, username, fullName, disableAudioAlerts, refreshUserInfo, goHome, logout}) => {

    const [showModal, setShowModal] = useState(false);

    const logoutWrapper = async () => {
        const result = await logout(false)
        setShowModal(false);
        return result;
    }
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-secondary border-bottom border-light flex-column flex-sm-row">
                <h1 className="navbar-brand mr-auto mb-0 ml-sm-0 ml-auto" style={{cursor: 'pointer'}} onClick={goHome}>Virtual Lists</h1>
                {id && <button className="btn btn-primary" type="button" data-toggle='modal' data-target='#userUpdateModal' aria-label="Open User Settings" onClick={()=>setShowModal(true)} >{username}</button> }
            </nav>
            {showModal && <Sidebar id={id} userToken={userToken} fullName={fullName} disableAudioAlerts={disableAudioAlerts} refreshUserInfo={refreshUserInfo} close={()=>setShowModal(false)} logout={logoutWrapper}/> }
        </React.Fragment>
    )
}
export default GlobalNav;