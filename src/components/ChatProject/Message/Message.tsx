
import { useEffect, useState } from 'react';
import { IUserLogged } from '../../../Context/UserProvider/types';
import { useUserLogged } from '../../../Context/UserProvider/useGetUser';

type messageProps = {
  userId: string;
  children: React.ReactNode;
}

const Message = ({userId, children}: messageProps) => {
  const context = useUserLogged()

  const [user, setUser] = useState <IUserLogged>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await context.getUserMessageData(userId);
        setUser(result);
      } catch (error) {
        console.log(error)
      }
    };
  
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <p>{user?.name} - {user?.role}</p>
      <p>{children}</p>
    </div>
  )
}

export default Message