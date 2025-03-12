import Header from "../components/Header.jsx";
import Button from "../components/button.jsx";
import Editor from "../components/Editor.jsx";
import Edit from "./Edit.jsx";

const New = () => {

    return (
        <div>
            <Header title={"새 일기 쓰기"}
            leftChild={<Button text={"< 뒤로 가기"}/>}></Header>

            <Editor/>
        </div>
    );
}

export default New;