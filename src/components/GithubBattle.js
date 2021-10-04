
import Players from "./Players";
import {Link} from "react-router-dom";
import {useState} from "react";

function GithubBattle(props) {

    let [inputText1, setInputText1] = useState("");
    let [inputText2, setInputText2] = useState("");
    let [hideForm1, setHideForm1] = useState(false);
    let [hideForm2, setHideForm2] = useState(false);
    let [data1, setData1] = useState("");
    let [data2, setData2] = useState("");
    let [closeUser1Data, setCloseUser1Data] = useState(true);
    let [closeUser2Data, setCloseUser2Data] = useState(true);
   
    //submit function
    const handleSubmit = (event) => {
        event.preventDefault();
       let id = event.target.dataset.id;
       let newId = id === "inputText1" ? inputText1 : inputText2;
      if(newId) {
       fetch(`https://api.github.com/users/${newId}`)
       .then((res) => res.json())
       .then((data) => {
          if(id === "inputText1"){
            setInputText1("");
            setData1(data);
            setHideForm1(true);
            setCloseUser1Data(false);
          }else {
            setInputText2("");
            setData2(data);
            setHideForm2(true);
            setCloseUser2Data(false);
          }
       })
    } 
 }
    //to handle input element onChange event
    const hadleChange = ({target}) => {
        let {value} = target;
       let id = target.dataset.id;
       if(id === "inputText1") {
          console.log(id);
          setInputText1(value);   
       }else {
           setInputText2(value);
       }
    }

    //to handle keyDown event
    const handleKeyPress = (event) => {
        if(event.target === 13){
            handleSubmit(event);
        }  
    }

    //close user data
    const closeUserData = ({target}) => {
        let id = target.dataset.id;
        if(id === "user1"){
            setHideForm1(!hideForm1);
            setCloseUser1Data(!closeUser1Data);
            setData1("");
        }else {
            setHideForm2(!hideForm2);
            setCloseUser2Data(!closeUser1Data);
            setData2("");
        }
    }

    return (
        <main className="px-40 2xl:px-80 pb-20">
            <section>
                <h1 className="text-center text-4xl pb-12">Instructions</h1>
                <div className="flex flex-wrap justify-around">
                    <div className="flex flex-50  xl:flex-30 flex-col items-center my-3 mr-4">
                        <h3 className="text-center text-2xl">Enter two Github users</h3>
                        <div className={"bg-gray-300 h-64  text-center w-64 flex justify-center items-center my-3" + (props.darkMode ?  " bg-gray-600 ": "")}>
                            <i className="fas fa-users text-9xl text-red-400"></i>
                        </div>
                    </div>
                    
                    <div className="flex flex-50 xl:flex-30 flex-col items-center my-3 mr-4">
                        <h3 className="text-center text-2xl">Battle</h3>
                        <div className={"bg-gray-300 h-64  text-center w-64 flex justify-center items-center my-3" + (props.darkMode ?  " bg-gray-600 ": "")}>
                            <i className="fas fa-fighter-jet text-9xl text-gray-500"></i>
                        </div>
                    </div>

                    <div className="flex flex-50 xl:flex-30 flex-col items-center my-3 mr-4">
                        <h3 className="text-center text-2xl">See the winner</h3>
                        <div className={"bg-gray-300 h-64  text-center w-64 flex justify-center items-center my-3" + (props.darkMode ?  " bg-gray-600 ": "")}>
                            <i className="fas fa-trophy text-9xl text-yellow-400"></i>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="mt-24">
                <h2 className="text-center text-3xl">Players</h2>
                <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between mt-6">
                    < Players data1={data1} data2={data2} inputText1={inputText1} inputText2={inputText2} hideForm1={hideForm1} hideForm2={hideForm2} handleChange={hadleChange} handleSubmit={handleSubmit} handleKeyPress={handleKeyPress} closeUserData={closeUserData} darkMode={props.darkMode} closeUser1Data={closeUser1Data} closeUser2Data={closeUser2Data}/>
                </div>
                
                {/* go to userbattle page when the battle button is clicked */}
                <div className="text-center py-12">
                    < Link to= {{
                        pathname: "/userbattle",
                        state: [data1, data2]
                    }}>
                        <h4 className={!closeUser1Data && !closeUser2Data ? "visible bg-black text-white py-3 px-8 font-bold inline-block rounded-md": "hidden"}>Battle</h4>
                    </Link>
                </div>
            </section>
        </main>
    )
}
 

export default GithubBattle;