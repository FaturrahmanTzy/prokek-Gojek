import modelMenu from "./model";

const getData = async (req,res) => {
    try {
        const tampil = await modelMenu.findAll();
        res.status(200).json({
            messsage : "success",
            data: tampil
        })
    } catch (error) {
        res.status(500).json({
            messsage : error.messsage
        })
    }
}



export {
    getData
}