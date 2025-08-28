/**
 * Utility functions for handling file downloads with mobile compatibility
 */

export const downloadResume = async (): Promise<void> => {
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const resumeUrl = '/my_resume.pdf';
  const fileName = 'Yashika_Saini_Resume.pdf';

  try {
    if (isMobile) {
      // For mobile devices, try multiple approaches
      
      // Method 1: Try to download with proper headers
      const response = await fetch(resumeUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.type = 'application/pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the blob URL
        window.URL.revokeObjectURL(url);
        return;
      }
    } else {
      // For desktop, use standard download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = fileName;
      link.type = 'application/pdf';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch (error) {
    console.warn('Download failed, trying fallback method:', error);
  }

  // Fallback: Open in new tab for mobile devices
  if (isMobile) {
    try {
      // Try to open in new tab
      const newWindow = window.open(resumeUrl, '_blank');
      if (!newWindow) {
        // If popup blocked, redirect to fallback page
        window.location.href = '/resume-fallback.html';
        return;
      }
    } catch (fallbackError) {
      console.error('All download methods failed:', fallbackError);
      // Last resort: redirect to fallback page
      window.location.href = '/resume-fallback.html';
    }
  }
};

export const isMobileDevice = (): boolean => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const getResumeFallbackUrl = (): string => {
  return '/resume-fallback.html';
};
