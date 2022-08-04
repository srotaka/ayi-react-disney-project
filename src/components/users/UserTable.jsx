import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 350},
  { field: 'url', headerName: 'Image', width: 550}
];

const rows = [
  { id: 1, name: 'Beardini the Pirate Magician', url: 'https://static.wikia.nocookie.net/disney/images/2/27/Beardini01.jpg'},
  { id: 2, name: 'Beast', url: 'https://static.wikia.nocookie.net/disney/images/8/84/Profile_-_Beast.jpeg'},
  { id: 3, name: 'Beaver', url: 'https://static.wikia.nocookie.net/disney/images/1/1a/Char_18386.jpg'},
  { id: 4, name: 'Eeyore', url: 'https://static.wikia.nocookie.net/disney/images/1/1c/Profile_-_Eeyore.png'},
  { id: 5, name: 'Gladstone Gander', url: 'https://static.wikia.nocookie.net/disney/images/1/12/292326-1978811-gladstone-gander.jpg'},
  { id: 6, name: 'Isabella Garcia-Shapiro', url: 'https://static.wikia.nocookie.net/disney/images/9/98/IsabellaFull.JPG'},
  { id: 7, name: 'Heihei', url: 'https://static.wikia.nocookie.net/disney/images/6/6b/Profile_-_Heihei.jpeg'},
  { id: 8, name: 'Hercules', url: 'https://static.wikia.nocookie.net/disney/images/7/70/Profile_-_Hercules.jpeg'},
  { id: 9, name: 'Judy Hopps', url: 'https://static.wikia.nocookie.net/disney/images/d/da/Profile_-_Judy_Hopps.jpeg'},
  { id: 10, name: 'Kaa', url: 'https://static.wikia.nocookie.net/disney/images/f/f8/Profile_-_Kaa.jpeg'},
  { id: 11, name: 'Lumiere', url: 'https://static.wikia.nocookie.net/disney/images/f/f5/Profile_-_Lumiere.jpeg'},
  { id: 12, name: 'Scrooge McDuck', url: 'https://static.wikia.nocookie.net/disney/images/0/0a/Scrooge_McDuck.jpeg'},
  { id: 13, name: 'Lightning McQueen', url: 'https://static.wikia.nocookie.net/disney/images/4/46/Profile_-_Lightning_McQueen.jpg'},
  { id: 14, name: 'Meeko', url: 'https://static.wikia.nocookie.net/disney/images/f/ff/Meeko_%28Pocahontas%29.jpg'},
  { id: 15, name: 'Gladstone Gander', url: 'https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg'},
  { id: 16, name: 'Mickey Mouse', url: 'https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg'},
  { id: 17, name: 'Minnie Mouse', url: 'https://static.wikia.nocookie.net/disney/images/3/36/Minnie_Mouse_pose_.jpg'},
  { id: 18, name: 'Mowgli', url: 'https://static.wikia.nocookie.net/disney/images/3/3a/Profile_-_Mowgli.jpeg'},
  { id: 19, name: 'Nala', url: 'https://static.wikia.nocookie.net/disney/images/5/55/Profile_-_Nala.jpeg'},
];

export default function UserTable() {
  return (
    <div className='myTable' style={{ height: 395, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
