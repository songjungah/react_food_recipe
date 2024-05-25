import { useContext } from 'react';
import './favorites.css';
import { GlobalContext } from '../../context/context';
import DetailItem from '../../components/detail-item/detail-item';


export default function Favorites(){
    // Context API에 있는 state를 필요한 것만 받아오고
    // 화면에 작성
    // favoritesList 에 즐겨찾기 항목이 들어있음
    // Context API 를 사용하려먼 useEffect()
    const {favoritesList} = useContext(GlobalContext);

    return(
        <div className='favorites-container'>
            {/* favoritesList 에 무언가 안담겨있으면 추가하라고 글을 표시 */}
            {/* favoritesList 에 무언가 담겨있으면 담긴 항목을 표시 */}
            {
                favoritesList && favoritesList.length > 0 ? (
                    // favoritesList 는 배열이니까 map 으로 들어있는 만큼 표시
                    favoritesList.map((item, idx)=>{
                        return(
                            <DetailItem item={item} key={idx} />
                        )
                    })
                ) : 
                <div className='no-item-style'>
                    <p>즐겨찾기에 추가된 항목이 없어요</p>
                </div>
            }
        </div>
    )
}