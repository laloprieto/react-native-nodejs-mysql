import {config} from './config'
import mysql from 'mysql2/promise'

export const connect = async () =>{
    return await mysql.createConnection(config);
};