import { createContext, ReactNode, useState } from "react"
import { useContext } from "react";
import { IPost } from "../hooks/usePosts";

interface ILikesPostProps{
    likesPost: IPost[];
    addLikesItem: (post: IPost) => void;
    deleteLikesItem: (id: number) => void;
    search: string;
    setSearch: (value: string)=> void;
}

const valueInit: ILikesPostProps = {likesPost: [], addLikesItem: () => {}, search: '', setSearch: (value: string) => {}, deleteLikesItem: () => {}};
export const likedPostContext = createContext<ILikesPostProps>(valueInit)

interface likedContextProps{
    children: ReactNode;
}

export function useLikedContext() {
    return useContext(likedPostContext)
}

export function LikedContextProvider(props: likedContextProps){
    const [likesPost, setLikesPost] = useState<IPost[]>([]);
    const [search, setSearch] = useState("");
    const {children} = props;

    function addLikesItem(post: IPost){
        setLikesPost([...likesPost, post])
    }

    function deleteLikesItem(id: number){
        const isLiked = likesPost.filter((post) => {return post.id !== id})

        setLikesPost(isLiked)
    }

    return (
        <likedPostContext.Provider value={{likesPost, addLikesItem, search, setSearch, deleteLikesItem}}>
            {children}
        </likedPostContext.Provider>
    )
}