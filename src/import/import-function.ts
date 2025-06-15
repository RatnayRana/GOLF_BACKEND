import userRouter from '../router/user-router';
import connect from '../database/db-connect'
const apiConfig = {
    connect,
    userRouter
};

export default apiConfig;


