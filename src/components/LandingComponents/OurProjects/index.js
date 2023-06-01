import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { LandingSection } from '../LandingSection';
import React from "react";
import { ProjectsSlideshow } from "./Swiper";


export const OurProjects = () => {
    const projectTypes = ['All', 'Websites', 'Social Media', 'UI/UX', 'Market']

    return (
        <LandingSection
            sectionProps={{
                minHeight: 'none',
                paddingTop: '50px',
                overflow: 'hidden'
            }}
        >
            <Flex
                gap='50' 
                flexDirection='column' 
                alignItems='center'
                justifyContent='center'
            >
                {/* Title and sub title */}
                <Flex
                    w='366px'
                    h='100%'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Text
                        mb='30px'
                        fontFamily={'Inter'}
                        fontWeight={600}
                        fontSize='60px'
                        lineHeight='61.8px'
                        color='#2E2E2E'
                        data-aos-duration='600'
                        data-aos='fade-down'
                    >
                        Our Projects
                    </Text>
                    <Text
                        w='305px'
                        textAlign='center'
                        fontFamily={'Inter'}
                        fontWeight={400}
                        fontSize='20px'
                        lineHeight='28px'
                        color='#5F5F5F'
                        data-aos-duration='600'
                        data-aos='fade-down'
                    >
                        We have been providing great flooring solutions service.
                    </Text>
                </Flex>

                {/* Tabs filtered contents */}
                <Flex
                    w='full'
                    h='100%'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Tabs
                        w='full'
                        display='flex'
                        flexDirection='column'
                        variant='soft-rounded'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <TabList
                            as='div'
                            w='698px'
                            h='40px'
                            display='flex'
                            flexDirection='row'
                            gap='25px'
                        >
                            {projectTypes.map((item, index) => (
                                <Tab
                                    data-aos-duration={(index+1)*400}
                                    data-aos='fade-down'
                                    key={index}
                                    w='full' 
                                    bg='#F1F1F1'
                                    color="#ACACAC"
                                    _hover={{
                                        background: '#0056D6',
                                        color: '#FFF'
                                    }}
                                    _selected={{
                                        background: '#0056D6',
                                        color: '#FFF'
                                    }}
                                >
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='500'
                                        fontSize='16px'
                                        lineHeight='20.8px'
                                    >
                                        {item}
                                    </Text>
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <ProjectsSlideshow projectType={''} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsSlideshow projectType={'Websites'} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsSlideshow projectType={'Social Media'} />
                            </TabPanel>
                            <TabPanel>
                            <ProjectsSlideshow projectType={'UI/UX'} />
                            </TabPanel>
                            <TabPanel>
                                <ProjectsSlideshow projectType={'Market'} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Flex>
        </LandingSection>
    );
}