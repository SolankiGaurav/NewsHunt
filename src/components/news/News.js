import React, { Component } from 'react'

export default class News extends Component {
    render() {
        let {imgUrl, title, desc, newsUrl, author, publishedAt} = this.props;

        return (
            <div className="card" style={{ width: "14rem"}}>
                <img src={imgUrl} className="card-img-top" alt="img" style={{maxHeight: "125px", minHeight:"125px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">view</a>
                </div>
            </div>
        )
    }
}
