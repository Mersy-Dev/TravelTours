import React, {useState} from 'react'
import './booking.css';
import { ListGroup, Form, FormGroup, ListGroupItem, Button } from 'reactstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import {BASE_URL} from '../../Utilities/conFig';




const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();

    const {user} = React.useContext(AuthContext);


    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',


    })

    const handleChange = async e => { 
        setBooking(prev =>({...prev, [e.target.id]: e.target.value}));
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    //send data to the server
    const handleClick = async e => {
        e.preventDefault();

        console.log(booking);
        try {
            if(!user || user === undefined || user === null){
                return alert('Please login first');
            }

            const res = await fetch(`${BASE_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(booking),
            });
            
            const result = await res.json();

            if(!res.ok){
                return alert(result.message);
            }
            navigate('/thankyou')    
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <BsFillStarFill className='hi' />{avgRating === 0 ? null : avgRating}
                    ({reviews?.length})
                </span>
            </div>


            {/* booking form  */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name'  name="" id="fullName" required onChange={handleChange} /> 
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder='Phone'  name="" id="phone" required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder=''  name="" id="bookAt" required onChange={handleChange} />
                        <input type="number" placeholder='Guest'  name="" id="guestSize" required onChange={handleChange} />

                    </FormGroup>
                </Form>
            </div>
            {/* booking form  end*/}

            {/* Bookng bottom  */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>${price} <IoClose /> 1 person </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service charge </h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total </h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div>

        </div>
    )
}

export default Booking