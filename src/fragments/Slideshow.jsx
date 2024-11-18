import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/material/styles";
import ThemeSettings from "../fragments/ThemeSettings";
import { Container, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function Slideshow({ imgs }) {
    const theme = useTheme();


    const [slideIndex, setSlideIndex] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const handleIncreaseIndex = () => {
        if (slideIndex < imgs.length - 1) {
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(0)
        }
    }

    const handleDecreaseIndex = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1)
        } else {
            setSlideIndex(imgs.length - 1)
        }
    }

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };

    const handleCloseViewer = () => {
        setIsViewerOpen(false);
        setCurrentImageIndex(null);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < imgs.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imgs.length - 1));
    };

    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '90%', height: '500px', backgroundPosition: 'center', position: 'relative' }}>
                        {imgs.map((img, index) => (
                            <Box
                                component="img"
                                key={index}
                                sx={{
                                    display: index === slideIndex ? 'block' : 'none',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    cursor: 'pointer',
                                }}
                                src={`/public/images/${img}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}

                        <Box sx={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
                            <IconButton onClick={handleDecreaseIndex}>
                                <KeyboardArrowLeftIcon sx={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Box>

                        <Box sx={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
                            <IconButton onClick={handleIncreaseIndex}>
                                <KeyboardArrowRightIcon sx={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Dialog
                open={isViewerOpen}
                onClose={handleCloseViewer}
                maxWidth="xl"
                fullWidth
                sx={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%', height: '100%' }}>
                    <Box component="img" sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} src={`/public/images/${imgs[currentImageIndex]}`} />
                    <IconButton onClick={handlePrevImage} sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '5%' }}>
                        <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <IconButton onClick={handleNextImage} sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '5%' }}>
                        <KeyboardArrowRightIcon sx={{ color: 'black' }} />
                    </IconButton>

                    <IconButton onClick={handleCloseViewer} sx={{ position: 'absolute', top: '5%', right: '5%' }}>
                        <CloseIcon sx={{color:'red', fontSize:'50px'}}/>
                    </IconButton>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Slideshow;
