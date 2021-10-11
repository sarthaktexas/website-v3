import { useForm } from "react-hook-form"

export default function Newsletter() {
    const { register, handleSubmit, formState } = useForm()
    const onSubmit = async (data) => {
        fetch(`/api/newsletter?email=${data.email}`).then(
            async (res) => {
                const data = await res.json();
                if (data.error && data.error !== '') {
                    throw new Error(data.error.data);
                }
            }
        )
    };
    return (
        <>
            <form className="rounded p-4 bg-black bg-opacity-20 pointer-events-auto flex flex-col space-y-2 md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold text-lg">Join my newsletter!</h1>
                <label htmlFor="bd-email" className=" text-white text-opacity-50">Enter your email</label>
                <input className="text-black rounded p-2 focus:ring-purple-500" type="email" name="email" id="bd-email" placeholder="sarthak@sarthakmohanty.me" disabled={formState.isSubmitting} {...register("email", { required: true })} />
                <input type="hidden" defaultValue={1} name="embed" {...register("embed", { required: true })} />
                <button className="a" type="submit" disabled={formState.isSubmitting}>Subscribe</button>
                {formState.isSubmitted && (
                    <div className="text-green-500">Signed up successfully!</div>
                )}
            </form>
        </>
    )
}
