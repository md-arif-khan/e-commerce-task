import React, { useContext } from 'react';
import loginImage from '../../assets/login-image/login2.webp'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {
    const {googleSignIn,login}=useContext(AuthContext)
    const navigate=useNavigate()
    const location =useLocation()
    const from=location?.state?.from?.pathname || '/'
    // login with email and password
    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            const user=result.user;
            const currentUser={
                email:user.email
            }
            console.log(currentUser)
            // get jwt token
            fetch('https://e-commerce-task-server.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                localStorage.setItem('eCommerce-token',data.token)
                 navigate(from,{replace:true})
            })
           
        })
        .catch(err=>console.log(err))
        form.reset()
    }
    // Login with Google
    const googleLogin=()=>{
        googleSignIn()
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(err=>console.log(err))
    }
    return (
        <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div class="absolute inset-0">
            <img class="object-cover w-full h-full" src={loginImage} alt="" />
        </div>
        <div class="absolute inset-0 bg-gray-900/20"></div>
    
        <div class="relative max-w-lg px-4 mx-auto sm:px-0">
            <div class="overflow-hidden bg-white rounded-md shadow-md">
                <div class="px-4 py-6 sm:px-8 sm:py-7">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold text-gray-900">Log In</h2>
                        <p class="mt-2 text-base text-gray-600">Don’t have one? <Link to='/signup' title="" class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Create a new account</Link></p>
                        <p className='text-lg'>admin email: <span className='font-bold text-red-700'>joy@gmail.com</span> admin password: <span className='font-bold text-red-700'>222222</span></p>
                    </div>
    
                    <form onSubmit={handleLogin} class="mt-8">
                        <div class="space-y-5">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                <div class="mt-2.5">
                                    <input required type="email" name="email" id="" placeholder="Enter email to get started" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>
    
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-base font-medium text-gray-900"> Password </label>
    
                                    
                                </div>
                                <div class="mt-2.5">
                                    <input required type="password" name="password" id="" placeholder="Enter your password" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>
    
                            <div>
                                <input class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700" type="submit" value="Login" />
                                
                            </div>
    
                            <div>
                                <button
                                onClick={googleLogin}
                                    type="button"
                                    class="
                                        relative
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-full
                                        px-4
                                        py-4
                                        text-base
                                        font-semibold
                                        text-gray-700
                                        transition-all
                                        duration-200
                                        bg-white
                                        border-2 border-gray-200
                                        rounded-md
                                        hover:bg-gray-100
                                        focus:bg-gray-100
                                        hover:text-black
                                        focus:text-black focus:outline-none
                                    "
                                >
                                    <div class="absolute inset-y-0 left-0 p-4">
                                        <svg class="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    

    );
};

export default Login;