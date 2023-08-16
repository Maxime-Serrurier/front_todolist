// Librairies
import { useForm } from 'react-hook-form';
import axios from '../../config/axios';
import { useRouter } from 'next/router';

function Inscription() {
    // Variables
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();

    // Méthodes
    const handleFormSubmit = (data) => {
        axios
            .post('/inscription', {
                pseudo: data.pseudo,
                email: data.email,
                password: data.password,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));

        router.push('/connexion');
    };
    // JSX
    return (
        <div className='h-screen flex flex-col justify-center'>
            <div className='min-w-[300px] max-w-[500px] md:max-w-[500px] md:min-w-[500px] mx-auto max-h-[95vh] shadow-2xl bg-[#151A30] rounded-xl font-semibold'>
                <h1 className='pt-4 text-4xl lg:text-6xl text-center text-white'>
                    Inscription
                </h1>
                <div className='p-8 h-full'>
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className='flex flex-col gap-4'
                    >
                        <p className='flex flex-col gap-1'>
                            <label
                                className='text-white text-center'
                                htmlFor='pseudo'
                            >
                                Pseudo
                            </label>
                            <input
                                name='pseudo'
                                type='text'
                                placeholder='Pseudo'
                                className='w-full p-4 bg-transparent ring-2 ring-[#FE4A14] ring-inset outline-2 focus:outline-none rounded-lg shadow-lg  text-[#FFF] font-normal'
                                {...register('pseudo', {
                                    required: true,
                                })}
                            />
                            {errors.pseudo && (
                                <small className='text-[#FE4A14]'>
                                    Veuillez renseigner ce champ.
                                </small>
                            )}
                        </p>
                        <p className='flex flex-col gap-1'>
                            <label
                                className='text-center text-white'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                name='email'
                                type='email'
                                placeholder='Email'
                                className='w-full p-4 bg-transparent ring-2 ring-[#FE4A14] ring-inset outline-2 focus:outline-none rounded-lg shadow-lg  text-[#FFF] font-normal'
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            />
                            {errors.email &&
                                errors.email.type === 'required' && (
                                    <small className='text-[#FE4A14]'>
                                        Veuillez renseigner ce champ.
                                    </small>
                                )}
                            {errors.email &&
                                errors.email.type === 'pattern' && (
                                    <small className='text-[#FE4A14]'>
                                        Votre adresse mail est
                                        incorrecte.
                                    </small>
                                )}
                        </p>
                        <p className='flex flex-col gap-1'>
                            <label
                                className='text-white text-center'
                                htmlFor='password'
                            >
                                Mot de passe
                            </label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Mot de passe'
                                className='w-full p-4 bg-transparent ring-2 ring-[#FE4A14] ring-inset outline-2 focus:outline-none rounded-lg shadow-lg  text-[#FFF] font-normal'
                                {...register('password', {
                                    required: true,
                                })}
                            />
                            {errors.password && (
                                <small className='text-[#FE4A14]'>
                                    Veuillez renseigner ce champ.
                                </small>
                            )}
                        </p>
                        <button className='self-end py-2 bg-gradient-to-l from-[#f4742f] to-[#FE4A14] rounded-lg px-4 text-[#FFF] hover:opacity-80'>
                            Je m'inscris !
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inscription;
