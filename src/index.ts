import * as express from 'express';
import {Request, Response} from 'express';

const app = express();
const port = 3000;

const defaultData = [
    {
        "name": "Mercury",
        "diameter": "4879 km",
        "mass": "3.3 x 10^23 kg",
        "gravity": "3.7 m/s^2"
    },
    {
        "name": "Venus",
        "diameter": "12,104 km",
        "mass": "4.87 x 10^24 kg",
        "gravity": "8.87 m/s^2"
    },
    {
        "name": "Earth",
        "diameter": "12,742 km",
        "mass": "5.97 x 10^24 kg",
        "gravity": "9.8 m/s^2"
    },
    {
        "name": "Mars",
        "diameter": "6,779 km",
        "mass": "6.39 x 10^23 kg",
        "gravity": "3.71 m/s^2"
    },
    {
        "name": "Jupiter",
        "diameter": "139,820 km",
        "mass": "1.9 x 10^27 kg",
        "gravity": "24.79 m/s^2"
    },
    {
        "name": "Saturn",
        "diameter": "116,460 km",
        "mass": "5.68 x 10^26 kg",
        "gravity": "10.44 m/s^2"
    },
    {
        "name": "Uranus",
        "diameter": "50,724 km",
        "mass": "8.68 x 10^25 kg",
        "gravity": "8.87 m/s^2"
    },
    {
        "name": "Neptune",
        "diameter": "49,244 km",
        "mass": "1.02 x 10^26 kg",
        "gravity": "11.15 m/s^2"
    }
];

app.get('/', (req: Request, res: Response) => {
    res.send('Hi World');
});

app.get('/api/v1', (req: Request, res: Response) => {
    res.json(defaultData);
});

app.listen(port, () => {
    console.log(`App Listening on port: ${port}`);
})