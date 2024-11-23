import { Post } from './Post';

export function PostList(){

    const posts = [
        {id: 0, header: "Я попробовал арбуз, а старий бог мой хук на вкус", description: "zxc", image: "/static/5.jpg", author: "Новий пользиватель чата"},
        {id: 1, header: "Пищи нет вкуснее каши, старий бог синок ...", description: "где лазери??", image: "/static/2.jpg", author: "Новий пользиватель чата"},
        {id: 2, header: "Че парни, неделю не играл, норм играю??", description: "ОТВЕЧАААЙТЕ МНЕ!!!!!", image: "/static/3.jpg", author: "Старий бог"},
        {id: 3, header: "Сегодня мер разрушил ферму, старий бог глотает ...", description: "zxc", image: "/static/4.jpg", author: "Новий пользиватель чата"}
    ]

    return (
        <div>
            {posts.map((post) => {
                return <Post header = {post.header} description={post.description} image={post.image} author={post.author}> </Post>
                }
            )}
        </div>
    )
}