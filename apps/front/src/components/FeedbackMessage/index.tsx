interface FeedbackMessageProps {
    text: string;
    type?: string;
}

export default function FeedbackMessage({ text, type } : FeedbackMessageProps){
    const typeClass = () => {
        switch(type){
            case "success":
                return "text-green-500"
            case "danger":
            default:
                return "text-red-500"
        }
    }
    return (
        <span className={`p-2 ${typeClass()} text-xs`}>{text}</span>
    )
}