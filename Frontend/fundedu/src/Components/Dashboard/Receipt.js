import React, { useState, useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import Carousel from 'react-bootstrap/Carousel'

const Receipt = () => {

    const [pics, setPics] = useState([]);

    const onDrop = (picture) => {

        console.log(picture);
        let photos = [];

        photos.push(picture);

        setPics([...pics, URL.createObjectURL(picture[picture.length - 1])]);

        localStorage.setItem('pic', JSON.stringify(photos));
    }

    useEffect(() => {
        setPics([...pics, localStorage.getItem('pic')]);
    }, []);


    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div>
            <div id="uploadContainer">
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}

                />
            </div>
            <div id="pics">

                {pics.length > 1 &&
                    <Carousel id="carousel" direction={direction} onSelect={handleSelect}>
                        {pics.map((x, i) =>
                            i > 0 &&
                            <Carousel.Item className="carousel-item">
                                <span key={x}>
                                    <img className="receipt" className="d-block w-100" src={x} alt=""></img>
                                </span>
                            </Carousel.Item>
                        )}
                    </Carousel>
                }
            </div>
        </div>
    );
}

export default Receipt;