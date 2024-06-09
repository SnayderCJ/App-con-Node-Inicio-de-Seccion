import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => res.render('iniciar', ));
router.get('/registrar', (req, res) => res.render('registrar', ));


export default router;