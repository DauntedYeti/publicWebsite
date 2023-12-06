import { Router } from 'express'

const indexRouter =  Router()


indexRouter.get('/' , (_req , res)=>{
    // router code here
    res.render('index.hbs', {layout:"main"})
})

indexRouter.get('/index' , (_req , res)=>{
    // redirect to root
    res.redirect(301, '/')
})

export default  indexRouter
