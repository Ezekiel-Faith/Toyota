const Check2 = ({hover, leave})=>{
    return(
        <div className="container" id="container" >
            <div className="hover" id="hover" onMouseEnter={hover} onMouseLeave={leave} style={{width: '400px', height: '300px', background: 'gray'}}>

            </div>
        </div>
    )
}

export default Check2;