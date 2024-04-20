import xss from "xss";

export const verifyEmail = (email: string) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexEmail.test(email);
}

export const verifyPhoneNumberFR = (phone: string) => {
    const regexTelFR = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return regexTelFR.test(phone);
}

export const verifyName = (name: string) => {
    const regex = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF '’-]+$/u;
    return regex.test(name.trim()) && verifyLength(name, 2, 40);
}

export const verifyLength = (text: string, min: number, max: number) => {
    return text.length >= min && text.length <= max;
}

export const sanitizer = (text: string) => {
    return xss(text);
}

export const escaper = (text: string) => {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}