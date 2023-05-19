import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="container">
            <div className = "container--stack">
                <Info />
                <div className = "container--text">
                <About />
                </div>
               <Footer />
            </div>
             
        </div>
    )
}

ReactDOM.render( 
   <App />
    
     ,document.getElementById('root'))