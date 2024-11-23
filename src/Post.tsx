interface PostProps {
    header: string;
    description: string;
    image: string;
    author: string;
    children?: React.ReactNode;
}

export function Post(props: PostProps){
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <img width={300} height={300} src={props.image} alt="imagePost" />
            <p>{props.author}</p>
        </div>
    )
}