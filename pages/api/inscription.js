// Librairie
import axios from '../../config/axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { pseudo, email, password } = req.body;

        if (!pseudo || !email || !password) {
            res.status(422).json({
                message: 'Champ du formulaire manquant',
            });
            return;
        }

        const newUser = {
            pseudo,
            email,
            password,
            created_at: new Date(),
        };
        try {
            await axios
                .post('/inscription')
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
        } catch (error) {
            res.status(500).json({
                message: "impossible d'effectuer la requête",
            });
        }
    } else {
        res.status(405).json({
            message: 'Une erreur est survenue',
        });
    }
}
