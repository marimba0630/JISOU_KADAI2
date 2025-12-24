export const ShowRecord = (props) => {
    const { records, onClick } = props;
    return (
        <div>
            {records.map((record) => (
                <li key={record.id}>{record.title} {record.time}時間 <button onClick={() => onClick(record.id)}>Delete</button></li>
            ))}
        </div>
    );

}