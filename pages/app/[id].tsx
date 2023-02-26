import parseAPI from '@/services/parseAPI'

const Session = ({user}:any) => {
    console.log(user)


    return (
        <>
        {'user'}
        </>
    )
}

export async function getServerSideProps(context: any) {
    const sessionUser = await (await parseAPI.get('users/me', null, undefined, {'X-Parse-Session-Token': context.query.id})).data
    return {
      props: {
        user: sessionUser
      }, // will be passed to the page component as props
    }
  }


export default Session