// import React from 'react'
// import './Testimonial.css'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules'
// import 'swiper/css/pagination';
// import { profile3, profile4, profile5, profile6 } from '../../images';

// const data = [
//     {
//         avtar: profile3,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`

//     },
//     {
//         avtar: profile3,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`

//     },
//     {
//         avtar: profile4,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`

//     },
//     {
//         avtar: profile5,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`

//     },
//     {
//         avtar: profile6,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`

//     }
// ]

// const Testimonial = () => {

//     return (
//         <section id='testimonial'>
//             <div className="section__wrapper">
//                 <div className="section__header">
//                     <h2 className="primary__title">Testimonials</h2>
//                     <p>Discover what clients are saying about their experiences working with me as theie trusted web developer. From startups to establisted businesses, my to crafting exceptional online experiences shines through in thier words</p>
//                 </div>
//                 <Swiper className='testimonial__container'
//                     modules={Pagination}
//                     spaceBetween={40}
//                     slidesPerView={1}
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         700: {
//                             slidePrevClass: 2
//                         }
//                     }}
//                 >
//                     {
//                         data.map(({ avtar, name, review }, index) => (
//                             <SwiperSlide className='testimonial' key={index}>
//                                 <div className="client__avtar">
//                                     <img src={avtar} alt={name} />
//                                 </div>
//                                 <h3 className="client__name">
//                                     {name}

//                                 </h3>
//                                 <small className="client__review">{review}</small>
//                             </SwiperSlide>
//                         ))
//                     }
//                 </Swiper>
//             </div>
//         </section>
//     )
// }

// export default Testimonial
// import React from 'react'
// import './Testimonial.css'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules'
// import 'swiper/css/pagination';
// import { profile3, profile4, profile5, profile6 } from '../../images';

// const data = [
//     {
//         avtar: profile3,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
//     },
//     {
//         avtar: profile3,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
//     },
//     {
//         avtar: profile4,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
//     },
//     {
//         avtar: profile5,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
//     },
//     {
//         avtar: profile6,
//         name: 'Samuel',
//         review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
//     }
// ]

// const Testimonial = () => {

//     return (
//         <section id='testimonial'>
//             <div className="section__wrapper">
//                 <div className="section__header">
//                     <h2 className="primary__title">Testimonialss</h2>
//                     <p>Discover what clients are saying about their experiences working with me as their trusted web developer. From startups to established businesses, my dedication to crafting exceptional online experiences shines through in their words.</p>
//                 </div>
//                 <Swiper className='testimonial__container'
//                     modules={Pagination}
//                     spaceBetween={40}
//                     slidesPerView={1}
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         700: {
//                             slidesPerView: 2

//                         }
//                     }}
//                 >
//                     {
//                         data.map(({ avtar, name, review }, index) => (
//                             <SwiperSlide className='testimonial' key={index}>
//                                 <div className="client__avtar">
//                                     <img src={avtar} alt={name} />
//                                 </div>
//                                 <h3 className="client__name">{name}</h3>
//                                 <small className="client__review">{review}</small>
//                             </SwiperSlide>
//                         ))
//                     }
//                 </Swiper>
//             </div>
//         </section>
//     )
// }

// export default Testimonial

import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import { profile3, profile4, profile5, profile6 } from '../../images';

const data = [
    {
        avtar: profile3,
        name: 'Samuel',
        review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
    },
    {
        avtar: profile3,
        name: 'Samuel',
        review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
    },
    {
        avtar: profile4,
        name: 'Samuel',
        review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
    },
    {
        avtar: profile5,
        name: 'Samuel',
        review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
    },
    {
        avtar: profile6,
        name: 'Samuel',
        review: `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore doloribus tenetur nam vitae mollitia et expedita, distinctio neque odio laboriosam, voluptas animi? Ea.`
    }
]

const Testimonial = () => {

    return (
        <section id='testimonial'>
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="primary__title">Testimonials</h2>
                    <p>Discover what clients are saying about their experiences working with me as their trusted web developer. From startups to established businesses, my dedication to crafting exceptional online experiences shines through in their words.</p>
                </div>
                <Swiper className='testimonial__container'
                    modules={Pagination}
                    spaceBetween={40}
                    slidesPerView={1}  // Default to 1 slide per view
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,  // 1 slide for small screens
                            spaceBetween: 20,  // Adjust space between slides for small screens
                        },
                        768: {
                            slidesPerView: 2,  // 2 slides for medium screens (tablets)
                            spaceBetween: 40,  // Adjust space between slides for medium screens
                        },
                        1024: {
                            slidesPerView: 2,  // 2 slides for larger screens
                            spaceBetween: 50   // Adjust space between slides for larger screens
                        }
                    }}
                >
                    {
                        data.map(({ avtar, name, review }, index) => (
                            <SwiperSlide className='testimonial' key={index}>
                                <div className="client__avtar">
                                    <img src={avtar} alt={name} />
                                </div>
                                <h3 className="client__name">{name}</h3>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
