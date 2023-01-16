import React, { Component } from 'react'
import News from '../news/News'
import PropTypes from 'prop-types'


export default class Home extends Component {
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    static defaultProps = {
        country: "in",
        category: "sports"
    }

    constructor() {
        super();
        console.log("cuns");
        this.state = {
            article: [],
            pageSize: 16,
            pageNo: 1,
            totalResults: 0,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=207cea3f85ed474186cf7d740af3bc8e&page=${this.state.pageNo}&pagesize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        console.log("Totle results: " + this.state.totalResults)
    }

    goNext = async () => {
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=207cea3f85ed474186cf7d740af3bc8e&page=${this.state.pageNo + 1}&pagesize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            pageNo: this.state.pageNo + 1,
            article: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    goPrev = async () => {
        console.log("Prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=207cea3f85ed474186cf7d740af3bc8e&page=${this.state.pageNo - 1}&pagesize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            pageNo: this.state.pageNo - 1,
            article: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    changeCase=(text)=>{
        return text.substring(0,1).toUpperCase()+text.substring(1);
    }


    render() {
        console.log("render")
        return (
            <>
                <div className="container">
                    <h2 className='my-5'>NewsHunt - Top {this.changeCase(this.props.category)} Updates</h2>
                    <div className='row my-2'>
                        {this.state.article&&this.state.article.map((element) => {
                            return <div className="col my-4" key={element.url}>
                                <News imgUrl={element.urlToImage ? element.urlToImage : process.env.PUBLIC_URL + '/tempImg.jpg'} title={element.title} desc={element.description} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" disabled={this.state.pageNo <= 1} onClick={this.goPrev}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" disabled={((Math.ceil(this.state.totalResults / 16)) < this.state.pageNo + 1)} onClick={this.goNext}>Next &rarr;</button>
                </div>
            </>
        )
    }
}
