import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react"
import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { useSwiper } from 'swiper/react';
import { EffectCards } from "swiper";
import { CustomerCard } from "./CustomerCard";

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <Button
            onClick={() => swiper.slideNext()}
            w="50px"
            h="50px"
            bg='#FFF'
            color="#000"
            border="1px solid #000"
            borderRadius="100%"
        >
            <Text>
                <AiOutlineRight />
            </Text>
        </Button>
    );
};

const SlidePrevButton = () => {
    const swiper = useSwiper();
    return (
        <Button
            onClick={() => swiper.slidePrev()}
            w="50px"
            h="50px"
            bg='#FFF'
            color="#000"
            border="1px solid #000"
            borderRadius="100%"
        >
            <Text>
                <AiOutlineLeft />
            </Text>
        </Button>
    );
};

export const ReviewSlideShow = () => {
    return (
        <Box w='full' color="#FFF" position="relative">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                style={{
                    width: '864px',
                    height: '450px',
                    position: "relative"
                }}
            >
                <Box
                    zIndex="99"
                    w='1100px'
                    m="0 auto"
                    top="40%"
                    left="-14%"
                    position="absolute" 
                >
                    {/* Button Carousel  */}
                    <ButtonGroup 
                        gap="5"
                        w='full' 
                        display='flex'
                        justifyContent='space-between'
                        >
                        <SlidePrevButton />
                        <SlideNextButton />
                    </ButtonGroup>
                </Box>

                <SwiperSlide
                    style={{
                        boxShadow:'0px 20px 60px rgba(46, 33, 61, 0.5)',
                        borderRadius: '10px'
                    }}
                >
                    <CustomerCard />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow:'0px 20px 60px rgba(46, 33, 61, 0.5)',
                        borderRadius: '10px'
                    }}
                >
                    <CustomerCard />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow:'0px 20px 60px rgba(46, 33, 61, 0.5)',
                        borderRadius: '10px'
                    }}
                >
                    <CustomerCard />
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        boxShadow:'0px 20px 60px rgba(46, 33, 61, 0.5)',
                        borderRadius: '10px'
                    }}
                >
                    <CustomerCard />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}