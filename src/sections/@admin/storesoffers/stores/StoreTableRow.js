import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, IconButton  } from '@mui/material';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
// import { TableMoreMenu } from '../../../../components/table';

// ----------------------------------------------------------------------

StoreTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function StoreTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
  const theme = useTheme();

  const { no,name, cashbackenabled, cashbackpercent, cashbacktype, isfeatured,visits,rating,cicks, status,updatedat } = row;
  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell align="center">
          {no}
      </TableCell>
      <TableCell align="center" sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="view" color="secondary"
        onClick={() => {
            onEditRow();
          }}
        >
          <Iconify icon={'eva:eye-fill'} width={20} height={20} />
        </IconButton>
        <IconButton aria-label="edit" color="primary"
        onClick={() => {
            onEditRow();
          }}
        >
          <Iconify icon={'eva:edit-fill'} width={20} height={20} />
        </IconButton>
        <IconButton aria-label="delete row" color="error"
        onClick={() => {
            onDeleteRow();
          }}
        >
          <Iconify icon={'eva:trash-2-outline'} width={20} height={20} />
        </IconButton>
        <IconButton aria-label="monitor" color="warning"
        onClick={() => {
          onEditRow();
          }}
        >
          <Iconify icon={'eva:monitor-outline'} width={20} height={20} />
        </IconButton>
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Iconify
          icon={cashbackenabled ? 'eva:checkmark-circle-fill' : 'eva:clock-outline'}
          sx={{
            width: 20,
            height: 20,
            color: 'success.main',
            ...(!cashbackenabled && { color: 'warning.main' }),
          }}
        />
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {cashbackpercent}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        <Typography variant="subtitle2" noWrap>
          {cashbacktype}
        </Typography>
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(!isfeatured && 'error') || 'success'}
          sx={{ textTransform: 'capitalize' }}
        >
        {(!isfeatured && 'no') || 'yes'}
        </Label>
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {visits}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {rating}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {cicks}
      </TableCell>
      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(status === 'draft' && 'error') || 'success'}
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {updatedat}
      </TableCell>
    </TableRow>
  );
}
