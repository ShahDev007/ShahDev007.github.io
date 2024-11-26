'use client'

import { useState, useEffect } from 'react';

function ProjectThumbnail({ projectName }) {
  const [isImageAvailable, setIsImageAvailable] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `project-thumbnails/${projectName}.png`;
    img.onload = () => setIsImageAvailable(true);
    img.onerror = () => setIsImageAvailable(false);
  }, [projectName]);

  return (
    <>
      {isImageAvailable && (
        <img
          src={`project-thumbnails/${projectName}.png`}
          alt="Project Dashboard Preview"
          className="w-full h-45 object-cover rounded-md"
        />
      )}
    </>
  );
}

export default ProjectThumbnail;
