import { createContext, useState } from "react";

// https://forkify-api.herokuapp.com/api/v2
// https://forkify-api.herokuapp.com/api/v2/recipes?search=${재료명}

export const GlobalContext = createContext(null);   // useContext 로 가져다가 쓸 수 있음

// 리덕스 대신에 전역적으로 사용할 state (index.js에서 APP 컴포넌트를 감싸줘야함 > 리덕스와 유사)
export default function GlobalState({children}){
    // 검색값 state
    let [searchParam, setSearchParam] = useState("");
    // 음식리스트 state
    let [foodList, setFoodList] = useState([]);
    // 음식 상세데이터 state
    let [foodDetailData, setFoodDetailData] = useState(null);
    // 즐겨찾기 등록 리스트 state
    let [favoritesList, setFavoritesList] = useState([]);

    // 제공할 함수
    // 검색을 하면 검색명으로 get요청
    async function hSubmit(event){
        event.preventDefault();     // 부모까지 이벤트가 버블링 되는 것을 막는다(전달되는 것 막음)
        try{    // 실패할수도 있는 함수는 try{} catch(e){} 로 감싸준다
        // get 요청(REST API의 GET 요청)
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
        const information = await res.json();      // REST API 는 JSON 문자열로 전달하니까 사용할 수 있는 자료형으로 변경
        
        console.log(information);
        if(information?.data.recipes){
            setFoodList(information?.data.recipes);
            setSearchParam('');
        }
    }catch(e){
            console.log(e);
        }
    }

    return(
        <GlobalContext.Provider value={{searchParam, setSearchParam, hSubmit, foodList, setFoodList, foodDetailData, setFoodDetailData, favoritesList}}>
        {children}
      </GlobalContext.Provider>
    )
} 