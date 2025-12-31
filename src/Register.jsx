export const Register = (props) => {
    const {onClick} = props;

    return (
        <div role="register">
            <button onClick={onClick}>登録</button>
        </div> 
    );
}