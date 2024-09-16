import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';

const reportsPath = [
  {
    ref: `${process.env.PUBLIC_URL}/reports/Feb2024.pdf`,
    name: 'Feb 2024',
  },
  {
    ref: `${process.env.PUBLIC_URL}/reports/March2024.pdf`,
    name: 'March 2024',
  },
  {
    ref: `${process.env.PUBLIC_URL}/reports/April2024.pdf`,
    name: 'April 2024',
  },
  {
    ref: `${process.env.PUBLIC_URL}/reports/may2024.pdf`,
    name: 'May 2024',
  },
  {
    ref: `${process.env.PUBLIC_URL}/reports/June2024.pdf`,
    name: 'June 2024',
  },
  {
    ref: `${process.env.PUBLIC_URL}/reports/July2024.pdf`,
    name: 'July 2024',
  },
  {
    ref: `${process.env.PUBLIC_URL}/reports/August2024.pdf`,
    name: 'August 2024',
  },
];


function MonthlyReportModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Monthly Reports</DialogTitle>
      <DialogContent>
        <List>
          {
            reportsPath.map(ele =>
            <ListItem button onClick={() => window.open((ele.ref))}>
              <ListItemText primary={ele.name} />
            </ListItem>
            )
          }
          
         
          {/* Add other months as needed */}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MonthlyReportModal;
