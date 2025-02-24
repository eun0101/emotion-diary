import "./DiaryList.css";
import Button from "./button.jsx";
import DiaryItem from "./DiaryItem.jsx";
const DiaryList = ({diaryList}) => {
    return <div className={"DiaryList"}>
        <div className="menu_bar">
            <select name="" id="">
                <option value="latest">최신순</option>
                <option value="oldest">오래된 순</option>
            </select>
            <Button text={"새 일기 쓰기"} type={"POSITIVE"}></Button>
        </div>
        <div className="list_wrapper">
            <DiaryItem></DiaryItem>
        </div>
    </div>;
}

export default DiaryList;