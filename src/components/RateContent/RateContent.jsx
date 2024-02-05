import { Box, Stack } from '@mui/material'
import React from 'react'

const RateContent = () => {


    const dithign = [
        1, 1, 1, 1, 0
    ]
    const akb = [
        1, 1, 0, 0, 0
    ]
    const display = [
        1, 1, 1, 1, 0
    ]
    const kamera = [
        1, 1, 1, 1, 1
    ]
    const otvet = [
        1, 1, 1, 1, 1
    ]
    const rating = [
        1, 1, 1, 1, 0
    ]

    return (
        <div className='rate__content'>
            <p className='rate__tag'>
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
            <p className='rate__tag'>
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
            <p className='rate__tag'>
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
            <p className='rate__tag'>
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
            <p className='rate__tag'>
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
            <p className='rate__tag'>
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
        </div>
    )
}

export default RateContent