
import AllUsers from "./AllUsers";

function All(props){
     
    let datas = props.data;
    console.log(datas);
    return (  
        <section className="visible flex flex-wrap">
            {
                datas.map((data, i) => {
                    return < AllUsers {...data} key={data.id} score = {i + 1} darkMode={props.darkMode}/>
                })
            }
        </section>  
    )
}


export default All;