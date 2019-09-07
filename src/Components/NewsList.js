import React,{Component} from 'react'

class NewsList extends Component{
    constructor(){
        super()
        this.state={
            newsColumns:['Wall St opens higher after China stimulus plan, jobs data',
            'China cuts CRR, frees up $126 billion for loans as economy',
            'Sensex, Nifty rally on easing US-China trade tensions',
            'BPCL’s sale to private player will unlock real value: Experts',
            'Rupee to stay depressed, trade in 70.50-73.50 range this month',
            'Indiabulls Housing stock slides 5% on allegations of fund diversion',
            'Prabhat Dairy locked in 20% upper circuit as it mulls voluntary delisting',
            'Sun Pharma slides 4% after Co says forensic audit by Sebi underway',
            'Tech Mahindra surges over 5% after securing multi-year deal with AT&T',
            'Long-term investors can have a bite of Jubilant FoodWorks',
            'IDBI Mutual Fund moves Bombay High Court against cash-strapped DHFL']
        }
    }
    listItem = ()=>{
        const news = this.state.newsColumns.map(n => <li><a href='#' className="list-item">{n}</a></li>)
        return news
    }

    render(){
        return(
            <div className="news-list">
                <ul>
                    {this.listItem()}
                </ul>
            </div>
        )
    }
}

export default NewsList