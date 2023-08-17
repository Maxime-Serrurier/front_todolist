// Librairies
import { useRouter } from 'next/router';
import axios from '../config/axios';
import { HiOutlineLogout } from 'react-icons/hi';
import Link from 'next/link';

function Logout() {
    // Variables
    const router = useRouter();

    // Méthodes
    const handleLogout = () => {
        axios
            .post('/deconnexion')
            .then((response) => {
                if (response.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_name');
                    router.push('/connexion');
                }
            })
            .catch((response) => console.log(response));
    };

    // JSX
    return (
        <>
            <Link href='/connexion'>
                <HiOutlineLogout
                    onClick={handleLogout}
                    size={40}
                    color='white'
                    className='border-2 rounded-full p-2 absolute top-20 right-20 cursor-pointer'
                />
            </Link>
        </>
    );
}

export default Logout;
