

import React from 'react'

const UserFetchData = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    console.log(users);



    return (
        <div>

        </div>
    )
}

export default UserFetchData
