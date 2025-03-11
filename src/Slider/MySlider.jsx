import React, { useEffect, useState } from 'react'
import "./MySlider.css"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import data from "../data"

function MySlider() {
    const [eat, setEat] = useState(data)
    const [index, setIndex] = useState(0)
 
    useEffect(() => {
        const lastIndex = eat.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, eat])

    return (
        <section className="section">
                 <div className="section-center">
                {eat.map((product, productIndex) => {
                    const { id, image, name, price } = product;
                    let position = "nextSlide";
                    if (productIndex === index) {
                        position = 'activeSlide';
                    }
                    if (productIndex === index - 1 || (index === 0 && productIndex === eat.length - 1)) {
                        position = 'lastSlide'
                    }
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="product-img" />
                            <h4>
                                {name}
                            </h4>
                            <p className="text">{price}</p>
                        </article>
                    )
                })}
                <button className="prev" onClick={() => setIndex(prevState => prevState - 1)}><FiChevronLeft /></button>
                <button className="next" onClick={() => setIndex(prevState => prevState + 1)}><FiChevronRight /></button>
            </div>
        </section>
    )
}

export default MySlider