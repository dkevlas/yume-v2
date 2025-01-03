import dotenv from 'dotenv'

dotenv.config();

interface Config {
    PORT: number,
    HOST: string,
    MONGO_URI: string,
    URL_CLIENT: string
}

const getValuesENV = (key: string, defaultValue: string) =>{
    const value = process.env[key];
    if(!value){
        console.warn(`${key} is not defined, using default ${defaultValue}`)
        return defaultValue;
    }
    return value
}
export const config: Config = {
    PORT: parseInt(process.env.PORT || '3001' , 10),
    HOST: getValuesENV('HOST', '0.0.0.0'),
    MONGO_URI: getValuesENV('MONGO_URI', ''),
    URL_CLIENT: getValuesENV('URL_CLIENT', 'https://yume.sennid.com')
}

if(!config.MONGO_URI){
    console.error('MONGO_URI is required');
    process.exit(1);
};
