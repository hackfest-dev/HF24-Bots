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

   
  const CardDef=(props)=>{
    const navigate = useNavigate()

    const handleClick = (animal) => {
        navigate( `/about?animal=${animal}`)
    };

    return (
      <Card className="mt-6 w-96 h-auto flex-col">
        <CardHeader color="blue-gray" className="relative h-20">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {props.state}
          </Typography>
          <Typography>
            Click the button below to access the augmented reality (AR) view of this animal.
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