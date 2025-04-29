import React from 'react'
import styles from './FreshOfferings.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Slider from 'react-slick';

const FreshOfferings = () => {

    // Slider settings for the carousel
    const sliderSettings = {
        arrows: false, // Hide navigation arrows for a cleaner UI
        dots: false,   // Hide pagination dots
        infinite: false, // Prevent infinite looping for better UX
        speed: 500,  // Set slide transition speed to 500ms
        slidesToShow: 4.12, // Display 4.2 slides at a time on large screens
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: false, // Disable autoplay to avoid distraction
        autoplaySpeed: 3000, // Set autoplay interval (only if enabled)
        responsive: [
            {
                breakpoint: 992, // Medium screens (below 992px)
                settings: {
                    slidesToShow: 2, // Show 2 slides
                }
            },
            {
                breakpoint: 768, // Small screens (below 768px)
                settings: {
                    slidesToShow: 2, // Show 2 slides
                }
            },
            {
                breakpoint: 520, // Mobile screens (below 520px)
                settings: {
                    slidesToShow: 1.2, // Show 1.2 slides
                }
            }
        ]
    };

    const CardList = [
        {
            id: 1,
            category: "id",
            title: "cursus",
            desc: "nunc commodo placerat praesent blandit nam nulla integer pede justo",
            image: "http://dummyimage.com/72x72.png/5fa2dd/ffffff",
            link: "https://spiegel.de/luctus/et/ultrices/posuere/cubilia.json?imperdiet=at&nullam=vulputate&orci=vitae&pede=nisl"
        }, {
            id: 2,
            category: "mus",
            title: "est",
            desc: "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
            image: "http://dummyimage.com/72x72.png/ff4444/ffffff",
            link: "http://newyorker.com/molestie/nibh/in/lectus.js?odio=eget&in=congue&hac=eget&habitasse=semper&platea=rutrum&dictumst=nulla&maecenas=nunc&ut=purus&massa=phasellus"
        }, {
            id: 3,
            category: "dui",
            title: "ridiculus",
            desc: "sit amet erat nulla tempus vivamus in felis eu sapien",
            image: "http://dummyimage.com/72x72.png/cc0000/ffffff",
            link: "http://themeforest.net/ut.html?amet=augue&eleifend=vestibulum&pede=ante&libero=ipsum&quis=primis&orci=in&nullam=faucibus&molestie=orci&nibh=luctus&in=et&lectus=ultrices&pellentesque=posuere&at=cubilia&nulla=curae&suspendisse=donec&potenti=pharetra&cras=magna&in=vestibulum&purus=aliquet&eu=ultrices&magna=erat&vulputate=tortor&luctus=sollicitudin&cum=mi&sociis=sit&natoque=amet&penatibus=lobortis&et=sapien&magnis=sapien&dis=non&parturient=mi&montes=integer&nascetur=ac&ridiculus=neque&mus=duis&vivamus=bibendum&vestibulum=morbi&sagittis=non&sapien=quam&cum=nec&sociis=dui&natoque=luctus&penatibus=rutrum&et=nulla&magnis=tellus&dis=in&parturient=sagittis&montes=dui&nascetur=vel&ridiculus=nisl&mus=duis&etiam=ac&vel=nibh&augue=fusce&vestibulum=lacus"
        }, {
            id: 4,
            category: "mi",
            title: "nunc",
            desc: "faucibus cursus urna ut tellus nulla ut erat id mauris",
            image: "http://dummyimage.com/72x72.png/cc0000/ffffff",
            link: "https://jugem.jp/eu.png?donec=turpis&pharetra=integer&magna=aliquet&vestibulum=massa&aliquet=id&ultrices=lobortis&erat=convallis&tortor=tortor&sollicitudin=risus&mi=dapibus&sit=augue&amet=vel&lobortis=accumsan&sapien=tellus&sapien=nisi&non=eu&mi=orci&integer=mauris&ac=lacinia&neque=sapien&duis=quis&bibendum=libero&morbi=nullam&non=sit&quam=amet&nec=turpis&dui=elementum&luctus=ligula&rutrum=vehicula&nulla=consequat&tellus=morbi&in=a&sagittis=ipsum&dui=integer&vel=a&nisl=nibh&duis=in&ac=quis&nibh=justo&fusce=maecenas&lacus=rhoncus&purus=aliquam&aliquet=lacus&at=morbi&feugiat=quis&non=tortor&pretium=id&quis=nulla&lectus=ultrices&suspendisse=aliquet&potenti=maecenas&in=leo&eleifend=odio"
        }, {
            id: 5,
            category: "imperdiet",
            title: "lacinia",
            desc: "vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
            image: "http://dummyimage.com/72x72.png/ff4444/ffffff",
            link: "https://newsvine.com/blandit.json?malesuada=justo&in=morbi&imperdiet=ut&et=odio&commodo=cras&vulputate=mi&justo=pede&in=malesuada&blandit=in&ultrices=imperdiet&enim=et&lorem=commodo&ipsum=vulputate&dolor=justo&sit=in&amet=blandit&consectetuer=ultrices&adipiscing=enim&elit=lorem&proin=ipsum&interdum=dolor&mauris=sit&non=amet&ligula=consectetuer&pellentesque=adipiscing&ultrices=elit&phasellus=proin&id=interdum&sapien=mauris&in=non&sapien=ligula&iaculis=pellentesque&congue=ultrices&vivamus=phasellus&metus=id&arcu=sapien&adipiscing=in&molestie=sapien&hendrerit=iaculis&at=congue&vulputate=vivamus&vitae=metus&nisl=arcu&aenean=adipiscing&lectus=molestie&pellentesque=hendrerit&eget=at&nunc=vulputate&donec=vitae&quis=nisl&orci=aenean&eget=lectus&orci=pellentesque&vehicula=eget&condimentum=nunc&curabitur=donec&in=quis&libero=orci&ut=eget&massa=orci&volutpat=vehicula&convallis=condimentum&morbi=curabitur&odio=in&odio=libero&elementum=ut&eu=massa&interdum=volutpat&eu=convallis&tincidunt=morbi&in=odio&leo=odio&maecenas=elementum&pulvinar=eu&lobortis=interdum&est=eu&phasellus=tincidunt&sit=in&amet=leo&erat=maecenas&nulla=pulvinar&tempus=lobortis"
        }, {
            id: 6,
            category: "porttitor",
            title: "aliquet",
            desc: "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
            image: "http://dummyimage.com/72x72.png/cc0000/ffffff",
            link: "https://marketwatch.com/at/vulputate/vitae/nisl.xml?odio=eu&porttitor=tincidunt&id=in&consequat=leo&in=maecenas&consequat=pulvinar&ut=lobortis&nulla=est&sed=phasellus&accumsan=sit&felis=amet&ut=erat"
        }, {
            id: 7,
            category: "accumsan",
            title: "lobortis",
            desc: "condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
            image: "http://dummyimage.com/72x72.png/dddddd/000000",
            link: "https://tiny.cc/curabitur/convallis/duis/consequat/dui/nec.xml?rutrum=nisl&nulla=duis&tellus=bibendum&in=felis&sagittis=sed&dui=interdum&vel=venenatis&nisl=turpis&duis=enim&ac=blandit&nibh=mi&fusce=in&lacus=porttitor&purus=pede&aliquet=justo&at=eu&feugiat=massa&non=donec&pretium=dapibus"
        },{
            id: 8,
            category: "porttitor",
            title: "aliquet",
            desc: "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
            image: "http://dummyimage.com/72x72.png/cc0000/ffffff",
            link: "https://marketwatch.com/at/vulputate/vitae/nisl.xml?odio=eu&porttitor=tincidunt&id=in&consequat=leo&in=maecenas&consequat=pulvinar&ut=lobortis&nulla=est&sed=phasellus&accumsan=sit&felis=amet&ut=erat"
        }, {
            id: 9,
            category: "accumsan",
            title: "lobortis",
            desc: "condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
            image: "http://dummyimage.com/72x72.png/dddddd/000000",
            link: "https://tiny.cc/curabitur/convallis/duis/consequat/dui/nec.xml?rutrum=nisl&nulla=duis&tellus=bibendum&in=felis&sagittis=sed&dui=interdum&vel=venenatis&nisl=turpis&duis=enim&ac=blandit&nibh=mi&fusce=in&lacus=porttitor&purus=pede&aliquet=justo&at=eu&feugiat=massa&non=donec&pretium=dapibus"
        }
    ];

    return (
        <div className="types-insurance-wrapper social-res-wrapper pd-t pd-b"> {/* Wrapper div for styling */}
            <Container fluid className={styles.plan_containerfluid + ' plan-container-fluid px-0'}> {/* Bootstrap container for responsive layout */}

                {/* Render section title and description using TitleSubtitle component */}
                <TitleSubtitle
                    title={"Fresh Offerings from Your Trusted Life Insurance Company "}
                    subtitle={"Exciting offerings from the premier life insurance company in India to secure your future!"}
                />

                {/* Slider component to display insurance types in a carousel */}
                <Slider {...sliderSettings} className={styles.slider}>

                    {/* Map through `CardList` and render each insurance type as a slide */}
                    {CardList?.map((type, index) => (
                        <div key={index} className={styles.types_insurance_cards}>

                            <span>{type.category}</span>

                            {/* Display insurance type image */}
                            <img
                                src={type?.image}
                                alt={type?.Image?.alternativeText || "Insurance Type Image"}
                            />
                            <p className={styles.title}>{type?.title}</p>
                            <p className={styles.desc}>{type?.desc}</p>
                            {/* Link to view plans for the insurance type */}
                            <a className='common-right-arrow' href={type?.Url}>Know More</a>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}

export default FreshOfferings