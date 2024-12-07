import { PostList } from '../PostList/PostList'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import "./MainPage.css"
export function MainPage(){
    return (
        <div className='mainpage'>
            <Header></Header>
            <div className='maindiv'>
                <PostList></PostList>
            </div>
            <Footer></Footer>
        </div>
    )
}