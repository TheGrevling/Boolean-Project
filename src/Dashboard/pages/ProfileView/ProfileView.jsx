import ProfileSideMenu from './Components/ProfileSideMenu/ProfileSideMenu'
import './ProfileView.css'



function ProfileView() {


  return (
    <div className='page'>
      <div className='page-row'>
        <ProfileSideMenu/>
        <div className='profile-view'>
          <div className='profile-container'>
            <div className='profile-container-top-bar'>
              Profile
            </div>
            <div className='profile-container-padding'>
              This is a test
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileView