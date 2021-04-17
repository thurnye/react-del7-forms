import React from 'react';
import Nav from '../../components/navbar/navbar'

export default function about(props) {


    
    return (
        <React.Fragment>
            <Nav />
            <div className="container">

            
                <div className="row">
                    { 
                
                    props.messages.length ?  
                    props.messages.map((el) => {
                        return   <div className="col-sm-4" key={el._id}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title"> From: {el.name}</p>
                                    <p className="card-text">Message: {el.message}</p>
                                </div>
                            </div>
                        </div>
                        }) :
                    <div className="col-sm-6" >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">No Message Yet</h5>
                                <p className="card-text">No one Knows You Yet</p>
                                <a href="/contact" className="btn btn-primary">Add Message</a>
                            </div>
                        </div>
                    </div> 
                    }
                </div>
            </div>
        </React.Fragment>
        
    )
}
