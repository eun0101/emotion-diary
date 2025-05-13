import {useEffect} from "react";

const usePageTitle = (title) => {
    useEffect(()=>{
        //dom임을 나타내기 위해 관례상 $
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [])
};

export default usePageTitle;