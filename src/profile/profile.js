import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; 
import './profile.css';
function Profile({fullName,bio,profession,handleName,children}) {
    return (
       <div className='prof'>
        <div className='name'>
        <h1>Full Name</h1>
        <h3>{fullName}</h3> <Button variant="info" onClick={()=>handleName(fullName)}>Full Name</Button>
        </div>
        <div className='bio'>
        <h1>Bio</h1>
        <p>{bio}</p>   
        </div>
        <div className='profession'>
        <h1>Profession</h1>
        <h3>{profession}</h3>    
        {children}
        </div>
       </div>
    )
}
export default Profile;
Profile.defaultProps = {
    fullName:"LAFFIF",
    bio:"ZATAL",
    profession:"Dawarji"
}


Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName:PropTypes.func
        
    }