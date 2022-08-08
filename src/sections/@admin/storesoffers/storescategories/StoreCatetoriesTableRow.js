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

StoreCatetoriesTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function StoreCatetoriesTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
  const theme = useTheme();

  const { no,name ,parentid ,isfeatured,visits,storecount,updatedat } = row;
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
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        <Typography variant="subtitle2" noWrap>
          {parentid}
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
          {storecount}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {updatedat}
      </TableCell>
    </TableRow>
  );
}
