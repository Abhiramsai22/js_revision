
import "../App.css"

const Landingpage = () =>{
    return <>
    <header>
        <div className="logo"><img height="50px" width="50px"  src="https://plus.unsplash.com/premium_photo-1712499322952-a0374a1d22c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" /></div>
        <nav>
            <ul className="lists">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    </header>
    <section className="banner">
        <img src="https://plus.unsplash.com/premium_photo-1712499322952-a0374a1d22c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="banner" width="100%" height="300px" />
    </section>
    <main className="cards">
        <div className="cards_container">
            <div className="card">
                <h1>
                    cards1 </h1>
                    <p>descroption1</p>
                    <em>100</em>
            </div>
            <div className="card">
                <h1>
                    cards2 </h1>
                    <p>descroption2</p>
                    <em>200</em>
            </div>
            <div className="card">
                <h1>
                    cards3 </h1>
                    <p>descroption3</p>
                    <em>300</em>
              
            </div>
            <div className="card">
                <h1>
                    cards4 </h1>
                    <p>descroption4</p>
                    <em>400</em>
               
            </div>
            <div className="card">
                <h1>
                    cards5 </h1>
                    <p>descroption5</p>
                    <em>500</em>
                
            </div>
            <div className="card">
                <h1>
                    cards6 </h1>
                    <p>descroption6</p>
                    <em>600</em>
                
            </div>
            <div className="card">
                <h1>
                    cards7 </h1>
                    <p>descroption7</p>
                    <em>700</em>
               
            </div>
            <div className="card">
                <h1>
                    cards8 </h1>
                    <p>descroption8</p>
                    <em>800</em>
            </div>
            <div className="card">
                <h1>
                    cards9 </h1>
                    <p>descroption9</p>
                    <em>900</em>
               
            </div>
            <div className="card">
                <h1>
                    cards10 </h1>   
                    <p>descroption10</p>
                    <em>1000</em>
              
            </div>
        </div>
    </main>

    </>
}


export default Landingpage
