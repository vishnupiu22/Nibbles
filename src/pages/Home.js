import React from 'react';
import '../styles/Home.css';

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoBoxMessageIndex: 0,
        };
    }

    componentDidMount() {
        let i = 0,
            j = 1;


        const carousel = document.getElementById("carousel");

        const controlLinks = document.querySelectorAll(".controls button");


        controlLinks.forEach((control) => {
            control.addEventListener("click", () => {

                carousel.style.rotate = `-${
                    (i - j + Number(control.dataset.index)) * 90
                }deg`;

                document.querySelector(".slide.active").classList.remove("active");
                const activeSlide = document.querySelector(
                    `.slide:nth-child(${control.dataset.index})`
                );
                activeSlide.classList.add("active");

                document.querySelector("button.active").classList.remove("active");
                control.classList.add("active");


                //to show the info-box message with index number : -1
                this.setState({infoBoxMessageIndex: control.dataset.index-1})


            });
        });

        carousel.addEventListener("mouseenter", () => {
            // clearInterval(intervalId);
            console.log("Pause");
        });

        carousel.addEventListener("mouseleave", () => {
            // intervalFn();
            console.log("Play");
        });
    }

    render() {
        const messages = [
            {
                "title": "North Indian",
                "subtitle": "Thali",
            },
            {
                "title": "Nan-Sabzi",
                "subtitle": "Thali",
            },
            {
                "title": "Rajasthani",
                "subtitle": "Thali",
            },
            {
                "title": "South Indian",
                "subtitle": "Thali",
            },
        ]

        return (
            <div className="main-container">

                <div className="circles">


                    {/*this will be our animated carousel*/}
                    <div className="slideshow">
                        <div className="carousel" id="carousel">
                            <div className="slide active">
                                <img src={image1} alt="img1" height="40" width="40"/>
                            </div>
                            <div className="slide">
                                <img src={image2} alt="img2" height="40" width="40"/>
                            </div>
                            <div className="slide">
                                <img src={image3} alt="img3" height="40" width="40"/>
                            </div>
                            <div className="slide">
                                <img src={image4} alt="img4" height="40" width="40"/>
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <button data-index="1" className="active">
                            <img src={image1} alt="img1" width="500"/>
                        </button>
                        <button data-index="2">
                            <img src={image2} alt="img2" width="100"/>
                        </button>
                        <button data-index="3">
                            <img src={image3} alt="img3" width="100"/>
                        </button>
                        <button data-index="4">
                            <img src={image4} alt="img4" width="100"/>
                        </button>
                    </div>



                </div>


                {/*pure veg text */}
                <div className="pure-veg">
                    <h2>Pure Veg</h2>
                </div>


                {/*info box have the info for the Thalis*/}
             <div className="info-box" id="infoBoxId">
                <div className="info"  id="infoBoxId1">
                    <h1>{messages[this.state.infoBoxMessageIndex].title}</h1>
                    <h1>{messages[this.state.infoBoxMessageIndex].subtitle}</h1>
                </div>
             </div>

            </div>
        )
    }
}

export default Home;
