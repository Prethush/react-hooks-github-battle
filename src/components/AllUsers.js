
function AllUsers(props) {
    return (
            <div className={props.darkMode ? "flex-100 sm:flex-50 lg:flex-30  2xl:flex-25 bg-gray-600 m-2 my-4 p-6 rounded-md": "flex-100 sm:flex-50 lg:flex-30 2xl:flex-25 bg-gray-200 m-2 p-6 rounded-md"}>
           <h2 className="text-3xl text-center">#{props.score}</h2>
           <div className="mt-3 mb-1">
               <img src={props.owner.avatar_url} alt={props.owner.login} className="w-40 mx-auto"/>
           </div>
           <a href={props.html_url}>
                 <h2 className="text-center my-3 text-red-900 font-bold text-2xl">{props.owner.login}</h2>
           </a>
           <div className="flex justify-center 2xl:justify-start">
               <div className="flex flex-col items-start mr-2">
                    <i className="fas fa-user text-red-200 text-xl"></i>
                    <i className="fas fa-star text-yellow-300 text-xl"></i>
                    <i className="fas fa-code-branch text-blue-300 text-xl"></i>
                    <i className="fas fa-exclamation-triangle text-pink-400 text-xl"></i> 
               </div>
                    <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">{props.owner.login}</h3>
                    <h3  className="text-xl"> {props.stargazers_count} stars</h3>
                    <h3 className="text-xl">{props.forks} forks</h3>
                    <h3 className="text-xl">{props.open_issues} issues</h3>
               </div>

               <div>
           </div>
           </div>
       </div>   
    )
}

export default AllUsers;