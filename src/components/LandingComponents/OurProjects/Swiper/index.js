import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Link,
    Progress,
    Text,
} from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Install swiper
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import { Card } from './Card';
import { MockData } from '../../../../utils/mock-data';

// install Virtual module
SwiperCore.use([Navigation, Pagination, FreeMode]);

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

export const ProjectsSlideshow = ({ projectType }) => {
    const displayOurProjectsItemData = React.useMemo(() => {
        return MockData.ourProjectsItemData
    }, [])
    return (
        <>
            <Box w='full' color="#FFF" position="relative">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    // slidesOffsetAfter={275}
                    // slidesOffsetBefore={275}
                    modules={[FreeMode, Pagination, Navigation]}
                    style={{
                        paddingTop: '100px',
                        overflow: 'visible'
                    }}
                >
                    <Box
                        zIndex="99"
                        maxW="1360px"
                        w='full'
                        m="0 auto"
                        top="0"
                        right="0"
                        left="0"
                        position="absolute" 
                    >
                        <Flex
                            flexDirection="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Flex 
                                flexDirection="row" 
                                alignItems="center"
                            >
                                {/* Button Carousel  */}
                                <ButtonGroup gap="5">
                                    <SlidePrevButton />
                                    <SlideNextButton />
                                </ButtonGroup>
                            </Flex>
                        </Flex>
                    </Box>

                    {/* Carousel Cards Here */}
                    {/* eslint-disable-next-line array-callback-return */}
                    { displayOurProjectsItemData.map((item, index) => {
                        if (item.projectType === projectType) {
                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <Link
                                        display="flex"
                                        m="0 auto"
                                        href="#"
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Card
                                            projectType={item.projectType}
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                        } else if (projectType.length === 0) {
                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <Link
                                        display="flex"
                                        m="0 auto"
                                        href="#"
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Card
                                            projectType={item.projectType}
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                        }
                    })}
                </Swiper>
            </Box>
        </>
    );
};
