import { Card, CardMedia, Typography } from "@mui/material"
import { showToast } from "../../../utils/toast"

const TheBestCard = ({ imgUrl, name }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 164, width: "100%", p: "20px", }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "124px",
            p: "20px",
            borderRadius: "12px",
          }}
          height="124px"
          image={imgUrl}
          alt="" />
      </Card>
      <Typography onClick={() => {
        showToast("hello world im toast", true)
      }} component={"h3"} mt={"16px"} textAlign={"center"}>
        {name}
        </Typography>
    </div>
  )
}

export default TheBestCard
