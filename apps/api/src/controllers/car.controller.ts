import { getAll } from "../services/car.service"

async function getCarsController(req, res){
    try {
        const list = await getAll()
        res.status(200).json(list);
    } catch (e) {
        console.error(e)
        res.status(400).json({ e })
    }
}

export { getCarsController }