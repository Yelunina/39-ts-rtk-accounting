import UpdateUser from './UpdateUser'
import UserData from './UserData'

const Profile = () => {
  const hadleClickLogout = () => {
    // TODO logout
    alert('logout')
  }
  return (
    <div>
      <UserData />
      <button onClick={hadleClickLogout}>Logout</button>
      <UpdateUser />
    </div>
  )
}

export default Profile