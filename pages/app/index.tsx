import LayoutApp from '@/components/LayoutApp'
import useUser from '@/lib/useUser'
import axios from 'axios'

const PublicApp = () => {
  const { user } = useUser()
  

  return (
    <LayoutApp>
      <div>
        <button onClick={()=> console.log(user)}>ok</button>
        <button onClick={()=> !!user?.sessionToken ? axios({method:'get', url:'/api/user/logout'}).finally(() => window.location.href = '/app') : window.location.href = '/'}>
        {!!user?.sessionToken ?'Logout': 'Login'}</button>
      </div>
    </LayoutApp>
  )
}

export default PublicApp