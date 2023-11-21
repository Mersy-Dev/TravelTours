
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../Assets/Images/ava-1.jpg'
import ava02 from '../../Assets/Images/ava-2.jpg'
import ava03 from '../../Assets/Images/ava-3.jpg'


const Testimonials = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[ 
            { 
                breakpoint: 768, 
                settings: { 
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                } 
            }, 
            { 
                breakpoint: 480, 
                settings: { 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                } 
            },
        ]

       
    }



    

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque temporibus animi accusantium unde omnis expedita id. Quia voluptatem pariatur natus consequatur illo asperiores quidem. </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque temporibus animi accusantium unde omnis expedita id. Quia voluptatem pariatur natus consequatur illo asperiores quidem.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque temporibus animi accusantium unde omnis expedita id. Quia voluptatem pariatur natus consequatur illo asperiores quidem.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque temporibus animi accusantium unde omnis expedita id. Quia voluptatem pariatur natus consequatur illo asperiores quidem.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque temporibus animi accusantium unde omnis expedita id. Quia voluptatem pariatur natus consequatur illo asperiores quide.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonials