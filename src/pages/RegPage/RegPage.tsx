import { useForm } from "react-hook-form"
import { useUserContext } from "../../context/userContext";

interface IRegForm{
    username: string;
    email: string;
    password: string;
    image: string;
}
export function RegPage(){

    const { register: registerUser, formState, handleSubmit } = useForm <IRegForm>({
        mode: "onSubmit",
    }) 

    const { user, register} = useUserContext()

    function onSubmit(data: IRegForm){
        register(data.username, data.email, data.image, data.password)
    }

    return (
        <div className="login-page">
            <h1 className="login-header">RegPage</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input type="text" placeholder="Entred name" {...registerUser("username", {
                    required: { value: true, message: "Name is required" },
                    minLength: { value: 3, message: "This field should be more than 3 symbols"},
                    maxLength: { value: 30, message: "This field should be less than 30 symbols"}
                })}/>
                <p>{formState.errors?.username?.message}</p>

                <input type="email" placeholder="Entred email" {...registerUser("email", {
                    required: { value: true, message: "Name is required" },
                })}/>
                <p>{formState.errors?.email?.message}</p>

                <input type="password" placeholder="Entred password" {...registerUser("password", {
                    required: { value: true, message: "Password is required" }, 
                    minLength: { value: 8, message: "This field should be more than 8 symbols"},
                    maxLength: { value: 16, message: "This field should be less than 16 symbols"}
                })}/>
                <p>{formState.errors?.password?.message}</p>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}