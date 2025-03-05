import { useForm } from "react-hook-form"
// Лучше назват IRegistrationForm
interface IForm{
    username: string;
    email: string;
    password: string;
}
export function RegPage(){

    const { register, formState, handleSubmit } = useForm <IForm>({
        mode: "onSubmit",
    }) 

    function onSubmit(data: IForm){
        // fetch('', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email: data.email,
        //         password: data.password
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        console.log(data)
    }

    return (
        // login-page?
        <div className="login-page">
            <h1 className="login-header">RegPage</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input type="text" placeholder="Entred name" {...register("username", {
                    required: { value: true, message: "Name is required" },
                    minLength: { value: 3, message: "This field should be more than 3 symbols"},
                    maxLength: { value: 30, message: "This field should be less than 30 symbols"}
                })}/>
                <p>{formState.errors?.username?.message}</p>

                <input type="email" placeholder="Entred email" {...register("email", {
                    // Name?
                    required: { value: true, message: "Name is required" },
                })}/>
                <p>{formState.errors?.email?.message}</p>

                <input type="password" placeholder="Entred password" {...register("password", {
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