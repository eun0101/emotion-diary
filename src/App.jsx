import './App.css';
import {useReducer, useRef, createContext} from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from './pages/Home';
import New from './pages/New';
import Diary  from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Button from "./components/button.jsx";
import Header from "./components/header.jsx";

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

const mockData = [
    {
        id:1,
        createDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id:2,
        createDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    }
]
function reducer(state, action){
    switch(action.type){
        case'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map(item =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
        case 'DELETE':
            return state.filter(item => String(item.id) !== String(action.id));
        default:
            return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    //새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) =>{
    dispatch({
        type:"CREATE",
        data:{
            id: idRef.current++,
            createdDate,
            emotionId,
            content,
        }
    });
    }

    //기존 일기 수정
    const onUpdate = (id, createDate, emotionId, content)=>{
        dispatch(
            {
                type: "UPDATE",
                    data: {
                        id, createDate, emotionId, content
                }
            }
        )
    }
    //기존 일기 삭제
    const onDelete = (id)=>{
        dispatch({
            type: "DELETE",
            id,
        })
    }

    const nav = useNavigate();
    const onClickButton = ()=>{
        nav("/new"); //csr 방식. 특정 조건에 따라 페이지 이동
    };

    return (
        <>

            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{
                    onCreate, onUpdate, onDelete
                }}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<NotFound/>}/>{/*  경로가 일치하지 않을 때*/}
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App
