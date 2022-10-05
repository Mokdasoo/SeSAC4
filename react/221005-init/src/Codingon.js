import { useLocation, useNavigate } from "react-router-dom";

const Codingon = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.pathname.split('/')[2];
    console.log(name);
    return (
        <div className="content-wrap sesac">
            <p>학생의 이름은 <span className="name">{name}</span> 입니다.</p>
            <button onClick={()=>navigate(-1)}>이전페이지로</button>
        </div>
    );
}

export default Codingon;