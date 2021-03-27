//PROPERTIES
const deleteAPI="https://properties-back-end.herokuapp.com/properties/delete"
const updatePropertyURL ='https://properties-back-end.herokuapp.com/properties/update';
const deletImg='https://properties-back-end.herokuapp.com/properties/updateImages';
const baseUrl='https://properties-back-end.herokuapp.com/properties/';
//EMAIL
const sendEmail="https://properties-back-end.herokuapp.com/api/email"
//USER
const loginURL='https://properties-back-end.herokuapp.com/api/login';
const registerURL='https://properties-back-end.herokuapp.com/api/register';
const getuser='https://properties-back-end.herokuapp.com/api/getuser'
const likePriperties='https://properties-back-end.herokuapp.com/api/likeprop';
const verify='https://properties-back-end.herokuapp.com/api/verify';

export {
    likePriperties,
    getuser,
    sendEmail,
    deleteAPI,
    updatePropertyURL,
    deletImg,
    baseUrl,
    verify,
    loginURL,
    registerURL
}