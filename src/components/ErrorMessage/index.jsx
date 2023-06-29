import './style.css'


export default function ErrorMessage({msg}){
    return(
        <p className="error-message">
            {msg}
        </p>
    )
}