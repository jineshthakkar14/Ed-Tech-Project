import toast from "react-hot-toast";
import { setLoading, setToken, setsignUpData } from "../../slices/authSlice"
import { apiConnector } from "../apiConnetor";
import { auth } from "../apis";
import { setUser } from "../../slices/profileSlice";



export function login(email,password,navigate){
    return async (dispatch) => {
        dispatch(setLoading(true));

        try {
            const res = await apiConnector("POST",auth.LOGIN_API,{
                email,password
            })
            console.log(res)

            if(!res.data.success){
                throw new Error(res.data.message)
            }

            localStorage.setItem("user",JSON.stringify(res.data.user))
            localStorage.setItem("token",JSON.stringify(res.data.token))
            dispatch(setToken(res.data.token))
            dispatch(setUser(res.data.user))
            
            console.log(localStorage)

            toast.success("Login Successfull")
            

           
            navigate("/dashboard/my-profile")
        } catch (error) {
            console.log("LOGIN API ERROR:", error)
            toast.error("Login Failed")
        }

        dispatch(setLoading(false))

    }
}

export function logout(navigate){
    return async (dispatch)=>{
        dispatch(setLoading(true))
        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(setsignUpData(null))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out Successfully");
        navigate("/")
        dispatch(setLoading(false))
    }
}

export function resetPasswordToken(email,setEmailSent){
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try {
            const res = await apiConnector("POST",auth.RESETTOKEN_API,{
                email
            })

            if(!res.data.success){
                throw new Error(res.data.message)
            }

            console.log(res.data)
            toast.success("Email sent successfully")
           
            setEmailSent(true)
            
            
        } catch (error) {
            console.log("Email Not sent:", error)
            toast.error("Can't send Email")
        }
        dispatch(setLoading(false))
    }
}

export function resetPassword(password,confirmPassword,token){
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try {

            const res = await apiConnector("POST",auth.RESET_API,{
                password,confirmPassword,token
            })

            if(!res.data.success){
                throw new Error(res.data.message)
            }

            console.log(res.data)
            toast.success("Password Reset Successful")


        } catch (error) {
            console.log("Password Reset Failed:", error)
            toast.error("Password Reset Failed")
        }
        dispatch(setLoading(false))
    }
}

export function sendOtp(email,navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        try {
            const res = await apiConnector("POST",auth.SENFOTP_API,{
                email
            })
            if(!res.data.success){
                throw new Error(res.data.message)
            }

            console.log(res.data)
            toast.success("OTP Sent Successfully")

            navigate("/verify-email")

        } catch (error) {
            console.log("OTP Failure:", error)
            toast.error("OTP Not sent")
        }
        dispatch(setLoading(false))
    }
}

export function signup(firstName,lastName,email,password,confirmPassword,accountType,otp,navigate){
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try {
            const res = await apiConnector("POST",auth.VERIFYEMAIL_API,
            {
                firstName,lastName,email,password,confirmPassword,accountType,otp
            })

            console.log("Data",res.data)

            if(!res.data.success){
                throw new Error(res.data.message)
            }

            
            toast.success("Email Verified Successfully")

            navigate("/login")


        } catch (error) {
            console.log("Error Verifiying Email", error)
            toast.error("Error Verifiying Email")
            // navigate("/signup")
        }
        dispatch(setLoading(false))
    }
}