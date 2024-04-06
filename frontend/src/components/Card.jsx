import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import About from "../pages/About";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Hibiscus from '../assets/images/hibiscus.png'
import Squirel from '../assets/images/squirel.png'
import camel from '../assets/images/camel.png'
import deer from '../assets/images/deer.png'
import Elephant from '../assets/images/elephant.png'
import Lion from '../assets/images/Lion.png'
import Marigold from '../assets/images/marigold.png'
import Rose from '../assets/images/rose.png'
import Rohida from '../assets/images/rohida.png'
import lily from '../assets/images/Lily.png'
import hangul from '../assets/images/Hangul.png'
import Gloriosa_Lily from '../assets/images/Gloriosa Lily.png'

   
  const CardDef=(props)=>{
    const navigate = useNavigate()

    const handleClick = (animal) => {
        navigate( `/about?animal=${animal}`)
    };

    return (
      <Card className="mt-6 w-80 h-80 flex-col">
        <CardHeader color="blue-gray" className="relative h-25">
          {props.state === "hibiscus" && (<img src={Hibiscus} alt="card-image" />) }
          {props.state === "Camel" && (<img src={camel} alt="card-image" />) } 
          {props.state === "Deer" && (<img src={deer} alt="card-image" />) }
          {props.state === "elephant" && (<img src={Elephant} alt="card-image" />) }
          {props.state === "squirel" && (<img src={Squirel} alt="card-image" />) }
          {props.state === "lion" && (<img src={Lion} alt="card-image" />) }
          {props.state === "marigold" && (<img src={Marigold} alt="card-image" />) }
          {props.state === "rose" && (<img src={Rose} alt="card-image" />) }
          {props.state === "rohida" && (<img src={Rohida} alt="card-image" />) }
          {props.state === "Lily" && (<img src={lily} alt="card-image" />) }
          {props.state === "Hangul" && (<img src={hangul} alt="card-image" />) }
          {props.state === "Gloriosa Lily" && (<img src={Gloriosa_Lily} alt="card-image" />) }
          
        </CardHeader>
        <CardBody>
          
          <Typography>
            Click the button below to access the augmented reality (AR) view of this animal/flower.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Button className="text-blue-200" onClick={() => handleClick(props.state)}>
      Click Here
    </Button>
        </CardFooter>
      </Card>
    );
  }

  
export default CardDef;