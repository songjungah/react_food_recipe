import { useContext } from 'react';
import './home.css';
import { GlobalContext } from '../../context/context';
import DetailItem from '../../components/detail-item/detail-item';

// 컴포넌트 이름은 대문자로 시작
// 띄어쓰기는  대문자로 표기하는 것으로 대체

export default function Home(){

    const {foodList} = useContext(GlobalContext);
    return(
        <div className='home-container'>
        {
            foodList && foodList.lenght > 0 ? (
                // 데이터가 있을 때
                foodList.map((food, idx)=>{
                    return(
                        // map에서 컴포넌트를 생성할 때 첫번재 인자를 전달
                        <DetailItem item={food} key={idx} />
                    )
                })
            ) : (
                // 데이터가 없을 때
                <div className='no-item'>
                    <p>검색하세요. pizza, banana, apple...</p>
                    <a href="https://forkify-api.herokuapp.com/phrases.html"
                    target='blank'></a>
                    <button className='guide-btn'>검색 항목 안내</button>
                </div>
            )
    }
    </div>
    )
}