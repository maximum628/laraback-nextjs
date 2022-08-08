import { paramCase, capitalCase } from 'change-case';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const mytheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    blue: {
      main: '#0d47a1',
      darker: '#053e85',
    },
    red: {
      main: '#b71c1c',
      contrastText: '#fff',
    },
    green: {
      main: '#1b5e20',
      contrastText: '#fff',
    },
  },
});

// @mui
import { Container,Button } from '@mui/material';
import Iconify from '../../../../components/Iconify';
// routes
import { PATH_ADMIN } from '../../../../routes/paths';
// hooks
import useSettings from '../../../../hooks/useSettings';
// _mock_
import { _StoreList } from '../../../../_mock';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import StoreNewEditForm from '../../../../sections/@admin/storesoffers/StoreNewEditForm';

// ----------------------------------------------------------------------

StoreEdit.getLayout = function getLayout(page) {
  return <Layout variant="admin">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function StoreEdit() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { name } = query;

  const currentStore = _StoreList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="Store: Edit Store">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit Store"
          links={[
            { name: 'Stores & Offers', href: PATH_ADMIN.store_offers.stores },
            { name: 'Stores', href: PATH_ADMIN.store_offers.stores },
            { name: capitalCase(name) },
          ]}
          action={
            <ThemeProvider theme={mytheme}>
              <Button variant="contained" color="blue" startIcon={<Iconify icon={'eva:checkmark-fill'} />}>
                Apply changes
              </Button>
              <Button variant="contained" color="red" startIcon={<Iconify icon={'eva:save-fill'} />}>
                Save
              </Button>
              <Button variant="outlined" color="green" startIcon={<Iconify icon={'eva:monitor-outline'} />}>
                FrontEnd
              </Button>
              <Button variant="outlined" color="red" startIcon={<Iconify icon={'eva:file-text-fill'} />}>
                Translate To
              </Button>
            </ThemeProvider>
          }
        />

        <StoreNewEditForm isEdit currentStore={currentStore} />
      </Container>
    </Page>
  );
}
