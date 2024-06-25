import { NonTreatedParams } from "./data-types";


export const validateEmail = (email: string) => {

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);

};

export const setDataToUpdate = (data: NonTreatedParams) => {
    const updateData: NonTreatedParams = {};
    if (data.name) updateData.name = data.name;
    if (data.password) updateData.password = data.password;
    if (data.email) updateData.email = data.email;

    return updateData
}