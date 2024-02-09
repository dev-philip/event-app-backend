let ENV_VARIABLES : {
    production: boolean, 
    apiUrl: string, 
    apiUrlPath: string, 
    stage_environement: string
 };
 
let BASE_PATH = process.env.BASE_URL;
import ip from 'ip';

// Get the local IP address
const localIp = ip.address();
const PORT = process.env.PORT || 5050;

if (process.env.NODE_ENV === 'development') {  //development config
    ENV_VARIABLES = {
        production: false,
        apiUrl: `http://localhost:${PORT}`,
        apiUrlPath: `http://localhost:${PORT}${BASE_PATH}`,
        stage_environement: "development"
    };
} else { //production config
    ENV_VARIABLES = {
        production: true,
        apiUrl: 'http://production-api-url.com',
        apiUrlPath: `http://localhost:${PORT}${BASE_PATH}`,
        stage_environement: "production"
    };
}

export { ENV_VARIABLES };
