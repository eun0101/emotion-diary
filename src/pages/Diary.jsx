import {useParams, useSearchParams, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringedDate} from "../util/get-stringed-date.js";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Diary = () => {
    //1.URL 파라미터 방식
    const params= useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 다이어리`);

    const curDiaryItem = useDiary(params.id);

    if (!curDiaryItem) {
        return <div>로딩중</div>;
    }

    const {emotionId, createdDate, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    //2. Query string 방식
    // const [param, setParams] = useSearchParams();

    //2. Quary string (감정 일기장에서는 다루지 않음)
    return (
        <>
            <Header title={`${title} 기록`}
                    leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로가기"}/>}
                    rightChild={<Button onClick={()=>nav(`/edit/${params.id}`)} text={"수정하기"}/>}
            ></Header>
            <Viewer emotionId={emotionId} content={content}/>
        </>
    );
}

export default Diary;