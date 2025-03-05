import { useContext, useRef, useState } from "react"
import { usePosts } from "../../hooks/usePosts"
import { ModalWindow } from "../ModalWindow/ModalWindow"
import { likedPostContext } from "../../context/likedContext"
import { SearchPost } from "../SearchPost/SearchPost"

import "./Search.css"

export function Search(){

    const [isModalOpen, setIsModalOpened] = useState<boolean>(false)
    const modalContainerRef = useRef<HTMLDivElement | null>(null)
    // loading, error обрабатываем тоже
    const {posts} = usePosts()
    // хук контекста
    const { setSearch, search } = useContext(likedPostContext)

    function inputOnFocus(){
        setIsModalOpened(true)
    }

    return(
        <div ref={modalContainerRef}>
            <input className="input" type="text" placeholder="Search posts..." onChange={(event)=> {setSearch(event.target.value)}} onFocus={inputOnFocus} onClick={(event) => {event.stopPropagation()}}/>
            {/* условие модалки можно упростить до */}
            {/* isModalOpen && <ModalWindow>...content</ModalWindow> */}
            {/* можешь почитать: логическое И && */}
            { isModalOpen === true 
                ?
                <ModalWindow className="search-modal" allowModalCloseOutside={true} onClose={()=>{setIsModalOpened(false)}}
                container={(modalContainerRef.current) ? modalContainerRef.current : undefined}>
                    <div>
                        <ul>
                            {posts.map((post) => {
                                return (search === '' || post.name.toLowerCase().includes(search.toLowerCase())) ? (
                                    <li key={post.id} onClick={()=>{setIsModalOpened(false)}}>
                                        <SearchPost
                                            id={post.id}
                                            name={post.name}
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