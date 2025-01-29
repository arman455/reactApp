import { useContext, useRef, useState } from "react"
import { usePosts } from "../../hooks/usePosts"
import { ModalWindow } from "../ModalWindow/ModalWindow"

import "./Search.css"
import { SearchPost } from "../SearchPost/SearchPost"
import { likedPostContext } from "../App"

export function Search(){

    const [isModalOpen, setIsModalOpened] = useState<boolean>(false)
    const modalContainerRef = useRef<HTMLDivElement | null>(null)
    const {posts} = usePosts()
    const { setSearch, search } = useContext(likedPostContext)

    function inputOnFocus(){
        setIsModalOpened(true)
    }

    return(
        <div ref={modalContainerRef}>
            <input className="input" type="text" placeholder="Search posts..." onChange={(event)=> {setSearch(event.target.value)}} onFocus={inputOnFocus} onClick={(event) => {event.stopPropagation()}}/>
            { isModalOpen === true 
                ?
                <ModalWindow className="search-modal" allowModalCloseOutside={true} onClose={()=>{setIsModalOpened(false)}}
                container={(modalContainerRef.current) ? modalContainerRef.current : undefined}>
                    <div>
                        <ul>
                            {posts.map((post) => {
                                return (search === '' || post.title.toLowerCase().includes(search.toLowerCase())) ? (
                                    <li key={post.id} onClick={()=>{setIsModalOpened(false)}}>
                                        <SearchPost
                                            id={post.id}
                                            title={post.title}
                                            social_img={post.social_image}
                                        ></SearchPost>
                                    </li>
                                ) : null
                            })}
                        </ul>
                    </div>
                </ModalWindow> : null
            }
        </div>
    )
}