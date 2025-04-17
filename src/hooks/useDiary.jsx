import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useParams, useNavigate} from "react-router-dom";

//use 접두사를 사용하면 custom hook이 됨
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    //params.id 값 또는 data 값이 바뀔 떄 실행
    useEffect(()=>{
        const currentDiaryItem = data.find(
            (item)=> String(id) === String(item.emotionId)
        );

        if (!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav('/',{replace:true});
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return curDiaryItem;
}

export default useDiary;