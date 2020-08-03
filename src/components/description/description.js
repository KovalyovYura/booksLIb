import React from "react";
import { connect } from 'react-redux';
import './description.css'

const Description = ({books, clickedId}) => {
    if (clickedId === null)
        return null
    const {title,  authors, publisher, isbn10, isbn13, pages, language,
        year, rating, desc, image, price} = books.find(({id}) => id === clickedId)
    return (<div>
        <div className="bg">
            <div className="container">
                <h1 style={{paddingTop: '1rem'}}>{title}</h1>
            </div>
        </div>
        <div className="container">
            <br/>
                <ins className="adsbygoogle" style={{display:'block', minHeight:'90px'}} data-ad-client="ca-pub-3490904183682637"
                     data-ad-slot="9005504207" data-ad-format="auto"/>

        </div>
        <div className='container'>
            <div className="row">
            <div className="col-md-4 col-sm-6 sticky1">
                <div className="bge2">
                    <img src={image} alt="The Robotic Process Automation Handbook"
                         title={title} width="300" height="350" itemProp="image"
                         className="imgborder" style={{background: '#eee'}}/>
                    </div>
            </div>
            <div className="col-md-8 col-sm-6 desc">
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td>Price</td>
                        <td className="color2"><b>{price}</b>
                            <div itemScope="" itemProp="offers" itemType="http://schema.org/Offer">
                                <meta itemProp="price" content="18.15"/>
                                    <meta itemProp="priceCurrency" content="USD"/>
                                        <link itemProp="availability" href="https://schema.org/InStock"/>
                                            <meta itemProp="itemCondition" content="http://schema.org/NewCondition"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td><b>{rating}</b></td>
                    </tr>
                    <tr>
                        <td>Authors</td>
                        <td><b>{authors}</b></td>
                    </tr>
                    <tr>
                        <td>Publisher</td>
                        <td ><b>{publisher}</b></td>
                    </tr>
                    <tr>
                        <td>Published</td>
                        <td><b>{year}</b></td>
                    </tr>
                    <tr>
                        <td>Pages</td>
                        <td><b >{pages}</b></td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td><b>{language}</b></td>
                    </tr>
                    <tr>
                        <td>Format</td>
                        <td><b>Paper book / ebook</b> (<b>PDF</b>)</td>
                    </tr>
                    <tr>
                        <td>ISBN-10</td>
                        <td><b>{isbn10}</b></td>
                    </tr>
                    <tr>
                        <td>ISBN-13</td>
                        <td><b>{isbn13}</b></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
            <div className="jumbotron jumbotron-fluid" style={{background: '#eee'}}>
                <div className="container">
                    <h1 className="display-4">About book</h1>
                    <p className="lead">{desc}</p>
                </div>
            </div>
        </div>
    </div>);
}


const mapStateToProps = ({booksList:{ books, clickedId }}) => ({books, clickedId})


export default connect(mapStateToProps)(Description);