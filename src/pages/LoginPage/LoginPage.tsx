import { useForm } from "react-hook-form"

import './LoginPage.css'
// лучше назвать ILoginForm
interface IForm{
    email: string;
    password: string;
}
export function LoginPage(){

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
        <div className="login-page">
            <h1 className="login-header">Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input type="email" placeholder="Entred email" {...register("email", {
                    required: { value: true, message: "Email is required" }, 
                })} />
                <p>{formState.errors?.email?.message}</p>

                <input type="password" placeholder="Entred password" {...register("password", {
                    required: { value: true, message: "Password is required" }, 
                    minLength: { value: 8, message: "This field should be more than 7 symbols"},
                    maxLength: { value: 16, message: "This field should be less than 30 symbols"}
                })}/>
                <p>{formState.errors?.password?.message}</p>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

