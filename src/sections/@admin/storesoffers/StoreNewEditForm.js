import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
// next
import { useRouter } from 'next/router';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel,FormControl,FormLabel,RadioGroup,Radio } from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { cashbacktypes } from '../../../_mock';
// components
import Label from '../../../components/Label';
import {
  FormProvider,
  RHFSelect,
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFEditor
} from '../../../components/hook-form';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

StoreNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentStore: PropTypes.object,
};

export default function StoreNewEditForm({ isEdit = false, currentStore }) {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const NewStoreSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    slug: Yup.string().required('Slug is required'),
    logo: Yup.string(),
    homepage: Yup.string().required('Homepage is required'),
    domainname: Yup.string().required('Domain Name is required'),
    cats: Yup.string().required('Cats is required'),
    deeplink: Yup.string().required('Deeplink is required'),
    cashbackenabled: Yup.string().required('Cashback Enabled is required'),
    cashbackpercent: Yup.string().required('Cashback Percent is required'),
    cashbacktype: Yup.string().required('Cashback Type is required'),
    trackingspeed: Yup.string(),
    confirmduration: Yup.string(),
    isclaimable: Yup.string().required('Is Claimable is required'),
    isshareable: Yup.string().required('Is Shareable is required'),
    isfeature: Yup.string().required('Is Feature is required'),
    excludesitemap: Yup.string().required('Exclude Sitemap is required'),
    network: Yup.string(),
    networkcampaignid: Yup.string(),
    ghost: Yup.string().required('Ghost is required'),
    status: Yup.string().required('Status is required'),

    // email: Yup.string().required('Email is required').email(),
    // avatarUrl: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentStore?.name || '',
      slug: currentStore?.slug || '',
      logo: currentStore?.logo || '',
      homepage: currentStore?.homepage || '',
      domainname: currentStore?.domainname || '',
      cats: currentStore?.cats || '',
      deeplink: currentStore?.deeplink || '',
      cashbackenabled: currentStore?.cashbackenabled || true,
      cashbackpercent: currentStore?.cashbackpercent || '',
      cashbacktype: currentStore?.cashbacktype || 'cashback',
      trackingspeed: currentStore?.trackingspeed || '',
      confirmduration: currentStore?.confirmduration || '',
      isclaimable: currentStore?.isclaimable || true,
      isshareable: currentStore?.isshareable || true,
      isfeature: currentStore?.isfeature || true,
      excludesitemap: currentStore?.excludesitemap || true,
      network: currentStore?.network || '',
      networkcampaignid: currentStore?.networkcampaignid || '',
      ghost: currentStore?.ghost || true,
      status: currentStore?.status || 'draft',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentStore]
  );

  const methods = useForm({
    resolver: yupResolver(NewStoreSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentStore) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentStore]);

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      push(PATH_DASHBOARD.Store.list);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'avatarUrl',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Name*" />
              <RHFTextField name="slug" label="Slug*" />
              <RHFTextField name="homepage" label="Homepage*" />
              <RHFTextField name="domainname" label="Domain Name" />
              <RHFTextField name="cats" label="Cats" />
              <RHFTextField name="deeplink" label="Deeplink*" />
              <RHFSwitch
                name="cashbackenabled"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Cashback Enabled *
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
              <RHFTextField name="cashbackpercent" label="Cashback Percent*" />
              <RHFSelect name="cashbacktype" label="Cashback Type*" placeholder="Cashback Type">
                <option value="" />
                {cashbacktypes.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField name="trackingspeed" label="Tracking Speed" />
              <RHFTextField name="confirmduration" label="Confirm Duration" />
              <RHFSwitch
                name="isclaimable"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Is Claimable *
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
              <RHFSwitch
                name="isshareable"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Is Shareable *
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
              <RHFSwitch
                name="isfeature"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Is Feature *
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
              <RHFSwitch
                name="excludesitemap"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Exclude Sitemap *
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
              <RHFTextField name="network" label="Network" />
              <RHFTextField name="networkcampaignid" label="Network Campaign Id" />
              <RHFSwitch
                name="ghost"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Ghost *
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Status*</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="draft"
                  name="status"
                >
                  <FormControlLabel value="publish" control={<Radio />} label="Publish" />
                  <FormControlLabel value="draft" control={<Radio />} label="Draft" />
                  <FormControlLabel value="trash" control={<Radio />} label="Trash" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Store' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ py: 10, px: 3 }}>
            {isEdit && (
              <Label
                color={values.status !== 'active' ? 'error' : 'success'}
                sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
              >
                {"Logo"}
              </Label>
            )}
            <Box sx={{ mb: 0 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                variant="square"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
              <RHFTextField name="h1" label="H1" />
              <RHFTextField name="h2" label="H2" />
              <RHFTextField name="metatitle" label="Meta Title" />
              <RHFTextField name="metadesc" label="Meta Desc" />
              <RHFTextField name="metakw" label="Meta Kw" />
              <div>
                <LabelStyle>Terms Todo</LabelStyle>
                <RHFEditor simple name="termstodo" />
              </div>
              <div>
                <LabelStyle>Terms Not Todo</LabelStyle>
                <RHFEditor simple name="termsnottodo" />
              </div>
              <div>
                <LabelStyle>About</LabelStyle>
                <RHFEditor simple name="about" />
              </div>
              <div>
                <LabelStyle>Tips</LabelStyle>
                <RHFEditor simple name="tips" />
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
