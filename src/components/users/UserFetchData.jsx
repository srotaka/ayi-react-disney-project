import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/users';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import UsersCards from './UsersCards';

const UserFetchData = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    console.log(users)
    /*const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASEURL_USERS).then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    console.log({ users });*/

    

    return (
        <section className='characters-page'>
            <h1 className='page-title'><strong> Users</strong></h1>
            <Container sx={{ py: 1 }} maxWidth="xl">
                <Grid container spacing={3}>
                    {users.map((us, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <UsersCards firstname={us.name.firstname} lastname={us.name.lastname} 
                            email={us.email} username={us.username} phone={us.phone} city={us.address.city} 
                            street={us.address.street} number={us.address.number}
                            key={us.id} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    )
}

export default UserFetchData
