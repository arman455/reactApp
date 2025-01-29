import { createContext, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import { MainPage } from '../pages/MainPage/MainPage';
import { IPost } from '../hooks/usePosts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PostListPage } from '../pages/PostListPage/PostListPage';
import { PostPage } from '../pages/PostPage/PostPage';
import { Search } from './Search/Search';

interface ILikesPostProps{
    likesPost: IPost[];
    addLikesItem: (post: IPost) => void;
    deleteLikesItem: (id: number) => void;
    search: string;
    setSearch: (value: string)=> void;
}

const valueInit: ILikesPostProps = {likesPost: [], addLikesItem: () => {}, search: '', setSearch: (value: string) => {}, deleteLikesItem: () => {}};
export const likedPostContext = createContext<ILikesPostProps>(valueInit)

export function App(){
    
    useTitle("Stariy_Bog")

    const [likesPost, setLikesPost] = useState<IPost[]>([]);
    const [search, setSearch] = useState("");

    function addLikesItem(post: IPost){
        setLikesPost([...likesPost, post])
    }

    function deleteLikesItem(id: number){
        const isLiked = likesPost.filter((post) => {return post.id !== id})

        setLikesPost(isLiked)
    }

    return (
        
        <likedPostContext.Provider value={{likesPost, addLikesItem, search, setSearch, deleteLikesItem}}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<div className='mainpage'><Layout></Layout></div>}>
                        <Route path="/" element={<MainPage></MainPage>}></Route>
                        <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                        <Route path="/search" element={<Search></Search>}></Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </likedPostContext.Provider>
    )
}