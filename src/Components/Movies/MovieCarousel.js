import React, { useState } from 'react';
import "./MovieCarousel.styles.scss";
import { movies } from "./imageData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import $ from 'jquery';

const MovieCarousel= () => {

    const [ count, setCount ] = useState(0);
    console.log(count);

    const leftHandler = () => {
        setCount(count - 1);
        const eachWidth = $(".movieImgTxt").outerWidth(true);
        if (count === 0) {
            setCount(0);
            $(".movie-inner-component").animate({"left": `-${count}px`});
        } else {
            setCount(count - 1);
            $(".movie-inner-component").animate({"left": `-${(count - 1) * eachWidth}px`})
        }
    }

    const rightHandler = () => {
        setCount(count + 1);
        const eachWidth = $(".movieImgTxt").outerWidth(true);
        if ( count === 4) {
            setCount(4)
        } else {

            $(".movie-inner-component").animate({"left": `-${(count + 1) * eachWidth}px`})
        }
    }

    return (
        <div className="movie-component">
            <div className='iconss'>
                <MdKeyboardArrowLeft className="left" onClick={leftHandler}/>
                <MdKeyboardArrowRight className='right' onClick={rightHandler}/></div>
            <div className="movie-inner-component">
                <div className="movieImgTxt">
                    <img src={movies[0].image} alt={movies[0].Action} className="movie_image"/>
                    <h3>{movies[0].Action}</h3>
                </div>
                <div className="movieImgTxt">
                    <img src={movies[1].image} alt={movies[1].Action} className="movie_image"/>
                    <h3>{movies[1].Action}</h3>  
                </div>
                <div className="movieImgTxt">
                    <img src={movies[2].image} alt={movies[2].Action} className="movie_image"/>
                    <h3>{movies[2].Action}</h3>
                </div>
                <div className="movieImgTxt">
                    <img src={movies[3].image} alt={movies[3].Action} className="movie_image"/>
                    <h3>{movies[3].Action}</h3>
                </div>
                <div className="movieImgTxt">
                    <img src={movies[4].image} alt={movies[4].Action} className="movie_image"/>
                    <h3>{movies[4].Action}</h3>
                </div>
                <div className="movieImgTxt">
                    <img src={movies[5].image} alt={movies[5].Action} className="movie_image"/>
                    <h3>{movies[5].Action}</h3> 
                </div>
                <div className="movieImgTxt">
                    <img src={movies[6].image} alt={movies[6].Action} className="movie_image"/>
                    <h3>{movies[6].Action}</h3>
                </div>
            </div>
        </div>
    )
}

export default MovieCarousel;