import "./Editor.css";
import EmotionItem from "./EmotionItem.jsx";
import Button from "./button.jsx";

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

const Editor = ()=>{
    const emotionId = 1;

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type="date"/>
            </section>

            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item)=> (
                        //현재 선택 된 이모션 ID와 같은 값이라면 true 아니라면 false
                        <EmotionItem key={item.emotionId}
                                     {...item}
                                     isSelected={item.emotionId === emotionId}/>
                    ))}
                </div>
            </section>

            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea placeholder="오늘은 어땠나요?"></textarea>
            </section>

            <section className="button_section">
                <Button text={"취소하기"}/>
                <Button text={"작성 완료"} type={"POSITIVE"}/>
            </section>
        </div>
    );
}

export default Editor