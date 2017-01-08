import { Router } from 'express'

const router = new Router()

router.post('/',function(req, res) {
   res.json({
     success: true,
     data: req.body
   })
 });


export default router
