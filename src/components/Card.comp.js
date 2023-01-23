import classes from './Card.module.css'
import { useState, useEffect } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [count, setCount] = useState(0)
  const [prevImage, setPrevImage] = useState([props.image.length - 1]);
  const [nextImage, setNextImage] = useState([1]);

  const imageHandleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setNextImage(count + 2);
    setPrevImage(count);

    if (count === props.image.length - 1) {
      setCount(0);
      setNextImage([1]);
      setPrevImage(props.image.length - 1);
    }

    if (count === props.image.length - 2) {
      setNextImage([0]);
    }

}

  const imageHandleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    setPrevImage(count - 2);
    setNextImage(count);

    if (count === 0) {
      setCount(props.image.length - 1)
      setPrevImage(props.image.length - 2)
    }

    if (count === 1) {
      setPrevImage(props.image.length - 1)
    }
  }

  console.log(count);



  return (
    <div className={classes.container}>

      <div className={classes.thumbnail} onClick={imageHandleDecrement}>
        <img className={classes.smallImage} src={props.image[prevImage]} />
        <FiChevronsLeft className={classes.arrow} />
      </div>

      <img className={classes.image} src={props.image[count]} />
      <div className={classes.thumbnail} onClick={imageHandleIncrement}>
        <img className={classes.smallImage} src={props.image[nextImage]} />
        <FiChevronsRight className={classes.arrow} />
      </div>

    </div>
  )
}

export default Card
