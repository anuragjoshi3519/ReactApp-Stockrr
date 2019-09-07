import React,{Component} from 'react'

class Article extends Component{
    render(){
        return(
            <div className='article-card'>
                <div className="ui card">
                    <div className="content">
                        <div className="header" style={{color:"#6d0965"}}>Solution-oriented schemes</div>
                            <div className="meta">
                                <span style={{color:"#52044c"}}>27 AUG 2019</span>
                                <a>STAFF CORRESPONDENT</a>
                            </div>
                        <br/>    
                        <p  style={{color:"#971090"}}>These schemes are characterised by a portfolio that is made up of a mix of equity stocks and bonds and will suit investors looking for debt plus returns with higher levels of risk than fixed income schemes.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article