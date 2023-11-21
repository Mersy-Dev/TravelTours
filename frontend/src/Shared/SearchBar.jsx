import React, { useRef } from 'react'
import './searchbar.css'
import { Col, Form, FormGroup } from "reactstrap";
import { BiMap } from 'react-icons/bi';
import { FiUsers, FiSearch } from 'react-icons/fi';

import { BASE_URL } from '../Utilities/conFig';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate();


    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert('All fields are required !')
        }

        async function fetchData() {
            try {
                const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

                if (!res.ok) {
                    alert('Something went wrong!')
                    // Do something with the data
                } else {
                    const result = await res.json();
                    console.log(result.data);
                    navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data });
                    
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }

        fetchData();
    }





    return <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-item-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <BiMap className='fgi'/>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' ref={locationRef} />
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <BiMap className='fgi'/>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                        <FiUsers className='fgi'/>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>
                <span className="search__icon" typeof='submit' onClick={searchHandler}>
                    <FiSearch className='sech' />

                </span>
            </Form>
        </div>
    </Col>
}

export default SearchBar