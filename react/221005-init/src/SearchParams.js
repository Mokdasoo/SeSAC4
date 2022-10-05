import { useLocation, useSearchParams, useNavigate } from "react-router-dom";

const SearchParams = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.pathname.split('/')[2];
    console.log(name);
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="content-wrap sesac">
            <p>학생의 이름은 <span className="name">{name}</span> 입니다.</p>
            <p>실제 이름은 <span className="trueName">{searchParams.get("name")}</span> 입니다.</p>
            <button onClick={()=>navigate(-1)}>이전페이지로</button>
        </div>
    );
}

export default SearchParams;