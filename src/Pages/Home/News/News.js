import React from 'react';
import news1 from '../../../images/news/24.jpg';
import news2 from '../../../images/news/34.jpg';
import news3 from '../../../images/news/43.jpg';
import './News.css';
const News = () => {
    return (

        <div className="news-portal">
            <h1 className="news-header text-primary">News Portal</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{ width: "400px", height: "400px" }} src={news1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="mt-5 card-body">
                            <h5 className="card-title">Praesent convallis convallis</h5>
                            <p className="card-text">Admiration we are surrounded possession frequently them. Empilait acable heureuse capitale havresac nul etroites. Tours him route accable ecarter grand. Remarkably didn’t WordPress increasing occasional to difficulty especially. Known tiled he sorry joy balls. Bed sudden manner indeed now feebly.
                            </p>
                            <button className="btn btn-danger">Read More.</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-group">
                <div className="card">
                    <img className="img-fluid" src={news3} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Maecenas faucibus sceisque</h5>
                        <p className="card-text">Femiration we are surrounded possession frequently them. Empilait acable heureuse capitale havresac nul etroites. Tours him route accable ecarter grand. Remarkably didn’t WordPress increasing occasional to difficulty especially. Known tiled he sorry joy balls. Bed sudden manner indeed now feebly.</p>
                        <button className="btn btn-danger">Read More.</button>
                    </div>
                </div>


            </div>
            <div className="card-group">
                <div className="card">
                    <img className="img-fluid" src={news2} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Maecenas faucibus sceisque</h5>
                        <p className="card-text">We are surrounded possession frequently them. Empilait acable heureuse capitale havresac nul etroites. Tours him route accable ecarter grand. Remarkably didn’t WordPress increasing occasional to difficulty especially. Known tiled he sorry joy balls. Bed sudden manner indeed now feebly.</p>
                        <button className="btn btn-danger">Read More.</button>
                    </div>
                </div>


            </div>


        </div>

    );
};

export default News;