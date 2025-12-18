export const ShowRecord = (props) => {
    const {records} = props;

    return (
        <div>
            {records.map((record, index) => ( 
            <li key={index}>{record.title} {record.time}時間</li> 
          ))} 
        </div>
    );
}