const router = require('express').Router();
const {check,validator}=require('express-validator')

const { getuser ,user,getuserid,update,deletet} = require('../Controller/control')

//creation of data
router.post('/user',user)

// getting all data
router.get('/getuser', getuser)

//getting data by particular id
router.get('/getuser/:id',getuserid )

//updating user by id

router.post('/update/:id',update)

//deleting user by id

router.post('/delete/:id',deletet)



module.exports = router