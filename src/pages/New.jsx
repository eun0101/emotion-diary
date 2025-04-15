import Header from "../components/Header.jsx";
import Button from "../components/button.jsx";
import Editor from "../components/Editor.jsx";
import Edit from "./Edit.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App.jsx";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    const onSubmit = (input) =>{
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );

        nav('/',{replace:true}) //홈페이지로 이동하는 동시에 뒤로가기 방지
    };
    return (
        <div>
            <Header title={"새 일기 쓰기"}
            leftChild={
                <Button onClick={()=> nav(-1)} text={"< 뒤로 가기"}/>
            }/>

            <Editor onSubmit={onSubmit}/>
        </div>
    );
}

export default New;