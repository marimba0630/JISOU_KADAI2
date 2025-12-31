export const ShowError = (props) => {
    const {error} = props;

    return(
        <div data-testid="error">{error}</div>
    );
}