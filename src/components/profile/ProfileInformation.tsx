import React from 'react'
import ChangeInformation from './ChangeInformation';
import ChangePassword from './ChangePassword';

const ProfileInformation = () => {
    const [data, setData] = React.useState('info');
  
  return (
    <div>
        <div>
            <button onClick={() => setData('password')}>Password</button>
            <button onClick={() => setData('info')}>Info</button>
        </div>
        <div>
            {
                data === 'info' ? <ChangeInformation /> :  <ChangePassword /> 
            }
        </div>
        
        

    </div>
  )
}

export default ProfileInformation