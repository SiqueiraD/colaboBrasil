import LayoutApp from '@/components/LayoutApp'
import useUser from 'lib/useUser'

const PublicApp = () => {
  const { user } = useUser({
    redirectIfFound: false
  })
  

  return (
    <LayoutApp>
      <div>
        {user ? user.username : 'id'}
        <button onClick={()=> console.log(user)}>ok</button>
      </div>
    </LayoutApp>
  )
}

export default PublicApp