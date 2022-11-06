import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AgGridReact } from 'ag-grid-react';


const rowHeight = 200;

<AgGridReact rowHeight={rowHeight}></AgGridReact>

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10} gap={5} sx={{padding:"10px"}} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Item><a href="https://www.linkedin.com/in/fortan-pireva/" target='_blank'>
            <img width="200" height="200" src='https://media-exp1.licdn.com/dms/image/C4E03AQGnRnbBO1Z7OQ/profile-displayphoto-shrink_800_800/0/1609424346677?e=1673481600&v=beta&t=brmEGGUoIH0ZfvODcZYZuIDa6vqrIzCx83Vkvwhs3Tk'
            /><br></br>Fortan Prieva</a></Item>
           
        </Grid>
        <Grid item xs={12} md={4}>
        <Item><a href="https://www.linkedin.com/in/nikita-batalov-676111255/" target='_blank'>
            <img width="200" height="200" src='https://media-exp1.licdn.com/dms/image/D5603AQHOdEy4iYWsDA/profile-displayphoto-shrink_800_800/0/1666803634956?e=1673481600&v=beta&t=L0dU7rWCb2CwiTX8OwLl5jTBKWnhHfyVmI2fj2axMsw'
            /><br></br>Nikita Batalov</a></Item>
        </Grid>
        <Grid item xs={12} md={4}>
        <Item><a href="https://www.linkedin.com/in/mikhail-lyamets/" target='_blank'>
            <img width="200" height="200" src='https://media-exp1.licdn.com/dms/image/C4D03AQH1ZnA5T88ZLw/profile-displayphoto-shrink_800_800/0/1629639317250?e=1673481600&v=beta&t=70OJXqwfE3YDoQrpNxHKMzW-6PJRjWmNWsxYJ-0T4J0'
            /><br></br>Mikhail Lyamets</a></Item>
        </Grid>
        <Grid item xs={12} md={4}>
        <Item>
          <a href="https://www.linkedin.com/in/raey-getahun-976154238/ " target='_blank'>
            <img width="200" height="200" src='https://media-exp1.licdn.com/dms/image/D4E03AQHnz1bR9Hurhw/profile-displayphoto-shrink_800_800/0/1667724922508?e=1673481600&v=beta&t=RUMo11iNRn-GTjcucN3vB2UJ8HNOOf2DcXuBLSqPqZw'
            /><br></br>Raey Getahun</a></Item>
            
        </Grid>
      </Grid>
    </Box>
  );
}
