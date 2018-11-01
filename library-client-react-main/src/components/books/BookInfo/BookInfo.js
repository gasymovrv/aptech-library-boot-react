import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import roundNumbers from "../../../helpers/roundNumbers";
import InfoBox from "../../InfoBox/InfoBox";

export default function BookInfo({entity: book, onDelete, successDelete, ...props}) {
    const url = props.match.url;
    const imgPath = `data:image/jpeg;base64,${book.image}`;
    const isFree = book.price === 0.0;
    return (
        <div className="container">
            <div className="row">
                <InfoBox infoKey={book.id}
                         successAction={successDelete}
                         errorText='Произошла ошибка при попытке удалить информацию о данном авторе!'
                />
                <div className="col-sm-4">
                    <div className="product-image-large">
                        <img className="img-rounded" src={imgPath} alt="Изображение"/>
                    </div>
                </div>
                <div className="col-sm-7 product-details">
                    <h4>{book.name}</h4>
                    <div className="price">
                        {isFree ? 'БЕСПЛАТНО' : roundNumbers(book.price, 2) + ' р.'}
                    </div>

                    <h5>Действия</h5>
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group-lg bottom-indent" role="group" aria-label="First group">
                            {isFree ||
                            <button
                                // onClick="confirmAddToCart(${book.id}, '${book.name}')"
                                className="btn item-actions neighboring-buttons"
                                data-placement="top"
                                data-toggle="popover"
                                data-content="В корзину">
                                <i className="glyphicon glyphicon-shopping-cart icon-white"/>
                            </button>
                            }
                            <button
                                // onClick="confirmShowBookContent(${book.id}, '${book.name}', ${book.price})"
                                className="btn item-actions neighboring-buttons"
                                data-placement="top"
                                data-toggle="popover"
                                data-content="Читать">
                                <i className="glyphicon glyphicon-eye-open icon-white"/>
                            </button>
                            <button
                                // onClick="confirmDownloadBookContent(${book.id}, '${book.name}', ${book.price})"
                                className="btn item-actions neighboring-buttons"
                                role="button"
                                data-placement="top"
                                data-toggle="popover"
                                data-content="Скачать">
                                <i className="glyphicon glyphicon-download icon-white"/>
                            </button>
                            {/*<security:authorize access="hasRole('ROLE_ADMIN')">*/}
                            <Link to={`${url}/edit`}
                                  className="btn admin-button item-actions neighboring-buttons"
                                  role="button"
                                  data-placement="top"
                                  data-toggle="popover"
                                  data-content="Изменить">
                                <i className="glyphicon glyphicon-pencil icon-white"/>
                            </Link>
                            <button
                                // onClick="confirmDeleteBook(${book.id}, '${book.name}')"
                                className="btn admin-button item-actions neighboring-buttons"
                                data-placement="top"
                                data-toggle="popover"
                                data-content="Удалить">
                                <i className="glyphicon glyphicon-trash icon-white"/>
                            </button>
                            {/*</security:authorize>*/}
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="tabbable">
                        <ul className="nav nav-tabs product-details-nav">
                            <li className="active"><a href={'#tab1'} data-toggle="tab">Аннотация</a></li>
                            <li><a href={'#tab2'} data-toggle="tab">Сведения</a></li>
                        </ul>
                        <div className="tab-content product-detail-info">
                            <div className="tab-pane active" id="tab1">
                                {book.descr
                                    ?
                                    <p>{book.descr}</p>
                                    :
                                    <h4>Отстутствует</h4>
                                }
                            </div>
                            <div className="tab-pane" id="tab2">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Автор</td>
                                        <td>{book.author.fio}</td>
                                    </tr>
                                    <tr>
                                        <td>Жанр</td>
                                        <td>{book.genre.name}</td>
                                    </tr>
                                    {/*<tr>*/}
                                    {/*<td>Издательство</td>*/}
                                    {/*<td>{book.publisher.name}</td>*/}
                                    {/*</tr>*/}
                                    <tr>
                                        <td>Год издания</td>
                                        <td>{book.publishYear}</td>
                                    </tr>
                                    <tr>
                                        <td>Количество страниц</td>
                                        <td>{book.pageCount}</td>
                                    </tr>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>{book.isbn}</td>
                                    </tr>
                                    {book.contentType &&
                                    <Fragment>
                                        <tr>
                                            <td>Расширение файла</td>
                                            <td>{book.fileExtension}</td>
                                        </tr>
                                        <tr>
                                            <td>Размер файла</td>
                                            <td>{book.fileSize}</td>
                                        </tr>
                                    </Fragment>
                                    }
                                    <tr>
                                        <td>Рейтинг</td>
                                        <td>{book.rating}</td>
                                    </tr>
                                    <tr>
                                        <td>Количестов голосов</td>
                                        <td>{book.voteCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Количестов просмотров</td>
                                        <td>{book.views}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}