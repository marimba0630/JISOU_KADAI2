export const InputInfo = (props) => {
    const {infoType, inputValue, onChange} = props;

    if(infoType === "Text"){
        return(
            <div>
                <label>学習内容<input value={inputValue} onChange={onChange}></input></label>
            </div>
        );
    }
    else{
        return(
            <div>
                <label>学習時間<input type="number" value={inputValue} onChange={onChange}></input></label>時間
            </div>
        );
    }
}