import "./Editor.css";
import EmotionItem from "./EmotionItem.jsx";
import Button from "./button.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    }
];

const getStringedDate = (targetDate)=>{
    // 날짜 =>YYYY-MM-DD
    let [year, month, date] = [targetDate.getFullYear(),  targetDate.getMonth() +1,  targetDate.getDate()];

    if (month < 10){
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
}


const Editor = ({onSubmit})=>{
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });
    const nav = useNavigate();
    const onChangeInput = (e) =>{

        let name = e.target.name; //입력이 들어온 요소
        let value = e.target.value; //입력된 값

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input name="createdDate"
                       value = {getStringedDate(input.createdDate)}
                       type="date"
                       onChange={onChangeInput}/>
            </section>

            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item)=> (
                        //현재 선택 된 이모션 ID와 같은 값이라면 true 아니라면 false
                        <EmotionItem onClick={()=>onChangeInput({
                                        target: {
                                            name: "emotionId",
                                            value: item.emotionId
                                        }
                                    })}
                                    key={item.emotionId}
                                     {...item}
                                     isSelected={item.emotionId === input.emotionId}/>
                    ))}
                </div>
            </section>

            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea name="content"
                          value={input.content}
                          onChange={onChangeInput}
                          placeholder="오늘은 어땠나요?"></textarea>
            </section>

            <section className="button_section">
                <Button
                    onClick={()=> nav(-1)}
                    text={"취소하기"}/>
                <Button
                    onClick={onClickSubmitButton}
                    text={"작성 완료"} type={"POSITIVE"}/>
            </section>
        </div>
    );
}

export default Editor