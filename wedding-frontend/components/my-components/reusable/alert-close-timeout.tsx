"use client"

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import CheckIcon from '@mui/icons-material/Check';


export const AlertCloseTimeout = ({
    open,
    timeout,
    text
}: {
    open: boolean;
    timeout: number;
    text: string;
}) => {
    let [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        setAlertOpen(open);
    }, [open]);

    useEffect(() => {
        if (timeout !== 0 && alertOpen) {
            const timeoutId = setTimeout(() => {
                setAlertOpen(false);
            }, timeout);
            // Cleanup function to clear the timeout when the component unmounts or `open` changes
            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [timeout, alertOpen]);

    return (
        <div className='w-full'>
            <Box
                sx={{ width: '100%' }}
            >
                <Collapse in={alertOpen}>
                    <Fade in={alertOpen}>
                        <Alert
                            className="text-orange-200 bg-transparent border border-orange-200"
                            icon={<CheckIcon fontSize="inherit" className='bg-[#1ED760] rounded-full text-orange-200' />}
                            action={
                                <IconButton
                                    className='hover:bg-[#1ED760] opacity-85'
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setAlertOpen(false);
                                        open = false;
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2, bgcolor: "#1ED760" }}
                        >
                            {text}
                        </Alert>
                    </Fade>
                </Collapse>
            </Box>
        </div>
    );
};
