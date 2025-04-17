import "./Editor.css";
import EmotionItem from "./EmotionItem.jsx";
import Button from "./button.jsx";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js";
import {getStringedDate} from "../util/get-stringed-date.js";



const Editor = ({initData, onSubmit})=>{
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });
    const nav = useNavigate();
    useEffect(()=>{
        if (initData){
            setInput({
                ...initData
                ,
                createdDate: new Date(Number(initData.createdDate))
            })
        }

    },[initData])
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