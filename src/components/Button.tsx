import { SubmitButtonT } from "@/types/ButtonTypes"

const SubmitButton = ({label}:SubmitButtonT) => {
    return (
        <div className="flex justify-center mt-6 mb-3">
            <button className="bg-blue-500 rounded-md py-2 px-3">{label}</button>
        </div>
    )
}

export default SubmitButton;