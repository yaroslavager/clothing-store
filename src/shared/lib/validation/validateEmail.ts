

export const validateEmail=(email: string)=>{

    if(email.trim()===""){return "Enter email"}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){return "Incorrect email"}

    return null
}