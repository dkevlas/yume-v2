import axios from 'axios';

import cron from "node-cron"

const healthcheckUrl = 'https://hc-ping.com/de9c55e8-4543-440e-b175-cbfa8c4a8c4a/yume';

cron.schedule('*/5 * * * *', () => {
    axios.get(healthcheckUrl)
        .then(response => {
            console.log('Ping exitoso', response.status);
        })
        .catch(error => {
            console.error('Error al hacer ping:', error);
        });
});
