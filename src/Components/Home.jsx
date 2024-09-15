import axios from "axios";
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            const fetchData = async () => {
                await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=94a31a12441043a19518c9efa5ede83b`)
                    .then((res) => {
                        console.log(res.data.features[0].properties);
                    }).catch((err) => {
                        console.log(err);
                    })
            }
            fetchData()
        })
    }, [])
    return (
        <>
        </>
    );
}