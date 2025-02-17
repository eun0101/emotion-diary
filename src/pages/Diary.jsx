import {useParams, useSearchParams} from "react-router-dom";

const Diary = () => {
    //1.URL 파라미터 방식
    const params= useParams();
    console.log(params);

    //2. Query string 방식
    // const [param, setParams] = useSearchParams();

    //2. Quary string (감정 일기장에서는 다루지 않음)
    return (
        <div>
            {params.id}번 Diary
        </div>
    );
}

export default Diary;