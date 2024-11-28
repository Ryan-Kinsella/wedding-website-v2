"use client"

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import CheckIcon from '@mui/icons-material/Check';
import { SECONDARY_COLOR } from '@/utils/hex-colors-tailwind';


export const AlertCloseTimeout = ({
    open,
    timeout,
    text,
    onClose,
}: {
    open: boolean;
    timeout: number;
    text: string;
    onClose: () => void; // useage in parent function: onClose={() => setAlertOpen(false)}
}) => {
    let [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        setAlertOpen(open);
    }, [open]);

    useEffect(() => {
        if (timeout !== 0 && alertOpen) {
            const timeoutId = setTimeout(() => {
                setAlertOpen(false);
                onClose();
            }, timeout);
            // Cleanup function to clear the timeout when the component unmounts or `open` changes
            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [timeout, alertOpen, onClose]);

    return (
        <div className='w-full'>
            <Box
                sx={{ width: '100%' }}
            >
                <Collapse in={alertOpen}>
                    <Fade in={alertOpen}>
                        <Alert
                            className="text-primary bg-transparent border border-primary"
                            icon={<CheckIcon fontSize="inherit" className='bg-secondary rounded-full text-primary' />}
                            action={
                                <IconButton
                                    className='hover:bg-secondary opacity-85'
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setAlertOpen(false);
                                        onClose(); // Call the callback function
                                        // open = false;

                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2, bgcolor: `${SECONDARY_COLOR}` }}
                        >
                            {text}
                        </Alert>
                    </Fade>
                </Collapse>
            </Box>
        </div>
    );
};
