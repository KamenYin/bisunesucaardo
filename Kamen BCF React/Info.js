import React from "react"

export default function Info (){
    
     const gitHub = () => {
     window.open("https://github.com/KamenYin","_blank", "noopener,noreferrer");
  }
   const eMail = () => {
    window.open("mailto:kamengamingofficial@gmail.com","_blank", "noopener,noreferrer");
  }

    return (
        <div>
        
        <img className="kamen-png" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cbf69ed4-abb4-401f-b4fe-ab28178b3d47-profile_image-300x300.jpeg"/>
            <h1>Kamen Yin</h1>
                <p className="titles">Software Engineer/Content Creator</p>
                <center> <a className="link"  target="_blank" rel="noopener noreferrer" href="https://linktr.ee/kamenyin">kamenyin.website</a></center>
                <div className = "button--block"> 
                    <button className="buttons--email" onClick={eMail}><i className="fa-solid fa-envelope"></i>Email</button>
                    <button className="buttons--github" onClick={gitHub}><i className="fa-brands fa-github"></i>GitHub</button>
            </div>
         </div>
    )
}