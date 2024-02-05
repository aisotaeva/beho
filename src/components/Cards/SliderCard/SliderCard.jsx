import React from 'react'
import { Box, Card, CardMedia, Stack } from "@mui/material"
import { IconButtonWithChart, IconButtonWithheart } from '../../ui/Buttons/IconButton/IconButtons'

const dithign = [
    1,1,1,1,0
]
const akb = [
    1,1,0,0,0
]
const display = [
    1,1,1,1,0
]
const kamera = [
    1,1,1,1,1
]
const otvet = [
    1,1,1,1,1
]
const rating = [
    1,1,1,1,0
]
const SliderCard = () => {
    return (
        <Card className='c-card' sx={
            {
                maxWidth: 634,
                width: "100%",
                p: "20px"
            }
        }>
            <Stack
                direction={"row"} sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}>
                <div className='slides__card'>
                    <p
                    >Портативные колонки </p>
                    <h4>Apple iPhone 13 Pro Max 256 ГБ серый</h4>
                </div>
                <Stack direction={"row"} spacing={"12px"}>
                    <IconButtonWithheart />
                    <IconButtonWithChart />
                </Stack>

            </Stack>
            <Stack spacing={"20px"} direction={"row"}>
                <CardMedia component="img"
                    sx={{
                        width: "124px"
                    }}
                    src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqJsW7uum2VkJgnSqIyGhq0Tr_gCqGJXFeDJ5KB3uYK2bEOaUF'
                />
                <Box>
                    <p>
                        Дизайн
                    </p>
                    <Stack direction={"row"} spacing={"2px"}>
                        {
                            dithign.map(el => {
                                return <Box
                                component={"span"}
                                sx={{
                                    height: "4px",
                                    width: "88px",
                                    bgcolor: el ? "#FF4D4D" : "#ECEEEF",
                                    borderRadius: "2px"
                                }}
                            />
                            })
                        }
                    </Stack>
                    <p>
                        Батарея
                    </p>
                    <Stack direction={"row"} spacing={"2px"}>
                        {
                            akb.map(el => {
                                return <Box
                                component={"span"}
                                sx={{
                                    height: "4px",
                                    width: "88px",
                                    bgcolor: el ? "#FF4D4D" : "#ECEEEF",
                                    borderRadius: "2px"
                                }}
                            />
                            })
                        }
                    </Stack>
                    <p>
                        Дисплей
                    </p>
                    <Stack direction={"row"} spacing={"2px"}>
                        {
                            display.map(el => {
                                return <Box
                                component={"span"}
                                sx={{
                                    height: "4px",
                                    width: "88px",
                                    bgcolor: el ? "#FF4D4D" : "#ECEEEF",
                                    borderRadius: "2px"
                                }}
                            />
                            })
                        }
                    </Stack>
                    <p>
                        Камера
                    </p>
                    <Stack direction={"row"} spacing={"2px"}>
                        {kamera.map(el => {
                            return <Box
                                component={"span"}
                                sx={{
                                    height: "4px",
                                    width: "88px",
                                    bgcolor: el ? "#FF4D4D" : "#ECEEEF",
                                    borderRadius: "2px"
                                }}
                            />
                        })}
                    </Stack>
                    <p>
                        Ответ
                    </p>
                    <Stack direction={"row"} spacing={"2px"}>
                        {
                            otvet.map(el => {
                                return <Box
                                component={"span"}
                                sx={{
                                    height: "4px",
                                    width: "88px",
                                    bgcolor: el ? "#FF4D4D" : "#ECEEEF",
                                    borderRadius: "2px"
                                }}
                            />
                            })
                        }
                    </Stack>
                    <p>
                        Портативность
                    </p>
                    <Stack direction={"row"} spacing={"2px"}>
                        {
                            rating.map(el => {
                                return <Box
                                component={"span"}
                                sx={{
                                    height: "4px",
                                    width: "88px",
                                    bgcolor: el ? "#FF4D4D" : "#ECEEEF",
                                    borderRadius: "2px"
                                }}
                            />
                            })
                        }
                    </Stack>
                </Box>
            </Stack>
        </Card>
    )
}

export default SliderCard