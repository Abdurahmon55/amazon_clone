import axios from "axios"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { selectAuth } from "../redux/authSlice"

function useAddToCard(ItemId) {
    const auth = useSelector(selectAuth)
    const authId = useSelector(selectAuth)
    const naviget = useNavigate()
    const addCard = async (ItemId) => {
        try {
            const getShoper = await axios.get(`http://127.0.0.1:8000/api/v1/user/?username=${auth.username}`)
            const shoperId = await getShoper.data[0].id
            const shoperPost = await axios.post('http://127.0.0.1:8000/api/v1/shoper/', {
                number: 1,
                shoper: shoperId,
                product: ItemId,
            })
        }
        catch {
            naviget('/Login/')
        }
    }
    return [addCard]
}
export default useAddToCard