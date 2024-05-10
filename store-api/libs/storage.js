import multer from "multer"


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/temp/imgs")
    },
    filename: (req, file, cb) => {
        cd(null, `${file.fieldname}-${Date.now()}.png`)
    },

})

const upload = multer({ storage })
export default upload;