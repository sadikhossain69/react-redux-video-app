import { axiosInstance } from "../../utils/axios"

export const getVideos = async () => {
    const { data } = await axiosInstance.get('/videos')

    return data
}