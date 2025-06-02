import React from 'react';
import blog1 from '../assets/img/blog-1.jpg';
import blog2 from '../assets/img/blog-2.jpg';
import blog3 from '../assets/img/blog-3.jpg';
import userImg from '../assets/img/user.jpg';
import blogThumb from '../assets/img/blog-100x100.jpg';

const BlogDetail = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">

                    {/* ========= Blog Main Content ========= */}
                    <div className="col-lg-8">

                        {/* --- Blog Detail --- */}
                        <div className="pb-3">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src={blog1} alt="Blog" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white mb-3 p-4">
                                <div className="d-flex mb-3">
                                    <a className="text-primary text-uppercase text-decoration-none" href="#">Admin</a>
                                    <span className="text-primary px-2">|</span>
                                    <a className="text-primary text-uppercase text-decoration-none" href="#">Tours & Travel</a>
                                </div>
                                <h2 className="mb-3">Dolor justo sea kasd lorem clita justo diam amet</h2>
                                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                    magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                    amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                    sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                    aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                    sit stet no diam kasd vero</p>
                                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                    vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                    nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                    ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                    clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                    justo dolore sit invidunt.</p>

                                <h4 className="mb-3">Est dolor lorem et ea</h4>
                                <img className="img-fluid w-50 float-left mr-4 mb-2" src={blog2} alt="Blog 2" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>

                                <h5 className="mb-3">Est dolor lorem et ea</h5>
                                <img className="img-fluid w-50 float-right ml-4 mb-2" src={blog3} alt="Blog 3" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                    aliquyam et ut.</p>
                            </div>
                        </div>

                        {/* --- Comment List --- */}
                        <div className="bg-white mb-4 p-4">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: '5px' }}>3 Comments</h4>

                            {[1, 2].map((_, i) => (
                                <div key={i} className="media mb-4">
                                    <img src={userImg} alt="User" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                    <div className="media-body">
                                        <h6>
                                            <a href="#">John Doe</a> <small><i>01 Jan 2045</i></small>
                                        </h6>
                                        <p>Diam amet duo labore stet elitr...</p>
                                        <button className="btn btn-sm btn-outline-primary">Reply</button>

                                        {i === 1 && (
                                            <div className="media mt-4">
                                                <img src={userImg} alt="User" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                                <div className="media-body">
                                                    <h6>
                                                        <a href="#">John Doe</a> <small><i>01 Jan 2045</i></small>
                                                    </h6>
                                                    <p>Diam amet duo labore stet elitr...</p>
                                                    <button className="btn btn-sm btn-outline-primary">Reply</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* --- Comment Form --- */}
                        <div className="bg-white p-4">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Leave a comment</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input type="url" className="form-control" id="website" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" rows="5" className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit" value="Leave a comment" className="btn btn-primary font-weight-semi-bold py-2 px-3" />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* ========= Sidebar ========= */}
                    <div className="col-lg-4 mt-5 mt-lg-0">

                        {/* --- Author Bio --- */}
                        <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
                            <img src={userImg} className="img-fluid mx-auto mb-3" style={{ width: '100px' }} alt="Author" />
                            <h3 className="text-primary mb-3">John Doe</h3>
                            <p>Conset elitr erat vero dolor ipsum...</p>
                            <div className="d-flex justify-content-center">
                                {['facebook-f', 'twitter', 'linkedin-in', 'instagram', 'youtube'].map(icon => (
                                    <a key={icon} className="text-primary px-2" href="#"><i className={`fab fa-${icon}`}></i></a>
                                ))}
                            </div>
                        </div>

                        {/* --- Search Form --- */}
                        <div className="mb-5">
                            <div className="bg-white p-4">
                                <div className="input-group">
                                    <input type="text" className="form-control p-4" placeholder="Keyword" />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-primary border-primary text-white">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Categories --- */}
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Categories</h4>
                            <div className="bg-white p-4">
                                <ul className="list-unstyled m-0">
                                    {[
                                        ['Web Design', 150],
                                        ['Web Development', 131],
                                        ['Online Marketing', 78],
                                        ['Keyword Research', 56],
                                        ['Email Marketing', 98],
                                    ].map(([name, count]) => (
                                        <li key={name} className="d-flex justify-content-between mb-3">
                                            <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>{name}</a>
                                            <span className="badge badge-primary badge-pill">{count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* --- Recent Posts --- */}
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Recent Post</h4>
                            {[1, 2, 3].map(i => (
                                <a key={i} className="d-flex align-items-center text-decoration-none bg-white mb-3" href="#">
                                    <img className="img-fluid" src={blogThumb} alt="Thumb" />
                                    <div className="pl-3">
                                        <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                        <small>Jan 01, 2050</small>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* --- Tag Cloud --- */}
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Tag Cloud</h4>
                            <div className="d-flex flex-wrap m-n1">
                                {['Design', 'Development', 'Marketing', 'SEO', 'Writing', 'Consulting'].map(tag => (
                                    <a key={tag} href="#" className="btn btn-light m-1">{tag}</a>
                                ))}
                            </div>
                        </div>

                    </div> {/* End Sidebar */}

                </div> {/* End Row */}
            </div> {/* End Container */}
        </div> /* End Fluid Container */
    );
};

export default BlogDetail;

