const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directories if they don't exist
const dirs = [
  'public/images/hero',
  'public/videos/hero'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate placeholder images
const generateImage = (width, height, color, filename) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fill with color
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  // Add some text
  ctx.fillStyle = '#ffffff';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Placeholder', width/2, height/2);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join('public/images/hero', filename), buffer);
};

// Generate placeholder video
const generateVideo = (filename) => {
  // Create a simple video file with ffmpeg
  const { execSync } = require('child_process');
  const command = `ffmpeg -f lavfi -i color=c=black:s=1920x1080:d=5 -vf "drawtext=text='Placeholder Video':fontcolor=white:fontsize=30:x=(w-text_w)/2:y=(h-text_h)/2" -c:v libx264 -pix_fmt yuv420p ${path.join('public/videos/hero', filename)}`;
  
  try {
    execSync(command);
    console.log(`Generated ${filename}`);
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
};

// Generate media files
generateImage(1920, 1080, '#1a1a1a', 'creative-ai-poster.jpg');
generateImage(1920, 1080, '#2a2a2a', 'fallback.jpg');
generateVideo('creative-ai.mp4');

console.log('Placeholder media files generated successfully!'); 