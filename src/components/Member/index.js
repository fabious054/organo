import { IoMdCloseCircle } from "react-icons/io";
import './Member.css';

const Member = ({name,position,image,backgroundColor,deleteMember}) => {
    return (
        <div className='member'>
            <IoMdCloseCircle className='delete'onClick={() => deleteMember() }/>
            <div className='header'style={{backgroundColor:backgroundColor}}>
                <img src={image}alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );

}

export default Member;