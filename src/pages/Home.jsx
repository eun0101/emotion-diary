import {useState, useContext} from "react";
import {DiaryStateContext} from "../App.jsx";
import Header from "../components/Header.jsx";
import Button from "../components/button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const getMonthyData = (pivotDate, data) =>{
    const beginTime = new Date(pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0).getTime();

    const endTime = new Date(pivotDate.getFullYear(),
        pivotDate.getMonth() +1,
        0, //이번달의 마지막 날짜
        23,
        59,
        59).getTime();

    return data.filter(item => beginTime <= item.createdDate && item.createdDate <= endTime);
}
const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    usePageTitle("감정 일기장");

    const monthlyData = getMonthyData(pivotDate, data);

    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };
    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        )
    };


    return (
        <div>
           <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
               leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
               rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
           ></Header>
            <DiaryList data={monthlyData}></DiaryList>
        </div>
    );
}

export default Home;