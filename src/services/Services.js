import axios from 'axios';
import config from '../enviroment';

const url = config.API_URL;

export default class Services {
    constructor(uri) {
        this.baseURL = url;
        this.request = axios.create({
            baseURL: `${url}/${uri}`,
            headers: {
                'Ocp-Apim-Subscription-Key': config.SUBSCRIPTION_ID,
                'Ocp-Apim-Trace': true,
                'Content-Type': "application/json"
            }
        });
    }
}