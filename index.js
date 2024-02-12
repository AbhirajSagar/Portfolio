function DownloadResume()
{
   const link = document.createElement('a');
   link.href = 'resumeabhiraj.pdf';
   link.download = 'Abhiraj_Resume.pdf';
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
}
function scrollToElement(id)
{
   console.log("Scrolling happened");
   element = document.getElementById(id);
   element.scrollIntoView();
}