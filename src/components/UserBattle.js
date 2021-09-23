import React from "react";
import {Link, withRouter} from "react-router-dom";

function UserBattle(props) {

    let data1 = props.location.state[0];
    let data2 = props.location.state[1], winner, loser;
    if(((data1.followers*20)+ data1.public_repos) > ((data2.followers*20) + data2.public_repos)){
        winner = data1;
        loser = data2;
    }else {
            winner = data2;
            loser = data1;
    }

    return (
        <main>
            <section className="pb-12 flex justify-center">
            <div className="flex flex-col sm:flex-row sm:justify-center mt-16">
                <div className={props.darkMode ? "my-4 bg-gray-600 sm:flex-35 p-6 rounded-md mx-8" : "sm:flex-35 bg-gray-300 p-6 rounded-md mx-8 my-8"}>

                    <h2 className="text-center text-3xl mb-4">Winner</h2> 
                        <div>
                            <img src={winner.avatar_url} alt={winner.login} className="w-full"/>
                        </div>  
                        <h5 className="text-center my-2 font-bold ">Score: {(winner.followers*20)+winner.public_repos}</h5>
                        <h2 className="text-red-300 font-bold text-xl text-center mb-3">{winner.login}</h2>
                        <div className="text-xl">
                            <i className="fas fa-user text-red-400"></i>
                            <h3 className="inline-block mx-3">{winner.name}</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-compass text-blue-400"></i>
                            <h3 className="inline-block mx-3">{winner.location}</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-users text-blue-400"></i>
                            <h3 className="inline-block mx-3">{winner.followers} followers</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-users text-green-400"></i>
                            <h3 className="inline-block mx-3">{winner.following} following</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-code text-red-500"></i>
                            <h3 className="inline-block mx-3">{winner.public_repos} repositories</h3>
                        </div>
                    </div> 
            

                <div className={props.darkMode ? "my-4 bg-gray-600 flex-35 p-6 rounded-md mx-8" : "sm:flex-35 bg-gray-300 p-6 rounded-md mx-8 my-8"}>
                        <h2 className="text-center text-3xl mb-4">Loser</h2> 
                        <div>
                            <img src={loser.avatar_url} alt={winner.login} className="w-full"/>
                        </div>  
                        <h5 className="text-center my-2 font-bold ">Score: {(loser.followers*20)+winner.public_repos}</h5>
                        <h2 className="text-red-300 font-bold text-xl text-center mb-3">{loser.login}</h2>
                        <div className="text-xl">
                            <i className="fas fa-user text-red-400"></i>
                            <h3 className="inline-block mx-3">{loser.name}</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-compass text-blue-400"></i>
                            <h3 className="inline-block mx-3">{loser.location}</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-users text-blue-400"></i>
                            <h3 className="inline-block mx-3">{loser.followers} followers</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-users text-green-400"></i>
                            <h3 className="inline-block mx-3">{loser.following} following</h3>
                        </div>
                        <div className="text-xl">
                            <i className="fas fa-code text-red-500"></i>
                            <h3 className="inline-block mx-3">{loser.public_repos} repositories</h3>
                        </div>
                    </div> 
            </div>
        </section>
            <div className="text-center pb-20">
                    <Link to="/battle">
                        <h3 className="inline-block bg-black text-white py-3 px-8 rounded-md font-bold">Reset</h3>
                    </Link>
            </div>
        </main>
    )
}


export default withRouter(UserBattle);