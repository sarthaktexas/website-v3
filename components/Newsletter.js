import { useForm } from "react-hook-form"

export default function Newsletter() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        fetch('https://api.buttondown.email/v1/subscribers', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.BUTTONDOWN_API_KEY}`
            },
            body: {
                "email": data.email,
                "notes": "Subscribed from website",
            }
        })
    };
    return (
        <>
            <form className="rounded p-4 bg-black bg-opacity-20 pointer-events-auto flex flex-col space-y-2 w-1/2" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold text-lg">Join my newsletter!</h1>
                <label htmlFor="bd-email" className=" text-white text-opacity-50">Enter your email</label>
                <input className="text-black rounded p-2 focus:ring-purple-500" ref={register} type="email" name="email" id="bd-email" placeholder="sarthak@sarthakmohanty.me" />
                <input ref={register} type="hidden" defaultValue={1} name="embed" />
                <button className="a" type="submit">Subscribe</button>
            </form>
        </>
    )
}