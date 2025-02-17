import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from './pages/Home';
import New from './pages/New';
import Diary  from "./pages/Diary";
import NotFound from "./pages/NotFound";

//최적화를 위함.
//public 폴더에서 직접 불러오면 브라우저 메모리에 캐싱되지 않음.
//assets 폴더에서 불러오면 브라우저의 메모리에 캐싱(저장)되므로, 최적화 됨.
import { getEmotionImage } from "./util/get-emotion-image";


//1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

//Link: a 태그 대체
//useNavigate: 내비게이팅 함수. 페이지 이동

//동적 경로 URL Parameter 뒤에 아이템의 id를 명시
//Query string ? 뒤에 변수명과 값 명시 (검색어 등 자주 변경되는 값을 주소로 명시)

function App() {
    const nav = useNavigate();
    const onClickButton = ()=>{
        nav("/new"); //csr 방식. 특정 조건에 따라 페이지 이동
    };

    return (
        <>
            <div className="">
                <img src={getEmotionImage(1)} alt="1"/>
                <img src={getEmotionImage(2)} alt="2"/>
                <img src={getEmotionImage(3)} alt="3"/>
                <img src={getEmotionImage(4)} alt="4"/>
                <img src={getEmotionImage(5)} alt="5"/>
            </div>

            <div className="">
                <Link to={"/"}>Home</Link>
                <Link to={"/New"}>New</Link>
                <Link to={"/diary/:id"}>Diary</Link>
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<NotFound/>}/>{/*  경로가 일치하지 않을 때*/}
            </Routes>
        </>

    );
}

export default App
