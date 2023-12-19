// ** React Imports
import { SyntheticEvent, useState, useEffect } from 'react';
// import { PrismaClient } from "@prisma/client";
import { useMutation, useQuery } from "@apollo/client";

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'
import { Novels } from "./Novels";
// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

// const prisma = new PrismaClient();

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))


// const getProducts = async () => {
//   console.log('getProducts clled.!!!!!!');
//   const res = await prisma.product.findMany({
//     select: {
//       id: true,
//       title: true,
//       price: true,
//       brandId: true,
//       brand: true,
//     },
//   });
//   return res;
// };

// const getBrands = async () => {
//   const res = await prisma.brand.findMany();
//   return res;
// };

const AccountSettings = (GET_NOVELS:any) => {
  
  // const [products, brands] = await Promise.all([getProducts(), getBrands()]);

  // const [products, setProducts] = useState([]);
  // const [brands, setBrands] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   console.log('ssssssssssssssssssssssssssss');
    //   try {
    //     const [fetchedProducts, fetchedBrands] = await Promise.all([getProducts(), getBrands()]);
    //     setProducts(fetchedProducts);
    //     setBrands(fetchedBrands);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     console.log('error is here', error);
    //   }
    // };

    // fetchData();
  }, []);

  useEffect(() => {
    // getProducts();
    
    
    console.log('heree',)

  }, []);

  
  // console.log('hereeeeeeeeeeeeeeeeee');
  // ** State
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <div className=" max-w-5xl mx-auto ">
			{" "}
			<Novels />
		</div>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Security</TabName>
              </Box>
            }
          />
          <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
