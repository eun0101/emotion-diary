import Header from "../components/Header.jsx";
import Button from "../components/button.jsx";
import DiaryList from "../components/DiaryList.jsx";
const Home = () => {
    return (
        <div>
           <Header title={"20124년 2월"}
           leftChild={<Button text={"<"}/>}
           rightChild={<Button text={">"}/>}
           ></Header>
            <DiaryList></DiaryList>
        </div>
    );
}

export default Home;