import React, { useState, useEffect } from 'react'
import CommonSection from '../Shared/CommonSection'
import '../Styles/tour.css';
import tourData from '../Assets/Data/tours';
import TourCard from '../Shared/TourCard';
import SearchBar from '../Shared/SearchBar';
import Newsletter from '../Shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../Utilities/conFig';



  


const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);





  useEffect(() => {
    const pages = Math.ceil(tourCount / 8); // bckend wil be used to count later
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);





  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-o'>
        <Container>
          {loading && <h4 className='text-center'>Loading...</h4>}
          {error && <h4 className='text-center'>{error}</h4>}
          {
            !loading && !error &&
            (
            <Row>
              {
                tours?.map(tour =>
                  <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>)
              }

              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3 ">
                  {
                    [...Array(pageCount).keys()].map(Number => (
                      <span key={Number} onClick={() => setPage(Number)} className={page === Number ? 'active__page' : ""}>
                        {Number + 1}
                      </span>
                    ))}
                </div>
              </Col>
            </Row>
            )
          }
        </Container>
      </section>


      <Newsletter />
    </>
  )
}

export default Tours