import React from 'react'

const Card = () => {
    return (
        <div className='container'>
            <div className="card">
                <img src='https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1093&q=80' className="card-img-top img-fluid" alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">Travel Diaries!</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ab.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
