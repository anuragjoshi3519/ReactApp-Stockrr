import React,{Component} from "react"
import ArticleCard from "./ArticleCard"
import NewsList from './NewsList'
class Main extends Component{

    articleContent(){
        return(
            <div className='article-section'>
                <div className='article-heading'>
                    <h1>Featuring Articles</h1>
                </div>
                <div className='article-menu'>
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        )
    }

    newContent(){
        return(
            <div className='news-section'>
                <div className='news-heading'>
                    <h2>Trending News</h2>
                </div>    
                <div className='news-list'>
                    <NewsList />
                </div>    
            </div>
        )
    }

    render(){
        return(
            <div className='main-section'>
                {this.articleContent()}
                {this.newContent()}
                
            </div>
        )
    }
}

export default Main