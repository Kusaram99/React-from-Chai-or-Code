
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './components/context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <div className='p-4 bg-gray-600 text-white text-center text-2xl'>
        <h1>React with Chai and share is important</h1>
        <Login />
        <Profile />

      </div>
    </UserContextProvider>
  )
}

export default App