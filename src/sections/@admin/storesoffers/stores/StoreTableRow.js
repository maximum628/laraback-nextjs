import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Checkbox, TableRow, TableCell, Typography, MenuItem } from '@mui/material';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';

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

  const { no,name, cashbackenabled, cashbackpercent, cashbacktype, isfeatured,visits,rating,cicks, status } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };
  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          {no}
      </TableCell>
      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem>
            </>
          }
        />
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
    </TableRow>
  );
}
